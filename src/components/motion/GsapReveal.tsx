"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

type GsapRevealProps = {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
};

export function GsapReveal({
  children,
  className,
  y = 48,
  delay = 0,
  duration = 1,
  once = true,
}: GsapRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduced) {
      gsap.set(el, { clearProps: "all", opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: once ? "play none none none" : "play none none reverse",
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [reduced, y, delay, duration, once]);

  return (
    <div ref={ref} className={className} style={{ opacity: reduced ? 1 : 0 }}>
      {children}
    </div>
  );
}
