"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { brickSaltSeasonal } from "@/lib/brick-salt-content";
import { Reveal } from "@/components/motion/Reveal";

export function Seasonal() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const card = brickSaltSeasonal.cards[active];

  return (
    <section
      id={brickSaltSeasonal.id}
      className="border-t-2 border-[var(--bs-charcoal)] bg-[var(--bs-cream)] py-20 sm:py-28"
      aria-labelledby="seasonal-heading"
    >
      <div className="bs-container">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <p className="bs-eyebrow">Seasonal menu</p>
            <h2
              id="seasonal-heading"
              className="font-display mt-4 text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] text-[var(--bs-charcoal)]"
            >
              {brickSaltSeasonal.headline}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[var(--bs-muted)] lg:justify-self-end">
            The kitchen follows the calendar — not the other way around. Tap a
            chapter to explore what&apos;s driving the board.
          </p>
        </div>

        {/* Interactive season index + large preview — not 3 equal cards */}
        <div className="grid gap-0 border-2 border-[var(--bs-charcoal)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <ul className="divide-y divide-[var(--bs-charcoal)] border-b-2 border-[var(--bs-charcoal)] lg:border-b-0 lg:border-r-2">
            {brickSaltSeasonal.cards.map((item, i) => {
              const isActive = i === active;
              return (
                <li key={item.season}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={`flex w-full items-center justify-between gap-4 px-5 py-6 text-left transition-colors sm:px-7 sm:py-8 ${
                      isActive
                        ? "bg-[var(--bs-charcoal)] text-[var(--bs-salt)]"
                        : "bg-[var(--bs-cream)] text-[var(--bs-charcoal)] hover:bg-[var(--bs-cream-deep)]"
                    }`}
                    aria-pressed={isActive}
                  >
                    <span>
                      <span
                        className={`block text-[0.65rem] font-bold uppercase tracking-[0.2em] ${
                          isActive ? "text-[var(--bs-brick-hot)]" : "text-[var(--bs-brick)]"
                        }`}
                      >
                        Chapter 0{i + 1}
                      </span>
                      <span className="font-display mt-2 block text-3xl sm:text-4xl">
                        {item.season}
                      </span>
                      <span
                        className={`mt-2 block text-sm ${
                          isActive ? "text-[var(--bs-salt)]/65" : "text-[var(--bs-muted)]"
                        }`}
                      >
                        {item.title}
                      </span>
                    </span>
                    <span className="font-display text-2xl opacity-40">→</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <Reveal className="relative min-h-[22rem] overflow-hidden bg-[var(--bs-charcoal)] sm:min-h-[28rem]">
            <AnimatePresence mode="wait">
              {card ? (
              <motion.div
                key={card.season}
                className="absolute inset-0"
                initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bs-charcoal)]/85 via-[var(--bs-charcoal)]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <h3 className="font-display text-3xl text-[var(--bs-salt)] sm:text-4xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--bs-salt)]/75">
                    {card.description}
                  </p>
                </div>
              </motion.div>
              ) : null}
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
