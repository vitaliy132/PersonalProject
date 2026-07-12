"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/components/motion/usePrefersReducedMotion";
import { savoySip, savoySipVisit } from "@/lib/savoy-sip-content";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Reveal } from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

export function Visit() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reduceMotion || !sectionRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <section
      ref={sectionRef}
      id={savoySipVisit.id}
      className="relative min-h-[100svh] overflow-hidden"
      aria-labelledby="visit-heading"
    >
      <div ref={imageRef} className="absolute inset-0 scale-110">
        <Image
          src={savoySipVisit.image.src}
          alt={savoySipVisit.image.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[var(--ss-ink)]/70" />
      </div>

      <div className="ss-container relative z-10 flex min-h-[100svh] items-end py-16 sm:py-20">
        <Reveal className="w-full max-w-2xl border border-[var(--ss-on-dark)]/15 bg-[var(--ss-ink)]/55 p-8 backdrop-blur-md sm:p-10">
          <p className="ss-kicker text-[var(--ss-foam)]">{savoySipVisit.kicker}</p>
          <h2
            id="visit-heading"
            className="font-display mt-4 text-[clamp(3rem,8vw,5.5rem)] text-[var(--ss-on-dark)]"
          >
            {savoySipVisit.headline}
          </h2>
          <p className="mt-5 text-base text-[var(--ss-on-dark)]/70">
            {savoySip.address}
          </p>

          <ul className="mt-8 space-y-2 border-t border-[var(--ss-on-dark)]/15 pt-6">
            {savoySipVisit.hours.map((row) => (
              <li
                key={row.day}
                className="flex items-baseline justify-between gap-6 text-sm"
              >
                <span className="text-[var(--ss-on-dark)]/50">{row.day}</span>
                <span className="tabular-nums text-[var(--ss-on-dark)]">
                  {row.hours}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticButton
              href={`https://maps.google.com/?q=${encodeURIComponent(savoySip.address)}`}
              className="ss-btn ss-btn-ghost !border-[var(--ss-on-dark)] !bg-[var(--ss-on-dark)] !text-[var(--ss-ink)] hover:!bg-transparent hover:!text-[var(--ss-on-dark)]"
            >
              Directions
            </MagneticButton>
            <MagneticButton
              href={`mailto:${savoySip.email}`}
              className="ss-btn ss-btn-ghost"
            >
              Email
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
