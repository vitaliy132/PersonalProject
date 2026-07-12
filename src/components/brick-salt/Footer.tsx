"use client";

import { useBooking } from "@/components/brick-salt/booking-context";
import { brickSalt, brickSaltNav } from "@/lib/brick-salt-content";
import { Logo } from "./Logo";

export function Footer() {
  const { openBooking } = useBooking();

  return (
    <footer className="border-t border-[var(--bs-border)] bg-[var(--bs-charcoal)] text-[var(--bs-salt)]">
      <div className="bs-container py-16 sm:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Logo />
            <p className="font-display mt-5 text-2xl text-[var(--bs-salt)]/90 sm:text-3xl">
              {brickSalt.tagline}
            </p>
            <p className="mt-3 text-sm text-[var(--bs-salt)]/55">
              {brickSalt.city} · {brickSalt.location}
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-8 gap-y-3"
            aria-label="Footer"
          >
            {brickSaltNav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[var(--bs-salt)]/55 transition-colors hover:text-[var(--bs-salt)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={brickSalt.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[var(--bs-salt)]/55 transition-colors hover:text-[var(--bs-salt)]"
            >
              Instagram
            </a>
            <button
              type="button"
              onClick={openBooking}
              className="bs-btn bs-btn-primary"
            >
              Reserve
            </button>
          </div>
        </div>

        <hr className="mt-14 border-0 border-t border-[var(--bs-salt)]/15" />
        <p className="mt-6 text-xs text-[var(--bs-salt)]/40">
          © {new Date().getFullYear()} {brickSalt.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
