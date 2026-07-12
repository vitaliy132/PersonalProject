"use client";

/**
 * Motion policy:
 * - Hospitality / Forma → Framer (this Reveal / FadeIn, MagneticButton)
 * - Arden / marketing GSAP sections → GsapReveal + src/lib/gsap
 * - Brand-owned suites (arden/motion SplitText, brick-salt SplitReveal) stay local
 */
import { FadeIn, type FadeInProps } from "@/components/ui/FadeIn";

/** Shared Framer scroll reveal — hospitality-friendly defaults. */
export function Reveal({
  y = 36,
  duration = 0.9,
  viewportMargin = "-80px",
  ...props
}: FadeInProps) {
  return (
    <FadeIn y={y} duration={duration} viewportMargin={viewportMargin} {...props} />
  );
}
