"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/north-oak/Logo";
import { northOakNav } from "@/lib/north-oak-content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          ? "border-b border-[var(--no-border)] bg-[var(--no-cream)]/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="no-container flex h-[4.25rem] items-center justify-between sm:h-[4.75rem]">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {northOakNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.8rem] font-medium tracking-[0.08em] text-[var(--no-muted)] uppercase transition-colors hover:text-[var(--no-espresso)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#cafe" className="no-btn no-btn-primary hidden sm:inline-flex">
            Visit café
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-[var(--no-espresso)] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--no-border)] bg-[var(--no-cream)] lg:hidden">
          <nav
            className="no-container flex flex-col gap-1 py-6"
            aria-label="Mobile"
          >
            {northOakNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-3 font-display text-2xl text-[var(--no-espresso)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cafe"
              className="no-btn no-btn-primary mt-4 w-full"
              onClick={() => setOpen(false)}
            >
              Visit café
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
