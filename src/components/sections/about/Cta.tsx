"use client";

import { aboutPage } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { GsapReveal } from "@/components/motion/GsapReveal";
import { Magnetic } from "@/components/motion/Magnetic";

export function AboutCta() {
  const { cta } = aboutPage;

  return (
      <section className="py-20 sm:py-24">
        <div className="container-nl">
          <GsapReveal>
            <div className="flex flex-col gap-8 border-y border-border py-10 sm:flex-row sm:items-end sm:justify-between sm:gap-10 sm:py-12">
              <div className="max-w-xl">
                <p className="font-display text-xl font-semibold tracking-tight text-off-white sm:text-2xl">
                  {cta.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone sm:text-base">
                  {cta.body}
                </p>
              </div>
              <Magnetic strength={0.15} className="inline-flex shrink-0">
                <Button href={cta.href}>{cta.label}</Button>
              </Magnetic>
            </div>
          </GsapReveal>
        </div>
      </section>
  );
}
