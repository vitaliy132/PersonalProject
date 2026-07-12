import { Approach } from "@/components/arden/Approach";
import { Capabilities } from "@/components/arden/Capabilities";
import { Cta } from "@/components/arden/Cta";
import { Hero } from "@/components/arden/Hero";
import { Insights } from "@/components/arden/Insights";
import { Philosophy } from "@/components/arden/Philosophy";
import { PlatformPreview } from "@/components/arden/PlatformPreview";

export default function ArdenWealthPage() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <Capabilities />
      <Approach />
      <PlatformPreview />
      <Insights />
      <Cta />
    </main>
  );
}
