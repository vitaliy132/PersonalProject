"use client";

import { useState } from "react";
import { savoySipMenu, savoySipMenuSection } from "@/lib/savoy-sip-content";
import { Reveal } from "./Reveal";

export function Menu() {
  const [active, setActive] = useState<(typeof savoySipMenu)[number]["id"]>(
    savoySipMenu[0].id,
  );
  const current = savoySipMenu.find((c) => c.id === active) ?? savoySipMenu[0];

  return (
    <section
      id={savoySipMenuSection.id}
      className="bg-[var(--ss-fog)] py-20 sm:py-28"
      aria-labelledby="menu-heading"
    >
      <div className="ss-container">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="ss-kicker">{savoySipMenuSection.kicker}</p>
              <h2
                id="menu-heading"
                className="font-display mt-5 text-[clamp(2.75rem,6vw,5rem)] text-[var(--ss-ink)]"
              >
                {savoySipMenuSection.headline}
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[var(--ss-mute)]">
              {savoySipMenuSection.body}
            </p>
          </div>
        </Reveal>

        <div
          className="mt-12 flex gap-2 border-b border-[var(--ss-border)] pb-px"
          role="tablist"
          aria-label="Drink categories"
        >
          {savoySipMenu.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={active === cat.id}
              onClick={() => setActive(cat.id)}
              className={`relative px-4 py-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] transition-colors sm:px-6 ${
                active === cat.id
                  ? "text-[var(--ss-ink)]"
                  : "text-[var(--ss-mute)] hover:text-[var(--ss-ink)]"
              }`}
            >
              {cat.category}
              {active === cat.id ? (
                <span className="absolute inset-x-0 -bottom-px h-px bg-[var(--ss-ink)]" />
              ) : null}
            </button>
          ))}
        </div>

        <Reveal key={current.id} className="mt-10" y={28} duration={0.75}>
          <p className="mb-8 text-sm text-[var(--ss-steel)]">{current.blurb}</p>
          <div className="ss-menu-track">
            {current.items.map((item) => (
              <article
                key={item.name}
                className="ss-menu-card group border border-[var(--ss-border)] bg-[var(--ss-paper)] p-7 transition-colors hover:border-[var(--ss-ink)]"
              >
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-[var(--ss-mute)]">
                  {current.category}
                </p>
                <h3 className="font-display mt-6 text-3xl text-[var(--ss-ink)] sm:text-4xl">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm text-[var(--ss-mute)]">
                  {item.ingredients}
                </p>
                <p className="mt-10 text-sm font-medium tabular-nums tracking-wide text-[var(--ss-ink)]">
                  {item.price}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
