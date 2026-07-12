"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useBooking } from "@/components/brick-salt/booking-context";
import { brickSalt, brickSaltNav } from "@/lib/brick-salt-content";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openBooking } = useBooking();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
      className={`fixed inset-x-0 top-0 z-40 border-b-2 border-[var(--bs-charcoal)] bg-[var(--bs-cream)] transition-shadow duration-400 ${
        scrolled ? "shadow-[0_8px_24px_-12px_rgba(20,18,16,0.35)]" : ""
      }`}
    >
      <div className="h-1.5 bg-[var(--bs-brick)]" aria-hidden />
      <div className="bs-container flex h-[3.75rem] items-center justify-between sm:h-[4.25rem]">
        <a
          href="#top"
          className="text-[var(--bs-charcoal)]"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {brickSaltNav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[var(--bs-muted)] transition-colors hover:text-[var(--bs-charcoal)]"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={openBooking}
            className="bs-btn bs-btn-primary !px-4 !py-2.5"
          >
            Book
          </button>
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="bs-mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-0.5 w-full bg-[var(--bs-charcoal)] transition-all duration-300 ${
                open ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-[var(--bs-charcoal)] transition-all duration-300 ${
                open ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="bs-mobile-nav"
            className="fixed inset-0 z-40 bg-[var(--bs-cream)] pt-[5rem] lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav
              className="bs-container flex flex-col gap-5 border-t-2 border-[var(--bs-charcoal)] py-10"
              aria-label="Mobile"
            >
              {brickSaltNav.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="font-display text-4xl text-[var(--bs-charcoal)]"
                  initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
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
              <button
                type="button"
                className="bs-btn bs-btn-primary mt-4 w-fit"
                onClick={() => {
                  setOpen(false);
                  openBooking();
                }}
              >
                Book a Table
              </button>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-[var(--bs-muted)]">
                {brickSalt.city}
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
