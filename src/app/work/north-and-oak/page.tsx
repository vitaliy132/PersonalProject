import { BrandStory } from "@/components/north-oak/BrandStory";
import { Cafe } from "@/components/north-oak/Cafe";
import { Collection } from "@/components/north-oak/Collection";
import { Experience } from "@/components/north-oak/Experience";
import { Hero } from "@/components/north-oak/Hero";
import { Newsletter } from "@/components/north-oak/Newsletter";
import { Sustainability } from "@/components/north-oak/Sustainability";
import { Testimonials } from "@/components/north-oak/Testimonials";

export default function NorthAndOakPage() {
  return (
    <main>
      <Hero />
      <BrandStory />
      <Collection />
      <Experience />
      <Cafe />
      <Sustainability />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
