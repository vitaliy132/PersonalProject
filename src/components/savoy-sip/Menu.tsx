"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { savoyMenu } from "@/lib/savoy-sip-content";
import { Reveal } from "./Reveal";
import { SplitReveal } from "./SplitReveal";

export function Menu() {
  const [active, setActive] = useState<(typeof savoyMenu)[number]["id"]>(
    savoyMenu[0].id,
  );
  const reduceMotion = useReducedMotion();
  const current = savoyMenu.find((c) => c.id === active) ?? savoyMenu[0];

  return (
    <section
      id="menu"
      className="bg-[var(--ss-ivory)] py-24 sm:py-32 lg:py-40"
      aria-labelledby="menu-heading"
    >
      <div className="ss-container">
        <p className="ss-eyebrow">Menu</p>
        <SplitReveal
          id="menu-heading"
          text={"A considered\nselection."}
          className="font-display mt-6 max-w-2xl text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] text-[var(--ss-black)]"
        />

        <Reveal className="mt-12 flex flex-wrap gap-x-1 gap-y-2 border-b border-[var(--ss-border)] pb-1">
          {savoyMenu.map((cat) => {
            const isActive = cat.id === active;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActive(cat.id)}
                className={`relative px-4 py-3 text-[0.7rem] font-medium uppercase tracking-[0.16em] transition-colors ${
                  isActive
                    ? "text-[var(--ss-black)]"
                    : "text-[var(--ss-stone)] hover:text-[var(--ss-black)]"
                }`}
                aria-pressed={isActive}
              >
                {cat.category}
                {isActive && (
                  <motion.span
                    layoutId={reduceMotion ? undefined : "menu-underline"}
                    className="absolute inset-x-4 bottom-0 h-px bg-[var(--ss-black)]"
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </button>
            );
          })}
        </Reveal>

        <div className="mt-10 min-h-[18rem]">
          <AnimatePresence mode="wait">
            <motion.ul
              key={current.id}
              className="divide-y divide-[var(--ss-border)]"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {current.items.map((item, i) => (
                <motion.li
                  key={item.name}
                  className="grid grid-cols-[1fr_auto] items-baseline gap-6 py-6 sm:grid-cols-[1.2fr_1fr_auto] sm:gap-10"
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: reduceMotion ? 0 : 0.04 * i,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="font-display text-2xl text-[var(--ss-black)] sm:text-3xl">
                    {item.name}
                  </span>
                  <span className="hidden text-sm text-[var(--ss-stone)] sm:block">
                    {item.detail}
                  </span>
                  <span className="text-sm tabular-nums tracking-wide text-[var(--ss-black)]">
                    {item.price}
                  </span>
                  <span className="col-span-2 text-sm text-[var(--ss-stone)] sm:hidden">
                    {item.detail}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
