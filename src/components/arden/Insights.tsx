"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { SplitText } from "@/components/arden/motion";
import { usePrefersReducedMotion } from "@/components/motion/usePrefersReducedMotion";
import { ardenInsights } from "@/lib/arden-content";
import { ensureGsap, gsap } from "@/lib/gsap";

ensureGsap();

export function Insights() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reduced) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-insight]", {
        y: 28,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="insights"
      className="py-28 sm:py-32"
      aria-labelledby="insights-heading"
    >
      <div className="aw-container">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="aw-eyebrow">Insights</p>
            <SplitText
              as="h2"
              mode="words"
              className="font-display mt-5 text-[clamp(2.2rem,4.5vw,3.75rem)] text-[var(--aw-ink)]"
            >
              Briefings from the desk
            </SplitText>
          </div>
          <p id="insights-heading" className="max-w-xs text-sm text-[var(--aw-slate)] sm:text-right">
            Market notes and planning perspectives — written for principals, not product desks.
          </p>
        </div>

        <div className="mt-14 border-y border-[var(--aw-border)]">
          {ardenInsights.map((item) => (
            <article
              key={item.title}
              data-insight
              className="aw-insight-row group grid cursor-default gap-3 border-b border-[var(--aw-border)] py-9 last:border-b-0 sm:grid-cols-[7.5rem_1fr_auto] sm:items-center"
            >
              <span className="text-[0.62rem] tracking-[0.2em] text-[var(--aw-verdant)] uppercase">
                {item.tag}
              </span>
              <h3 className="font-display text-[clamp(1.35rem,2.5vw,2rem)] text-[var(--aw-ink)] transition-colors group-hover:text-[var(--aw-verdant)]">
                {item.title}
              </h3>
              <div className="flex items-center gap-4 sm:justify-end">
                <time className="text-sm text-[var(--aw-slate)]">{item.date}</time>
                <ArrowUpRight
                  size={18}
                  className="aw-insight-arrow text-[var(--aw-champagne)]"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
