import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { CartProvider } from "@/components/forma/cart-context";
import { CartDrawer } from "@/components/forma/CartDrawer";
import { Footer } from "@/components/forma/Footer";
import { FreeShippingBanner } from "@/components/forma/FreeShippingBanner";
import { Header } from "@/components/forma/Header";
import { SearchDialog } from "@/components/forma/SearchDialog";
import "./forma.css";

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FORMA Studio | Premium Everyday Essentials",
  description:
    "Minimal, functional products designed for modern lifestyles.",
  openGraph: {
    title: "FORMA Studio | Premium Everyday Essentials",
    description:
      "Minimal, functional products designed for modern lifestyles.",
    type: "website",
    locale: "en_GB",
    siteName: "FORMA Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "FORMA Studio | Premium Everyday Essentials",
    description:
      "Minimal, functional products designed for modern lifestyles.",
  },
};

export default function FormaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`forma ${space.variable} ${jetbrains.variable}`}>
      <CartProvider>
        <FreeShippingBanner />
        <Header />
        {children}
        <Footer />
        <CartDrawer />
        <SearchDialog />
      </CartProvider>
    </div>
  );
}
