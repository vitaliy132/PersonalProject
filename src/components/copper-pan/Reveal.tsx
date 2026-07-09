"use client";

import { FadeIn, type FadeInProps } from "@/components/ui/FadeIn";

/** The Copper Pan scroll reveal — brand defaults preserved. */
export function Reveal({
  y = 28,
  duration = 0.7,
  viewportMargin = "-80px",
  ...props
}: FadeInProps) {
  return (
    <FadeIn y={y} duration={duration} viewportMargin={viewportMargin} {...props} />
  );
}
