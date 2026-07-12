"use client";

import { process as steps } from "@/lib/content";
import { GsapReveal } from "@/components/motion/GsapReveal";

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="section-pad scroll-mt-24 border-t border-border"
    >
      <div className="container-nl">
        <GsapReveal>
          <p className="text-[0.7rem] tracking-[0.24em] text-accent-strong uppercase">
            Process
          </p>
          <h2
            id="process-heading"
            className="mt-4 max-w-2xl font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-tight text-off-white"
          >
            How we work
          </h2>
        </GsapReveal>

        <ol className="mt-14 divide-y divide-border border-y border-border">
          {steps.map((step, index) => (
            <GsapReveal key={step.step} delay={index * 0.06} y={28}>
              <li className="grid gap-4 py-8 sm:grid-cols-[6rem_1fr_1.2fr] sm:items-baseline sm:gap-8">
                <span className="font-display text-sm tracking-[0.2em] text-accent-strong">
                  {step.step}
                </span>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-off-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-stone-light sm:text-base">
                  {step.description}
                </p>
              </li>
            </GsapReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
