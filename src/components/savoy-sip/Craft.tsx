"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/components/motion/usePrefersReducedMotion";
import { savoySipCraft } from "@/lib/savoy-sip-content";
import { GsapReveal as Reveal } from "@/components/motion/GsapReveal";
import { ensureGsap, gsap } from "@/lib/gsap";

ensureGsap();

export function Craft() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reduceMotion || !sectionRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { yPercent: -8, scale: 1.12 },
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
      id={savoySipCraft.id}
      className="relative overflow-hidden bg-[var(--ss-paper)]"
      aria-labelledby="craft-heading"
    >
      <div className="grid min-h-[100svh] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
          <Reveal>
            <p className="ss-kicker">{savoySipCraft.kicker}</p>
            <h2
              id="craft-heading"
              className="font-display mt-6 whitespace-pre-line text-[clamp(3rem,7vw,5.5rem)] text-[var(--ss-ink)]"
            >
              {savoySipCraft.headline}
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-[var(--ss-mute)] sm:text-lg">
              {savoySipCraft.body}
            </p>
          </Reveal>
        </div>

        <div className="relative min-h-[55svh] overflow-hidden lg:min-h-full">
          <div ref={imageRef} className="absolute inset-0">
            <Image
              src={savoySipCraft.image.src}
              alt={savoySipCraft.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
