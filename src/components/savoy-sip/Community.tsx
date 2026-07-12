"use client";

import Image from "next/image";
import { savoyCommunity } from "@/lib/savoy-sip-content";
import { Reveal } from "./Reveal";
import { SplitReveal } from "./SplitReveal";

export function Community() {
  return (
    <section
      id={savoyCommunity.id}
      className="bg-[var(--ss-ivory)] py-24 sm:py-32 lg:py-40"
      aria-labelledby="community-heading"
    >
      <div className="ss-container grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:items-center">
        <div>
          <p className="ss-eyebrow">Community</p>
          <SplitReveal
            id="community-heading"
            text={savoyCommunity.headline}
            className="font-display mt-6 text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.05] text-[var(--ss-black)]"
          />
          <Reveal className="mt-6 max-w-lg">
            <p className="text-base leading-relaxed text-[var(--ss-stone)] sm:text-lg">
              {savoyCommunity.intro}
            </p>
          </Reveal>

          <ul className="mt-12 space-y-8 border-t border-[var(--ss-border)] pt-10">
            {savoyCommunity.items.map((item, i) => (
              <Reveal key={item.title} delay={0.05 * i}>
                <li className="grid gap-2 sm:grid-cols-[11rem_1fr] sm:gap-8">
                  <h3 className="text-[0.75rem] font-medium uppercase tracking-[0.16em] text-[var(--ss-olive)]">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-[var(--ss-stone)]">
                    {item.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.1}>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={savoyCommunity.image.src}
              alt={savoyCommunity.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
