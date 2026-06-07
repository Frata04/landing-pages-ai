import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Star, Zap, Shield, Leaf, Clock } from "lucide-react";
import { products } from "@/lib/products";

const featuredProducts = products.filter((p) =>
  [
    "cerotti-drenanti-anti-gonfiore",
    "cerotti-attiva-metabolismo",
    "cerotti-valeriana-sonno-profondo",
    "collagen-patches",
    "cerotti-nad-anti-eta-rigeneranti",
    "cerotti-attiva-dopamina",
  ].includes(p.handle)
);

const reviews = [
  {
    name: "Giulia M.",
    stars: 5,
    text: "In 3 settimane ho già notato la differenza. Meno gonfiore e più energia. Li ricompro sicuramente!",
    product: "Cerotti Drenanti",
  },
  {
    name: "Valentina R.",
    stars: 5,
    text: "Sono scettica per natura, ma questi cerotti al sonno hanno cambiato le mie notti. Finalmente dormo tutta la notte.",
    product: "Cerotti Sonno",
  },
  {
    name: "Sara T.",
    stars: 5,
    text: "La pelle è visibilmente più luminosa dopo un mese di cerotti al collagene. Ottima qualità!",
    product: "Cerotti Collagene",
  },
  {
    name: "Marta B.",
    stars: 5,
    text: "Facili da usare, pratici e funzionano davvero. Non posso più farne a meno.",
    product: "Cerotti Metabolismo",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen bg-stone-50 flex items-center pt-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          <div>
            <div className="inline-flex items-center gap-2 bg-stone-900 text-white text-xs px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
              Oltre 10.000 clienti soddisfatti
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-stone-900 mb-6">
              Il benessere{" "}
              <span className="italic font-light">quotidiano</span>
              <br />
              in un cerotto.
            </h1>
            <p className="text-lg text-stone-500 mb-8 max-w-lg leading-relaxed">
              Cerotti transdermici naturali, formulati per supportare metabolismo, sonno, bellezza e vitalità. Semplici. Efficaci. Ogni giorno.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#prodotti"
                className="bg-stone-900 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-stone-700 transition-colors inline-flex items-center gap-2"
              >
                Scopri i cerotti
                <ChevronRight size={16} />
              </Link>
              <Link
                href="#come-funziona"
                className="border border-stone-300 text-stone-700 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-stone-100 transition-colors"
              >
                Come funzionano
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-10">
              <div className="flex -space-x-2">
                {["G", "V", "S", "M"].map((l, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-stone-300 border-2 border-white flex items-center justify-center text-xs font-medium text-stone-700"
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-sm font-medium text-stone-800 ml-1">4.9</span>
                </div>
                <p className="text-xs text-stone-500">+2.500 recensioni verificate</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-stone-200 to-stone-100 rounded-3xl"></div>
              <Image
                src={products[0].image + "?v=1776956210"}
                alt="Kim Patches Cerotti"
                fill
                className="object-contain p-8 float-animation"
                priority
              />
            </div>
            <div className="absolute -bottom-2 -left-4 bg-white shadow-lg rounded-2xl px-4 py-3 text-sm">
              <p className="font-medium text-stone-800">✓ Spedizione gratuita</p>
              <p className="text-xs text-stone-500">Da €37 — consegna in 48h</p>
            </div>
            <div className="absolute -top-2 -right-4 bg-stone-900 text-white shadow-lg rounded-2xl px-4 py-3 text-sm">
              <p className="font-medium">🌿 100% Naturale</p>
              <p className="text-xs text-stone-400">Formula transodermica</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-stone-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: <Leaf size={18} />, label: "Ingredienti naturali" },
              { icon: <Shield size={18} />, label: "Formula certificata" },
              { icon: <Zap size={18} />, label: "Azione transodermica" },
              { icon: <Clock size={18} />, label: "30 cerotti / confezione" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center justify-center gap-2 text-sm text-stone-300">
                <span className="text-stone-400">{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COME FUNZIONA */}
      <section id="come-funziona" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">La tecnologia</p>
            <h2 className="text-4xl font-semibold text-stone-900">Come funziona un cerotto transdermico?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Applica il cerotto",
                desc: "Incolla il cerotto su una zona pulita e asciutta della pelle — polso, braccio o caviglia. In pochi secondi.",
              },
              {
                step: "02",
                title: "I principi attivi penetrano",
                desc: "La tecnologia transodermica rilascia gradualmente gli ingredienti attivi attraverso la pelle, direttamente nel flusso sanguigno.",
              },
              {
                step: "03",
                title: "Azione continua 24h",
                desc: "A differenza delle pillole, i cerotti mantengono livelli costanti di principi attivi per tutto il giorno.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative p-8 bg-stone-50 rounded-2xl">
                <p className="text-6xl font-light text-stone-200 absolute top-4 right-6">{step}</p>
                <h3 className="text-lg font-semibold text-stone-900 mb-3 relative z-10">{title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed relative z-10">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODOTTI */}
      <section id="prodotti" className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Collezione</p>
            <h2 className="text-4xl font-semibold text-stone-900">I nostri cerotti</h2>
            <p className="text-stone-500 mt-3 max-w-xl mx-auto">
              Ogni cerotto è formulato per uno specifico obiettivo di benessere. Scegli quello giusto per te.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/prodotti/${product.handle}`}
                className="group bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-stone-300 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="relative h-56 flex items-center justify-center"
                  style={{ backgroundColor: product.color + "15" }}
                >
                  {product.badge && (
                    <span
                      className="absolute top-3 left-3 text-xs font-medium text-white px-3 py-1 rounded-full"
                      style={{ backgroundColor: product.color }}
                    >
                      {product.badge}
                    </span>
                  )}
                  <Image
                    src={product.image}
                    alt={product.shortTitle}
                    width={180}
                    height={180}
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-stone-400 mb-1 uppercase tracking-wide">Kim Patches</p>
                  <h3 className="font-semibold text-stone-900 mb-1">{product.shortTitle}</h3>
                  <p className="text-sm text-stone-500 mb-4 line-clamp-2">{product.tagline}</p>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-stone-900">€{product.price}</p>
                    <span
                      className="text-xs font-medium px-3 py-1.5 rounded-full text-white inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                      style={{ backgroundColor: product.color }}
                    >
                      Scopri <ChevronRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RECENSIONI */}
      <section id="recensioni" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Social proof</p>
            <h2 className="text-4xl font-semibold text-stone-900">Cosa dicono i nostri clienti</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map(({ name, stars, text, product }) => (
              <div key={name} className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(stars)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">"{text}"</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-stone-900">{name}</p>
                  <p className="text-xs text-stone-400 bg-stone-200 px-2 py-1 rounded-full">{product}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-4">Inizia oggi</p>
          <h2 className="text-4xl font-semibold mb-6">
            Prova Kim Patches.<br />
            <span className="font-light italic text-stone-300">Senti la differenza in 30 giorni.</span>
          </h2>
          <p className="text-stone-400 mb-8 max-w-lg mx-auto">
            Spedizione gratuita, soddisfatti o rimborsati. Migliaia di clienti hanno già scelto la via naturale al benessere.
          </p>
          <Link
            href="#prodotti"
            className="bg-white text-stone-900 px-10 py-4 rounded-full text-sm font-medium hover:bg-stone-100 transition-colors inline-flex items-center gap-2"
          >
            Scegli il tuo cerotto
            <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
