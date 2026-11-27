import { createFileRoute } from "@tanstack/react-router";
import { MxPage } from "@/mx/MxPage";
import html from "@/mx/landing.body.txt?raw";
import home from "@/mx/home3d.body.txt?raw";
import homeJs from "@/mx/home3d.script.txt?raw";
import lead from "@/mx/lead.body.txt?raw";
import leadJs from "@/mx/lead.script.txt?raw";

// home 3D (nov 2026): stili e simboli di base + pagina + popup del modulo (lead) che manda al gestionale
const base = html.split('<div class="pm" id="top">')[0];
const pageHtml = base + home;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agenda Martinus — Clienti nuove per dermopigmentiste" },
      { name: "description", content: "Sito, foto, video e sponsorizzate per chi fa trucco permanente: le richieste ti arrivano sul telefono. 10–15 clienti nuove ogni mese, o ti rimborsiamo. Una sola dermopigmentista per provincia. Chiamata gratuita." },
      { property: "og:title", content: "Ti portiamo clienti nuove. Tu fai solo i trattamenti." },
      { property: "og:description", content: "Agenda Martinus, per dermopigmentiste. Una sola per provincia. Chiamata gratuita di 30 minuti." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pmu.martinusagency.com/" },
      { property: "og:image", content: "https://pmu.martinusagency.com/mx/og-pmu.jpg?v=2" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://pmu.martinusagency.com/mx/og-pmu.jpg?v=2" },
    ],
    links: [
      { rel: "canonical", href: "https://pmu.martinusagency.com/" },
      { rel: "preload", as: "font", type: "font/woff2", href: "/mx/fonts/manrope-latin-700-normal.woff2", crossOrigin: "anonymous" },
    ],
  }),
  component: Home,
});

function Home() {
  return <MxPage html={pageHtml + lead} js={leadJs + "\n" + homeJs} />;
}
