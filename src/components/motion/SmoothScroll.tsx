"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { useCoarsePointer } from "@/hooks/useCoarsePointer";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ensureGsap, gsap, ScrollTrigger } from "@/lib/gsap";
import { setLenisInstance } from "@/lib/lenis-control";

ensureGsap();

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduced = usePrefersReducedMotion();
  const coarse = useCoarsePointer();
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Native scroll on phones/touch — Lenis fights nested overflow and GSAP pins
    if (reduced || coarse) return;

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      touchMultiplier: 1.4,
      // Use each target's CSS scroll-margin so nav hashes clear the fixed header
      anchors: true,
    });
    lenisRef.current = lenis;
    setLenisInstance(lenis);

    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(ticker);
      lenis.destroy();
      lenisRef.current = null;
      setLenisInstance(null);
    };
  }, [reduced, coarse]);

  useEffect(() => {
    let cancelled = false;
    const hash = window.location.hash;

    const scrollToPosition = (attempt = 0) => {
      if (cancelled) return;

      const lenis = lenisRef.current;

      if (hash) {
        const target = document.getElementById(hash.slice(1));
        if (target) {
          if (lenis) {
            lenis.scrollTo(target, { immediate: true });
          } else {
            target.scrollIntoView();
          }
          ScrollTrigger.refresh();
          return;
        }

        if (attempt < 12) {
          requestAnimationFrame(() => scrollToPosition(attempt + 1));
          return;
        }
      }

      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
      ScrollTrigger.refresh();
    };

    scrollToPosition();

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return <>{children}</>;
}
