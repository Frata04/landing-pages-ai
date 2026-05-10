import {
  HeroCentered,
  Features2x2,
  FeaturesGrid,
  TrustFeatures,
  Guarantee,
} from '@/components/blocks'

const CTA_LINK =
  'https://kimpatches.com/it-it/collections/scopri-i-kit/products/kit-attiva-metabolismo?variant=56721755177304'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroCentered
        logo="Kim Patches"
        strapline="Il kit più venduto"
        headline="3 cerotti. 1 missione. Il tuo corpo torna in equilibrio."
        subheadline="Berberina + Metabolismo + Drenanti. Tecnologia transdermica a rilascio graduale: 8 ore di supporto continuo, senza pillole, senza polveri."
        ctaText="Scopri il Kit Attiva Metabolismo"
        ctaLink={CTA_LINK}
        microcopy="Spedizione gratuita in Italia · Rimborso garantito 30 giorni"
      />

      <Features2x2
        title="Cosa fa il kit per te"
        subtitle="Tre cerotti pensati per lavorare insieme, ogni giorno."
        features={[
          {
            id: 'voglie',
            name: 'Controllo delle voglie',
            description:
              'La Berberina supporta il metabolismo degli zuccheri. Quella voglia di dolce alle 16, il biscottino dopo cena — la senti meno. Non sparisce, diventa più gestibile.',
          },
          {
            id: 'energia',
            name: 'Energia costante',
            description:
              "Il cerotto Metabolismo con tè verde e scorza d'arancia ti dà la spinta giusta per partire. Meno quella sensazione di lentezza la mattina, più voglia di fare.",
          },
          {
            id: 'gonfiore',
            name: 'Corpo più leggero',
            description:
              'Tarassaco, finocchio e carciofo supportano il drenaggio naturale. A fine giornata ti senti più te stessa, meno appesantita.',
          },
          {
            id: 'rilascio',
            name: 'Rilascio graduale 8 ore',
            description:
              'Gli attivi vengono assorbiti lentamente attraverso la pelle. Nessun picco, nessun crash — il tuo corpo riceve supporto costante durante tutta la giornata.',
          },
        ]}
      />

      <FeaturesGrid
        title="3 cerotti, 3 funzioni"
        subtitle="Ogni patch del kit agisce su un aspetto diverso. Insieme formano un sistema completo."
        columns={3}
        features={[
          {
            id: 'berberina',
            name: 'Berberina — Controllo',
            description:
              "Ingredienti: Berberina, Cannella, Melograno, Complesso vitamine B, Cromo. Supporta il metabolismo degli zuccheri e aiuta a stabilizzare l'energia durante la giornata.",
          },
          {
            id: 'metabolismo',
            name: 'Metabolismo — Energia',
            description:
              "Ingredienti: Tè verde, Scorza d'arancia. Supporta l'attivazione del metabolismo e dà la giusta energia per affrontare la giornata senza sentirsi scarica.",
          },
          {
            id: 'drenanti',
            name: 'Drenanti — Leggerezza',
            description:
              'Ingredienti: Tarassaco, Finocchio, Carciofo, Zenzero, Curcuma. Supporta il drenaggio naturale dei liquidi e riduce la sensazione di gonfiore.',
          },
        ]}
      />

      <TrustFeatures
        title="Perché Kim Patches"
        subtitle="Un formato pensato per chi ha già provato tutto e cerca qualcosa di diverso."
        showBadge={false}
        features={[
          {
            id: 'transdermica',
            title: 'Tecnologia transdermica',
            description:
              'Gli attivi vengono assorbiti direttamente attraverso la pelle, bypassando il sistema digestivo. Effetto più costante, zero picchi.',
          },
          {
            id: 'naturale',
            title: 'Ingredienti naturali',
            description:
              'Nessun farmaco, nessuna sostanza aggressiva. Solo ingredienti riconosciuti per il loro contributo al normale metabolismo (normative UE).',
          },
          {
            id: 'semplice',
            title: '1 cerotto al giorno',
            description:
              "Applichi su pelle pulita (braccio, spalla o addome) e te ne dimentichi. Resistente all'acqua, discreto, dura fino a 8 ore.",
          },
        ]}
      />

      <Guarantee
        days={30}
        text="Se non sei soddisfatta, ti rimborsiamo. Senza domande, senza burocrazia. Spedizione gratuita in tutta Italia."
      />

      <section className="py-12 px-4 text-center">
        <div className="container mx-auto max-w-xl">
          <p className="text-sm text-muted-foreground mb-6 font-mono tracking-wide uppercase">
            Kit Attiva Metabolismo — Berberina + Metabolismo + Drenanti
          </p>
          <a
            href={CTA_LINK}
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-foreground text-background text-base font-medium hover:bg-foreground/90 transition-all duration-300 shadow-lg"
          >
            Acquista il Kit su kimpatches.com →
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            Spedizione gratuita · Rimborso garantito 30 giorni
          </p>
        </div>
      </section>
    </main>
  )
}
