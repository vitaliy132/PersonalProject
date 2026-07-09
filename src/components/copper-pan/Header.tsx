"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/copper-pan/Logo";
import { useBooking } from "@/components/copper-pan/booking-context";
import { copperPanNav } from "@/lib/copper-pan-content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-[var(--cp-border)] bg-[var(--cp-bg)]/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="cp-container flex h-[4.25rem] items-center justify-between sm:h-[4.75rem]">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {copperPanNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.8rem] font-medium tracking-[0.1em] text-[var(--cp-muted)] uppercase transition-colors hover:text-[var(--cp-ink)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="cp-btn cp-btn-primary hidden sm:inline-flex"
            onClick={openBooking}
          >
            Book a table
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-[var(--cp-ink)] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--cp-border)] bg-[var(--cp-bg)] lg:hidden">
          <nav
            className="cp-container flex flex-col gap-1 py-6"
            aria-label="Mobile"
          >
            {copperPanNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-3 font-display text-2xl text-[var(--cp-ink)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              className="cp-btn cp-btn-primary mt-4 w-full"
              onClick={() => {
                setOpen(false);
                openBooking();
              }}
            >
              Book a table
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
