"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { agency, navLinks } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/motion/Magnetic";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div
        className={[
          "pointer-events-auto mx-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "mt-3 w-[min(100%-1.5rem,52rem)] rounded-full border border-border bg-bg/80 px-4 shadow-[0_12px_40px_-18px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:mt-4 sm:w-[min(100%-2rem,56rem)] sm:px-5"
            : "mt-0 w-full rounded-none border border-transparent bg-transparent px-0",
          open && !scrolled ? "border-b border-border bg-bg/90 backdrop-blur-md" : "",
          open && scrolled
            ? "rounded-[1.75rem] sm:rounded-[2rem]"
            : "",
        ].join(" ")}
      >
        <div
          className={[
            "flex items-center justify-between transition-all duration-500",
            scrolled
              ? "h-12 px-1"
              : "container-nl h-16 sm:h-[4.5rem]",
          ].join(" ")}
        >
          <Magnetic strength={0.15}>
            <Link
              href="/"
              className={[
                "font-display font-semibold tracking-[0.04em] text-off-white transition-all duration-500",
                scrolled ? "text-[0.78rem] sm:text-[0.82rem]" : "text-[0.95rem]",
              ].join(" ")}
              data-cursor="hover"
            >
              {scrolled ? "Northline" : agency.name}
            </Link>
          </Magnetic>

          <nav
            className={[
              "hidden items-center md:flex transition-all duration-500",
              scrolled ? "gap-4 lg:gap-5" : "gap-9",
            ].join(" ")}
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={[
                  "tracking-[0.14em] text-stone uppercase transition-all duration-500 hover:text-off-white",
                  scrolled ? "text-[0.65rem]" : "text-[0.8rem]",
                ].join(" ")}
                data-cursor="hover"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Magnetic strength={0.2}>
              <Button
                href="#contact"
                className={[
                  "tracking-[0.12em] uppercase transition-all duration-500",
                  scrolled
                    ? "!rounded-full !px-3.5 !py-1.5 text-[0.62rem]"
                    : "!px-5 !py-2.5 text-[0.75rem]",
                ].join(" ")}
              >
                Start a project
              </Button>
            </Magnetic>
          </div>

          <button
            type="button"
            className={[
              "inline-flex items-center justify-center border border-border text-off-white transition-all duration-500 md:hidden",
              scrolled
                ? "h-8 w-8 rounded-full"
                : "h-10 w-10 rounded-none",
            ].join(" ")}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X size={scrolled ? 15 : 18} />
            ) : (
              <Menu size={scrolled ? 15 : 18} />
            )}
          </button>
        </div>

        {open ? (
          <div
            id="mobile-nav"
            className={[
              "border-t border-border px-5 pb-6 pt-3 md:hidden",
              scrolled ? "rounded-b-[1.75rem]" : "",
            ].join(" ")}
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-2.5 text-base text-off-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent bg-accent px-6 py-3 text-sm font-medium tracking-wide text-off-white"
              onClick={() => setOpen(false)}
            >
              Start a project
            </a>
          </div>
        ) : null}
      </div>
    </header>
  );
}
