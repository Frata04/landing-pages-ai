import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="text-white text-lg font-semibold mb-3">
            Kim<span className="font-light">Patches</span>
          </p>
          <p className="text-sm leading-relaxed text-stone-400">
            Cerotti transdermici naturali per il tuo benessere quotidiano. Formulati in Italia, spediti in tutta Europa.
          </p>
        </div>

        <div>
          <p className="text-white text-sm font-medium mb-4">Prodotti</p>
          <ul className="space-y-2 text-sm">
            {[
              ["Cerotti Drenanti", "cerotti-drenanti-anti-gonfiore"],
              ["Cerotti Metabolismo", "cerotti-attiva-metabolismo"],
              ["Cerotti Sonno", "cerotti-valeriana-sonno-profondo"],
              ["Cerotti Collagene", "collagen-patches"],
              ["Cerotti NAD+", "cerotti-nad-anti-eta-rigeneranti"],
            ].map(([name, handle]) => (
              <li key={handle}>
                <Link href={`/prodotti/${handle}`} className="hover:text-white transition-colors">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white text-sm font-medium mb-4">Contatti</p>
          <p className="text-sm text-stone-400 mb-2">info@kimpatches.com</p>
          <p className="text-sm text-stone-400 mb-4">kimpatches.com</p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-12 pt-6 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-xs text-stone-500">© 2024 Kim Patches. Tutti i diritti riservati.</p>
        <div className="flex gap-4 text-xs text-stone-500">
          <Link href="#" className="hover:text-stone-300">Privacy Policy</Link>
          <Link href="#" className="hover:text-stone-300">Cookie Policy</Link>
          <Link href="#" className="hover:text-stone-300">Resi</Link>
        </div>
      </div>
    </footer>
  );
}
