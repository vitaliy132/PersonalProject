"use client";

import { aboutPage } from "@/lib/content";
import { GsapReveal } from "@/components/motion/GsapReveal";

export function AboutValues() {
  const { values } = aboutPage;

  return (
      <section
        aria-labelledby="about-values-heading"
        className="about-band border-b border-border py-20 sm:py-28"
      >
        <div className="container-nl">
          <GsapReveal>
            <p className="text-[0.7rem] tracking-[0.24em] text-accent-strong uppercase">
              {values.eyebrow}
            </p>
            <h2
              id="about-values-heading"
              className="mt-4 max-w-2xl font-display text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold tracking-tight text-off-white"
            >
              {values.title}
            </h2>
          </GsapReveal>

          <ul className="mt-14 grid border-y border-border lg:grid-cols-3">
            {values.items.map((item, index) => (
              <GsapReveal key={item.title} delay={0.05 * index} className="h-full">
                <li
                  className={[
                    "flex h-full flex-col px-0 py-8 lg:px-8 lg:py-12",
                    index > 0
                      ? "border-t border-border lg:border-t-0 lg:border-l"
                      : "",
                  ].join(" ")}
                >
                  <h3 className="font-display text-[clamp(1.35rem,2.2vw,1.75rem)] font-semibold tracking-tight text-off-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone-light">
                    {item.description}
                  </p>
                </li>
              </GsapReveal>
            ))}
          </ul>
        </div>
      </section>
  );
}
