import { Chef } from "@/components/brick-salt/Chef";
import { Drinks } from "@/components/brick-salt/Drinks";
import { Gallery } from "@/components/brick-salt/Gallery";
import { Hero } from "@/components/brick-salt/Hero";
import { Location } from "@/components/brick-salt/Location";
import { Marquee } from "@/components/brick-salt/Marquee";
import { Menu } from "@/components/brick-salt/Menu";
import { Reservation } from "@/components/brick-salt/Reservation";
import { Seasonal } from "@/components/brick-salt/Seasonal";
import { Story } from "@/components/brick-salt/Story";

export default function BrickSaltPage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Story />
      <Menu />
      <Chef />
      <Gallery />
      <Seasonal />
      <Drinks />
      <Reservation />
      <Location />
    </main>
  );
}
