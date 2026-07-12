"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { brickSaltGallery } from "@/lib/brick-salt-content";

gsap.registerPlugin(ScrollTrigger);

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".bs-room").forEach((room) => {
        gsap.fromTo(
          room.querySelector("img"),
          { yPercent: -8, scale: 1.12 },
          {
            yPercent: 8,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: room,
              start: "top bottom",
              end: "bottom top",
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
      className="bg-[var(--bs-charcoal)]"
      aria-labelledby="gallery-heading"
    >
      <div className="bs-container border-b border-[var(--bs-salt)]/15 py-14 sm:py-16">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[var(--bs-brick-hot)]">
          Dining experience
        </p>
        <h2
          id="gallery-heading"
          className="font-display mt-4 text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.95] text-[var(--bs-salt)]"
        >
          Three rooms.
          <br />
          One energy.
        </h2>
      </div>

      {/* Vertical stacked rooms — opposite of coffee horizontal pin gallery */}
      {brickSaltGallery.map((item, index) => (
        <figure
          key={item.id}
          className="bs-room relative h-[80svh] overflow-hidden border-b border-[var(--bs-salt)]/10"
        >
          <div className="absolute inset-0">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[var(--bs-charcoal)]/35" />
          </div>
          <figcaption className="bs-container relative z-10 flex h-full flex-col justify-between py-10 sm:py-14">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[var(--bs-salt)]/70">
              0{index + 1} / 0{brickSaltGallery.length}
            </span>
            <div>
              <p className="font-display text-[clamp(2.75rem,8vw,6rem)] leading-none text-[var(--bs-salt)]">
                {item.title}
              </p>
              <p className="mt-3 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[var(--bs-brick-hot)]">
                {item.caption}
              </p>
            </div>
          </figcaption>
        </figure>
      ))}
    </section>
  );
}
