import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Footer } from "@/components/savoy-sip/Footer";
import { Header } from "@/components/savoy-sip/Header";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { savoySeo } from "@/lib/savoy-sip-content";
import "./savoy-sip.css";

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
  title: savoySeo.title,
  description: savoySeo.description,
  openGraph: {
    title: savoySeo.title,
    description: savoySeo.description,
    type: "website",
    locale: "en_GB",
    siteName: "The Savoy Sip",
  },
  twitter: {
    card: "summary_large_image",
    title: savoySeo.title,
    description: savoySeo.description,
  },
};

export default function SavoySipLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScroll>
      <div className={`savoy-sip ${cormorant.variable} ${outfit.variable}`}>
        <div className="ss-grain" aria-hidden />
        <Header />
        {children}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
