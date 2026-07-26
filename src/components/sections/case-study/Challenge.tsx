"use client";

import type { CaseStudy } from "@/lib/content";
import { GsapReveal } from "@/components/motion/GsapReveal";

export function CaseStudyChallenge({ project }: { project: CaseStudy }) {
  const challengeParagraphs = project.challenge.split("\n\n");

  return (
      <section
        aria-labelledby="challenge-heading"
        className="section-pad border-b border-border"
      >
        <div className="container-nl max-w-3xl">
          <GsapReveal>
            <p className="text-[0.7rem] tracking-[0.24em] text-accent-strong uppercase">
              Challenge
            </p>
            <h2
              id="challenge-heading"
              className="mt-4 font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-tight text-off-white"
            >
              What we set out to solve
            </h2>
          </GsapReveal>

          <div className="mt-10 space-y-6">
            {challengeParagraphs.map((paragraph, index) => (
              <GsapReveal key={paragraph.slice(0, 24)} delay={index * 0.06} y={28}>
                <p className="text-base leading-relaxed text-stone-light sm:text-lg">
                  {paragraph}
                </p>
              </GsapReveal>
            ))}
          </div>
        </div>
      </section>
  );
}
