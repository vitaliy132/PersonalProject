"use client";

import Image from "next/image";
import { aboutPage } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { GsapReveal } from "@/components/motion/GsapReveal";
import { Magnetic } from "@/components/motion/Magnetic";

export function AboutPage() {
  const { images } = aboutPage;

  return (
    <main>
      {/* Hero */}
      <section
        aria-labelledby="about-page-heading"
        className="relative min-h-[78svh] overflow-hidden border-b border-border"
      >
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-bg via-bg/75 to-bg/35"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_80%,rgba(92,107,74,0.28),transparent_55%)]"
        />

        <div className="container-nl relative flex min-h-[78svh] flex-col justify-end pb-14 pt-32 sm:pb-20 sm:pt-40">
          <GsapReveal>
            <p className="text-[0.7rem] tracking-[0.24em] text-accent-strong uppercase">
              {aboutPage.eyebrow}
            </p>
            <h1
              id="about-page-heading"
              className="mt-4 max-w-3xl font-display text-[clamp(2.5rem,7vw,4.5rem)] font-semibold leading-[1.02] tracking-tight text-off-white"
            >
              {aboutPage.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-light sm:text-lg">
              {aboutPage.lead}
            </p>
          </GsapReveal>

          <GsapReveal delay={0.1}>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-border/80 pt-6">
              {aboutPage.meta.map((item) => (
                <li
                  key={item}
                  className="text-[0.72rem] tracking-[0.18em] text-stone uppercase"
                >
                  {item}
                </li>
              ))}
            </ul>
          </GsapReveal>
        </div>
      </section>

      {/* Story + collage */}
      <section className="section-pad border-b border-border">
        <div className="container-nl grid items-start gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          <div>
            <GsapReveal>
              <p className="text-[0.7rem] tracking-[0.24em] text-accent-strong uppercase">
                The studio
              </p>
              <h2 className="mt-4 max-w-md font-display text-[clamp(1.7rem,3.5vw,2.4rem)] font-semibold tracking-tight text-off-white">
                Design, technology and strategy — under one roof.
              </h2>
            </GsapReveal>

            <div className="mt-10 space-y-7">
              {aboutPage.paragraphs.slice(0, 2).map((paragraph, index) => (
                <GsapReveal key={paragraph.slice(0, 24)} delay={0.05 * index}>
                  <p className="text-[1.05rem] leading-[1.75] text-stone-light sm:text-[1.1rem] sm:leading-[1.8]">
                    {paragraph}
                  </p>
                </GsapReveal>
              ))}
            </div>

            <GsapReveal delay={0.12}>
              <div className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8">
                {aboutPage.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl font-semibold tracking-tight text-off-white sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[0.68rem] tracking-[0.14em] text-stone uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </GsapReveal>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <GsapReveal className="col-span-2">
              <figure className="group relative aspect-[16/10] overflow-hidden border border-border bg-bg-elevated">
                <Image
                  src={images.studio.src}
                  alt={images.studio.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/90 to-transparent px-4 pb-4 pt-12 text-[0.68rem] tracking-[0.16em] text-stone-light uppercase">
                  Studio days
                </figcaption>
              </figure>
            </GsapReveal>

            <GsapReveal delay={0.08}>
              <figure className="group relative aspect-[4/5] overflow-hidden border border-border bg-bg-elevated">
                <Image
                  src={images.craft.src}
                  alt={images.craft.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/90 to-transparent px-3 pb-3 pt-10 text-[0.62rem] tracking-[0.14em] text-stone-light uppercase">
                  Craft
                </figcaption>
              </figure>
            </GsapReveal>

            <GsapReveal delay={0.14} className="mt-6 sm:mt-10">
              <figure className="group relative aspect-[4/5] overflow-hidden border border-border bg-bg-elevated">
                <Image
                  src={images.collab.src}
                  alt={images.collab.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/90 to-transparent px-3 pb-3 pt-10 text-[0.62rem] tracking-[0.14em] text-stone-light uppercase">
                  Collaboration
                </figcaption>
              </figure>
            </GsapReveal>
          </div>
        </div>
      </section>

      {/* Wide north image */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="relative min-h-[52svh] sm:min-h-[60svh]">
          <Image
            src={images.north.src}
            alt={images.north.alt}
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-bg/90 via-bg/55 to-bg/25"
          />
          <div className="container-nl relative flex min-h-[52svh] items-end py-14 sm:min-h-[60svh] sm:py-20">
            <GsapReveal>
              <p className="text-[0.7rem] tracking-[0.24em] text-accent-strong uppercase">
                Built in the North
              </p>
              <p className="mt-4 max-w-lg font-display text-[clamp(1.6rem,3.5vw,2.5rem)] font-semibold leading-tight tracking-tight text-off-white">
                {aboutPage.paragraphs[3]}
              </p>
            </GsapReveal>
          </div>
        </div>
      </section>

      {/* Closing copy + CTA */}
      <section className="section-pad">
        <div className="container-nl grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          <GsapReveal>
            <p className="text-[0.7rem] tracking-[0.24em] text-accent-strong uppercase">
              How we work
            </p>
            <p className="mt-5 max-w-2xl text-[1.05rem] leading-[1.75] text-stone-light sm:text-[1.15rem] sm:leading-[1.8]">
              {aboutPage.paragraphs[2]}
            </p>
          </GsapReveal>

          <GsapReveal delay={0.1}>
            <div className="border border-border bg-bg-elevated p-7 sm:p-9">
              <p className="font-display text-xl font-semibold tracking-tight text-off-white sm:text-2xl">
                Ready to build something that stands out?
              </p>
              <p className="mt-3 text-sm leading-relaxed text-stone">
                Tell us about your brand, your goals, and where you want to go
                next.
              </p>
              <Magnetic strength={0.15} className="mt-7 inline-flex">
                <Button href={aboutPage.cta.href}>{aboutPage.cta.label}</Button>
              </Magnetic>
            </div>
          </GsapReveal>
        </div>
      </section>
    </main>
  );
}
