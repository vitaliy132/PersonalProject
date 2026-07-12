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
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-border bg-bg/80 backdrop-blur-md"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="container-nl flex h-16 items-center justify-between sm:h-[4.5rem]">
        <Magnetic strength={0.15}>
          <Link
            href="/"
            className="font-display text-[0.95rem] font-semibold tracking-[0.04em] text-off-white"
            data-cursor="hover"
          >
            {agency.name}
          </Link>
        </Magnetic>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.8rem] tracking-[0.14em] text-stone uppercase transition-colors hover:text-off-white"
              data-cursor="hover"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Magnetic strength={0.2}>
            <Button href="#contact" className="!px-5 !py-2.5 text-[0.75rem] tracking-[0.12em] uppercase">
              Start a project
            </Button>
          </Magnetic>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-border text-off-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-bg px-5 pb-8 pt-4 md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 text-lg text-off-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 border border-accent bg-accent px-6 py-3.5 text-sm font-medium tracking-wide text-off-white"
            onClick={() => setOpen(false)}
          >
            Start a project
          </a>
        </div>
      ) : null}
    </header>
  );
}
