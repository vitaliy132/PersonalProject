"use client";

import { useEffect, useRef } from "react";
import { PinSection, SplitText } from "@/components/arden/motion";
import { usePrefersReducedMotion } from "@/components/motion/usePrefersReducedMotion";
import { ardenApproach } from "@/lib/arden-content";
import { ensureGsap, gsap } from "@/lib/gsap";

ensureGsap();

export function Approach() {
  const progressRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = progressRef.current;
    if (!el || reduced) return;

    const section = el.closest("[data-approach-root]");
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=280%",
            scrub: true,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="approach" data-approach-root aria-label="Approach">
      <PinSection
        pinType="vertical"
        end="+=280%"
        className="bg-[linear-gradient(180deg,var(--aw-mist)_0%,var(--aw-panel)_50%,var(--aw-mist)_100%)]"
      >
        <div className="aw-container absolute inset-0 flex flex-col justify-center py-24">
          <div className="relative grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="aw-eyebrow">Approach</p>
              <SplitText
                as="h2"
                mode="words"
                className="font-display mt-5 max-w-md text-[clamp(2.4rem,5vw,4.25rem)] text-[var(--aw-ink)]"
              >
                The wealth journey
              </SplitText>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-[var(--aw-slate)]">
                Four movements from discovery to stewardship — paced for clarity, not haste.
              </p>

              <div className="relative mt-14 ml-1 hidden h-48 lg:block">
                <div className="aw-progress-rail h-full origin-top" />
                <div
                  ref={progressRef}
                  className="absolute top-0 left-0 h-full w-px origin-top bg-[var(--aw-verdant)]"
                  style={{ transform: "scaleY(0)" }}
                />
                {ardenApproach.map((step, i) => (
                  <div
                    key={step.step}
                    className="aw-progress-dot"
                    style={{ top: `${(i / (ardenApproach.length - 1)) * 100}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="relative min-h-[18rem]">
              {ardenApproach.map((step) => (
                <div
                  key={step.step}
                  data-pin-panel
                  className="absolute inset-x-0 top-0"
                >
                  <p className="font-display text-[clamp(5rem,14vw,9rem)] leading-none text-[var(--aw-verdant)]/[0.12]">
                    {step.step}
                  </p>
                  <h3 className="font-display -mt-4 text-[clamp(2.25rem,4vw,3.75rem)] text-[var(--aw-ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-5 max-w-md text-base leading-[1.7] text-[var(--aw-slate)] sm:text-lg">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PinSection>
    </section>
  );
}
