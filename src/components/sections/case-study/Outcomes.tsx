"use client";

import type { CaseStudy } from "@/lib/content";
import { GsapReveal } from "@/components/motion/GsapReveal";

export function CaseStudyOutcomes({ project }: { project: CaseStudy }) {
  return (
      <section
        aria-labelledby="outcomes-heading"
        className="section-pad border-b border-border"
      >
        <div className="container-nl">
          <GsapReveal>
            <p className="text-[0.7rem] tracking-[0.24em] text-accent-strong uppercase">
              Outcomes
            </p>
            <h2
              id="outcomes-heading"
              className="mt-4 max-w-2xl font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-tight text-off-white"
            >
              What shipped
            </h2>
          </GsapReveal>

          <ul className="mt-14 space-y-0 divide-y divide-border border-y border-border">
            {project.outcomes.map((outcome, index) => (
              <GsapReveal key={outcome} delay={index * 0.06} y={24}>
                <li className="flex gap-5 py-7 sm:gap-8">
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-strong"
                    aria-hidden
                  />
                  <p className="text-base leading-relaxed text-off-white sm:text-lg">
                    {outcome}
                  </p>
                </li>
              </GsapReveal>
            ))}
          </ul>
        </div>
      </section>
  );
}
