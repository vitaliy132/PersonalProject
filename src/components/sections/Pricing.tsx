"use client";

import { pricing } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { GsapReveal } from "@/components/motion/GsapReveal";
import { Magnetic } from "@/components/motion/Magnetic";

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="section-pad scroll-mt-24 border-t border-border"
    >
      <div className="container-nl">
        <GsapReveal className="mx-auto max-w-2xl text-center">
          <p className="text-[0.7rem] tracking-[0.24em] text-accent-strong uppercase">
            Pricing
          </p>
          <h2
            id="pricing-heading"
            className="mt-4 font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-tight text-off-white"
          >
            Website packages
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-stone-light sm:text-base">
            Transparent starting points. Final scope is shaped after discovery.
          </p>
        </GsapReveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {pricing.map((tier, index) => (
            <GsapReveal key={tier.id} delay={index * 0.08} className="h-full">
              <Magnetic strength={0.06} className="h-full">
                <article
                  className={[
                    "relative flex h-full flex-col border p-7 sm:p-8",
                    tier.highlighted
                      ? "border-accent-strong/50 bg-surface"
                      : "border-border bg-bg-elevated",
                  ].join(" ")}
                  data-cursor="hover"
                >
                  {tier.highlighted ? (
                    <span className="absolute -top-3 left-7 bg-accent px-3 py-1 text-[0.65rem] tracking-[0.16em] text-off-white uppercase">
                      Recommended
                    </span>
                  ) : null}

                  <h3 className="font-display text-xl font-semibold tracking-tight text-off-white">
                    {tier.name}
                  </h3>
                  <p className="mt-5 font-display text-3xl font-semibold tracking-tight text-off-white">
                    {tier.price}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-stone-light">
                    {tier.description}
                  </p>

                  <ul className="mt-8 flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-off-white/90"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-strong" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href={tier.cta.href}
                    variant={tier.highlighted ? "primary" : "secondary"}
                    className="mt-8 w-full"
                  >
                    {tier.cta.label}
                  </Button>
                </article>
              </Magnetic>
            </GsapReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
