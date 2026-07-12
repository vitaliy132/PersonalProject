"use client";

import { PinSection, SplitText } from "@/components/arden/motion";
import { ardenCapabilities } from "@/lib/arden-content";

const washes = [
  "radial-gradient(ellipse at 20% 30%, rgba(42,99,70,0.22), transparent 55%)",
  "radial-gradient(ellipse at 70% 20%, rgba(196,160,110,0.18), transparent 50%)",
  "radial-gradient(ellipse at 40% 70%, rgba(42,99,70,0.2), transparent 55%)",
  "radial-gradient(ellipse at 80% 60%, rgba(196,160,110,0.15), transparent 50%)",
];

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative bg-[var(--aw-ink)] text-[var(--aw-mist)]"
      aria-label="Capabilities"
    >
      <div className="aw-container relative z-10 py-20 sm:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="aw-eyebrow !text-[var(--aw-champagne)]">Capabilities</p>
            <SplitText
              as="h2"
              mode="words"
              className="font-display mt-5 max-w-3xl text-[clamp(2.4rem,5.5vw,4.5rem)]"
            >
              Four disciplines. One office.
            </SplitText>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[var(--aw-mist)]/45 lg:text-right">
            Scroll horizontally through the practice — architecture to private markets.
          </p>
        </div>
      </div>

      <PinSection className="min-h-[100svh]" pinType="horizontal">
        {ardenCapabilities.map((cap, i) => (
          <article
            key={cap.id}
            className="relative flex h-[100svh] w-[min(100vw,30rem)] shrink-0 flex-col justify-between border-l border-white/[0.08] px-8 py-24 sm:w-[min(92vw,36rem)] sm:px-14"
            style={{ backgroundImage: washes[i] }}
          >
            <div>
              <p className="font-display text-[clamp(5rem,12vw,9rem)] leading-none text-[var(--aw-verdant)]/[0.18]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display mt-3 text-[clamp(2.1rem,4.2vw,3.5rem)] leading-[1.08]">
                {cap.title}
              </h3>
              <p className="mt-7 max-w-sm text-[0.95rem] leading-[1.7] text-[var(--aw-mist)]/55">
                {cap.body}
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="font-display text-[clamp(2.75rem,5vw,4rem)] text-[var(--aw-champagne)]">
                {cap.metric}
              </p>
              <p className="mt-2 text-[0.62rem] tracking-[0.2em] text-[var(--aw-mist)]/40 uppercase">
                {cap.metricLabel}
              </p>
            </div>
          </article>
        ))}
      </PinSection>
    </section>
  );
}
