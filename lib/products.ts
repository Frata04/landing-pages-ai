export type Product = {
  id: string;
  handle: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  benefits: string[];
  ingredients: string[];
  image: string;
  price: string;
  variants: { label: string; price: string; savings?: string }[];
  badge?: string;
  color: string;
};

export const products: Product[] = [
  {
    id: "15482572341592",
    handle: "cerotti-drenanti-anti-gonfiore",
    title: "Kim Patches – Cerotti Drenanti Anti Gonfiore",
    shortTitle: "Cerotti Drenanti",
    tagline: "Elimina il gonfiore. Senti la leggerezza.",
    description:
      "I nostri cerotti drenanti combinano estratti vegetali come tarassaco, finocchio, carciofo, zenzero e curcuma — ingredienti della tradizione erboristica in un pratico cerotto transdermico da applicare ogni giorno.",
    benefits: [
      "Riduce il senso di gonfiore",
      "Supporta il drenaggio naturale",
      "Estratti vegetali 100% naturali",
      "30 cerotti per un mese di trattamento",
    ],
    ingredients: ["Tarassaco", "Finocchio", "Carciofo", "Zenzero", "Curcuma"],
    image:
      "https://cdn.shopify.com/s/files/1/0928/1470/4984/files/Image_1124_6_1.png",
    price: "37.00",
    variants: [
      { label: "1+1", price: "37.00" },
      { label: "2+2", price: "37.00", savings: "Risparmia il 50%" },
    ],
    badge: "Più venduto",
    color: "#4A7C6F",
  },
  {
    id: "15482572603736",
    handle: "cerotti-attiva-metabolismo",
    title: "Kim Patches – Cerotti Metabolismo",
    shortTitle: "Cerotti Metabolismo",
    tagline: "Riattiva il tuo metabolismo ogni giorno.",
    description:
      "I Cerotti Metabolismo combinano estratto di scorza d'arancia, arancia amara, pompelmo e tè verde in un pratico cerotto transdermico — il rituale quotidiano per supportare il metabolismo.",
    benefits: [
      "Supporta il metabolismo attivo",
      "Azione termogenica naturale",
      "Estratti agrumati e tè verde",
      "Facile da usare ogni giorno",
    ],
    ingredients: ["Arancia amara", "Pompelmo", "Tè verde", "Scorza d'arancia"],
    image:
      "https://cdn.shopify.com/s/files/1/0928/1470/4984/files/Image_1448_2_2.png",
    price: "37.00",
    variants: [
      { label: "1+1", price: "37.00" },
      { label: "2+2", price: "37.00", savings: "Risparmia il 50%" },
    ],
    color: "#C4843A",
  },
  {
    id: "15473105994072",
    handle: "kim-patches-cerotti-berberina-dimagranti",
    title: "Kim Patches – Cerotti alla Berberina",
    shortTitle: "Cerotti Berberina",
    tagline: "Equilibrio, sazietà e metabolismo — tutto in un cerotto.",
    description:
      "I Cerotti alla Berberina sono pensati per supportare metabolismo, sazietà e gestione del peso. Formula transodermica avanzata per un'azione continua durante la giornata.",
    benefits: [
      "Supporta il senso di sazietà",
      "Aiuta la gestione del peso",
      "Berberina ad alta biodisponibilità",
      "Azione lenta e continua 24h",
    ],
    ingredients: ["Berberina HCl", "Estratto di Tè Verde", "Cromo"],
    image:
      "https://cdn.shopify.com/s/files/1/0928/1470/4984/files/Image_1067_1_1_9_3.png",
    price: "37.00",
    variants: [{ label: "1+1", price: "37.00" }],
    color: "#2D5A3D",
  },
  {
    id: "15482572964184",
    handle: "collagen-patches",
    title: "Kim Patches – Cerotti al Collagene",
    shortTitle: "Cerotti Collagene",
    tagline: "Pelle più giovane. Ogni giorno.",
    description:
      "I Cerotti Collagene Kim Patches sono progettati per supportare un aspetto più luminoso e giovane della pelle, con una formula transodermica che rilascia principi attivi in modo graduale.",
    benefits: [
      "Stimola la produzione di collagene",
      "Pelle più luminosa e compatta",
      "Formula transodermica avanzata",
      "Visibile in 4 settimane",
    ],
    ingredients: ["Collagene idrolizzato", "Vitamina C", "Acido Ialuronico"],
    image:
      "https://cdn.shopify.com/s/files/1/0928/1470/4984/files/Image_1412_5_1_2.png",
    price: "37.00",
    variants: [
      { label: "1+1", price: "37.00" },
      { label: "2+2", price: "37.00", savings: "Risparmia il 50%" },
    ],
    color: "#B87CA0",
  },
  {
    id: "15485407330648",
    handle: "cerotti-valeriana-sonno-profondo",
    title: "Kim Patches – Cerotti Sonno Profondo",
    shortTitle: "Cerotti Sonno",
    tagline: "Dormi meglio. Svegliati riposato.",
    description:
      "Il Cerotto Sonno Profondo è formulato con Valeriana, Magnesio Glicinato e Ashwagandha per aiutarti ad addormentarti più facilmente e migliorare la qualità del sonno.",
    benefits: [
      "Favorisce l'addormentamento",
      "Migliora la qualità del sonno",
      "Senza farmaci, naturale",
      "Svegliarsi riposati e lucidi",
    ],
    ingredients: ["Valeriana", "Magnesio Glicinato", "Ashwagandha", "Melatonina"],
    image:
      "https://cdn.shopify.com/s/files/1/0928/1470/4984/files/Image_868_1_7_1_3.png",
    price: "37.00",
    variants: [
      { label: "1+1", price: "37.00" },
      { label: "2+2", price: "37.00", savings: "Risparmia il 50%" },
    ],
    badge: "Novità",
    color: "#3D4A7A",
  },
  {
    id: "15482572341592-nap",
    handle: "cerotti-nad-anti-eta-rigeneranti",
    title: "Kim Patches – Cerotti NAD+ Anti Età",
    shortTitle: "Cerotti NAD+",
    tagline: "Rallenta il tempo. Ritrova la vitalità.",
    description:
      "I cerotti NAD+ sono progettati per supportare un aspetto più giovane e una vitalità generale, con una formula transodermica che rilascia NAD+ in modo costante durante il giorno.",
    benefits: [
      "Supporta la rigenerazione cellulare",
      "Aumenta l'energia e la vitalità",
      "Riduce i segni del tempo",
      "Azione antiossidante avanzata",
    ],
    ingredients: ["NAD+", "Resveratrolo", "Coenzima Q10", "Vitamina E"],
    image:
      "https://cdn.shopify.com/s/files/1/0928/1470/4984/files/Image_1421_3_2.png",
    price: "37.00",
    variants: [
      { label: "1+1", price: "37.00" },
      { label: "2+2", price: "37.00", savings: "Risparmia il 50%" },
    ],
    color: "#8B6914",
  },
  {
    id: "15482572439896",
    handle: "cerotti-attiva-dopamina",
    title: "Kim Patches – Cerotti Dopamina",
    shortTitle: "Cerotti Dopamina",
    tagline: "Ritorna al tuo equilibrio emotivo.",
    description:
      "I Cerotti Dopamina sono progettati per supportare l'equilibrio emotivo e il buonumore in modo naturale, con principi attivi a rilascio graduale.",
    benefits: [
      "Supporta l'umore positivo",
      "Riduce stress e ansia",
      "Formula naturale a rilascio lento",
      "Effetto equilibrante continuo",
    ],
    ingredients: ["L-Tirosina", "Rhodiola Rosea", "5-HTP", "Vitamina B6"],
    image:
      "https://cdn.shopify.com/s/files/1/0928/1470/4984/files/Image_864_1_4_3.png",
    price: "37.00",
    variants: [
      { label: "1+1", price: "37.00" },
      { label: "2+2", price: "37.00", savings: "Risparmia il 50%" },
    ],
    color: "#6B4A8B",
  },
  {
    id: "15482573062488",
    handle: "menopause-patches-1",
    title: "Kim Patches – Cerotti Menopausa",
    shortTitle: "Cerotti Menopausa",
    tagline: "Vivi questa fase con equilibrio e benessere.",
    description:
      "I Cerotti Menopausa sono pensati per aiutare a gestire i sintomi più comuni della menopausa, supportando l'equilibrio ormonale naturale.",
    benefits: [
      "Riduce le vampate di calore",
      "Supporta l'equilibrio ormonale",
      "Migliora il benessere generale",
      "Formula delicata e naturale",
    ],
    ingredients: ["Trifoglio Rosso", "Salvia", "Agnocasto", "Vitamina D3"],
    image:
      "https://cdn.shopify.com/s/files/1/0928/1470/4984/files/Image_1552_1_2_2.png",
    price: "37.00",
    variants: [
      { label: "1+1", price: "37.00" },
      { label: "2+2", price: "37.00", savings: "Risparmia il 50%" },
    ],
    color: "#A0522D",
  },
];

export function getProductByHandle(handle: string): Product | undefined {
  return products.find((p) => p.handle === handle);
}
