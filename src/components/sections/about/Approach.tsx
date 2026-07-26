"use client";

import { aboutPage } from "@/lib/content";
import { GsapReveal } from "@/components/motion/GsapReveal";

export function AboutApproach() {
  const { approach } = aboutPage;

  return (
      <section
        aria-labelledby="about-approach-heading"
        className="about-band border-b border-border py-20 sm:py-28"
      >
        <div className="container-nl">
          <GsapReveal>
            <p className="text-[0.7rem] tracking-[0.24em] text-accent-strong uppercase">
              {approach.eyebrow}
            </p>
            <h2
              id="about-approach-heading"
              className="mt-4 max-w-2xl font-display text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold tracking-tight text-off-white"
            >
              {approach.title}
            </h2>
          </GsapReveal>

          <ol className="mt-14 hidden border-y border-border lg:grid lg:grid-cols-4">
            {approach.steps.map((step, index) => (
              <GsapReveal key={step.step} delay={0.05 * index} className="h-full">
                <li
                  className={[
                    "flex h-full flex-col px-6 py-10",
                    index > 0 ? "border-l border-border" : "",
                  ].join(" ")}
                >
                  <span className="font-display text-sm tracking-[0.2em] text-accent-strong">
                    {step.step}
                  </span>
                  <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight text-off-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-stone-light">
                    {step.description}
                  </p>
                </li>
              </GsapReveal>
            ))}
          </ol>

          <div className="mt-12 lg:hidden">
            <ol className="flex snap-x snap-mandatory overflow-x-auto border-y border-border [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {approach.steps.map((step, index) => (
                <li
                  key={step.step}
                  className={[
                    "w-[80%] shrink-0 snap-start px-5 py-8 sm:w-[52%]",
                    index > 0 ? "border-l border-border" : "",
                  ].join(" ")}
                >
                  <span className="font-display text-sm tracking-[0.2em] text-accent-strong">
                    {step.step}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-off-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-light">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
  );
}
