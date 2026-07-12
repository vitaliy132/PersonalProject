"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Logo } from "./Logo";
import { savoyNav, savoySip } from "@/lib/savoy-sip-content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        scrolled || open
          ? "bg-[var(--ss-ivory)]/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="ss-container flex h-[4.25rem] items-center justify-between sm:h-[4.75rem]">
        <a
          href="#top"
          className={`transition-colors duration-500 ${
            scrolled || open
              ? "text-[var(--ss-black)]"
              : "text-[var(--ss-ivory)]"
          }`}
          onClick={() => setOpen(false)}
        >
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {savoyNav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[0.7rem] font-medium uppercase tracking-[0.16em] transition-colors duration-300 ${
                scrolled
                  ? "text-[var(--ss-stone)] hover:text-[var(--ss-black)]"
                  : "text-[var(--ss-ivory)]/75 hover:text-[var(--ss-ivory)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-px w-full transition-all duration-300 ${
                open || scrolled ? "bg-[var(--ss-black)]" : "bg-[var(--ss-ivory)]"
              } ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-full transition-all duration-300 ${
                open || scrolled ? "bg-[var(--ss-black)]" : "bg-[var(--ss-ivory)]"
              } ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-40 bg-[var(--ss-ivory)] pt-[4.25rem] lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <nav
              className="ss-container flex flex-col gap-6 py-12"
              aria-label="Mobile"
            >
              {savoyNav.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="font-display text-4xl text-[var(--ss-black)]"
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.05 * i,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <p className="mt-8 text-sm text-[var(--ss-stone)]">
                {savoySip.location}
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
