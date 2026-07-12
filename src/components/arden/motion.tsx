"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import { usePrefersReducedMotion } from "@/components/motion/usePrefersReducedMotion";
import { ensureGsap, gsap } from "@/lib/gsap";

ensureGsap();

type SplitMode = "chars" | "words";

type SplitTextProps = {
  children: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  mode?: SplitMode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  scrub?: boolean | number;
  trigger?: string | HTMLElement | null;
  once?: boolean;
};

function splitToSpans(text: string, mode: SplitMode) {
  if (mode === "words") {
    return text.split(/(\s+)/).map((part, i) => {
      if (/^\s+$/.test(part)) {
        return <span key={`s-${i}`}>{part}</span>;
      }
      return (
        <span key={`w-${i}`} className="aw-split-word">
          {part}
        </span>
      );
    });
  }

  return text.split("").map((char, i) => (
    <span key={`c-${i}`} className="aw-split-char">
      {char === " " ? "\u00A0" : char}
    </span>
  ));
}

export function SplitText({
  children,
  as: Tag = "h2",
  mode = "chars",
  className = "",
  style,
  delay = 0,
  scrub = false,
  trigger,
  once = true,
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    const units = el.querySelectorAll(
      mode === "chars" ? ".aw-split-char" : ".aw-split-word",
    );
    if (!units.length) return;

    const ctx = gsap.context(() => {
      gsap.set(units, { yPercent: 110, opacity: 0, rotateX: 18 });

      const tween = {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.05,
        stagger: mode === "chars" ? 0.018 : 0.06,
        ease: "power3.out",
        delay,
      };

      if (scrub) {
        gsap.to(units, {
          ...tween,
          delay: 0,
          scrollTrigger: {
            trigger: trigger || el,
            start: "top 80%",
            end: "top 35%",
            scrub: typeof scrub === "number" ? scrub : 1,
          },
        });
      } else {
        gsap.to(units, {
          ...tween,
          scrollTrigger: {
            trigger: trigger || el,
            start: "top 85%",
            once,
          },
        });
      }
    }, el);

    return () => ctx.revert();
  }, [children, delay, mode, once, reduced, scrub, trigger]);

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{ perspective: 800, ...style }}
      aria-label={children}
    >
      <span aria-hidden>{splitToSpans(children, mode)}</span>
    </Tag>
  );
}

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

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || reduced) return;

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
          gsap.set(panel, { opacity: 0, y: 48 });
          tl.to(panels[i - 1], { opacity: 0, y: -32, duration: 0.5 }, i - 0.5);
          tl.to(panel, { opacity: 1, y: 0, duration: 0.5 }, i - 0.5);
        });
      }
    }, section);

    return () => ctx.revert();
  }, [end, pinType, reduced]);

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
