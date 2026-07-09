import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyUs } from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <WhyUs />
      <Process />
      <Testimonials />
      <Pricing />
      <Faq />
      <FinalCta />
    </main>
  );
}
