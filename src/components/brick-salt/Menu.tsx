"use client";

import { useEffect, useRef, useState } from "react";
import { brickSaltMenu } from "@/lib/brick-salt-content";
import { Reveal } from "./Reveal";

export function Menu() {
  const [active, setActive] = useState<(typeof brickSaltMenu)[number]["id"]>(
    brickSaltMenu[0].id,
  );
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    brickSaltMenu.forEach((cat) => {
      const el = sectionRefs.current[cat.id];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) setActive(cat.id);
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  function scrollToCategory(id: string) {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <section
      id="menu"
      className="bs-paper border-t-2 border-[var(--bs-charcoal)] bg-[var(--bs-cream)] py-16 sm:py-24 lg:py-28"
      aria-labelledby="menu-heading"
    >
      <div className="bs-container">
        <div className="mb-12 flex flex-col gap-4 border-b-2 border-[var(--bs-charcoal)] pb-8 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="bs-eyebrow">Tonight&apos;s board</p>
            <h2
              id="menu-heading"
              className="font-display mt-4 text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.95] text-[var(--bs-charcoal)]"
            >
              Plates meant
              <br />
              to be shared.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[var(--bs-muted)]">
            A living menu — small plates first, then larger dishes for the
            table. Ask about daily specials.
          </p>
        </div>

        {/* Restaurant menu board: sticky index + continuous list */}
        <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
          <nav
            className="top-[5.5rem] hidden h-fit lg:sticky lg:block"
            aria-label="Menu categories"
          >
            <ul className="space-y-1 border-l-2 border-[var(--bs-charcoal)]">
              {brickSaltMenu.map((cat) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    onClick={() => scrollToCategory(cat.id)}
                    className={`block w-full border-l-4 py-2.5 pl-4 text-left text-[0.7rem] font-bold uppercase tracking-[0.16em] transition-colors ${
                      active === cat.id
                        ? "-ml-0.5 border-[var(--bs-brick)] text-[var(--bs-brick)]"
                        : "border-transparent text-[var(--bs-muted)] hover:text-[var(--bs-charcoal)]"
                    }`}
                    aria-current={active === cat.id ? "true" : undefined}
                  >
                    {cat.category}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-16 sm:space-y-20">
            {brickSaltMenu.map((cat) => (
              <div
                key={cat.id}
                id={`menu-${cat.id}`}
                ref={(el) => {
                  sectionRefs.current[cat.id] = el;
                }}
                className="scroll-mt-28"
              >
                <Reveal>
                  <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-[var(--bs-charcoal)] pb-3">
                    <h3 className="font-display text-3xl text-[var(--bs-charcoal)] sm:text-4xl">
                      {cat.category}
                    </h3>
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--bs-brick)]">
                      {cat.items.length} dishes
                    </span>
                  </div>
                  <ul>
                    {cat.items.map((item) => (
                      <li
                        key={item.name}
                        className="group grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 border-b border-dashed border-[var(--bs-border)] py-5 transition-colors hover:bg-[var(--bs-cream-deep)]/60 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_auto] sm:items-baseline sm:px-2"
                      >
                        <span className="font-display text-xl text-[var(--bs-charcoal)] sm:text-2xl">
                          {item.name}
                        </span>
                        <span className="hidden text-sm text-[var(--bs-muted)] sm:block">
                          {item.ingredients}
                        </span>
                        <span className="font-bold tabular-nums text-[var(--bs-charcoal)]">
                          {item.price}
                        </span>
                        <span className="col-span-2 text-sm text-[var(--bs-muted)] sm:hidden">
                          {item.ingredients}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
