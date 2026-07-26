"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ensureGsap, gsap } from "@/lib/gsap";

ensureGsap();

type PinSectionProps = {
  children: ReactNode;
  className?: string;
  pinType?: "horizontal" | "vertical";
  end?: string;
};

export function PinSection({
  children,
  className = "",
  pinType = "horizontal",
  end = "+=200%",
}: PinSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const isLg = useMediaQuery("(min-width: 1024px)");
  const usePin = !reduced && isLg;

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || !usePin) return;

    const ctx = gsap.context(() => {
      if (pinType === "horizontal") {
        const distance = Math.max(track.scrollWidth - section.clientWidth, 0);
        gsap.to(track, {
          x: () => -distance,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      } else {
        const panels = track.querySelectorAll("[data-pin-panel]");
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        panels.forEach((panel, i) => {
          if (i === 0) {
            gsap.set(panel, { opacity: 1, y: 0 });
            return;
          }
          gsap.set(panel, { opacity: 0, y: 16 });
          tl.to(
            panels[i - 1],
            { opacity: 0, y: -10, duration: 0.4, ease: "power2.inOut" },
            i - 0.5,
          );
          tl.to(
            panel,
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.inOut" },
            i - 0.42,
          );
        });
      }
    }, section);

    return () => ctx.revert();
  }, [end, pinType, usePin]);

  // Stacked fallback on phones / reduced motion — content stays reachable
  if (!usePin) {
    if (pinType === "horizontal") {
      return (
        <div className={`flex flex-col ${className}`}>
          {children}
        </div>
      );
    }

    return (
      <div className={className}>
        <div className="relative min-h-0 py-16 sm:py-24">
          {children}
        </div>
      </div>
    );
  }

  if (pinType === "horizontal") {
    return (
      <div ref={sectionRef} className={`overflow-hidden ${className}`}>
        <div ref={trackRef} className="flex w-max">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      <div ref={trackRef} className="relative min-h-[100svh]">
        {children}
      </div>
    </div>
  );
}
