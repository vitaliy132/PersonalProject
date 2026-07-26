"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ensureGsap, gsap } from "@/lib/gsap";

ensureGsap();

type ParallaxProps = {
  children: ReactNode;
  speed?: number;
  scale?: number;
  className?: string;
};

export function Parallax({
  children,
  speed = 40,
  scale = 1.08,
  className = "",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: -speed, scale },
        {
          y: speed,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement || el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [reduced, scale, speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
