import { About } from "@/components/copper-pan/About";
import { Hero } from "@/components/copper-pan/Hero";
import { Menu } from "@/components/copper-pan/Menu";
import { Visit } from "@/components/copper-pan/Visit";

export default function CopperPanPage() {
  return (
    <main>
      <Hero />
      <Menu />
      <About />
      <Visit />
    </main>
  );
}
