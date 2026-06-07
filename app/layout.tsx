import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kim Patches – Cerotti Transdermici Naturali",
  description:
    "Scopri i cerotti transdermici Kim Patches: soluzioni naturali per metabolismo, sonno, anti-età, drenaggio e benessere. Formula innovativa, risultati visibili.",
  keywords: "cerotti transdermici, Kim Patches, berberina, collagene, sonno, metabolismo, naturale",
  openGraph: {
    title: "Kim Patches – Cerotti Transdermici Naturali",
    description: "Il benessere quotidiano in un cerotto.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={geist.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
