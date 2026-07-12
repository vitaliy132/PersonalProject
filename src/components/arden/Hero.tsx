"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { Parallax, SplitText } from "@/components/arden/motion";
import { usePrefersReducedMotion } from "@/components/motion/usePrefersReducedMotion";
import { arden, ardenHero } from "@/lib/arden-content";
import { ensureGsap, gsap } from "@/lib/gsap";

ensureGsap();

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mistRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content || reduced) return;

    const ctx = gsap.context(() => {
      gsap.to(content, {
        y: 120,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      if (mistRef.current) {
        gsap.to(mistRef.current, {
          yPercent: 25,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      gsap.from("[data-hero-meta]", {
        y: 24,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        delay: 1.1,
      });
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-[var(--aw-ink)]"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <Parallax speed={70} scale={1.16} className="absolute inset-0 h-[125%] -top-[12%]">
          <Image
            src={ardenHero.image.src}
            alt={ardenHero.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%]"
          />
        </Parallax>
        <div className="absolute inset-0 bg-[var(--aw-ink)]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--aw-ink)] via-[var(--aw-ink)]/45 to-[var(--aw-ink)]/25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_15%,rgba(42,99,70,0.35),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_70%,rgba(196,160,110,0.18),transparent_40%)]" />
        <div
          ref={mistRef}
          className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[var(--aw-ink)] to-transparent"
          aria-hidden
        />
      </div>

      <p
        className="aw-vert-label pointer-events-none absolute top-1/2 left-4 z-10 hidden -translate-y-1/2 text-[var(--aw-mist)]/40 lg:left-8 lg:block"
        aria-hidden
      >
        {arden.location}
      </p>

      <div
        ref={contentRef}
        className="aw-container relative z-10 flex min-h-[100svh] flex-col justify-end pb-14 pt-28 sm:pb-16 sm:pt-32"
      >
        <div className="max-w-5xl">
          <p className="aw-eyebrow !text-[var(--aw-champagne)]">{ardenHero.eyebrow}</p>

          <SplitText
            as="h1"
            mode="chars"
            className="font-display mt-6 text-[clamp(3.4rem,12vw,8.75rem)] text-[var(--aw-mist)]"
            delay={0.12}
          >
            {ardenHero.brand}
          </SplitText>

          <div className="mt-8 flex max-w-2xl flex-col gap-6 border-t border-[var(--aw-mist)]/15 pt-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SplitText
                as="p"
                mode="words"
                className="text-[clamp(1.45rem,3.2vw,2.35rem)] font-medium leading-[1.15] text-[var(--aw-mist)]"
                delay={0.5}
              >
                {ardenHero.headline}
              </SplitText>
              <p
                id="hero-heading"
                className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-[var(--aw-mist)]/60 sm:text-base"
              >
                {ardenHero.support}
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3" data-hero-meta>
            <Link href={ardenHero.ctaPrimary.href} className="aw-btn aw-btn-champagne">
              {ardenHero.ctaPrimary.label}
              <ArrowRight size={15} strokeWidth={2} />
            </Link>
            <Link href={ardenHero.ctaSecondary.href} className="aw-btn aw-btn-secondary">
              {ardenHero.ctaSecondary.label}
            </Link>
          </div>
        </div>

        <div
          className="mt-14 flex items-end justify-between gap-6 border-t border-[var(--aw-mist)]/10 pt-6"
          data-hero-meta
        >
          <div className="hidden gap-10 sm:flex">
            {[
              { value: "£2.4B", label: "Private AUM" },
              { value: "42", label: "Family offices" },
              { value: "1978", label: "Established" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-xl text-[var(--aw-mist)] sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[0.6rem] tracking-[0.18em] text-[var(--aw-mist)]/40 uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="aw-scroll-cue ml-auto">
            <span>Scroll</span>
            <div className="aw-scroll-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
