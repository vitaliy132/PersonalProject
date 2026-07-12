"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { SplitText } from "@/components/arden/motion";
import { usePrefersReducedMotion } from "@/components/motion/usePrefersReducedMotion";
import { ardenPlatformPreview, formatCurrency } from "@/lib/arden-content";
import { ensureGsap, gsap } from "@/lib/gsap";

ensureGsap();

export function PlatformPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reduced) return;

    const cards = section.querySelectorAll("[data-float-card]");
    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 80 + i * 24, opacity: 0, rotateX: 8 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 60%",
              once: true,
            },
            delay: i * 0.14,
          },
        );

        gsap.to(card, {
          y: (i % 2 === 0 ? -1 : 1) * (36 + i * 14),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="platform-preview"
      className="relative overflow-hidden py-28 sm:py-36"
      aria-labelledby="platform-preview-heading"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=70"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-[var(--aw-panel)]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_40%,rgba(42,99,70,0.1),transparent_50%)]" />
      </div>

      <div className="aw-container relative z-10 grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="aw-eyebrow">{ardenPlatformPreview.eyebrow}</p>
          <SplitText
            as="h2"
            mode="words"
            className="font-display mt-5 text-[clamp(2.4rem,5.5vw,4.5rem)] text-[var(--aw-ink)]"
          >
            {ardenPlatformPreview.headline}
          </SplitText>
          <p
            id="platform-preview-heading"
            className="mt-7 max-w-md text-base leading-[1.7] text-[var(--aw-slate)]"
          >
            {ardenPlatformPreview.body}
          </p>
          <Link href={ardenPlatformPreview.href} className="aw-btn aw-btn-primary mt-10">
            Open platform
            <ArrowRight size={15} />
          </Link>
        </div>

        <div
          className="relative mx-auto h-[36rem] w-full max-w-lg perspective-[1200px]"
          style={{ perspective: "1200px" }}
        >
          <div
            data-float-card
            className="aw-glass absolute top-0 left-0 z-10 w-[74%] p-6"
          >
            <p className="text-[0.62rem] tracking-[0.18em] text-[var(--aw-slate)] uppercase">
              Net worth
            </p>
            <p className="font-display mt-3 text-4xl leading-none text-[var(--aw-ink)]">
              {formatCurrency(4_280_000, true)}
            </p>
            <div className="mt-3 inline-flex items-center gap-2 border border-[var(--aw-verdant)]/25 bg-[var(--aw-verdant-soft)] px-2.5 py-1 text-xs text-[var(--aw-verdant)]">
              +8.4% YTD
            </div>
          </div>

          <div
            data-float-card
            className="aw-glass absolute top-44 right-0 z-20 w-[72%] p-6"
          >
            <p className="text-[0.62rem] tracking-[0.18em] text-[var(--aw-slate)] uppercase">
              Allocation
            </p>
            <div className="mt-5 space-y-3">
              {[
                { label: "Equities", w: "38%", color: "var(--aw-verdant)" },
                { label: "Private", w: "24%", color: "var(--aw-ink)" },
                { label: "Bonds", w: "18%", color: "var(--aw-champagne)" },
              ].map((row) => (
                <div key={row.label}>
                  <div className="mb-1.5 flex justify-between text-xs text-[var(--aw-slate)]">
                    <span>{row.label}</span>
                    <span className="tabular-nums">{row.w}</span>
                  </div>
                  <div className="h-1 bg-[var(--aw-mist-deep)]">
                    <div
                      className="h-full transition-all"
                      style={{ width: row.w, background: row.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            data-float-card
            className="aw-glass absolute bottom-8 left-[10%] z-30 w-[78%] p-6"
          >
            <p className="text-[0.62rem] tracking-[0.18em] text-[var(--aw-slate)] uppercase">
              Performance
            </p>
            <svg viewBox="0 0 200 60" className="mt-4 h-16 w-full" aria-hidden>
              <defs>
                <linearGradient id="awSparkFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--aw-champagne)" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="var(--aw-champagne)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 45 C20 42, 30 38, 45 40 S70 20, 90 28 S120 10, 140 18 S170 8, 200 12 L200 60 L0 60 Z"
                fill="url(#awSparkFill)"
              />
              <path
                d="M0 45 C20 42, 30 38, 45 40 S70 20, 90 28 S120 10, 140 18 S170 8, 200 12"
                fill="none"
                stroke="var(--aw-champagne)"
                strokeWidth="2.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
