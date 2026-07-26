"use client";

import { aboutPage } from "@/lib/content";
import { GsapReveal } from "@/components/motion/GsapReveal";

export function AboutWhy() {
  const { why } = aboutPage;

  return (
      <section
        aria-labelledby="about-why-heading"
        className="border-b border-border py-20 sm:py-28"
      >
        <div className="container-nl">
          <GsapReveal>
            <p className="text-[0.7rem] tracking-[0.24em] text-accent-strong uppercase">
              {why.eyebrow}
            </p>
            <h2
              id="about-why-heading"
              className="mt-4 max-w-2xl font-display text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold tracking-tight text-off-white"
            >
              {why.title}
            </h2>
          </GsapReveal>

          <ul className="mt-14 border-t border-border">
            {why.points.map((point, index) => (
              <GsapReveal key={point.title} delay={0.05 * index}>
                <li className="grid gap-3 border-b border-border py-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-baseline lg:gap-12 lg:py-10">
                  <h3 className="font-display text-[clamp(1.35rem,2.5vw,1.85rem)] font-semibold tracking-tight text-off-white">
                    {point.title}
                  </h3>
                  <p className="max-w-xl text-sm leading-relaxed text-stone-light sm:text-base">
                    {point.description}
                  </p>
                </li>
              </GsapReveal>
            ))}
          </ul>
        </div>
      </section>
  );
}
