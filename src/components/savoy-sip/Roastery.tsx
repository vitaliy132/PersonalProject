"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { savoyRoastery } from "@/lib/savoy-sip-content";
import { Reveal } from "./Reveal";
import { SplitReveal } from "./SplitReveal";

gsap.registerPlugin(ScrollTrigger);

export function Roastery() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>(".ss-roast-step");

      steps.forEach((step) => {
        gsap.fromTo(
          step.querySelector(".ss-roast-media"),
          { scale: 1.1, opacity: 0.6 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: step,
              start: "top 75%",
              end: "top 35%",
              scrub: true,
            },
          },
        );

        gsap.fromTo(
          step.querySelector(".ss-roast-copy"),
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
              end: "top 50%",
              scrub: true,
            },
          },
        );
      });

      if (progressRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top center",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 40%",
              end: "bottom 60%",
              scrub: true,
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <section
      ref={sectionRef}
      id={savoyRoastery.id}
      className="relative bg-[var(--ss-ivory-deep)] py-24 sm:py-32 lg:py-40"
      aria-labelledby="roastery-heading"
    >
      <div className="ss-container">
        <p className="ss-eyebrow">The roastery</p>
        <SplitReveal
          id="roastery-heading"
          text={savoyRoastery.headline}
          className="font-display mt-6 max-w-2xl text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] text-[var(--ss-black)]"
        />
        <Reveal className="mt-6 max-w-lg">
          <p className="text-base leading-relaxed text-[var(--ss-stone)] sm:text-lg">
            {savoyRoastery.intro}
          </p>
        </Reveal>

        <div className="relative mt-20 lg:mt-28">
          <div
            className="absolute left-[1.15rem] top-0 hidden h-full w-px bg-[var(--ss-border)] md:left-1/2 md:block"
            aria-hidden
          >
            <div
              ref={progressRef}
              className="h-full w-full origin-top bg-[var(--ss-olive)]"
            />
          </div>

          <ol className="space-y-20 lg:space-y-28">
            {savoyRoastery.steps.map((step, index) => (
              <li
                key={step.id}
                className="ss-roast-step relative grid items-center gap-8 md:grid-cols-2 md:gap-16"
              >
                <div
                  className={`ss-roast-media relative aspect-[4/3] overflow-hidden ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={step.image.src}
                    alt={step.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>

                <div
                  className={`ss-roast-copy ${
                    index % 2 === 1 ? "md:order-1 md:text-right" : ""
                  }`}
                >
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--ss-olive)]">
                    0{index + 1} — {step.title}
                  </p>
                  <h3 className="font-display mt-4 text-3xl text-[var(--ss-black)] sm:text-4xl">
                    {step.title}
                  </h3>
                  <p
                    className={`mt-4 text-base leading-relaxed text-[var(--ss-stone)] ${
                      index % 2 === 1 ? "md:ml-auto" : ""
                    } max-w-md`}
                  >
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
