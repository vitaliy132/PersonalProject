"use client";

import { useEffect, useRef } from "react";
import { intro } from "@/lib/content";
import { GsapReveal } from "@/components/motion/GsapReveal";
import { usePrefersReducedMotion } from "@/components/motion/usePrefersReducedMotion";
import { ensureGsap, gsap } from "@/lib/gsap";

ensureGsap();

export function Intro() {
  const statsRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const root = statsRef.current;
    if (!root || reduced) return;

    const ctx = gsap.context(() => {
      const numbers = root.querySelectorAll<HTMLElement>("[data-count]");
      numbers.forEach((node) => {
        const target = Number(node.dataset.count || 0);
        const suffix = node.dataset.suffix || "";
        if (!target) return;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: node,
            start: "top 90%",
          },
          onUpdate: () => {
            node.textContent = `${Math.round(obj.val)}${suffix}`;
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-pad scroll-mt-24 border-t border-border"
    >
      <div className="container-nl">
        <GsapReveal>
          <p
            id="about-heading"
            className="max-w-4xl font-display text-[clamp(1.6rem,3.5vw,2.75rem)] font-medium leading-[1.2] tracking-tight text-off-white"
          >
            {intro.text}
          </p>
        </GsapReveal>

        <div
          ref={statsRef}
          className="mt-16 grid gap-8 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {intro.stats.map((stat, i) => (
            <GsapReveal key={stat.label} delay={i * 0.08}>
              <div>
                {stat.display ? (
                  <p className="font-display text-2xl font-semibold tracking-tight text-off-white sm:text-3xl">
                    {stat.display}
                  </p>
                ) : (
                  <>
                    <p
                      className="font-display text-4xl font-semibold tracking-tight text-off-white sm:text-5xl"
                      data-count={stat.value}
                      data-suffix={stat.suffix}
                    >
                      {stat.value}
                      {stat.suffix}
                    </p>
                    <p className="mt-2 text-[0.7rem] tracking-[0.18em] text-stone uppercase">
                      {stat.label}
                    </p>
                  </>
                )}
              </div>
            </GsapReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
