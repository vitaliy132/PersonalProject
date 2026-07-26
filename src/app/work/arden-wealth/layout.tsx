import { Figtree, Syne } from "next/font/google";
import { Footer } from "@/components/arden/Footer";
import { Header } from "@/components/arden/Header";
import { PlanningProvider } from "@/components/arden/planning-context";
import { MicrositeShell } from "@/components/microsite/MicrositeShell";
import { ardenSeo } from "@/lib/arden/content";
import { buildMicrositeMetadata } from "@/lib/microsite-metadata";
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

export const metadata = buildMicrositeMetadata(ardenSeo, "Arden Wealth");

export default function ArdenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MicrositeShell
      className={`arden ${syne.variable} ${figtree.variable}`}
      grain
      smoothScroll
    >
      <PlanningProvider>
        <Header />
        {children}
        <Footer />
      </PlanningProvider>
    </MicrositeShell>
  );
}
