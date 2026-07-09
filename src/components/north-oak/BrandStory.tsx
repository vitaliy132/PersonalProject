import Image from "next/image";
import { Reveal } from "@/components/north-oak/Reveal";
import { northOakImages, northOakValues } from "@/lib/north-oak-content";

export function BrandStory() {
  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className="scroll-mt-24 border-t border-[var(--no-border)] py-24 sm:py-28"
    >
      <div className="no-container">
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <p className="no-eyebrow">Our story</p>
            <h2
              id="story-heading"
              className="font-display mt-4 max-w-2xl text-4xl leading-[1.1] text-[var(--no-espresso)] sm:text-5xl"
            >
              From carefully selected farms to precise roasting profiles, we
              create coffee experiences that connect people through flavour.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-[var(--no-muted)] sm:text-lg">
              North &amp; Oak is a specialty roastery built on patience,
              provenance and craft. We chase clarity in the cup — and a café
              culture that feels warm, considered and quietly luxurious.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 sm:gap-5">
          <Reveal className="relative aspect-[4/3] overflow-hidden bg-[var(--no-beige)] sm:aspect-[5/4]">
            <Image
              src={northOakImages.farm.src}
              alt={northOakImages.farm.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </Reveal>
          <Reveal
            delay={0.08}
            className="relative aspect-[4/3] overflow-hidden bg-[var(--no-beige)] sm:mt-12 sm:aspect-[5/4]"
          >
            <Image
              src={northOakImages.roasting.src}
              alt={northOakImages.roasting.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 border-t border-[var(--no-border)] pt-12 md:grid-cols-3 md:gap-8">
          {northOakValues.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.06}>
              <p className="text-[0.7rem] font-medium tracking-[0.16em] text-[var(--no-green)] uppercase">
                0{index + 1}
              </p>
              <h3 className="font-display mt-3 text-2xl text-[var(--no-espresso)]">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--no-muted)] sm:text-base">
                {value.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
