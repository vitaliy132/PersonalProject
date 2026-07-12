"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useBooking } from "@/components/brick-salt/booking-context";
import { brickSalt, brickSaltLocation } from "@/lib/brick-salt-content";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";

export function Location() {
  const reduceMotion = useReducedMotion();
  const { openBooking } = useBooking();

  return (
    <section
      id={brickSaltLocation.id}
      className="border-t-2 border-[var(--bs-charcoal)] bg-[var(--bs-cream)]"
      aria-labelledby="location-heading"
    >
      {/* Map-first industrial split — opposite of coffee text-then-map */}
      <div className="grid lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <div className="bs-map relative min-h-[22rem] overflow-hidden sm:min-h-[28rem] lg:min-h-full lg:h-full">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <div className="relative text-center text-[var(--bs-salt)]">
                <motion.span
                  className="mx-auto block h-3 w-3 bg-[var(--bs-brick)]"
                  initial={reduceMotion ? false : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25, duration: 0.4 }}
                />
                <motion.span
                  className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 border border-[var(--bs-brick)]/50"
                  initial={reduceMotion ? false : { scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35, duration: 0.8 }}
                  aria-hidden
                />
                <p className="font-display mt-10 text-3xl">{brickSalt.name}</p>
                <p className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--bs-salt)]/55">
                  The Calls · Leeds
                </p>
              </div>
            </motion.div>
          </div>
        </Reveal>

        <div className="order-1 border-b-2 border-[var(--bs-charcoal)] px-5 py-16 sm:px-8 sm:py-20 lg:order-2 lg:border-b-0 lg:border-l-2 lg:px-12 lg:py-24">
          <p className="bs-eyebrow">Visit</p>
          <h2
            id="location-heading"
            className="font-display mt-4 text-[clamp(2.25rem,5vw,3.75rem)] leading-[0.95] text-[var(--bs-charcoal)]"
          >
            {brickSaltLocation.headline}
          </h2>

          <Reveal className="mt-10 space-y-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--bs-brick)]">
                {brickSalt.location}
              </p>
              <p className="mt-2 font-display text-2xl text-[var(--bs-charcoal)]">
                {brickSalt.address}
              </p>
              <p className="mt-4 space-x-3 text-sm text-[var(--bs-muted)]">
                <a
                  href={`mailto:${brickSalt.email}`}
                  className="underline-offset-4 hover:text-[var(--bs-charcoal)] hover:underline"
                >
                  {brickSalt.email}
                </a>
                <span aria-hidden>·</span>
                <a
                  href={`tel:${brickSalt.phone.replace(/\s/g, "")}`}
                  className="underline-offset-4 hover:text-[var(--bs-charcoal)] hover:underline"
                >
                  {brickSalt.phone}
                </a>
              </p>
            </div>

            <table className="w-full border-t-2 border-[var(--bs-charcoal)] text-sm">
              <tbody>
                {brickSaltLocation.hours.map((row) => (
                  <tr
                    key={row.day}
                    className="border-b border-[var(--bs-border)]"
                  >
                    <th className="py-3 pr-4 text-left font-medium text-[var(--bs-muted)]">
                      {row.day}
                    </th>
                    <td className="py-3 text-right font-bold tabular-nums text-[var(--bs-charcoal)]">
                      {row.hours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex flex-wrap gap-3">
              <MagneticButton
                onClick={openBooking}
                className="bs-btn bs-btn-primary"
              >
                Book a Table
              </MagneticButton>
              <MagneticButton
                href={`https://maps.google.com/?q=${encodeURIComponent(brickSalt.address)}`}
                className="bs-btn bs-btn-secondary"
              >
                Get directions
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
