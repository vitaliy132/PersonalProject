"use client";

import { motion, useReducedMotion } from "framer-motion";
import { savoyLocation, savoySip } from "@/lib/savoy-sip-content";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";
import { SplitReveal } from "./SplitReveal";

export function Location() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={savoyLocation.id}
      className="bg-[var(--ss-ivory)] py-24 sm:py-32 lg:py-40"
      aria-labelledby="location-heading"
    >
      <div className="ss-container grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div>
          <p className="ss-eyebrow">Visit</p>
          <SplitReveal
            id="location-heading"
            text={savoyLocation.headline}
            className="font-display mt-6 text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.05] text-[var(--ss-black)]"
          />

          <Reveal className="mt-10 space-y-6">
            <div>
              <p className="font-display text-2xl text-[var(--ss-black)]">
                {savoyLocation.name}
              </p>
              <p className="mt-1 text-sm text-[var(--ss-stone)]">
                {savoyLocation.city}
              </p>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-[var(--ss-stone)]">
                {savoyLocation.address}
              </p>
            </div>

            <ul className="space-y-2 border-t border-[var(--ss-border)] pt-6">
              {savoyLocation.hours.map((row) => (
                <li
                  key={row.day}
                  className="flex justify-between gap-6 text-sm text-[var(--ss-stone)]"
                >
                  <span>{row.day}</span>
                  <span className="tabular-nums text-[var(--ss-black)]">
                    {row.hours}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <MagneticButton
                href={`mailto:${savoySip.email}`}
                className="ss-btn ss-btn-primary"
              >
                Contact
              </MagneticButton>
              <MagneticButton
                href={`https://maps.google.com/?q=${encodeURIComponent(savoyLocation.address)}`}
                className="ss-btn ss-btn-dark"
              >
                Get directions
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="ss-map relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative text-center">
                <motion.span
                  className="mx-auto block h-3 w-3 rounded-full bg-[var(--ss-olive)]"
                  initial={reduceMotion ? false : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                />
                <motion.span
                  className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--ss-olive)]/40"
                  initial={reduceMotion ? false : { scale: 0.4, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45, duration: 0.9 }}
                  aria-hidden
                />
                <p className="font-display mt-8 text-3xl text-[var(--ss-black)]">
                  {savoyLocation.name}
                </p>
                <p className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--ss-stone)]">
                  Fitzrovia · London
                </p>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
