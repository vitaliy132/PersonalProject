"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { GsapReveal } from "@/components/motion/GsapReveal";

export function CaseStudyVisit({ project }: { project: CaseStudy }) {
  return (
      <section
        aria-labelledby="visit-heading"
        className="section-pad border-b border-border"
      >
        <div className="container-nl max-w-3xl">
          <GsapReveal>
            <p className="text-[0.7rem] tracking-[0.24em] text-accent-strong uppercase">
              Live demo
            </p>
            <h2
              id="visit-heading"
              className="mt-4 font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-tight text-off-white"
            >
              Explore the live site
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-light sm:text-lg">
              {project.closing}
            </p>
          </GsapReveal>

          <GsapReveal delay={0.1} y={24}>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button href={project.demoHref} className="gap-2">
                Explore the live site
                <ArrowUpRight size={16} />
              </Button>
              <Link
                href="/#work"
                className="text-[0.75rem] tracking-[0.16em] text-stone uppercase transition-colors hover:text-accent-strong"
                data-cursor="hover"
              >
                Back to work
              </Link>
            </div>
          </GsapReveal>
        </div>
      </section>
  );
}
