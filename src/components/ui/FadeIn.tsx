"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  viewportMargin?: string;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 24,
  duration = 0.55,
  viewportMargin = "-60px",
}: FadeInProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/** Alias for microsite usage — same primitive as FadeIn. */
export const Reveal = FadeIn;
