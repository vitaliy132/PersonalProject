"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { savoyProducts } from "@/lib/savoy-sip-content";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";
import { SplitReveal } from "./SplitReveal";

export function Products() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="shop"
      className="bg-[var(--ss-ivory-deep)] py-24 sm:py-32 lg:py-40"
      aria-labelledby="shop-heading"
    >
      <div className="ss-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="ss-eyebrow">Shop</p>
            <SplitReveal
              id="shop-heading"
              text={"Coffee at home.\nCrafted the same way."}
              className="font-display mt-6 max-w-2xl text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.05] text-[var(--ss-black)]"
            />
          </div>
          <Reveal>
            <p className="max-w-sm text-sm leading-relaxed text-[var(--ss-stone)]">
              Premium subscription and seasonal lots — presented like a fashion
              collection, not a catalogue.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-px bg-[var(--ss-border)] sm:grid-cols-2">
          {savoyProducts.map((product, i) => (
            <li key={product.id} className="bg-[var(--ss-ivory)]">
              <Reveal delay={0.06 * i} className="group h-full">
                <article className="flex h-full flex-col">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                      transition={{
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Image
                        src={product.image.src}
                        alt={product.image.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[var(--ss-olive)]">
                      {product.category}
                    </p>
                    <h3 className="font-display mt-3 text-3xl text-[var(--ss-black)]">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--ss-stone)]">
                      {product.notes}
                    </p>
                    <div className="mt-auto flex items-end justify-between pt-8">
                      <div>
                        <p className="text-sm tabular-nums text-[var(--ss-black)]">
                          {product.price}
                        </p>
                        <p className="mt-1 text-xs text-[var(--ss-stone-soft)]">
                          {product.weight}
                        </p>
                      </div>
                      <MagneticButton
                        href="#location"
                        className="ss-btn ss-btn-dark !px-4 !py-3"
                      >
                        Enquire
                      </MagneticButton>
                    </div>
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
