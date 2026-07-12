"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/components/motion/usePrefersReducedMotion";
import { savoySipSpace } from "@/lib/savoy-sip-content";
import { ensureGsap, gsap } from "@/lib/gsap";

ensureGsap();

export function Space() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reduceMotion || !sectionRef.current || !trackRef.current) return;

    const section = sectionRef.current;
    const track = trackRef.current;

    const ctx = gsap.context(() => {
      const getScroll = () =>
        Math.max(0, track.scrollWidth - window.innerWidth);

      gsap.to(track, {
        x: () => -getScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScroll()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <section
        id={savoySipSpace.id}
        className="bg-[var(--ss-ink)] py-20 sm:py-28"
        aria-labelledby="space-heading"
      >
        <div className="ss-container">
          <p className="ss-kicker text-[var(--ss-foam)]">{savoySipSpace.kicker}</p>
          <h2
            id="space-heading"
            className="font-display mt-4 text-[clamp(2.5rem,6vw,4.5rem)] text-[var(--ss-on-dark)]"
          >
            {savoySipSpace.headline}
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {savoySipSpace.beats.map((beat, index) => (
              <article key={beat.id} className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={beat.image.src}
                  alt={beat.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ss-ink)]/85 via-[var(--ss-ink)]/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-[var(--ss-foam)]">
                    0{index + 1}
                  </p>
                  <h3 className="font-display mt-2 text-3xl text-[var(--ss-on-dark)]">
                    {beat.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--ss-on-dark)]/65">
                    {beat.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id={savoySipSpace.id}
      className="relative overflow-hidden bg-[var(--ss-ink)]"
      aria-labelledby="space-heading"
    >
      <div className="ss-container absolute inset-x-0 top-0 z-10 pt-10 sm:pt-14">
        <p className="ss-kicker text-[var(--ss-foam)]">{savoySipSpace.kicker}</p>
        <h2
          id="space-heading"
          className="font-display mt-4 text-[clamp(2.5rem,6vw,4.5rem)] text-[var(--ss-on-dark)]"
        >
          {savoySipSpace.headline}
        </h2>
      </div>

      <div
        ref={trackRef}
        className="ss-space-track items-stretch gap-5 px-5 pt-36 pb-10 sm:gap-6 sm:px-8 sm:pt-40 lg:px-12"
      >
        {savoySipSpace.beats.map((beat, index) => (
          <article
            key={beat.id}
            className="relative h-[70svh] w-[min(82vw,32rem)] shrink-0 overflow-hidden sm:h-[72svh]"
          >
            <Image
              src={beat.image.src}
              alt={beat.image.alt}
              fill
              sizes="(max-width: 768px) 82vw, 32rem"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ss-ink)]/85 via-[var(--ss-ink)]/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-[var(--ss-foam)]">
                0{index + 1}
              </p>
              <h3 className="font-display mt-3 text-4xl text-[var(--ss-on-dark)] sm:text-5xl">
                {beat.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--ss-on-dark)]/65">
                {beat.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
