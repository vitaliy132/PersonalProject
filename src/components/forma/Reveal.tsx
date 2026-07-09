"use client";

import { FadeIn, type FadeInProps } from "@/components/ui/FadeIn";

/** FORMA scroll reveal — brand defaults preserved. */
export function Reveal({
  y = 24,
  duration = 0.6,
  viewportMargin = "-70px",
  ...props
}: FadeInProps) {
  return (
    <FadeIn y={y} duration={duration} viewportMargin={viewportMargin} {...props} />
  );
}
