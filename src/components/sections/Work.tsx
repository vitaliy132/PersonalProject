"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/content";
import { GsapReveal } from "@/components/motion/GsapReveal";

const toneMap = {
  oak: "from-[#2a2118] via-[#1a1612] to-[#0f0e0c]",
  copper: "from-[#3a2418] via-[#1c1410] to-[#0f0e0c]",
  forma: "from-[#1a2230] via-[#12161e] to-[#0f0e0c]",
  stone: "from-[#2a2a26] via-[#181816] to-[#0f0e0c]",
} as const;

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="section-pad scroll-mt-24 border-t border-border"
    >
      <div className="container-nl">
        <GsapReveal>
          <p className="text-[0.7rem] tracking-[0.24em] text-accent-strong uppercase">
            Selected work
          </p>
          <h2
            id="work-heading"
            className="mt-4 max-w-2xl font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-tight text-off-white"
          >
            Projects that move brands forward
          </h2>
        </GsapReveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((project, index) => {
            const CardInner = (
              <article
                className="group relative overflow-hidden border border-border bg-bg-elevated"
                data-cursor="hover"
              >
                <div
                  className={[
                    "relative aspect-[16/11] overflow-hidden bg-gradient-to-br transition-transform duration-700 ease-out group-hover:scale-[1.03]",
                    toneMap[project.tone],
                  ].join(" ")}
                >
                  {"image" in project && project.image ? (
                    <>
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div
                        className={[
                          "absolute inset-0 bg-gradient-to-t via-transparent to-transparent",
                          project.id === "wealth"
                            ? "from-[#0a1a26]/85 via-[#0a1a26]/35"
                            : project.id === "fashion"
                              ? "from-[#0f0e0c]/85 via-[#0f0e0c]/40"
                              : "from-black/80 via-black/35",
                        ].join(" ")}
                      />
                      {project.id === "wealth" ? (
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(42,99,70,0.28),transparent_50%)]" />
                      ) : null}
                    </>
                  ) : (
                    <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(circle_at_30%_20%,rgba(244,242,238,0.25),transparent_45%)]" />
                  )}
                  <div className="absolute inset-0 flex items-end p-6 sm:p-8">
                    <p className="font-display text-3xl font-semibold tracking-tight text-off-white/90 sm:text-4xl">
                      {project.title}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-5 p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.7rem] tracking-[0.18em] text-accent-strong uppercase">
                        {project.category}
                      </p>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-light">
                        {project.description}
                      </p>
                    </div>
                    {project.href ? (
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-border text-off-white transition-colors group-hover:border-accent-strong group-hover:text-accent-strong">
                        <ArrowUpRight size={18} />
                      </span>
                    ) : (
                      <span className="text-[0.7rem] tracking-[0.16em] text-stone uppercase">
                        Soon
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="border border-border px-2.5 py-1 text-[0.7rem] tracking-wide text-stone"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.href ? (
                    <span className="text-[0.75rem] tracking-[0.16em] text-off-white uppercase transition-colors group-hover:text-accent-strong">
                      View project
                    </span>
                  ) : null}
                </div>
              </article>
            );

            return (
              <GsapReveal key={project.id} delay={index * 0.06} y={40}>
                {project.href ? (
                  <Link href={project.href} className="block">
                    {CardInner}
                  </Link>
                ) : (
                  CardInner
                )}
              </GsapReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
