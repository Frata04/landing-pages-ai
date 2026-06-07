import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Star, Shield, Truck, RotateCcw, Check } from "lucide-react";
import { getProductByHandle, products } from "@/lib/products";
import AddToCartButton from "@/components/AddToCartButton";

export function generateStaticParams() {
  return products.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) return {};
  return {
    title: `${product.title} | Kim Patches`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) notFound();

  const related = products.filter((p) => p.handle !== handle).slice(0, 3);

  return (
    <div className="pt-16">
      {/* BREADCRUMB */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <nav className="flex items-center gap-2 text-xs text-stone-400">
          <Link href="/" className="hover:text-stone-700">Home</Link>
          <ChevronRight size={12} />
          <Link href="/#prodotti" className="hover:text-stone-700">Prodotti</Link>
          <ChevronRight size={12} />
          <span className="text-stone-600">{product.shortTitle}</span>
        </nav>
      </div>

      {/* HERO PRODOTTO */}
      <section className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Immagine */}
        <div className="sticky top-20">
          <div
            className="rounded-3xl overflow-hidden flex items-center justify-center p-12 h-[420px]"
            style={{ backgroundColor: product.color + "12" }}
          >
            <Image
              src={product.image}
              alt={product.title}
              width={320}
              height={320}
              className="object-contain float-animation"
              priority
            />
          </div>
        </div>

        {/* Info */}
        <div>
          {product.badge && (
            <span
              className="inline-block text-xs font-medium text-white px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: product.color }}
            >
              {product.badge}
            </span>
          )}

          <p className="text-xs text-stone-400 uppercase tracking-widest mb-2">Kim Patches</p>
          <h1 className="text-3xl font-semibold text-stone-900 mb-3">{product.shortTitle}</h1>

          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm text-stone-500">4.9 · 2.500+ recensioni</span>
          </div>

          <p className="text-stone-600 leading-relaxed mb-8">{product.description}</p>

          {/* Benefits */}
          <div className="mb-8">
            <p className="text-sm font-medium text-stone-900 mb-3">Benefici principali</p>
            <ul className="space-y-2">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-stone-600">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: product.color + "20" }}
                  >
                    <Check size={11} style={{ color: product.color }} strokeWidth={2.5} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Prezzo e varianti */}
          <div className="mb-6">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-semibold text-stone-900">€{product.price}</span>
              <span className="text-sm text-stone-400">/ confezione da 30 cerotti</span>
            </div>

            {product.variants.length > 1 && (
              <div className="space-y-2 mb-6">
                <p className="text-sm font-medium text-stone-700">Scegli il formato</p>
                {product.variants.map((v) => (
                  <div
                    key={v.label}
                    className="flex items-center justify-between p-3 rounded-xl border border-stone-200 bg-stone-50 text-sm"
                  >
                    <span className="font-medium text-stone-800">{v.label}</span>
                    <div className="flex items-center gap-2">
                      {v.savings && (
                        <span
                          className="text-xs font-medium text-white px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: product.color }}
                        >
                          {v.savings}
                        </span>
                      )}
                      <span className="font-semibold text-stone-900">€{v.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <AddToCartButton
            productId={product.id}
            productHandle={product.handle}
            color={product.color}
          />

          {/* Trust icons */}
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-stone-100">
            {[
              { icon: <Truck size={18} />, label: "Spedizione gratuita", sub: "Ordini da €37" },
              { icon: <Shield size={18} />, label: "Acquisto sicuro", sub: "SSL certificato" },
              { icon: <RotateCcw size={18} />, label: "30 giorni resi", sub: "Soddisfatti o rimb." },
            ].map(({ icon, label, sub }) => (
              <div key={label} className="text-center">
                <div className="flex justify-center mb-1 text-stone-400">{icon}</div>
                <p className="text-xs font-medium text-stone-700">{label}</p>
                <p className="text-xs text-stone-400">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INGREDIENTI */}
      <section className="max-w-6xl mx-auto px-4 py-12 border-t border-stone-100">
        <h2 className="text-xl font-semibold text-stone-900 mb-6">Ingredienti principali</h2>
        <div className="flex flex-wrap gap-3">
          {product.ingredients.map((ing) => (
            <span
              key={ing}
              className="text-sm px-4 py-2 rounded-full border font-medium"
              style={{ borderColor: product.color + "40", color: product.color, backgroundColor: product.color + "08" }}
            >
              {ing}
            </span>
          ))}
        </div>
      </section>

      {/* COME USARE */}
      <section className="max-w-6xl mx-auto px-4 py-12 border-t border-stone-100">
        <h2 className="text-xl font-semibold text-stone-900 mb-6">Come usarlo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { n: "1", t: "Pulisci la pelle", d: "Assicurati che la zona sia pulita, asciutta e senza creme o oli." },
            { n: "2", t: "Applica il cerotto", d: "Incolla il cerotto su polso, braccio o caviglia. Premi leggermente per fissarlo." },
            { n: "3", t: "Indossalo per 24h", d: "Lascialo in posa per 24 ore, poi sostituiscilo con uno nuovo." },
          ].map(({ n, t, d }) => (
            <div key={n} className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0"
                style={{ backgroundColor: product.color }}
              >
                {n}
              </div>
              <div>
                <p className="font-medium text-stone-900 mb-1">{t}</p>
                <p className="text-sm text-stone-500">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODOTTI CORRELATI */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-stone-900 mb-8">Potrebbe interessarti anche</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((rp) => (
              <Link
                key={rp.id}
                href={`/prodotti/${rp.handle}`}
                className="group bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-stone-300 hover:shadow-md transition-all"
              >
                <div
                  className="h-40 flex items-center justify-center"
                  style={{ backgroundColor: rp.color + "15" }}
                >
                  <Image
                    src={rp.image}
                    alt={rp.shortTitle}
                    width={120}
                    height={120}
                    className="object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4">
                  <p className="font-medium text-stone-900 text-sm mb-1">{rp.shortTitle}</p>
                  <p className="text-xs text-stone-400 mb-3">{rp.tagline}</p>
                  <p className="font-semibold text-stone-900 text-sm">€{rp.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
