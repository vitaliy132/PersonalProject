"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { savoyExperiences } from "@/lib/savoy-sip-content";
import { Reveal } from "./Reveal";
import { SplitReveal } from "./SplitReveal";

export function CoffeeExperience() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="bg-[var(--ss-black)] py-24 text-[var(--ss-ivory)] sm:py-32 lg:py-40"
      aria-labelledby="experience-heading"
    >
      <div className="ss-container">
        <p className="ss-eyebrow" style={{ color: "#a3b089" }}>
          The experience
        </p>
        <SplitReveal
          id="experience-heading"
          text={"Coffee,\nfelt before it is tasted."}
          className="font-display mt-6 max-w-3xl text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.05]"
        />
      </div>

      <div className="mt-16 space-y-0 sm:mt-24">
        {savoyExperiences.map((item, index) => (
          <article
            key={item.id}
            className="group border-t border-[var(--ss-ivory)]/12"
          >
            <div className="ss-container grid items-center gap-8 py-12 lg:grid-cols-2 lg:gap-16 lg:py-16">
              <Reveal
                delay={0.05}
                className={`relative aspect-[5/4] overflow-hidden ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <motion.div
                  className="absolute inset-0"
                  whileHover={reduceMotion ? undefined : { scale: 1.06 }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>
                <div className="pointer-events-none absolute inset-0 bg-[var(--ss-black)]/15 transition-opacity duration-700 group-hover:opacity-0" />
              </Reveal>

              <Reveal
                delay={0.12}
                className={index % 2 === 1 ? "lg:order-1" : ""}
              >
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--ss-stone-soft)]">
                  0{index + 1}
                </p>
                <h3 className="font-display mt-4 text-4xl sm:text-5xl">
                  {item.title}
                </h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--ss-stone-soft)] sm:text-lg">
                  {item.description}
                </p>
              </Reveal>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
