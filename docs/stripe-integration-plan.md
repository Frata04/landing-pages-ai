# Stripe Integration Plan — Skim Patches

**Business:** https://skim-patches.com/ — wellness transdermal patches and patch kits
**Model:** One-time orders, physical goods, shipped to customers in Europe
**Stripe products:** Payments, Tax

Target API version: `2026-08-26.dahlia` (pinned by `stripe-node` v22.6.2).

---

## 1. Recommended architecture

For one-time orders of physical goods sold across the EU, use **Stripe Checkout in
`payment` mode** as the payment surface. It is the shortest path to a compliant,
high-converting EU checkout because it gives you SCA/3DS handling, local payment
methods, address collection and Stripe Tax calculation in a single object.

```
Cart (your site)
      │
      ▼
POST /api/checkout ──► stripe.checkout.sessions.create({ mode: 'payment', ... })
      │                                    │
      │                                    ▼
      │                          Stripe Tax calculates VAT
      ▼
Redirect to Checkout ──► customer pays ──► Stripe fires webhooks
                                                  │
                                                  ▼
                                   POST /api/webhooks/stripe ──► fulfil order
```

Do **not** build a custom card form (Payment Element) first. Reach for it only
if you later need the checkout embedded in your own page — the tax, shipping and
async-payment logic below all still apply, but you take on more of it yourself.

---

## 2. Checkout Session — the shape that matters

The parameters below are the ones that are easy to get wrong and expensive to fix
after you have live orders.

| Parameter | Value | Why it matters here |
|---|---|---|
| `mode` | `'payment'` | One-time orders, not subscriptions. |
| `automatic_tax` | `{ enabled: true }` | Turns on Stripe Tax. Without it you collect no VAT. |
| `billing_address_collection` | `'required'` | Stripe Tax needs an address to pick a rate. |
| `shipping_address_collection` | `{ allowed_countries: [...] }` | Physical goods; also drives destination-based VAT. |
| `shipping_options` | shipping rates with `tax_code` + `tax_behavior` | Shipping is itself taxable in most EU states. |
| `tax_id_collection` | `{ enabled: true }` | Lets B2B buyers enter a VAT number → reverse charge. |
| `customer_creation` | `'always'` | Required for tax IDs and for linking repeat buyers. |
| `invoice_creation` | `{ enabled: true }` | EU B2B buyers need a compliant VAT invoice. |
| `payment_method_types` | **omit it** | Omitting enables dynamic payment methods (see §3). |

Always pass an **idempotency key** when creating a session so a double-clicked
"Pay" button cannot create two orders.

### Prices and tax behaviour

Decide once, globally: are your listed prices **VAT-inclusive** or **VAT-exclusive**?

For EU direct-to-consumer, list prices **tax-inclusive** (`tax_behavior:
'inclusive'`). EU consumer law expects the displayed price to be the price paid,
and inclusive pricing avoids the conversion drop from tax appearing at the last
step. The trade-off is that your net revenue varies by destination country, since
the VAT rate is baked into a fixed gross price.

Set `tax_behavior` on every `Price`. It cannot be changed after the price is used.

---

## 3. Payment methods for Europe

Use **dynamic payment methods**: configure the allowed set in the Stripe Dashboard
(Settings → Payment methods) and omit `payment_method_types` from the API call.
Stripe then shows each buyer the methods that actually convert in their country,
and you can add methods later without a code deploy.

Worth enabling for an EU physical-goods store:

- **Cards** + **Apple Pay** / **Google Pay** / **Link** — baseline everywhere.
- **iDEAL** (NL), **Bancontact** (BE), **EPS** (AT), **Przelewy24** (PL) — dominant
  local methods; in the Netherlands iDEAL outsells cards for e-commerce.
- **SEPA Direct Debit** — broad reach, but settles **asynchronously** (see §5).
- **Klarna** / **PayPal** — strong in DE/AT/NL; raises AOV on kit-sized baskets.

⚠️ **Asynchronous methods change your fulfilment logic.** SEPA Direct Debit and
some Klarna flows confirm days after checkout. If you ship on
`checkout.session.completed` alone you will ship goods that were never paid for.

---

## 4. Stripe Tax setup (do this before going live)

1. **Set your origin address** — Dashboard → Tax → Settings. This is where you
   ship from and it anchors your domestic VAT.
2. **Set a default product tax code** and a default `tax_behavior`.
3. **Add your registrations** — Stripe only collects tax where you tell it you are
   registered. This is a legal determination, not a technical one.
