"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function Preloader() {
  const reduced = usePrefersReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduced) {
      setDone(true);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => setDone(true),
    });

    tl.fromTo(
      ".preloader-mark",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
    )
      .to(".preloader-mark", {
        y: -24,
        opacity: 0,
        duration: 0.45,
        ease: "power2.in",
        delay: 0.35,
      })
      .to(
        ".preloader-panel",
        { yPercent: -100, duration: 0.85, ease: "power4.inOut" },
        "-=0.1",
      );

    return () => {
      tl.kill();
    };
  }, [reduced]);

  if (done) return null;

  return (
    <div
      className="preloader-panel fixed inset-0 z-[120] flex items-center justify-center bg-bg"
      aria-hidden
    >
      <p className="preloader-mark font-display text-sm font-medium tracking-[0.28em] text-off-white uppercase">
        Northline
      </p>
    </div>
  );
}
