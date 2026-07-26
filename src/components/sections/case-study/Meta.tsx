"use client";

import type { CaseStudy } from "@/lib/content";
import { GsapReveal } from "@/components/motion/GsapReveal";

export function CaseStudyMeta({ project }: { project: CaseStudy }) {
  return (
      <section
        aria-label="Project details"
        className="section-pad border-b border-border"
      >
        <div className="container-nl">
          <dl className="divide-y divide-border border-y border-border">
            <GsapReveal y={28}>
              <div className="grid gap-3 py-8 sm:grid-cols-[10rem_1fr] sm:gap-10">
                <dt className="text-[0.7rem] tracking-[0.2em] text-accent-strong uppercase">
                  Role
                </dt>
                <dd className="text-base text-off-white sm:text-lg">
                  {project.role}
                </dd>
              </div>
            </GsapReveal>

            <GsapReveal delay={0.06} y={28}>
              <div className="grid gap-3 py-8 sm:grid-cols-[10rem_1fr] sm:gap-10">
                <dt className="text-[0.7rem] tracking-[0.2em] text-accent-strong uppercase">
                  Deliverables
                </dt>
                <dd>
                  <ul className="flex flex-wrap gap-x-6 gap-y-2">
                    {project.deliverables.map((item) => (
                      <li
                        key={item}
                        className="text-base text-stone-light sm:text-lg"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </GsapReveal>

            <GsapReveal delay={0.12} y={28}>
              <div className="grid gap-3 py-8 sm:grid-cols-[10rem_1fr] sm:gap-10">
                <dt className="text-[0.7rem] tracking-[0.2em] text-accent-strong uppercase">
                  Stack
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border px-2.5 py-1 text-[0.7rem] tracking-wide text-stone-light"
                    >
                      {tag}
                    </span>
                  ))}
                </dd>
              </div>
            </GsapReveal>
          </dl>
        </div>
      </section>
  );
}
