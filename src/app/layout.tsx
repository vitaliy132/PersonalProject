import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Northline Digital | Websites, SEO & Growth for UK Businesses",
  description:
    "Websites, SEO and digital marketing strategies designed to attract customers, increase conversions and help brands grow online.",
  openGraph: {
    title: "Northline Digital | Websites, SEO & Growth for UK Businesses",
    description:
      "A premium UK digital studio helping SMBs get more customers online through websites, SEO and performance marketing.",
    type: "website",
    locale: "en_GB",
    siteName: "Northline Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Northline Digital | Websites, SEO & Growth for UK Businesses",
    description:
      "Websites, SEO and digital marketing strategies designed to attract customers and grow brands online.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body
        className={`${dmSans.variable} ${syne.variable} atmosphere antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
