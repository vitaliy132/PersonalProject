import type { Metadata } from "next";
import { Bodoni_Moda, Sora } from "next/font/google";
import { Footer } from "@/components/savoy-sip/Footer";
import { Header } from "@/components/savoy-sip/Header";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { savoySipSeo } from "@/lib/savoy-sip-content";
import "./savoy-sip.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: savoySipSeo.title,
  description: savoySipSeo.description,
  openGraph: {
    title: savoySipSeo.title,
    description: savoySipSeo.description,
    type: "website",
    locale: "en_GB",
    siteName: "Savoy Sip",
  },
  twitter: {
    card: "summary_large_image",
    title: savoySipSeo.title,
    description: savoySipSeo.description,
  },
};

export default function SavoySipLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScroll>
      <div className={`savoy-sip ${bodoni.variable} ${sora.variable}`}>
        <div className="ss-grain" aria-hidden />
        <Header />
        {children}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
