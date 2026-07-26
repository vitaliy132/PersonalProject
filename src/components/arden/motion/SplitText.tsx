"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
} from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ensureGsap, gsap, ScrollTrigger } from "@/lib/gsap";

ensureGsap();

type SplitMode = "chars" | "words";

type SplitTextProps = {
  children: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  mode?: SplitMode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  /** Play on mount — use for above-the-fold hero copy */
  immediate?: boolean;
  scrub?: boolean | number;
  trigger?: string | HTMLElement | null;
  once?: boolean;
};

function splitToSpans(text: string, mode: SplitMode) {
  if (mode === "words") {
    return text.split(/(\s+)/).map((part, i) => {
      if (/^\s+$/.test(part)) {
        return (
          <span key={`s-${i}`} className="aw-split-space">
            {part}
          </span>
        );
      }
      return (
        <span key={`w-${i}`} className="aw-split-line">
          <span className="aw-split-word">{part}</span>
        </span>
      );
    });
  }

  return text.split("").map((char, i) => {
    if (char === " " || char === "\n") {
      return (
        <span key={`s-${i}`} className="aw-split-space">
          {" "}
        </span>
      );
    }
    return (
      <span key={`c-${i}`} className="aw-split-line">
        <span className="aw-split-char">{char}</span>
      </span>
    );
  });
}

function isAlreadyInView(el: HTMLElement, ratio = 0.92) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * ratio && rect.bottom > 0;
}

export function SplitText({
  children,
  as: Tag = "h2",
  mode = "words",
  className = "",
  style,
  delay = 0,
  immediate = false,
  scrub = false,
  trigger,
  once = true,
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const units = el.querySelectorAll<HTMLElement>(
      mode === "chars" ? ".aw-split-char" : ".aw-split-word",
    );
    if (!units.length) return;

    if (reduced) {
      gsap.set(units, { clearProps: "all", yPercent: 0, opacity: 1, rotateX: 0 });
      return;
    }

    let cancelled = false;
    const ctx = gsap.context(() => {
      gsap.set(units, {
        yPercent: 110,
        opacity: 0,
        rotateX: 12,
        transformOrigin: "50% 100%",
      });

      const vars = {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.95,
        stagger: mode === "chars" ? 0.016 : 0.05,
        ease: "power3.out",
        delay,
        force3D: true,
        overwrite: "auto" as const,
      };

      if (scrub) {
        gsap.to(units, {
          ...vars,
          delay: 0,
          scrollTrigger: {
            trigger: trigger || el,
            start: "top 82%",
            end: "top 40%",
            scrub: typeof scrub === "number" ? scrub : 1,
          },
        });
        return;
      }

      const play = () => {
        if (cancelled) return;
        gsap.to(units, vars);
      };

      const triggerEl = trigger || el;
      const shouldPlayNow = immediate || isAlreadyInView(el);

      if (shouldPlayNow) {
        play();
        return;
      }

      ScrollTrigger.create({
        trigger: triggerEl,
        start: "top 88%",
        once,
        onEnter: play,
      });

      // Client navigations can remount before scroll/layout settles —
      // re-check after refresh so in-view headings never stay at opacity 0.
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        if (!cancelled && isAlreadyInView(el)) {
          play();
        }
      });
    }, el);

    return () => {
      cancelled = true;
      ctx.revert();
    };
  }, [children, delay, immediate, mode, once, reduced, scrub, trigger]);

  return (
    <Tag
      ref={ref as never}
      className={["aw-split", className].filter(Boolean).join(" ")}
      style={{ perspective: 900, ...style }}
      aria-label={children}
    >
      <span aria-hidden className="aw-split-inner">
        {splitToSpans(children, mode)}
      </span>
    </Tag>
  );
}
