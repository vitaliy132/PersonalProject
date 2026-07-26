import { AboutApproach } from "@/components/sections/about/Approach";
import { AboutCta } from "@/components/sections/about/Cta";
import { AboutHero } from "@/components/sections/about/Hero";
import { AboutStory } from "@/components/sections/about/Story";
import { AboutValues } from "@/components/sections/about/Values";
import { AboutWhy } from "@/components/sections/about/Why";

/** Server-friendly shell — section reveals stay in client children. */
export function AboutPage() {
  return (
    <main className="about-page">
      <AboutHero />
      <AboutStory />
      <AboutApproach />
      <AboutWhy />
      <AboutValues />
      <AboutCta />
    </main>
  );
}
