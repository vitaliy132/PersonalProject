import { BrandStory } from "@/components/forma/BrandStory";
import { Community } from "@/components/forma/Community";
import { FeaturedProducts } from "@/components/forma/FeaturedProducts";
import { Hero } from "@/components/forma/Hero";
import { LimitedEdition } from "@/components/forma/LimitedEdition";
import { Marquee } from "@/components/forma/Marquee";
import { Newsletter } from "@/components/forma/Newsletter";
import { Reviews } from "@/components/forma/Reviews";
import { WhyChooseUs } from "@/components/forma/WhyChooseUs";

export default function FormaStudioPage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <FeaturedProducts />
      <LimitedEdition />
      <BrandStory />
      <WhyChooseUs />
      <Reviews />
      <Community />
      <Newsletter />
    </main>
  );
}
