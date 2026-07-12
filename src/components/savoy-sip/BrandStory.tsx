"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { savoyStory } from "@/lib/savoy-sip-content";
import { SplitReveal } from "./SplitReveal";
import { Reveal } from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

export function BrandStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !sectionRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { yPercent: -8, scale: 1.08 },
        {
          yPercent: 8,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <section
      ref={sectionRef}
      id={savoyStory.id}
      className="relative overflow-hidden bg-[var(--ss-ivory)] py-24 sm:py-32 lg:py-40"
      aria-labelledby="story-heading"
    >
      <div className="ss-container">
        <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="ss-eyebrow">Brand story</p>
            <SplitReveal
              as="h2"
              id="story-heading"
              text={savoyStory.headline}
              className="font-display mt-6 text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] text-[var(--ss-black)]"
            />
            <Reveal delay={0.15} className="mt-8 max-w-xl">
              <p className="text-base leading-relaxed text-[var(--ss-stone)] sm:text-lg">
                {savoyStory.body}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <div ref={imageRef} className="absolute inset-0">
                <Image
                  src={savoyStory.image.src}
                  alt={savoyStory.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
