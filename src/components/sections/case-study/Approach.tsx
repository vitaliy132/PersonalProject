"use client";

import type { CaseStudy } from "@/lib/content";
import { GsapReveal } from "@/components/motion/GsapReveal";

export function CaseStudyApproach({ project }: { project: CaseStudy }) {
  return (
      <section
        aria-labelledby="approach-heading"
        className="section-pad border-b border-border"
      >
        <div className="container-nl">
          <GsapReveal>
            <p className="text-[0.7rem] tracking-[0.24em] text-accent-strong uppercase">
              Approach
            </p>
            <h2
              id="approach-heading"
              className="mt-4 max-w-2xl font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-tight text-off-white"
            >
              How we built it
            </h2>
          </GsapReveal>

          <ol className="mt-14 divide-y divide-border border-y border-border">
            {project.approach.map((step, index) => (
              <GsapReveal key={step.title} delay={index * 0.06} y={28}>
                <li className="grid gap-4 py-8 sm:grid-cols-[6rem_1fr_1.2fr] sm:items-baseline sm:gap-8">
                  <span className="font-display text-sm tracking-[0.2em] text-accent-strong">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-off-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-stone-light sm:text-base">
                    {step.body}
                  </p>
                </li>
              </GsapReveal>
            ))}
          </ol>
        </div>
      </section>
  );
}
