import { Bodoni_Moda, Sora } from "next/font/google";
import { Footer } from "@/components/savoy-sip/Footer";
import { Header } from "@/components/savoy-sip/Header";
import { MicrositeShell } from "@/components/microsite/MicrositeShell";
import { buildMicrositeMetadata } from "@/lib/microsite-metadata";
import { savoySipSeo } from "@/lib/savoy-sip/content";
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

export const metadata = buildMicrositeMetadata(savoySipSeo, "Savoy Sip");

export default function SavoySipLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MicrositeShell
      className={`savoy-sip ${bodoni.variable} ${sora.variable}`}
      grain
      smoothScroll
    >
      <Header />
      {children}
      <Footer />
    </MicrositeShell>
  );
}
