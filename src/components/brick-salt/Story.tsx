"use client";

import Image from "next/image";
import { brickSaltStory } from "@/lib/brick-salt-content";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "./SplitReveal";

export function Story() {
  return (
    <section
      id={brickSaltStory.id}
      className="relative overflow-hidden bg-[var(--bs-charcoal)] py-24 text-[var(--bs-salt)] sm:py-32 lg:py-36"
      aria-labelledby="story-heading"
    >
      <div className="bs-container">
        <div className="mx-auto max-w-5xl text-center">
          <p className="bs-eyebrow" style={{ color: "#c04f42" }}>
            Food · Fire · Conversation
          </p>
          <SplitReveal
            id="story-heading"
            text={brickSaltStory.headline}
            className="font-display mt-8 text-[clamp(2.6rem,7vw,5.75rem)] leading-[0.95]"
          />
          <Reveal delay={0.15} className="mx-auto mt-10 max-w-2xl">
            <p className="text-base leading-relaxed text-[var(--bs-salt)]/65 sm:text-lg">
              {brickSaltStory.body}
            </p>
          </Reveal>
        </div>

        {/* Magazine filmstrip — not the coffee two-column story */}
        <div className="mt-16 grid gap-3 sm:mt-20 sm:grid-cols-12 sm:gap-4">
          <Reveal className="relative aspect-[4/5] overflow-hidden sm:col-span-5 sm:aspect-auto sm:min-h-[28rem]">
            <Image
              src={brickSaltStory.image.src}
              alt={brickSaltStory.image.alt}
              fill
              sizes="(max-width: 640px) 100vw, 42vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal
            delay={0.1}
            className="relative aspect-[16/10] overflow-hidden sm:col-span-7 sm:aspect-auto sm:min-h-[28rem]"
          >
            <Image
              src={brickSaltStory.secondaryImage.src}
              alt={brickSaltStory.secondaryImage.alt}
              fill
              sizes="(max-width: 640px) 100vw, 58vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--bs-charcoal)]/80 to-transparent p-6 sm:p-8">
              <p className="max-w-md text-sm leading-relaxed text-[var(--bs-salt)]/85">
                Brick walls, open fire, handmade ceramics — a room built for
                long evenings.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
