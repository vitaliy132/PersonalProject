"use client";

import Image from "next/image";
import { aboutPage } from "@/lib/content";
import { GsapReveal } from "@/components/motion/GsapReveal";

export function AboutHero() {
  const { images } = aboutPage;

  return (
      <section
        aria-labelledby="about-page-heading"
        className="relative min-h-[62svh] overflow-hidden border-b border-border sm:min-h-[68svh]"
      >
        <Image
          src={images.hero.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
          aria-hidden
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/55 to-[var(--bg)]/20"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_65%_45%_at_15%_85%,rgba(92,107,74,0.28),transparent_55%)]"
        />

        <div className="container-nl relative flex min-h-[62svh] flex-col justify-end pb-14 pt-28 sm:min-h-[68svh] sm:pb-20 sm:pt-36">
          <GsapReveal>
            <h1
              id="about-page-heading"
              className="max-w-4xl font-display text-[clamp(2.2rem,6vw,4rem)] font-semibold leading-[1.05] tracking-tight text-off-white"
            >
              {aboutPage.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-light sm:text-lg sm:leading-relaxed">
              {aboutPage.lead}
            </p>
          </GsapReveal>
        </div>
      </section>
  );
}
