import { BrandStory } from "@/components/savoy-sip/BrandStory";
import { CoffeeExperience } from "@/components/savoy-sip/CoffeeExperience";
import { Community } from "@/components/savoy-sip/Community";
import { Gallery } from "@/components/savoy-sip/Gallery";
import { Hero } from "@/components/savoy-sip/Hero";
import { Location } from "@/components/savoy-sip/Location";
import { Menu } from "@/components/savoy-sip/Menu";
import { Products } from "@/components/savoy-sip/Products";
import { Roastery } from "@/components/savoy-sip/Roastery";

export default function SavoySipPage() {
  return (
    <main>
      <Hero />
      <BrandStory />
      <CoffeeExperience />
      <Menu />
      <Roastery />
      <Gallery />
      <Community />
      <Products />
      <Location />
    </main>
  );
}
