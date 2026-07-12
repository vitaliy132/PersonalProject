import { Craft } from "@/components/savoy-sip/Craft";
import { Hero } from "@/components/savoy-sip/Hero";
import { Menu } from "@/components/savoy-sip/Menu";
import { Origin } from "@/components/savoy-sip/Origin";
import { Space } from "@/components/savoy-sip/Space";
import { Visit } from "@/components/savoy-sip/Visit";

export default function SavoySipPage() {
  return (
    <main>
      <Hero />
      <Craft />
      <Menu />
      <Space />
      <Origin />
      <Visit />
    </main>
  );
}
