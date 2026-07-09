"use client";

import { useReducedMotion } from "framer-motion";

export function AuroraBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-0 overflow-hidden"
    >
      {/* Deep night sky */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,#0b1220_0%,#07090d_55%,#050608_100%)]" />

      {/* Soft horizon glow */}
      <div className="absolute inset-x-0 top-0 h-[55%] bg-[radial-gradient(ellipse_at_50%_0%,rgba(80,180,255,0.12),transparent_70%)]" />

      {/* Star field */}
      <div className="aurora-stars absolute inset-0 opacity-70" />
      <div className="aurora-stars aurora-stars-dense absolute inset-0 opacity-40" />

      {/* Aurora curtains */}
      <div
        className={[
          "absolute inset-x-[-20%] top-[-10%] h-[75%]",
          reduceMotion ? "" : "aurora-stage",
        ].join(" ")}
      >
        <div className="aurora-ribbon aurora-ribbon-a" />
        <div className="aurora-ribbon aurora-ribbon-b" />
        <div className="aurora-ribbon aurora-ribbon-c" />
        <div className="aurora-ribbon aurora-ribbon-d" />
        <div className="aurora-veil" />
        <div className="aurora-shimmer" />
      </div>

      {/* Bottom fade into page background */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[var(--bg)]" />
    </div>
  );
}
