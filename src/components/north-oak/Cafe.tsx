import Image from "next/image";
import { MapPin, Clock } from "lucide-react";
import { Reveal } from "@/components/north-oak/Reveal";
import { northOakHours, northOakImages } from "@/lib/north-oak-content";

export function Cafe() {
  return (
    <section
      id="cafe"
      aria-labelledby="cafe-heading"
      className="scroll-mt-24 border-t border-[var(--no-border)] bg-[var(--no-beige)]/40 py-24 sm:py-28"
    >
      <div className="no-container">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <p className="no-eyebrow">Flagship café</p>
            <h2
              id="cafe-heading"
              className="font-display mt-4 text-4xl leading-[1.1] text-[var(--no-espresso)] sm:text-5xl"
            >
              Visit our flagship café
            </h2>
            <p className="mt-5 max-w-md text-base text-[var(--no-muted)]">
              A calm space for filter, espresso and conversation — steps from
              the roastery floor.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex gap-4">
                <MapPin
                  className="mt-0.5 shrink-0 text-[var(--no-green)]"
                  size={20}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium tracking-wide text-[var(--no-espresso)] uppercase">
                    Location
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-[var(--no-muted)]">
                    42 Oak Lane
                    <br />
                    Shoreditch, London E1 6AN
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock
                  className="mt-0.5 shrink-0 text-[var(--no-green)]"
                  size={20}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium tracking-wide text-[var(--no-espresso)] uppercase">
                    Opening hours
                  </p>
                  <ul className="mt-2 space-y-2">
                    {northOakHours.map((row) => (
                      <li
                        key={row.day}
                        className="flex justify-between gap-6 text-sm text-[var(--no-muted)] sm:text-base"
                      >
                        <span>{row.day}</span>
                        <span className="text-[var(--no-espresso)]">
                          {row.hours}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <a href="#newsletter" className="no-btn no-btn-primary mt-10">
              Book a table
            </a>
          </Reveal>

          <div className="grid gap-4">
            <Reveal className="relative aspect-[16/10] overflow-hidden bg-[var(--no-sand)]">
              <Image
                src={northOakImages.cafe.src}
                alt={northOakImages.cafe.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <div
                className="no-map-grid relative flex aspect-[16/9] items-center justify-center border border-[var(--no-border)]"
                role="img"
                aria-label="Map placeholder for North & Oak flagship café in Shoreditch"
              >
                <div className="text-center">
                  <p className="font-display text-2xl text-[var(--no-espresso)]">
                    Shoreditch
                  </p>
                  <p className="mt-2 text-sm text-[var(--no-muted)]">
                    Google Maps placeholder
                  </p>
                  <span className="mx-auto mt-4 block h-3 w-3 rounded-full bg-[var(--no-espresso)] shadow-[0_0_0_8px_rgba(44,33,24,0.12)]" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
