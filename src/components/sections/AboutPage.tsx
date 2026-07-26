"use client";

import Image from "next/image";
import { aboutPage } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { GsapReveal } from "@/components/motion/GsapReveal";
import { Magnetic } from "@/components/motion/Magnetic";

export function AboutPage() {
  const { images, story, approach, why, north, cta } = aboutPage;

  return (
    <main>
      {/* Hero */}
      <section
        aria-labelledby="about-page-heading"
        className="relative min-h-[68svh] overflow-hidden border-b border-border sm:min-h-[72svh]"
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
          className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/30"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_80%,rgba(92,107,74,0.28),transparent_55%)]"
        />

        <div className="container-nl relative flex min-h-[68svh] flex-col justify-end pb-12 pt-28 sm:min-h-[72svh] sm:pb-16 sm:pt-36">
          <GsapReveal>
            <p className="text-[0.7rem] tracking-[0.24em] text-accent-strong uppercase">
              {aboutPage.eyebrow}
            </p>
            <h1
              id="about-page-heading"
              className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,6.5vw,4.25rem)] font-semibold leading-[1.02] tracking-tight text-off-white"
            >
              {aboutPage.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-light sm:text-lg">
              {aboutPage.lead}
            </p>
          </GsapReveal>

          <GsapReveal delay={0.1}>
            <ul className="mt-8 flex flex-wrap gap-2">
              {aboutPage.meta.map((item) => (
                <li
                  key={item}
                  className="border border-border/80 bg-bg/40 px-3 py-1.5 text-[0.65rem] tracking-[0.16em] text-stone-light uppercase backdrop-blur-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </GsapReveal>
        </div>
      </section>

      {/* Our Story — editorial */}
      <section
        aria-labelledby="about-story-heading"
        className="overflow-hidden border-b border-border py-20 sm:py-28"
      >
        <div className="container-nl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <GsapReveal>
              <p className="text-[0.7rem] tracking-[0.24em] text-accent-strong uppercase">
                {story.eyebrow}
              </p>
              <h2
                id="about-story-heading"
                className="mt-3 max-w-md font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-tight text-off-white"
              >
                {story.title}
              </h2>
            </GsapReveal>

            <GsapReveal delay={0.08}>
              <p className="text-[0.65rem] tracking-[0.2em] text-stone uppercase">
                Est. Leeds · Northern England
              </p>
            </GsapReveal>
          </div>

          {/* Pull quote */}
          <GsapReveal delay={0.06}>
            <blockquote className="relative mt-14 max-w-4xl border-l-2 border-accent-strong pl-6 sm:mt-16 sm:pl-10">
              <p className="font-display text-[clamp(1.65rem,4.2vw,3rem)] font-semibold leading-[1.15] tracking-tight text-off-white">
                {story.pullQuote}
              </p>
            </blockquote>
          </GsapReveal>

          {/* Overlapping photo stack + body */}
          <div className="mt-16 grid items-end gap-12 lg:mt-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10">
            <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
              {/* Main studio plane */}
              <GsapReveal>
                <figure
                  className="group relative aspect-[16/11] overflow-hidden border border-border bg-bg-elevated"
                  data-cursor="hover"
                  data-cursor-label="Studio"
                >
                  <Image
                    src={images.studio.src}
                    alt={images.studio.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <figcaption className="absolute bottom-3 left-3 bg-bg/80 px-2.5 py-1 text-[0.6rem] tracking-[0.16em] text-stone-light uppercase backdrop-blur-sm">
                    Studio days
                  </figcaption>
                </figure>
              </GsapReveal>

              {/* Mobile: clean two-up stack. Desktop: overlapping offsets */}
              <div className="mt-3 grid grid-cols-2 gap-3 sm:mt-0 sm:contents">
                <GsapReveal delay={0.1} className="sm:contents">
                  <figure
                    className="group relative aspect-[4/5] overflow-hidden border border-border bg-bg-elevated sm:absolute sm:-bottom-8 sm:-left-4 sm:z-10 sm:w-[38%] sm:-rotate-2 lg:-left-6"
                    data-cursor="hover"
                    data-cursor-label="Craft"
                  >
                    <Image
                      src={images.craft.src}
                      alt={images.craft.alt}
                      fill
                      sizes="(max-width: 640px) 45vw, 20vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <figcaption className="absolute bottom-2 left-2 bg-bg/80 px-2 py-0.5 text-[0.55rem] tracking-[0.14em] text-stone-light uppercase backdrop-blur-sm">
                      Craft
                    </figcaption>
                  </figure>
                </GsapReveal>

                <GsapReveal delay={0.16} className="sm:contents">
                  <figure
                    className="group relative aspect-[4/5] overflow-hidden border border-border bg-bg-elevated sm:absolute sm:-right-2 sm:-top-10 sm:z-10 sm:w-[34%] sm:rotate-3 lg:-right-4"
                    data-cursor="hover"
                    data-cursor-label="Team"
                  >
                    <Image
                      src={images.collab.src}
                      alt={images.collab.alt}
                      fill
                      sizes="(max-width: 640px) 45vw, 18vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <figcaption className="absolute bottom-2 left-2 bg-bg/80 px-2 py-0.5 text-[0.55rem] tracking-[0.14em] text-stone-light uppercase backdrop-blur-sm">
                      Collaboration
                    </figcaption>
                  </figure>
                </GsapReveal>
              </div>

              <div className="hidden sm:block sm:h-16" aria-hidden />
            </div>

            <div className="space-y-6 lg:pb-4">
              {story.paragraphs.map((paragraph, index) => (
                <GsapReveal key={paragraph.slice(0, 28)} delay={0.06 * index}>
                  <p className="max-w-md text-[1.02rem] leading-[1.8] text-stone-light sm:text-[1.08rem]">
                    {paragraph}
                  </p>
                </GsapReveal>
              ))}

              {/* Thin meta stats — hairline separators, not Intro tiles */}
              <GsapReveal delay={0.14}>
                <dl className="mt-8 flex flex-wrap items-baseline gap-x-0 gap-y-3 border-t border-border pt-6">
                  {aboutPage.stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className={[
                        "flex min-w-[6.5rem] flex-col pr-6",
                        index > 0 ? "border-l border-border pl-6" : "",
                      ].join(" ")}
                    >
                      <dt className="order-2 mt-1 text-[0.62rem] tracking-[0.14em] text-stone uppercase">
                        {stat.label}
                      </dt>
                      <dd className="order-1 font-display text-xl font-semibold tracking-tight text-off-white">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </GsapReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Approach — open hairline chapters */}
      <section
        aria-labelledby="about-approach-heading"
        className="border-b border-border py-20 sm:py-28"
      >
        <div className="container-nl">
          <GsapReveal>
            <p className="text-[0.7rem] tracking-[0.24em] text-accent-strong uppercase">
              {approach.eyebrow}
            </p>
            <h2
              id="about-approach-heading"
              className="mt-4 max-w-2xl font-display text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold tracking-tight text-off-white"
            >
              {approach.title}
            </h2>
          </GsapReveal>

          {/* Desktop: horizontal chapter track */}
          <ol className="mt-14 hidden border-y border-border lg:grid lg:grid-cols-4">
            {approach.steps.map((step, index) => (
              <GsapReveal key={step.step} delay={0.05 * index} className="h-full">
                <li
                  className={[
                    "flex h-full flex-col px-6 py-10",
                    index > 0 ? "border-l border-border" : "",
                  ].join(" ")}
                >
                  <span className="font-display text-sm tracking-[0.2em] text-accent-strong">
                    {step.step}
                  </span>
                  <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight text-off-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-stone-light">
                    {step.description}
                  </p>
                </li>
              </GsapReveal>
            ))}
          </ol>

          {/* Mobile / tablet: horizontal scroll snap */}
          <div className="mt-12 lg:hidden">
            <ol className="flex snap-x snap-mandatory overflow-x-auto border-y border-border [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {approach.steps.map((step, index) => (
                <li
                  key={step.step}
                  className={[
                    "w-[80%] shrink-0 snap-start px-5 py-8 sm:w-[52%]",
                    index > 0 ? "border-l border-border" : "",
                  ].join(" ")}
                >
                  <span className="font-display text-sm tracking-[0.2em] text-accent-strong">
                    {step.step}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-off-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-light">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Why — manifesto rows */}
      <section
        aria-labelledby="about-why-heading"
        className="border-b border-border py-20 sm:py-28"
      >
        <div className="container-nl">
          <GsapReveal>
            <p className="text-[0.7rem] tracking-[0.24em] text-accent-strong uppercase">
              {why.eyebrow}
            </p>
            <h2
              id="about-why-heading"
              className="mt-4 max-w-2xl font-display text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold tracking-tight text-off-white"
            >
              {why.title}
            </h2>
          </GsapReveal>

          <ul className="mt-14 border-t border-border">
            {why.points.map((point, index) => (
              <GsapReveal key={point.title} delay={0.05 * index}>
                <li className="grid gap-3 border-b border-border py-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-baseline lg:gap-12 lg:py-10">
                  <h3 className="font-display text-[clamp(1.35rem,2.5vw,1.85rem)] font-semibold tracking-tight text-off-white">
                    {point.title}
                  </h3>
                  <p className="max-w-xl text-sm leading-relaxed text-stone-light sm:text-base">
                    {point.description}
                  </p>
                </li>
              </GsapReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* North band */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="relative min-h-[48svh] sm:min-h-[54svh]"
          data-cursor="hover"
          data-cursor-label="North"
        >
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
          <div className="container-nl relative flex min-h-[48svh] items-end py-14 sm:min-h-[54svh] sm:py-20">
            <GsapReveal>
              <p className="text-[0.7rem] tracking-[0.24em] text-accent-strong uppercase">
                {north.eyebrow}
              </p>
              <p className="mt-4 max-w-lg font-display text-[clamp(1.5rem,3.2vw,2.25rem)] font-semibold leading-tight tracking-tight text-off-white">
                {north.text}
              </p>
            </GsapReveal>
          </div>
        </div>
      </section>

      {/* CTA — open strip, not contact-form card */}
      <section className="py-20 sm:py-24">
        <div className="container-nl">
          <GsapReveal>
            <div className="flex flex-col gap-8 border-y border-border py-10 sm:flex-row sm:items-end sm:justify-between sm:gap-10 sm:py-12">
              <div className="max-w-xl">
                <p className="font-display text-xl font-semibold tracking-tight text-off-white sm:text-2xl">
                  {cta.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone">
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
    </main>
  );
}
