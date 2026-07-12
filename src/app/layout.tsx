import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Northline Digital | Creative Digital Agency — Leeds, UK",
  description:
    "A modern digital agency based in Leeds. We help ambitious businesses build strong brands, high-performing websites, e-commerce experiences and digital marketing strategies.",
  openGraph: {
    title: "Northline Digital | Creative Digital Agency — Leeds, UK",
    description:
      "Northern creativity. Digital experiences built to move businesses forward. Based in Leeds, working across the UK.",
    type: "website",
    locale: "en_GB",
    siteName: "Northline Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Northline Digital | Creative Digital Agency — Leeds, UK",
    description:
      "Northern creativity. Digital experiences built to move businesses forward.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${spaceGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}
