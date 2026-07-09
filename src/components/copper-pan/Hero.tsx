"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useBooking } from "@/components/copper-pan/booking-context";
import { copperPanImages } from "@/lib/copper-pan-content";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { openBooking } = useBooking();

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden pt-[4.25rem] sm:pt-[4.75rem]"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <Image
          src={copperPanImages.hero.src}
          alt={copperPanImages.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--cp-bg)] via-[var(--cp-bg)]/85 to-[var(--cp-bg)]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--cp-bg)] via-transparent to-[var(--cp-bg)]/50" />
      </div>

      <div className="cp-container relative z-10 flex min-h-[calc(100svh-4.25rem)] items-end pb-16 sm:min-h-[calc(100svh-4.75rem)] sm:pb-20 lg:items-center lg:pb-0">
        <div className="max-w-xl">
          <motion.p
            className="font-display text-3xl text-[var(--cp-copper)] sm:text-4xl"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            The Copper Pan
          </motion.p>
          <motion.h1
            id="hero-heading"
            className="font-display mt-4 text-[2.6rem] leading-[1.05] text-[var(--cp-ink)] sm:text-5xl lg:text-[3.5rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Neighbourhood dining, thoughtfully plated.
          </motion.h1>
          <motion.p
            className="mt-6 max-w-md text-base leading-relaxed text-[var(--cp-stone)] sm:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Seasonal British cooking in a warm corner of North London — book a
            table for lunch or dinner.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-wrap gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.24,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <button
              type="button"
              className="cp-btn cp-btn-primary"
              onClick={openBooking}
            >
              Book a table
            </button>
            <a href="#menu" className="cp-btn cp-btn-secondary">
              View menu
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
