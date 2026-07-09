import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { BookingModal } from "@/components/copper-pan/BookingModal";
import { BookingProvider } from "@/components/copper-pan/booking-context";
import { Footer } from "@/components/copper-pan/Footer";
import { Header } from "@/components/copper-pan/Header";
import "./copper-pan.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Copper Pan | Neighbourhood Restaurant",
  description:
    "Seasonal British cooking in North London. Book a table for lunch or dinner at The Copper Pan.",
  openGraph: {
    title: "The Copper Pan | Neighbourhood Restaurant",
    description:
      "Seasonal British cooking in North London. Book a table for lunch or dinner at The Copper Pan.",
    type: "website",
    locale: "en_GB",
    siteName: "The Copper Pan",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Copper Pan | Neighbourhood Restaurant",
    description:
      "Seasonal British cooking in North London. Book a table for lunch or dinner at The Copper Pan.",
  },
};

export default function CopperPanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`copper-pan ${fraunces.variable} ${manrope.variable}`}>
      <BookingProvider>
        <Header />
        {children}
        <Footer />
        <BookingModal />
      </BookingProvider>
    </div>
  );
}
