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

type CaseStudyPageProps = {
  project: CaseStudy;
  nextProject: CaseStudy;
};

export function CaseStudyPage({ project, nextProject }: CaseStudyPageProps) {
  const challengeParagraphs = project.challenge.split("\n\n");

  return (
    <main>
      {/* Hero */}
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

            <GsapReveal delay={0.2} y={20}>
              <div className="mt-10">
                <Button href={project.demoHref} className="gap-2">
                  Visit website
                  <ArrowUpRight size={16} />
                </Button>
              </div>
            </GsapReveal>
          </div>
        </div>
      </section>

      {/* Meta */}
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

      {/* Challenge */}
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

      {/* Approach */}
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

      {/* Outcomes */}
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

      {/* Visit */}
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

      {/* Next project */}
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
    </main>
  );
}
