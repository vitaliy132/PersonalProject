"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { savoyHero } from "@/lib/savoy-sip-content";
import { MagneticButton } from "./MagneticButton";

const HeroCanvas = dynamic(
  () => import("./HeroCanvas").then((m) => m.HeroCanvas),
  { ssr: false },
);

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
        scale: 1.12,
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

  const words = `${savoyHero.lineOne} ${savoyHero.lineTwo}`.split(" ");

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-[var(--ss-black)]"
      aria-labelledby="hero-heading"
    >
      <div ref={imageRef} className="absolute inset-0 scale-105">
        <Image
          src={savoyHero.image.src}
          alt={savoyHero.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[var(--ss-black)]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ss-black)]/70 via-transparent to-[var(--ss-black)]/30" />
      </div>

      <HeroCanvas />

      <div className="ss-container relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-28 sm:pb-20 sm:pt-32">
        <motion.p
          className="ss-eyebrow text-[var(--ss-olive)]!"
          style={{ color: "#a3b089" }}
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          {savoyHero.eyebrow}
        </motion.p>

        <h1
          id="hero-heading"
          className="font-display mt-6 max-w-4xl text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] text-[var(--ss-ivory)]"
        >
          {words.map((word, i) => (
            <span key={`${word}-${i}`} className="ss-mask-line mr-[0.28em] inline-block">
              <motion.span
                className="inline-block"
                initial={reduceMotion ? false : { y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1,
                  delay: 0.15 + i * 0.07,
                  ease,
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease }}
        >
          <MagneticButton
            href={savoyHero.ctaPrimary.href}
            className="ss-btn ss-btn-primary"
          >
            {savoyHero.ctaPrimary.label}
          </MagneticButton>
          <MagneticButton
            href={savoyHero.ctaSecondary.href}
            className="ss-btn ss-btn-secondary"
          >
            {savoyHero.ctaSecondary.label}
          </MagneticButton>
        </motion.div>

        <motion.div
          className="mt-16 flex items-center gap-3 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[var(--ss-ivory)]/55"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          aria-hidden
        >
          <span className="block h-10 w-px origin-top bg-[var(--ss-ivory)]/40" />
          Scroll
        </motion.div>
      </div>
    </section>
  );
}
