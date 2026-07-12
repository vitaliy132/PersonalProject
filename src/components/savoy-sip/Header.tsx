"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { savoySip, savoySipNav } from "@/lib/savoy-sip-content";
import { Logo } from "./Logo";

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

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background,backdrop-filter,border-color] duration-500 ${
        solid
          ? "border-b border-[var(--ss-border)] bg-[var(--ss-paper)]/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="ss-container flex h-[4rem] items-center justify-between sm:h-[4.5rem]">
        <a
          href="#top"
          className={solid ? "text-[var(--ss-ink)]" : "text-[var(--ss-on-dark)]"}
          onClick={() => setOpen(false)}
        >
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {savoySipNav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[0.68rem] font-medium uppercase tracking-[0.2em] transition-opacity hover:opacity-60 ${
                solid
                  ? "text-[var(--ss-mute)]"
                  : "text-[var(--ss-on-dark)]/75"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#visit"
            className={`ss-btn !px-5 !py-2.5 ${
              solid ? "ss-btn-primary" : "ss-btn-ghost"
            }`}
          >
            Visit
          </a>
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="ss-mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-px w-full transition-all duration-300 ${
                solid ? "bg-[var(--ss-ink)]" : "bg-[var(--ss-on-dark)]"
              } ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-full transition-all duration-300 ${
                solid ? "bg-[var(--ss-ink)]" : "bg-[var(--ss-on-dark)]"
              } ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="ss-mobile-nav"
            className="fixed inset-0 z-40 bg-[var(--ss-paper)] pt-[5rem] lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav
              className="ss-container flex flex-col gap-6 py-12"
              aria-label="Mobile"
            >
              {savoySipNav.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="font-display text-5xl text-[var(--ss-ink)]"
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.05 * i,
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#visit"
                className="ss-btn ss-btn-primary mt-6 w-fit"
                onClick={() => setOpen(false)}
              >
                Visit Us
              </a>
              <p className="mt-8 text-sm tracking-[0.18em] text-[var(--ss-mute)] uppercase">
                {savoySip.location}
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
