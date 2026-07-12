"use client";

import { savoySipOrigin } from "@/lib/savoy-sip-content";
import { Reveal } from "./Reveal";

export function Origin() {
  return (
    <section
      id={savoySipOrigin.id}
      className="bg-[var(--ss-paper)] py-20 sm:py-28"
      aria-labelledby="origin-heading"
    >
      <div className="ss-container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <Reveal>
            <p className="ss-kicker">{savoySipOrigin.kicker}</p>
            <h2
              id="origin-heading"
              className="font-display mt-5 whitespace-pre-line text-[clamp(2.75rem,6vw,5rem)] text-[var(--ss-ink)]"
            >
              {savoySipOrigin.headline}
            </h2>
            <p className="mt-7 max-w-md text-base leading-relaxed text-[var(--ss-mute)]">
              {savoySipOrigin.body}
            </p>
          </Reveal>

          <div className="divide-y divide-[var(--ss-border)] border-y border-[var(--ss-border)]">
            {savoySipOrigin.origins.map((origin, i) => (
              <Reveal key={origin.region} delay={0.05 * i} y={24}>
                <div className="group flex flex-col gap-2 py-7 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <div className="flex items-baseline gap-5">
                    <span className="font-display text-2xl text-[var(--ss-foam)] sm:text-3xl">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-3xl text-[var(--ss-ink)] sm:text-4xl">
                        {origin.region}
                      </h3>
                      <p className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--ss-steel)]">
                        {origin.country}
                      </p>
                    </div>
                  </div>
                  <p className="pl-12 text-sm text-[var(--ss-mute)] sm:pl-0 sm:text-right">
                    {origin.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
