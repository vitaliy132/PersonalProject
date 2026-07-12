"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { GsapReveal } from "@/components/motion/GsapReveal";

const toneOverlay = {
  oak: "from-[#0a1a26]/90 via-[#0a1a26]/55 to-[#0f0e0c]/80",
  forma: "from-[#0f0e0c]/90 via-[#12161e]/55 to-[#0f0e0c]/80",
  brick: "from-black/90 via-[#1c1410]/55 to-[#0f0e0c]/80",
  stone: "from-black/90 via-[#181816]/55 to-[#0f0e0c]/80",
} as const;

type CaseStudyIntroProps = {
  project: CaseStudy;
};

export function CaseStudyIntro({ project }: CaseStudyIntroProps) {
  return (
    <main>
      <section className="relative min-h-[100svh] overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className={[
              "absolute inset-0 bg-gradient-to-br",
              toneOverlay[project.tone],
            ].join(" ")}
          />
          {project.id === "wealth" ? (
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_15%,rgba(42,99,70,0.22),transparent_55%)]" />
          ) : null}
        </div>

        <div className="relative z-10 flex min-h-[100svh] flex-col justify-end section-pad pb-16 pt-28 sm:pb-20 sm:pt-32">
          <div className="container-nl max-w-3xl">
            <GsapReveal y={24}>
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 text-[0.75rem] tracking-[0.16em] text-off-white/70 uppercase transition-colors hover:text-accent-strong"
                data-cursor="hover"
              >
                <ArrowLeft size={14} />
                Back to work
              </Link>
            </GsapReveal>

            <GsapReveal delay={0.06} y={32}>
              <p className="mt-8 text-[0.7rem] tracking-[0.24em] text-accent-strong uppercase">
                {project.category}
              </p>
              <h1 className="mt-4 font-display text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[0.95] tracking-tight text-off-white">
                {project.title}
              </h1>
            </GsapReveal>

            <GsapReveal delay={0.12} y={28}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-light sm:text-lg">
                {project.brief}
              </p>
            </GsapReveal>

            <GsapReveal delay={0.18} y={24}>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {project.deliverables.map((item) => (
                  <li
                    key={item}
                    className="text-[0.8rem] tracking-wide text-off-white/75"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </GsapReveal>

            <GsapReveal delay={0.22} y={20}>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/15 px-2.5 py-1 text-[0.7rem] tracking-wide text-stone-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GsapReveal>

            <GsapReveal delay={0.28} y={20}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href={project.demoHref} className="gap-2">
                  Visit website
                  <ArrowUpRight size={16} />
                </Button>
              </div>
            </GsapReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
