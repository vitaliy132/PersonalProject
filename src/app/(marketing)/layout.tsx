import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { Preloader } from "@/components/motion/Preloader";
import { PageTransition } from "@/components/motion/PageTransition";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScroll>
      <Preloader />
      <CustomCursor />
      <div className="grain" aria-hidden />
      <Header />
      <PageTransition>{children}</PageTransition>
      <Footer />
    </SmoothScroll>
  );
}
