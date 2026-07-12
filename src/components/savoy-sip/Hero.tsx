"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { savoySipHero } from "@/lib/savoy-sip-content";
import { MagneticButton } from "@/components/motion/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !sectionRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 18,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
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
      id="top"
      className="relative min-h-[100svh] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div ref={imageRef} className="absolute inset-0 scale-[1.12]">
        <Image
          src={savoySipHero.image.src}
          alt={savoySipHero.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,11,0.25)_0%,rgba(10,10,11,0.72)_100%)]"
          aria-hidden
        />
      </div>

      <p className="ss-vert ss-kicker absolute top-1/2 right-4 hidden -translate-y-1/2 text-[var(--ss-on-dark)]/55 lg:right-8 lg:block">
        {savoySipHero.place}
      </p>

      <div className="ss-container relative z-10 flex min-h-[100svh] flex-col justify-center pt-[5rem] pb-16">
        <h1
          id="hero-heading"
          className="font-display mx-auto max-w-5xl text-center text-[clamp(4.5rem,16vw,11rem)] text-[var(--ss-on-dark)]"
        >
          <span className="ss-mask-line">
            <motion.span
              className="block"
              initial={reduceMotion ? false : { y: "115%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.05, delay: 0.08, ease }}
            >
              {savoySipHero.brandLineOne}
            </motion.span>
          </span>
          <span className="ss-mask-line italic">
            <motion.span
              className="block"
              initial={reduceMotion ? false : { y: "115%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.05, delay: 0.2, ease }}
            >
              {savoySipHero.brandLineTwo}
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="mx-auto mt-8 max-w-md text-center text-base leading-relaxed text-[var(--ss-on-dark)]/70 sm:text-lg"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease }}
        >
          {savoySipHero.line}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-8"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.58, ease }}
        >
          <MagneticButton
            href={savoySipHero.ctaPrimary.href}
            className="ss-link text-[var(--ss-on-dark)]"
          >
            {savoySipHero.ctaPrimary.label}
          </MagneticButton>
          <MagneticButton
            href={savoySipHero.ctaSecondary.href}
            className="ss-link text-[var(--ss-on-dark)]"
          >
            {savoySipHero.ctaSecondary.label}
          </MagneticButton>
        </motion.div>

        <p className="ss-kicker mt-14 text-center text-[var(--ss-on-dark)]/45 lg:hidden">
          {savoySipHero.place}
        </p>
      </div>
    </section>
  );
}
