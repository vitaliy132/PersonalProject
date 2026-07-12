import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { BookingModal } from "@/components/brick-salt/booking/BookingModal";
import { BookingProvider } from "@/components/brick-salt/booking-context";
import { Footer } from "@/components/brick-salt/Footer";
import { Header } from "@/components/brick-salt/Header";
import { MicrositeShell } from "@/components/microsite/MicrositeShell";
import { brickSaltSeo } from "@/lib/brick-salt-content";
import "./brick-salt.css";

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
  title: brickSaltSeo.title,
  description: brickSaltSeo.description,
  openGraph: {
    title: brickSaltSeo.title,
    description: brickSaltSeo.description,
    type: "website",
    locale: "en_GB",
    siteName: "BRICK & SALT",
  },
  twitter: {
    card: "summary_large_image",
    title: brickSaltSeo.title,
    description: brickSaltSeo.description,
  },
};

export default function BrickSaltLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MicrositeShell
      className={`brick-salt ${fraunces.variable} ${manrope.variable}`}
      grain
      smoothScroll
    >
      <BookingProvider>
        <Header />
        {children}
        <Footer />
        <BookingModal />
      </BookingProvider>
    </MicrositeShell>
  );
}
