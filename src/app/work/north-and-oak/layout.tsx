import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Footer } from "@/components/north-oak/Footer";
import { Header } from "@/components/north-oak/Header";
import "./north-oak.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "North & Oak Coffee | Specialty Coffee Roastery",
  description:
    "Premium specialty coffee roasted with care and sourced from exceptional farms.",
  openGraph: {
    title: "North & Oak Coffee | Specialty Coffee Roastery",
    description:
      "Premium specialty coffee roasted with care and sourced from exceptional farms.",
    type: "website",
    locale: "en_GB",
    siteName: "North & Oak Coffee",
  },
  twitter: {
    card: "summary_large_image",
    title: "North & Oak Coffee | Specialty Coffee Roastery",
    description:
      "Premium specialty coffee roasted with care and sourced from exceptional farms.",
  },
};

export default function NorthOakLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`north-oak ${cormorant.variable} ${outfit.variable}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
