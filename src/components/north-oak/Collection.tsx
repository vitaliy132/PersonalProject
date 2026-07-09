"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/north-oak/Reveal";
import { northOakProducts } from "@/lib/north-oak-content";

export function Collection() {
  const [added, setAdded] = useState<string | null>(null);

  return (
    <section
      id="collection"
      aria-labelledby="collection-heading"
      className="scroll-mt-24 bg-[var(--no-beige)]/55 py-24 sm:py-28"
    >
      <div className="no-container">
        <Reveal>
          <p className="no-eyebrow">Coffee collection</p>
          <h2
            id="collection-heading"
            className="font-display mt-4 max-w-xl text-4xl leading-[1.1] text-[var(--no-espresso)] sm:text-5xl"
          >
            Single-origin lots, roasted for clarity.
          </h2>
          <p className="mt-5 max-w-lg text-base text-[var(--no-muted)]">
            Small-batch profiles that honour origin character — from bright
            florals to deep chocolate sweetness.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {northOakProducts.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.08}>
              <article className="group flex h-full flex-col">
                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--no-sand)]">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col pt-5">
                  <p className="text-[0.7rem] font-medium tracking-[0.14em] text-[var(--no-green)] uppercase">
                    {product.origin}
                  </p>
                  <h3 className="font-display mt-2 text-2xl text-[var(--no-espresso)]">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--no-muted)]">
                    {product.notes}
                  </p>
                  <div className="mt-auto flex items-end justify-between gap-3 pt-6">
                    <div>
                      <p className="text-sm font-medium text-[var(--no-espresso)]">
                        {product.price}
                      </p>
                      <p className="text-xs text-[var(--no-muted)]">
                        {product.weight}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="no-btn no-btn-secondary !px-4 !py-2.5 text-[0.7rem]"
                      onClick={() => {
                        setAdded(product.id);
                        window.setTimeout(() => setAdded(null), 1600);
                      }}
                    >
                      {added === product.id ? "Added" : "Add to cart"}
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
