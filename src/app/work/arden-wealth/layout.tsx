import type { Metadata } from "next";
import { Figtree, Syne } from "next/font/google";
import { Footer } from "@/components/arden/Footer";
import { Header } from "@/components/arden/Header";
import { PlanningProvider } from "@/components/arden/planning-context";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { ardenSeo } from "@/lib/arden-content";
import "./arden.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: ardenSeo.title,
  description: ardenSeo.description,
  openGraph: {
    title: ardenSeo.title,
    description: ardenSeo.description,
    type: "website",
    locale: "en_GB",
    siteName: "Arden Wealth",
  },
  twitter: {
    card: "summary_large_image",
    title: ardenSeo.title,
    description: ardenSeo.description,
  },
};

export default function ArdenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScroll>
      <div className={`arden ${syne.variable} ${figtree.variable}`}>
        <div className="aw-grain" aria-hidden />
        <PlanningProvider>
          <Header />
          {children}
          <Footer />
        </PlanningProvider>
      </div>
    </SmoothScroll>
  );
}
