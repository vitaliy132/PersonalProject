"use client";

import { Clock, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/copper-pan/Reveal";
import { useBooking } from "@/components/copper-pan/booking-context";
import {
  copperPanContact,
  copperPanHours,
} from "@/lib/copper-pan-content";

export function Visit() {
  const { openBooking } = useBooking();

  return (
    <section
      id="visit"
      aria-labelledby="visit-heading"
      className="scroll-mt-24 border-t border-[var(--cp-border)] py-24 sm:py-28"
    >
      <div className="cp-container">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <p className="cp-eyebrow">Visit us</p>
            <h2
              id="visit-heading"
              className="font-display mt-4 text-4xl leading-[1.1] text-[var(--cp-ink)] sm:text-5xl"
            >
              Find your table on Copper Lane.
            </h2>
            <p className="mt-5 max-w-md text-base text-[var(--cp-muted)]">
              Walk-ins welcome when we can — reservations recommended for
              evenings and weekends.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex gap-4">
                <MapPin
                  className="mt-0.5 shrink-0 text-[var(--cp-copper)]"
                  size={20}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium tracking-wide text-[var(--cp-ink)] uppercase">
                    Location
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-[var(--cp-muted)]">
                    {copperPanContact.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock
                  className="mt-0.5 shrink-0 text-[var(--cp-copper)]"
                  size={20}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium tracking-wide text-[var(--cp-ink)] uppercase">
                    Hours
                  </p>
                  <ul className="mt-2 space-y-1.5 text-base text-[var(--cp-muted)]">
                    {copperPanHours.map((row) => (
                      <li
                        key={row.day}
                        className="flex flex-col gap-0.5 sm:flex-row sm:gap-3"
                      >
                        <span className="min-w-[10rem] text-[var(--cp-stone)]">
                          {row.day}
                        </span>
                        <span>{row.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone
                  className="mt-0.5 shrink-0 text-[var(--cp-copper)]"
                  size={20}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium tracking-wide text-[var(--cp-ink)] uppercase">
                    Contact
                  </p>
                  <p className="mt-2 text-base text-[var(--cp-muted)]">
                    <a
                      href={`tel:${copperPanContact.phone.replace(/\s/g, "")}`}
                      className="transition-colors hover:text-[var(--cp-copper)]"
                    >
                      {copperPanContact.phone}
                    </a>
                  </p>
                  <p className="mt-1 text-base text-[var(--cp-muted)]">
                    <a
                      href={`mailto:${copperPanContact.email}`}
                      className="transition-colors hover:text-[var(--cp-copper)]"
                    >
                      {copperPanContact.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="cp-btn cp-btn-primary mt-10"
              onClick={openBooking}
            >
              Book a table
            </button>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="cp-map-grid relative flex min-h-[22rem] items-center justify-center overflow-hidden border border-[var(--cp-border)] sm:min-h-[28rem]"
              aria-label="Map placeholder for The Copper Pan location"
            >
              <div className="relative z-10 max-w-xs border border-[var(--cp-border-strong)] bg-[var(--cp-bg)]/90 p-6 text-center backdrop-blur-sm">
                <p className="cp-eyebrow">North London</p>
                <p className="font-display mt-3 text-2xl text-[var(--cp-ink)]">
                  18 Copper Lane
                </p>
                <p className="mt-2 text-sm text-[var(--cp-muted)]">
                  Two minutes from the high street. Look for the copper awning.
                </p>
              </div>
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(196,120,74,0.12),transparent_60%)]"
                aria-hidden="true"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
