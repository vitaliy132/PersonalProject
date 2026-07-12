"use client";

import Image from "next/image";
import { brickSaltDrinks } from "@/lib/brick-salt-content";
import { Reveal } from "./Reveal";

export function Drinks() {
  return (
    <section
      id="drinks"
      className="border-t-2 border-[var(--bs-charcoal)] bg-[var(--bs-cream-deep)] py-20 sm:py-28"
      aria-labelledby="drinks-heading"
    >
      <div className="bs-container">
        <div className="mb-14 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="bs-eyebrow">The bar</p>
            <h2
              id="drinks-heading"
              className="font-display mt-4 text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] text-[var(--bs-charcoal)]"
            >
              Drinks with
              <br />
              the same care.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[var(--bs-muted)]">
            Natural wine, house cocktails and Northern beer — built for food,
            not spectacle.
          </p>
        </div>

        {/* Numbered vertical rail — not coffee 2x2 product grid */}
        <ul className="space-y-0">
          {brickSaltDrinks.map((drink, i) => (
            <li
              key={drink.id}
              className="group border-t-2 border-[var(--bs-charcoal)] last:border-b-2"
            >
              <Reveal delay={0.04 * i}>
                <article className="grid items-stretch gap-0 md:grid-cols-[5rem_minmax(0,1fr)_minmax(0,14rem)] lg:grid-cols-[6rem_minmax(0,1fr)_minmax(0,18rem)]">
                  <div className="flex items-start py-6 font-display text-4xl text-[var(--bs-brick)] md:py-8 md:text-5xl">
                    0{i + 1}
                  </div>
                  <div className="flex flex-col justify-center border-[var(--bs-charcoal)] py-6 md:border-l-2 md:px-8 md:py-8">
                    <h3 className="font-display text-3xl text-[var(--bs-charcoal)] transition-colors group-hover:text-[var(--bs-brick)] sm:text-4xl">
                      {drink.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--bs-muted)] sm:text-base">
                      {drink.description}
                    </p>
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[10rem]">
                    <Image
                      src={drink.image.src}
                      alt={drink.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 18rem"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
