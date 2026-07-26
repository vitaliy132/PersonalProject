"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/content";
import { GsapReveal } from "@/components/motion/GsapReveal";

export function CaseStudyNext({ nextProject }: { nextProject: CaseStudy }) {
  return (
      <section
        aria-labelledby="next-heading"
        className="section-pad border-b border-border"
      >
        <div className="container-nl">
          <GsapReveal>
            <p className="text-[0.7rem] tracking-[0.24em] text-accent-strong uppercase">
              Next project
            </p>
            <Link
              href={nextProject.href}
              className="group mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
              data-cursor="hover"
            >
              <div>
                <p className="text-[0.7rem] tracking-[0.18em] text-stone uppercase">
                  {nextProject.category}
                </p>
                <h2
                  id="next-heading"
                  className="mt-3 font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight text-off-white transition-colors group-hover:text-accent-strong"
                >
                  {nextProject.title}
                </h2>
              </div>
              <span className="inline-flex items-center gap-2 text-[0.75rem] tracking-[0.16em] text-stone-light uppercase transition-colors group-hover:text-accent-strong">
                View case study
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </GsapReveal>
        </div>
      </section>
  );
}
