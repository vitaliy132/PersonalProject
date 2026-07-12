"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Parallax, SplitText } from "@/components/arden/motion";
import { usePrefersReducedMotion } from "@/components/motion/usePrefersReducedMotion";
import { ardenPhilosophy } from "@/lib/arden-content";
import { ensureGsap, gsap } from "@/lib/gsap";

ensureGsap();

export function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reduced) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-pillar]", {
        y: 48,
        opacity: 0,
        stagger: 0.14,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 50%",
          once: true,
        },
      });

      gsap.from("[data-philo-frame]", {
        clipPath: "inset(12% 8% 12% 8%)",
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="relative overflow-hidden py-28 sm:py-36"
      aria-labelledby="philosophy-heading"
    >
      <p
        className="aw-watermark absolute -top-6 right-0 text-[clamp(6rem,18vw,14rem)] select-none"
        aria-hidden
      >
        ARDEN
      </p>

      <div className="aw-container grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
        <div className="relative z-10">
          <p className="aw-eyebrow">{ardenPhilosophy.eyebrow}</p>
          <SplitText
            as="h2"
            mode="words"
            className="font-display mt-5 text-[clamp(2.6rem,5.5vw,5rem)] leading-[1.08] text-[var(--aw-ink)]"
          >
            {ardenPhilosophy.headline}
          </SplitText>
          <p
            id="philosophy-heading"
            className="mt-7 max-w-lg text-base leading-[1.7] text-[var(--aw-slate)] sm:text-lg"
          >
            {ardenPhilosophy.body}
          </p>

          <div className="mt-14 space-y-0">
            {ardenPhilosophy.pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                data-pillar
                className="grid grid-cols-[3rem_1fr] gap-4 border-t border-[var(--aw-border)] py-7"
              >
                <span className="font-display text-sm text-[var(--aw-champagne)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl text-[var(--aw-ink)] sm:text-2xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--aw-slate)]">
                    {pillar.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:pl-6">
          <div
            data-philo-frame
            className="aw-frame relative aspect-[4/5] overflow-hidden lg:aspect-[3/4]"
            style={{ clipPath: "inset(0)" }}
          >
            <Parallax speed={55} scale={1.14} className="absolute inset-0 h-[118%] -top-[9%]">
              <Image
                src={ardenPhilosophy.image.src}
                alt={ardenPhilosophy.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </Parallax>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--aw-ink)]/50 via-transparent to-[var(--aw-ink)]/10" />
            <div className="absolute right-5 bottom-5 left-5 border border-[var(--aw-mist)]/25 bg-[var(--aw-ink)]/35 p-4 backdrop-blur-md">
              <p className="text-[0.6rem] tracking-[0.2em] text-[var(--aw-champagne)] uppercase">
                Stewardship
              </p>
              <p className="mt-1 font-display text-lg text-[var(--aw-mist)]">
                Compounding with patience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
