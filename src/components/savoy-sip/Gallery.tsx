"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { savoyGallery } from "@/lib/savoy-sip-content";
import { SplitReveal } from "./SplitReveal";

gsap.registerPlugin(ScrollTrigger);

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const getScroll = () =>
        -(track.scrollWidth - window.innerWidth + 48);

      gsap.to(track, {
        x: getScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${track.scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.utils.toArray<HTMLElement>(".ss-gallery-slide").forEach((slide) => {
        gsap.fromTo(
          slide.querySelector("img"),
          { scale: 1.15 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: slide,
              containerAnimation: undefined,
              start: "left 90%",
              end: "left 40%",
              scrub: true,
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="overflow-hidden bg-[var(--ss-black)] py-24 text-[var(--ss-ivory)] sm:py-28"
      aria-labelledby="gallery-heading"
    >
      <div className="ss-container mb-12 sm:mb-16">
        <p className="ss-eyebrow" style={{ color: "#a3b089" }}>
          Interior
        </p>
        <SplitReveal
          id="gallery-heading"
          text={"Space designed\nfor stillness."}
          className="font-display mt-6 max-w-3xl text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.05]"
        />
      </div>

      <div
        ref={trackRef}
        className={`flex gap-4 px-4 sm:gap-6 sm:px-8 ${
          reduceMotion ? "overflow-x-auto pb-4" : "w-max"
        }`}
      >
        {savoyGallery.map((item) => (
          <figure
            key={item.id}
            className="ss-gallery-slide relative h-[58vh] w-[78vw] shrink-0 overflow-hidden sm:h-[70vh] sm:w-[42vw] lg:w-[34vw]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 78vw, (max-width: 1024px) 42vw, 34vw"
              className="object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--ss-black)]/70 to-transparent p-6 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--ss-ivory)]/80">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
