"use client";

import Image from "next/image";
import { aboutPage } from "@/lib/content";
import { GsapReveal } from "@/components/motion/GsapReveal";

export function AboutStory() {
  const { images, story } = aboutPage;

  return (
      <section
        aria-labelledby="about-story-heading"
        className="overflow-hidden border-b border-border py-20 sm:py-28"
      >
        <div className="container-nl">
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

          <GsapReveal delay={0.06}>
            <blockquote className="relative mt-14 max-w-4xl border-l-2 border-accent-strong pl-6 sm:mt-16 sm:pl-10">
              <p className="font-display text-[clamp(1.5rem,3.8vw,2.75rem)] font-semibold leading-[1.18] tracking-tight text-off-white">
                {story.pullQuote}
              </p>
            </blockquote>
          </GsapReveal>

          <div className="mt-16 grid items-end gap-12 lg:mt-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10">
            <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
              <GsapReveal>
                <figure className="group relative aspect-[16/11] overflow-hidden border border-border bg-bg-elevated">
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

              <div className="mt-3 grid grid-cols-2 gap-3 sm:mt-0 sm:contents">
                <GsapReveal delay={0.1} className="sm:contents">
                  <figure className="group relative aspect-[4/5] overflow-hidden border border-border bg-bg-elevated sm:absolute sm:-bottom-8 sm:-left-4 sm:z-10 sm:w-[38%] sm:-rotate-2 lg:-left-6">
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
                  <figure className="group relative aspect-[4/5] overflow-hidden border border-border bg-bg-elevated sm:absolute sm:-right-2 sm:-top-10 sm:z-10 sm:w-[34%] sm:rotate-3 lg:-right-4">
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
            </div>
          </div>
        </div>
      </section>
  );
}
