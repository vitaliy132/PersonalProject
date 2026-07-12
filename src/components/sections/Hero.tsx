"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { hero } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/motion/Magnetic";
import { usePrefersReducedMotion } from "@/components/motion/usePrefersReducedMotion";
import { ensureGsap, gsap } from "@/lib/gsap";

ensureGsap();

const HeroScene = dynamic(
  () =>
    import("@/components/canvas/HeroScene").then((m) => m.HeroScene),
  { ssr: false },
);

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left) / rect.width - 0.5;
      mouse.current.y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(".hero-parallax", {
        x: mouse.current.x * 24,
        y: mouse.current.y * 16,
        duration: 1.1,
        ease: "power2.out",
      });
    };

    if (!reduced) {
      el.addEventListener("mousemove", onMove);
    }

    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set([".hero-brand", ".hero-line", ".hero-cta", ".hero-scroll"], {
          opacity: 1,
          y: 0,
          clearProps: "all",
        });
        return;
      }

      const tl = gsap.timeline({ delay: 1.1 });
      tl.fromTo(
        ".hero-brand",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      )
        .fromTo(
          ".hero-line",
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.05,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.35",
        )
        .fromTo(
          ".hero-cta",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.45",
        )
        .fromTo(
          ".hero-scroll",
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.2",
        );

      gsap.to(".hero-scroll-line", {
        scaleY: 0.35,
        transformOrigin: "top",
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      gsap.to(".hero-bg-shift", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, el);

    return () => {
      el.removeEventListener("mousemove", onMove);
      ctx.revert();
    };
  }, [reduced]);

  return (
    <section
      ref={root}
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32"
    >
      <div className="hero-bg-shift absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(92,107,74,0.18),transparent_55%),radial-gradient(ellipse_at_80%_70%,rgba(138,133,124,0.12),transparent_50%),linear-gradient(180deg,#0a0a0a_0%,#121210_55%,#0a0a0a_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
        <HeroScene mouse={mouse} />
      </div>

      <div className="hero-parallax container-nl relative z-10 w-full">
        <p className="hero-brand mb-8 text-[0.75rem] font-medium tracking-[0.32em] text-accent-strong uppercase opacity-0">
          {hero.brand}
        </p>

        <h1 className="max-w-5xl font-display text-[clamp(2.4rem,7vw,5.6rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-off-white">
          <span className="hero-line block overflow-hidden opacity-0">
            {hero.lineOne}
          </span>
          <span className="hero-line mt-2 block max-w-4xl overflow-hidden text-stone-light opacity-0 sm:mt-3">
            {hero.lineTwo}
          </span>
        </h1>

        <div className="hero-cta mt-10 opacity-0 sm:mt-12">
          <Magnetic>
            <Button href={hero.cta.href}>{hero.cta.label}</Button>
          </Magnetic>
        </div>

        <a
          href="#about"
          className="hero-scroll mt-16 inline-flex items-center gap-3 text-[0.7rem] tracking-[0.22em] text-stone uppercase opacity-0"
          data-cursor="hover"
        >
          <span className="relative h-10 w-px overflow-hidden bg-border-strong">
            <span className="hero-scroll-line absolute inset-x-0 top-0 h-full origin-top bg-accent-strong" />
          </span>
          Scroll
        </a>
      </div>
    </section>
  );
}
