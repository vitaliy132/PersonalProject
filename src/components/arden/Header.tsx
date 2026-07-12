"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/arden/Logo";
import { ardenNav } from "@/lib/arden-content";

export function Header() {
  const pathname = usePathname();
  const isLanding = pathname === "/work/arden-wealth";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const solid = !isLanding || scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,padding] duration-500 ${
        solid
          ? "border-b border-[var(--aw-border)] bg-[var(--aw-mist)]/88 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="aw-container flex h-[4.25rem] items-center justify-between sm:h-[4.75rem]">
        <button
          type="button"
          className={`flex h-10 w-10 items-center justify-center lg:hidden ${
            solid ? "text-[var(--aw-ink)]" : "text-[var(--aw-mist)]"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        <Logo light={!solid} />

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {ardenNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-[0.68rem] font-semibold tracking-[0.18em] uppercase transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-300 hover:after:w-full ${
                solid
                  ? "text-[var(--aw-slate)] hover:text-[var(--aw-ink)]"
                  : "text-[var(--aw-mist)]/70 hover:text-[var(--aw-mist)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/work/arden-wealth/advisory"
          className={`hidden border px-4 py-2 text-[0.65rem] font-semibold tracking-[0.16em] uppercase transition-colors sm:inline-flex ${
            solid
              ? "border-[var(--aw-verdant)] text-[var(--aw-verdant)] hover:bg-[var(--aw-verdant)] hover:text-[var(--aw-mist)]"
              : "border-[var(--aw-champagne)]/50 text-[var(--aw-champagne)] hover:border-[var(--aw-champagne)] hover:bg-[var(--aw-champagne)]/10"
          }`}
        >
          Book advisory
        </Link>
      </div>

      {open && (
        <div className="border-t border-[var(--aw-border)] bg-[var(--aw-mist)] lg:hidden">
          <nav className="aw-container flex flex-col gap-1 py-8" aria-label="Mobile">
            {ardenNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display py-3 text-2xl text-[var(--aw-ink)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/work/arden-wealth/advisory"
              className="mt-4 py-3 text-sm font-semibold tracking-[0.14em] text-[var(--aw-verdant)] uppercase"
              onClick={() => setOpen(false)}
            >
              Book advisory
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
