"use client";

import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight text-stone-900">
          Kim<span className="font-light">Patches</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#prodotti" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">
            Prodotti
          </Link>
          <Link href="/#come-funziona" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">
            Come funziona
          </Link>
          <Link href="/#recensioni" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">
            Recensioni
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="https://kimpatches.com/cart"
            className="flex items-center gap-2 bg-stone-900 text-white text-sm px-4 py-2 rounded-full hover:bg-stone-700 transition-colors"
          >
            <ShoppingBag size={15} />
            Acquista
          </Link>
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-stone-100 px-4 py-4 flex flex-col gap-4">
          <Link href="/#prodotti" className="text-sm text-stone-700" onClick={() => setOpen(false)}>Prodotti</Link>
          <Link href="/#come-funziona" className="text-sm text-stone-700" onClick={() => setOpen(false)}>Come funziona</Link>
          <Link href="/#recensioni" className="text-sm text-stone-700" onClick={() => setOpen(false)}>Recensioni</Link>
        </div>
      )}
    </header>
  );
}
