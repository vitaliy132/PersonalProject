import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { CartProvider } from "@/components/forma/cart-context";
import { CartDrawer } from "@/components/forma/CartDrawer";
import { Footer } from "@/components/forma/Footer";
import { FreeShippingBanner } from "@/components/forma/FreeShippingBanner";
import { Header } from "@/components/forma/Header";
import { SearchDialog } from "@/components/forma/SearchDialog";
import { MicrositeShell } from "@/components/microsite/MicrositeShell";
import { formaSeo } from "@/lib/forma/content";
import { buildMicrositeMetadata } from "@/lib/microsite-metadata";
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

export const metadata = buildMicrositeMetadata(formaSeo);

export default function FormaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MicrositeShell className={`forma ${space.variable} ${jetbrains.variable}`}>
      <CartProvider>
        <FreeShippingBanner />
        <Header />
        {children}
        <Footer />
        <CartDrawer />
        <SearchDialog />
      </CartProvider>
    </MicrositeShell>
  );
}
