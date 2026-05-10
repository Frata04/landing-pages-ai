# ISTRUZIONI PER L'AGENTE

Leggi questo file prima di generare la landing page.

---

## REGOLA FONDAMENTALE

**COPIA ESATTAMENTE I TESTI DAL BRIEF. NON INVENTARE MAI.**

---

## WORKFLOW

1. Ricevi un brief con sezioni `====`
2. Leggi `.cursor/rules/parsing-brief.mdc` per le regole di estrazione
3. Modifica i file

---

## FILE DA MODIFICARE

| File | Cosa modificare |
|------|----------------|
| `app/layout.tsx` | Font, dark mode |
| `config/design-tokens.css` | Colori HEX dal brief |
| `app/page.tsx` | Importa componenti, popola contenuti |

---

## COMPONENTI DISPONIBILI

Importa da `@/components/blocks`:

- `HeroCentered` - Hero monumentale centrato
- `FeaturesGrid` - Griglia features (columns={3} o {4})
- `Features2x2` - Griglia 2x2 per 4 items
- `TrustFeatures` - Griglia trust elements
- `TrustedByLogos` - **SOLO se ci sono clienti nel brief**
- `Guarantee` - **SOLO se c'è garanzia nel brief**
- `ArticlesList` - Lista editoriale
- `ArticlesMasonry` - Layout magazine

---

## PARSING DEL BRIEF

### Main Categories → features[].name

```
Main Categories: Aesthetic Engine • Brandbook Dinamico • Agenti Autonomi
```

Diventa:
```tsx
features: [
  { id: '1', name: 'Aesthetic Engine' },
  { id: '2', name: 'Brandbook Dinamico' },
  { id: '3', name: 'Agenti Autonomi' },
]
```

**NON aggiungere descrizioni se non sono nel brief.**

### Social Proof → features[].title + description

```
Social Proof: **• Niente 'Slot Machine':** L'Aesthetic Engine non tira a indovinare...
```

Diventa:
```tsx
{ 
  id: '1', 
  title: "Niente 'Slot Machine'", 
  description: "L'Aesthetic Engine non tira a indovinare..."
}
```

---

## COLORI

Cerca nel brief i valori HEX e copiali in `config/design-tokens.css`:

```css
.dark {
  --dt-background: #09090B;  /* Dal brief */
  --dt-surface: #18181B;
  --dt-primary: #3B82F6;
  --dt-text: #FAFAFA;
  --dt-text-muted: #A1A1AA;
  --dt-border: #27272A;
}
```

---

## FONT

Cerca nel brief il nome del font:
- "General Sans", "Sans-serif geometrico" → `Inter` weight 600
- "Instrument Serif", "Serif elegante" → `Instrument_Serif`

Modifica `app/layout.tsx`.

---

## ⚠️ REGOLE CRITICHE

1. **NON inventare testi** - Copia esattamente dal brief
2. **NON aggiungere** "Scopri di più", descrizioni placeholder, emoji
3. **NON montare** componenti non richiesti (TrustedByLogos, Guarantee)
4. **USA i colori HEX** esatti dal brief, non default
5. **USA il font** richiesto dal brief, non Serif se dice Sans

---

## CHECKLIST FINALE

- [ ] Ogni testo viene ESATTAMENTE dal brief?
- [ ] Non ho inventato descrizioni?
- [ ] Ho usato i colori HEX dal brief?
- [ ] Ho usato il font corretto (Sans vs Serif)?
- [ ] Non ho montato componenti non richiesti?
