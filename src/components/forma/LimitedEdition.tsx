"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { formaProducts, formatPrice } from "@/lib/forma-content";

export function LimitedEdition() {
  const product = formaProducts.find((p) => p.limited);
  const reduceMotion = useReducedMotion();
  if (!product) return null;

  return (
    <section
      aria-labelledby="limited-heading"
      className="relative overflow-hidden bg-[var(--fo-panel)] text-white"
    >
      <div className="absolute inset-0">
        <Image
          src={product.images[0].src}
          alt={product.images[0].alt}
          fill
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(95,111,82,0.35),transparent_55%),linear-gradient(90deg,rgba(9,9,11,0.92),rgba(9,9,11,0.55))]" />
      </div>

      <div className="fo-container relative z-10 grid min-h-[28rem] items-center gap-10 py-16 lg:grid-cols-[1fr_auto] lg:py-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <p className="font-mono text-[0.7rem] tracking-[0.2em] text-[var(--fo-accent)] uppercase">
            Drop · Limited · 120 units
          </p>
          <h2
            id="limited-heading"
            className="font-display mt-4 max-w-xl text-4xl leading-[1.02] sm:text-5xl lg:text-6xl"
          >
            {product.name.replace("FORMA ", "")}
          </h2>
          <p className="mt-5 max-w-md text-white/70">
            {product.description} Seasonal olive shell, tonal hardware — once
            allocated, this colourway retires.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <p className="font-mono text-lg">
              {formatPrice(product.price)}
              {product.compareAt ? (
                <span className="ml-3 text-sm text-white/40 line-through">
                  {formatPrice(product.compareAt)}
                </span>
              ) : null}
            </p>
            <Link
              href={`/work/forma-studio/product/${product.slug}`}
              className="fo-btn fo-btn-accent"
            >
              Claim limited drop
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-px border border-white/15 bg-white/15 font-mono text-[0.68rem] tracking-[0.1em] uppercase sm:w-72"
          initial={reduceMotion ? false : { opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {[
            ["Colour", "Olive"],
            ["Shell", "RPET"],
            ["Status", "Live"],
            ["Region", "UK / EU"],
          ].map(([k, v]) => (
            <div key={k} className="bg-[var(--fo-panel)]/75 px-4 py-4 backdrop-blur-sm">
              <p className="text-white/40">{k}</p>
              <p className="mt-1 text-white normal-case tracking-normal">{v}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
