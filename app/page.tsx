/**
 * SKELETON - PAGINA VUOTA
 * 
 * L'AGENTE LEGGE IL BRIEF E POPOLA QUESTA PAGINA.
 * 
 * WORKFLOW:
 * 1. Utente clona repository
 * 2. npm install && npm run dev
 * 3. Utente incolla il brief
 * 4. Agente monta i componenti e popola i contenuti
 * 
 * COMPONENTI DISPONIBILI (in /components/blocks/):
 * 
 * import {
 *   HeroCentered,       // Hero monumentale centrato
 *   HeroSplit,          // Hero 50/50 con immagine
 *   FeaturesGrid,       // Griglia features 2-3-4 colonne
 *   Features2x2,        // Griglia 2x2 per 4 features
 *   FeaturesBento,      // Layout Bento asimmetrico
 *   TrustedByLogos,     // Barra loghi clienti (SOLO se nel brief)
 *   TrustFeatures,      // Griglia trust elements
 *   Guarantee,          // Blocco garanzia (SOLO se nel brief)
 *   ArticlesList,       // Lista editoriale
 *   ArticlesMasonry,    // Layout magazine
 *   ArticlesCards,      // Griglia cards
 * } from '@/components/blocks'
 * 
 * ISTRUZIONI: Vedi .cursor/rules/ per il workflow completo.
 */

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-4xl font-heading font-semibold mb-4">
          Landing Page Skeleton
        </h1>
        <p className="text-muted-foreground mb-8">
          Incolla il tuo brief nella chat con l&apos;agente AI.<br />
          La landing verrà generata automaticamente.
        </p>
        <div className="text-sm font-mono text-muted-foreground/50">
          Leggi{' '}
          <a 
            href="https://github.com/TUO-USERNAME/landing-generator/blob/main/README.md" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            README.md
          </a>
          {' '}per le istruzioni
        </div>
      </div>
    </main>
  )
}
