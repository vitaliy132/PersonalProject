"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { formaImages, formatPrice } from "@/lib/forma-content";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative min-h-[88svh] overflow-hidden bg-[var(--fo-panel)] text-white"
      aria-labelledby="forma-hero-heading"
    >
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={formaImages.hero.src}
          alt={formaImages.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(9,9,11,0.82)_0%,rgba(9,9,11,0.35)_48%,rgba(9,9,11,0.55)_100%)]" />
      </motion.div>

      <div className="fo-container relative z-10 flex min-h-[88svh] flex-col justify-end pb-8 pt-28 sm:pb-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-3xl">
            <motion.p
              className="font-mono text-[0.7rem] tracking-[0.2em] text-white/70 uppercase"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              System / 01 · Everyday carry
            </motion.p>
            <motion.h1
              id="forma-hero-heading"
              className="font-display mt-5 text-[3.2rem] leading-[0.95] sm:text-6xl lg:text-[5.25rem]"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
            >
              Designed for everyday journeys.
            </motion.h1>
            <motion.p
              className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16 }}
            >
              Premium essentials built with thoughtful design, exceptional
              materials and timeless functionality.
            </motion.p>
            <motion.div
              className="mt-9 flex flex-wrap gap-3"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
            >
              <Link href="/work/forma-studio/shop" className="fo-btn fo-btn-primary !bg-white !text-[var(--fo-ink)]">
                Shop collection
              </Link>
              <Link href="#story" className="fo-btn fo-btn-ghost-light">
                Explore the brand
              </Link>
            </motion.div>
          </div>

          <motion.aside
            className="border border-white/20 bg-white/8 p-5 backdrop-blur-md sm:max-w-sm lg:justify-self-end"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[0.65rem] tracking-[0.16em] text-[var(--fo-accent)] uppercase">
                  SKU · F-BP-20
                </p>
                <p className="mt-2 text-lg font-medium tracking-tight">
                  Everyday Backpack
                </p>
              </div>
              <p className="font-mono text-sm">{formatPrice(180)}</p>
            </div>
            <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-white/15 pt-4 font-mono text-[0.65rem] tracking-wide text-white/70 uppercase">
              <div>
                <dt className="text-white/40">Vol</dt>
                <dd className="mt-1 text-white">20L</dd>
              </div>
              <div>
                <dt className="text-white/40">Shell</dt>
                <dd className="mt-1 text-white">RPET</dd>
              </div>
              <div>
                <dt className="text-white/40">Weight</dt>
                <dd className="mt-1 text-white">890g</dd>
              </div>
            </dl>
            <Link
              href="/work/forma-studio/product/everyday-backpack"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline"
            >
              Configure product
              <ArrowUpRight size={15} />
            </Link>
          </motion.aside>
        </div>

        <motion.div
          className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-white/15 bg-white/15 font-mono text-[0.65rem] tracking-[0.12em] text-white/80 uppercase sm:grid-cols-4"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {[
            ["4.9", "Avg rating"],
            ["128+", "Verified reviews"],
            ["£100+", "Free UK ship"],
            ["30d", "Easy returns"],
          ].map(([value, label]) => (
            <div key={label} className="bg-[var(--fo-panel)]/80 px-4 py-3 backdrop-blur-sm">
              <p className="text-base tracking-normal text-white normal-case">{value}</p>
              <p className="mt-1 text-white/45">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
