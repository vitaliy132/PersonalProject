"use client";

import { useBooking } from "@/components/brick-salt/booking-context";
import { brickSaltReservation } from "@/lib/brick-salt-content";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";

export function Reservation() {
  const { openBooking } = useBooking();

  return (
    <section
      id={brickSaltReservation.id}
      className="relative overflow-hidden border-t-2 border-[var(--bs-charcoal)] bg-[var(--bs-charcoal)] text-[var(--bs-salt)]"
      aria-labelledby="reservation-heading"
    >
      <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div className="bs-container py-20 sm:py-28 lg:py-32">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[var(--bs-brick-hot)]">
            Reservations
          </p>
          <h2
            id="reservation-heading"
            className="font-display mt-6 max-w-2xl text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.95]"
          >
            {brickSaltReservation.headline.split("\n").map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <Reveal delay={0.1} className="mt-10">
            <MagneticButton
              onClick={openBooking}
              className="bs-btn bs-btn-primary"
            >
              {brickSaltReservation.cta}
            </MagneticButton>
          </Reveal>
        </div>

        <div className="relative flex min-h-[14rem] items-center justify-center overflow-hidden bg-[var(--bs-brick)] px-8 py-16 lg:min-h-full">
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rotate-12 border-2 border-[var(--bs-salt)]/25"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 -rotate-6 border-2 border-[var(--bs-salt)]/20"
            aria-hidden
          />
          <p className="font-display relative text-center text-4xl leading-tight text-[var(--bs-salt)] sm:text-5xl">
            Food.
            <br />
            Fire.
            <br />
            Friends.
          </p>
        </div>
      </div>
    </section>
  );
}