4. **Watch the EU distance-selling threshold.** Selling physical goods B2C across
   EU borders, you charge your *home* country's VAT until your EU-wide cross-border
   sales pass **€10,000/year**, after which you must charge the *destination*
   country's rate on every cross-border sale. Stripe Tax has a monitoring view for
   this threshold — check it, because crossing it silently is the single most
   common EU VAT failure for growing stores.
5. **Register for OSS (One-Stop Shop)** once you cross the threshold. OSS lets you
   file one quarterly return for all EU destination VAT instead of registering in
   each member state. Add the OSS registration in Stripe Tax so destination rates
   apply.

### ⚠️ Product tax code — a real decision, not a default

The default code for physical goods is **`txcd_99999999` (General — Tangible
Goods)**, which attracts the standard VAT rate (19–27% depending on country).

But many EU member states apply **reduced VAT rates** to medicinal products,
medical devices and certain health goods. Whether your patches qualify depends on
their **regulatory classification** — CE-marked medical device, food supplement,
or general wellness/cosmetic product — and this varies by member state.

Getting this wrong is costly in both directions: over-collecting VAT loses you
margin and creates refund liability; under-collecting leaves you owing the
difference out of your own pocket. **Confirm your product's regulatory
classification with your accountant before picking a tax code**, and set it
explicitly on each `Price`/`Product` rather than relying on the account default.

### Shipping tax

Set a tax code on shipping rates too (`txcd_92010001`, Shipping). In most EU
states shipping is taxed at the rate of the goods it carries; Stripe Tax applies
this when the shipping rate carries a tax code and `tax_behavior`.

### Recording transactions

When you use **Checkout with `automatic_tax`**, Stripe records the tax transaction
for you — nothing extra to do. If you later move to raw PaymentIntents, you must
call `stripe.tax.transactions.createFromCalculation` yourself, otherwise the sale
never appears in your tax reports. Refunds need a **reversal** transaction so your
filings net out correctly.

---

## 5. Webhooks — the part that protects your margin

Fulfil orders from webhooks, never from the browser redirect to your success page.
Customers close tabs; webhooks retry.

| Event | Action |
|---|---|
| `checkout.session.completed` | If `payment_status === 'paid'` → fulfil. If `'unpaid'` → record as pending, **do not ship**. |
| `checkout.session.async_payment_succeeded` | SEPA/Klarna cleared → **now** fulfil. |
| `checkout.session.async_payment_failed` | Cancel the pending order, notify the customer. |
| `charge.refunded` | Reverse fulfilment; create the Stripe Tax reversal. |
| `charge.dispute.created` | Freeze fulfilment, gather shipping evidence. |

Three non-negotiables for the handler:

1. **Verify the signature** with `stripe.webhooks.constructEvent()` against the
   **raw request body**. Any JSON body-parser that runs first will break
   verification — this is the most common webhook bug.
2. **Be idempotent.** Stripe retries, and will deliver the same event more than
   once. Persist processed `event.id` values and no-op on repeats.
3. **Return 2xx fast.** Acknowledge first, do slow fulfilment work in a queue.
   Stripe treats a slow response as a failure and retries.

---

## 6. Security and key handling

- **Secret keys never reach the browser.** Only the publishable key (`pk_...`) is
  client-side. Create the Checkout Session server-side.
- Use **restricted API keys** for anything that does not need full access.
- Keep keys in environment variables / a secrets manager, never in git. Add a
  `.env.example` with names only.
- Store the **webhook signing secret** (`whsec_...`) separately per environment.
- Build and test entirely in **test mode** first.

---

## 7. Build order

1. Stripe Tax settings: origin address, registrations, product tax code, `tax_behavior`.
2. Products and Prices with explicit `tax_behavior` and tax codes.
3. Shipping rates per destination zone, with shipping tax codes.
4. `POST /api/checkout` → create Checkout Session (idempotent).
5. `POST /api/webhooks/stripe` → signature verification + idempotent fulfilment.
6. Handle async payment events before enabling SEPA or Klarna.
7. Success/cancel pages — treat success as "thank you", not as proof of payment.
8. Enable Radar rules; review the EU distance-selling threshold monitor.
9. Test-mode end-to-end: card, iDEAL, SEPA (incl. the delayed-success path), refund.
10. Go live: swap keys, re-register the production webhook endpoint, place one real order.

---

## 8. Open items

- **Regulatory classification of the patches** → drives the product tax code (§4).
- **Current platform** for skim-patches.com → determines whether this is a custom
  integration or a Shopify/Woo app configuration.
- **Home country of the business** → sets the origin address and domestic VAT rate.
- **Inclusive vs exclusive pricing** → recommended inclusive for EU B2C (§2).
