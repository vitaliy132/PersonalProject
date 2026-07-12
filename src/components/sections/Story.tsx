"use client";

import { story } from "@/lib/content";
import { GsapReveal } from "@/components/motion/GsapReveal";

export function Story() {
  return (
    <section
      aria-labelledby="story-heading"
      className="section-pad border-t border-border"
    >
      <div className="container-nl">
        <GsapReveal>
          <div className="mx-auto max-w-4xl text-center">
            <h2
              id="story-heading"
              className="font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.08] tracking-tight text-off-white"
            >
              {story.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-stone-light sm:text-lg">
              {story.body}
            </p>
          </div>
        </GsapReveal>
      </div>
    </section>
  );
}
