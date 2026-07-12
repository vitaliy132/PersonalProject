"use client";

import { services } from "@/lib/content";
import { GsapReveal } from "@/components/motion/GsapReveal";
import { Magnetic } from "@/components/motion/Magnetic";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-pad scroll-mt-24 border-t border-border"
    >
      <div className="container-nl">
        <GsapReveal>
          <p className="text-[0.7rem] tracking-[0.24em] text-accent-strong uppercase">
            Services
          </p>
          <h2
            id="services-heading"
            className="mt-4 max-w-2xl font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-tight text-off-white"
          >
            Capabilities built for ambitious brands
          </h2>
        </GsapReveal>

        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <GsapReveal key={service.id} delay={index * 0.05} y={36}>
              <Magnetic strength={0.08} className="h-full">
                <article
                  className="group relative h-full bg-bg p-7 transition-colors duration-500 hover:bg-surface sm:p-9"
                  data-cursor="hover"
                >
                  <span className="text-[0.7rem] tracking-[0.2em] text-stone">
                    0{index + 1}
                  </span>
                  <h3 className="mt-8 font-display text-xl font-semibold tracking-tight text-off-white transition-colors group-hover:text-accent-strong sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone-light">
                    {service.description}
                  </p>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent-strong transition-transform duration-500 group-hover:scale-x-100" />
                </article>
              </Magnetic>
            </GsapReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
