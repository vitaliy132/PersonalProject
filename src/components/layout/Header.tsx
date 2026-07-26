"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { agency, navLinks } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/motion/Magnetic";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useScrolled } from "@/hooks/useScrolled";

function resolveHref(href: string, pathname: string) {
  if (href.startsWith("#")) {
    return pathname === "/" ? href : `/${href}`;
  }
  return href;
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(40);
  // Pill only when scrolled AND menu closed — open menu must be full-width on phones
  const pill = scrolled && !open;
  const contactHref = resolveHref("#contact", pathname);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 safe-pt">
      {open ? (
        <button
          type="button"
          aria-label="Close menu"
          className="pointer-events-auto fixed inset-0 z-40 bg-bg/70 backdrop-blur-[2px] md:hidden"
          onClick={() => setOpen(false)}
        />
      ) : null}

      <div
        className={[
          "pointer-events-auto relative z-50 mx-auto",
          // Skip geometry transitions while menu is open so pill→full doesn't morph
          open
            ? "mt-0 w-full rounded-none border-b border-border bg-bg/95 px-0 backdrop-blur-md"
            : [
                "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                pill
                  ? "mt-3 w-[min(100%-1.5rem,52rem)] rounded-full border border-border bg-bg/80 px-4 shadow-[0_12px_40px_-18px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:mt-4 sm:w-[min(100%-2rem,56rem)] sm:px-5"
                  : "mt-0 w-full rounded-none border border-transparent bg-transparent px-0",
              ].join(" "),
        ].join(" ")}
      >
        <div
          className={[
            "flex items-center justify-between",
            open ? "" : "transition-all duration-500",
            pill ? "h-12 px-1" : "container-nl h-16 sm:h-[4.5rem]",
          ].join(" ")}
        >
          <Magnetic strength={0.15}>
            <Link
              href="/"
              className={[
                "font-display font-semibold tracking-[0.04em] text-off-white",
                open ? "" : "transition-all duration-500",
                pill ? "text-[0.78rem] sm:text-[0.82rem]" : "text-[0.95rem]",
              ].join(" ")}
              data-cursor="hover"
              onClick={() => setOpen(false)}
            >
              {pill ? "Northline" : agency.name}
            </Link>
          </Magnetic>

          <nav
            className={[
              "hidden items-center md:flex",
              open ? "" : "transition-all duration-500",
              pill ? "gap-4 lg:gap-5" : "gap-9",
            ].join(" ")}
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              const href = resolveHref(link.href, pathname);
              const className = [
                "tracking-[0.14em] text-stone uppercase hover:text-off-white",
                open ? "" : "transition-all duration-500",
                pill ? "text-[0.65rem]" : "text-[0.8rem]",
              ].join(" ");

              if (href.startsWith("#")) {
                return (
                  <a
                    key={link.href}
                    href={href}
                    className={className}
                    data-cursor="hover"
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={href}
                  className={className}
                  data-cursor="hover"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Magnetic strength={0.2}>
              <Button
                href={contactHref}
                className={[
                  "tracking-[0.12em] uppercase",
                  open ? "" : "transition-all duration-500",
                  pill
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
              "inline-flex min-h-11 min-w-11 items-center justify-center border border-border text-off-white md:hidden",
              open ? "" : "transition-all duration-500",
              pill ? "h-11 w-11 rounded-full" : "h-11 w-11 rounded-none",
            ].join(" ")}
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
            className="border-t border-border px-5 pb-6 pt-3 safe-pb md:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navLinks.map((link) => {
                const href = resolveHref(link.href, pathname);
                const className = "py-3.5 text-base text-off-white";

                if (href.startsWith("#")) {
                  return (
                    <a
                      key={link.href}
                      href={href}
                      className={className}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={href}
                    className={className}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            {contactHref.startsWith("#") ? (
              <a
                href={contactHref}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent bg-accent px-6 py-3 text-sm font-medium tracking-wide text-off-white"
                onClick={() => setOpen(false)}
              >
                Start a project
              </a>
            ) : (
              <Link
                href={contactHref}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent bg-accent px-6 py-3 text-sm font-medium tracking-wide text-off-white"
                onClick={() => setOpen(false)}
              >
                Start a project
              </Link>
            )}
          </div>
        ) : null}
      </div>
    </header>
  );
}
