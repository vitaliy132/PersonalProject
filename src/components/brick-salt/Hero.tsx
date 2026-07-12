"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useBooking } from "@/components/brick-salt/booking-context";
import { brickSaltHero } from "@/lib/brick-salt-content";
import { MagneticButton } from "@/components/motion/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { openBooking } = useBooking();

  useEffect(() => {
    if (reduceMotion || !sectionRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 12,
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
      className="relative min-h-[100svh] overflow-hidden bg-[var(--bs-cream)] pt-[4.25rem] sm:pt-[4.75rem]"
      aria-labelledby="hero-heading"
    >
      <div className="grid min-h-[calc(100svh-4.25rem)] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] sm:min-h-[calc(100svh-4.75rem)]">
        {/* Industrial text panel — opposite of coffee full-bleed overlay */}
        <div className="bs-brick-edge relative flex flex-col justify-between gap-10 bg-[var(--bs-cream)] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
          <div>
            <motion.div
              className="inline-flex items-center gap-3 border border-[var(--bs-charcoal)] px-3 py-1.5"
              initial={reduceMotion ? false : { opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="h-2 w-2 bg-[var(--bs-brick)]" aria-hidden />
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--bs-charcoal)]">
                Leeds · Warehouse dining
              </span>
            </motion.div>

            <h1
              id="hero-heading"
              className="font-display mt-8 text-[clamp(3.2rem,9vw,7rem)] leading-[0.88] text-[var(--bs-charcoal)]"
            >
              <span className="bs-mask-line">
                <motion.span
                  className="block"
                  initial={reduceMotion ? false : { y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.95, delay: 0.1, ease }}
                >
                  {brickSaltHero.lineOne}
                </motion.span>
              </span>
              <span className="bs-mask-line mt-1 text-[var(--bs-brick)]">
                <motion.span
                  className="block"
                  initial={reduceMotion ? false : { y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.95, delay: 0.22, ease }}
                >
                  {brickSaltHero.lineTwo}
                </motion.span>
              </span>
            </h1>

            <motion.p
              className="mt-8 max-w-sm text-base leading-relaxed text-[var(--bs-muted)]"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease }}
            >
              Seasonal small plates, craft drinks and shared tables in a
              converted Northern warehouse.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease }}
          >
            <MagneticButton
              onClick={openBooking}
              className="bs-btn bs-btn-primary"
            >
              {brickSaltHero.ctaPrimary}
            </MagneticButton>
            <MagneticButton
              href={brickSaltHero.ctaSecondary.href}
              className="bs-btn bs-btn-secondary"
            >
              {brickSaltHero.ctaSecondary.label}
            </MagneticButton>
          </motion.div>
        </div>

        {/* Full-height photo column */}
        <div className="relative min-h-[50vh] overflow-hidden lg:min-h-full">
          <div ref={imageRef} className="absolute inset-0 scale-110">
            <Image
              src={brickSaltHero.image.src}
              alt={brickSaltHero.image.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bs-charcoal)]/40 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-[var(--bs-charcoal)]/10" />
          <p className="absolute bottom-6 right-6 hidden text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[var(--bs-salt)] mix-blend-difference lg:block">
            Est. Northern England
          </p>
        </div>
      </div>
    </section>
  );
}
