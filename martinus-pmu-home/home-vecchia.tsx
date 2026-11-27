import { createFileRoute } from "@tanstack/react-router";
import { MxPage } from "@/mx/MxPage";
import html from "@/mx/pmu.body.txt?raw";
import js from "@/mx/pmu.script.txt?raw";

// la home di prima (fino a novembre 2026), tenuta da parte su questo link
const pmuHtml = html.replaceAll('href="/"', 'href="https://martinusagency.com/"');

export const Route = createFileRoute("/home-vecchia")({
  head: () => ({
    meta: [
      { title: "Martinus per la dermopigmentazione — versione precedente" },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [
      { rel: "preload", as: "font", type: "font/woff2", href: "/mx/fonts/cormorant-garamond-latin-500-normal.woff2", crossOrigin: "anonymous" },
      { rel: "preload", as: "font", type: "font/woff2", href: "/mx/fonts/manrope-latin-500-normal.woff2", crossOrigin: "anonymous" },
    ],
  }),
  component: HomeVecchia,
});

function HomeVecchia() {
  return <MxPage html={pmuHtml} js={js} />;
}
