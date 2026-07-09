"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { DashboardMock } from "@/components/ui/DashboardMock";
import { hero } from "@/lib/content";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const initial = reduceMotion ? false : { opacity: 0, y: 20 };
  const animate = { opacity: 1, y: 0 };
  const transition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <AuroraBackground />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-28">
        <div>
          <motion.p
            initial={initial}
            animate={animate}
            transition={transition}
            className="font-display text-sm font-semibold tracking-[0.08em] text-accent sm:text-base"
          >
            {hero.brand}
          </motion.p>

          <motion.h1
            initial={initial}
            animate={animate}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.08 }}
            className="mt-4 max-w-xl font-display text-[2.35rem] font-semibold leading-[1.08] tracking-tight text-text sm:text-5xl lg:text-[3.35rem]"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={initial}
            animate={animate}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.16 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={initial}
            animate={animate}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.24 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.ul
            initial={initial}
            animate={animate}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.32 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
          >
            {hero.trust.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-muted"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: reduceMotion ? 0 : 0.2 }}
        >
          <DashboardMock />
        </motion.div>
      </div>
    </section>
  );
}
