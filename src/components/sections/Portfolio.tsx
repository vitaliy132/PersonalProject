import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies } from "@/lib/content";

export function Portfolio() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-24 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <SectionHeading
            id="work-heading"
            eyebrow="Selected work"
            title="Case studies that show the growth story"
            description="Example projects illustrating how strategy, design and marketing come together. Metrics below are illustrative placeholders."
          />
        </FadeIn>

        <div className="mt-12 space-y-6">
          {caseStudies.map((study, index) => (
            <FadeIn key={study.id} delay={index * 0.05}>
              <GlassCard className="overflow-hidden !p-0" hover={false}>
                <div className="grid lg:grid-cols-[1fr_1.1fr]">
                  <div className="border-b border-border bg-gradient-to-br from-accent/10 via-transparent to-success/5 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                      {study.industry}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
                      {study.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted">{study.summary}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {"href" in study && study.href ? (
                      <Button
                        href={study.href}
                        variant="secondary"
                        className="mt-8"
                      >
                        View live site
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </Button>
                    ) : null}
                  </div>

                  <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-3">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                        Problem
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-text/90">
                        {study.problem}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                        Solution
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-text/90">
                        {study.solution}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                        Example results
                      </p>
                      <ul className="mt-3 space-y-3">
                        {study.results.map((result) => (
                          <li key={result.label}>
                            <p className="font-display text-xl font-semibold text-accent">
                              {result.value}
                            </p>
                            <p className="text-xs text-muted">{result.label}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
