import Image from "next/image";
import { Reveal } from "@/components/copper-pan/Reveal";
import { copperPanImages } from "@/lib/copper-pan-content";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 border-t border-[var(--cp-border)] bg-[var(--cp-bg-elevated)]/60 py-24 sm:py-28"
    >
      <div className="cp-container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <p className="cp-eyebrow">Our story</p>
            <h2
              id="about-heading"
              className="font-display mt-4 text-4xl leading-[1.1] text-[var(--cp-ink)] sm:text-5xl"
            >
              A neighbourhood table with serious cooking.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--cp-muted)] sm:text-lg">
              The Copper Pan began as a small kitchen with a big copper pan and
              a simple idea: cook what&apos;s in season, serve it with warmth,
              and make every booking feel like a local ritual.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--cp-muted)] sm:text-lg">
              Today we&apos;re still that same corner restaurant — open kitchen,
              candlelight, and a menu that changes with the market.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            <Reveal className="relative aspect-[4/5] overflow-hidden bg-[var(--cp-surface)] sm:aspect-[3/4]">
              <Image
                src={copperPanImages.about.src}
                alt={copperPanImages.about.alt}
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal
              delay={0.08}
              className="relative aspect-[4/5] overflow-hidden bg-[var(--cp-surface)] sm:mt-10 sm:aspect-[3/4]"
            >
              <Image
                src={copperPanImages.dining.src}
                alt={copperPanImages.dining.alt}
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
