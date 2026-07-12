"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SplitText } from "@/components/arden/motion";
import { ardenCta } from "@/lib/arden-content";

export function Cta() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-[var(--aw-ink)] py-32 text-[var(--aw-mist)] sm:py-40"
      aria-labelledby="cta-heading"
    >
      <p
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[clamp(8rem,28vw,22rem)] leading-none text-white/[0.03] select-none"
        aria-hidden
      >
        ARDEN
      </p>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(196,160,110,0.2),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_85%,rgba(42,99,70,0.28),transparent_40%)]" />

      <div className="aw-container relative z-10 text-center">
        <div className="flex justify-center">
          <p className="aw-eyebrow !text-[var(--aw-champagne)]">{ardenCta.eyebrow}</p>
        </div>
        <SplitText
          as="h2"
          mode="words"
          className="font-display mx-auto mt-6 max-w-4xl text-[clamp(2.6rem,6.5vw,5.5rem)] leading-[1.08]"
        >
          {ardenCta.headline}
        </SplitText>
        <p
          id="cta-heading"
          className="mx-auto mt-7 max-w-lg text-base leading-[1.7] text-[var(--aw-mist)]/55"
        >
          {ardenCta.body}
        </p>
        <Link href={ardenCta.href} className="aw-btn aw-btn-champagne mt-12">
          {ardenCta.label}
          <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
