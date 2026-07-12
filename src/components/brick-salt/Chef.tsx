"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { brickSaltChef } from "@/lib/brick-salt-content";
import { Reveal } from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

export function Chef() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".bs-chef-panel");
      panels.forEach((panel, i) => {
        const media = panel.querySelector(".bs-chef-img");
        if (!media) return;
        gsap.fromTo(
          media,
          { scale: 1.15 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
        gsap.fromTo(
          panel.querySelector(".bs-chef-copy"),
          { y: 48, opacity: 0.2 },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top 70%",
              end: "top 30%",
              scrub: true,
            },
          },
        );
        // stagger visual weight via border accent
        void i;
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <section
      ref={sectionRef}
      id={brickSaltChef.id}
      className="bg-[var(--bs-cream-deep)]"
      aria-labelledby="chef-heading"
    >
      <div className="bs-container border-b-2 border-[var(--bs-charcoal)] py-16 sm:py-20">
        <p className="bs-eyebrow">The kitchen</p>
        <h2
          id="chef-heading"
          className="font-display mt-4 max-w-3xl text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-[var(--bs-charcoal)]"
        >
          {brickSaltChef.headline}
        </h2>
        <p className="mt-6 max-w-lg text-base text-[var(--bs-muted)] sm:text-lg">
          {brickSaltChef.intro}
        </p>
      </div>

      {/* Full-bleed stacked panels — not alternating coffee experience rows */}
      {brickSaltChef.beats.map((beat, index) => (
        <article
          key={beat.id}
          className="bs-chef-panel relative min-h-[85svh] overflow-hidden border-b-2 border-[var(--bs-charcoal)]"
        >
          <div className="bs-chef-img absolute inset-0">
            <Image
              src={beat.image.src}
              alt={beat.image.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[var(--bs-charcoal)]/55" />
          </div>

          <div className="bs-container relative z-10 flex min-h-[85svh] items-end py-12 sm:py-16">
            <Reveal className="bs-chef-copy max-w-xl border-l-4 border-[var(--bs-brick)] bg-[var(--bs-charcoal)]/70 p-6 backdrop-blur-sm sm:p-8">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[var(--bs-brick-hot)]">
                Step 0{index + 1}
              </p>
              <h3 className="font-display mt-3 text-4xl text-[var(--bs-salt)] sm:text-5xl">
                {beat.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[var(--bs-salt)]/70">
                {beat.description}
              </p>
            </Reveal>
          </div>
        </article>
      ))}
    </section>
  );
}
