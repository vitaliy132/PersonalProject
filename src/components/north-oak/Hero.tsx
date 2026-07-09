"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { northOakImages } from "@/lib/north-oak-content";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden no-grain pt-[4.25rem] sm:pt-[4.75rem]"
      aria-labelledby="hero-heading"
    >
      <div className="no-container grid min-h-[calc(100svh-4.25rem)] items-center gap-10 py-12 lg:grid-cols-[1fr_1.05fr] lg:gap-12 lg:py-16 sm:min-h-[calc(100svh-4.75rem)]">
        <div className="relative z-10 max-w-xl">
          <motion.p
            className="no-eyebrow"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Specialty coffee roastery
          </motion.p>
          <motion.h1
            id="hero-heading"
            className="font-display mt-5 text-[2.75rem] leading-[1.05] text-[var(--no-espresso)] sm:text-5xl lg:text-[3.75rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Exceptional coffee, thoughtfully crafted.
          </motion.h1>
          <motion.p
            className="mt-6 max-w-md text-base leading-relaxed text-[var(--no-muted)] sm:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            Specialty coffee roasted with precision. Discover unique flavours
            from the world&apos;s finest coffee regions.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-wrap gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="#collection" className="no-btn no-btn-primary">
              Explore coffee
            </a>
            <a href="#cafe" className="no-btn no-btn-secondary">
              Visit our café
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative aspect-[4/5] w-full max-w-xl justify-self-end overflow-hidden sm:aspect-[5/6] lg:max-w-none"
          initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={northOakImages.hero.src}
            alt={northOakImages.hero.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--no-espresso)]/25 via-transparent to-transparent" />

          <motion.aside
            className="absolute bottom-5 left-5 right-5 max-w-[16.5rem] border border-[var(--no-border)] bg-[var(--no-cream)]/95 p-4 shadow-[0_20px_50px_-24px_rgba(44,33,24,0.45)] backdrop-blur-sm sm:bottom-8 sm:left-8 sm:right-auto"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative mb-3 aspect-[4/3] overflow-hidden bg-[var(--no-beige)]">
              <Image
                src={northOakImages.floatingProduct.src}
                alt={northOakImages.floatingProduct.alt}
                fill
                sizes="260px"
                className="object-cover"
              />
            </div>
            <p className="no-eyebrow text-[0.65rem]">Featured lot</p>
            <p className="font-display mt-1 text-xl text-[var(--no-espresso)]">
              Ethiopia Yirgacheffe
            </p>
            <p className="mt-1 text-sm text-[var(--no-muted)]">
              Floral · citrus · tea-like
            </p>
            <p className="mt-3 text-sm font-medium tracking-wide text-[var(--no-espresso)]">
              £16.50
            </p>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
}
