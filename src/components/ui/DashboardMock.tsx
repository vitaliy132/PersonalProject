"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

function Float({
  children,
  className,
  delay = 0,
  y = 8,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -y, 0] }}
      transition={{
        duration: 5.5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export function DashboardMock() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div
        aria-hidden
        className="absolute -inset-8 rounded-[2rem] bg-[radial-gradient(circle_at_50%_30%,var(--accent-glow),transparent_65%)] opacity-60 blur-2xl"
      />

      <Float className="absolute -left-2 top-10 z-20 sm:-left-6" delay={0.2} y={10}>
        <div className="glass-strong rounded-xl px-3.5 py-2.5 shadow-xl">
          <p className="text-[10px] uppercase tracking-wider text-muted">
            Organic traffic
          </p>
          <p className="mt-0.5 font-display text-lg font-semibold text-success">
            +120%
          </p>
        </div>
      </Float>

      <Float
        className="absolute -right-1 top-24 z-20 sm:-right-4"
        delay={0.8}
        y={12}
      >
        <div className="glass-strong rounded-xl px-3.5 py-2.5 shadow-xl">
          <p className="text-[10px] uppercase tracking-wider text-muted">
            Conversion rate
          </p>
          <p className="mt-0.5 font-display text-lg font-semibold text-accent">
            +45%
          </p>
        </div>
      </Float>

      <Float
        className="absolute bottom-16 left-2 z-20 sm:left-4"
        delay={1.4}
        y={9}
      >
        <div className="glass-strong flex items-center gap-2 rounded-full px-3 py-1.5 shadow-xl">
          <span className="h-2 w-2 rounded-full bg-success" />
          <span className="text-xs text-text">Live campaigns</span>
        </div>
      </Float>

      <div className="glass-strong relative overflow-hidden rounded-2xl shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <div className="ml-3 flex-1 rounded-md bg-white/5 px-3 py-1 text-[11px] text-muted">
            northline.studio / dashboard
          </div>
        </div>

        <div className="grid gap-4 p-4 sm:grid-cols-[0.9fr_1.1fr] sm:p-5">
          <div className="space-y-3">
            <div className="rounded-xl border border-border bg-white/[0.02] p-4">
              <p className="text-xs text-muted">Monthly visitors</p>
              <p className="mt-1 font-display text-2xl font-semibold">24.8k</p>
              <div className="mt-4 flex h-16 items-end gap-1">
                {[40, 55, 48, 70, 62, 85, 78, 92, 88, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-accent/20 to-accent"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border bg-white/[0.02] p-3">
                <p className="text-[11px] text-muted">Leads</p>
                <p className="mt-1 font-display text-xl font-semibold">312</p>
              </div>
              <div className="rounded-xl border border-border bg-white/[0.02] p-3">
                <p className="text-[11px] text-muted">CPA</p>
                <p className="mt-1 font-display text-xl font-semibold text-success">
                  -30%
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-white/[0.02] p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-medium text-text">Site preview</p>
              <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px] text-accent">
                Optimised
              </span>
            </div>
            <div className="space-y-3">
              <div className="h-3 w-2/5 rounded-full bg-white/10" />
              <div className="h-2 w-4/5 rounded-full bg-white/5" />
              <div className="h-2 w-3/5 rounded-full bg-white/5" />
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-accent/30 to-white/5" />
                <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-white/10 to-white/5" />
                <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-success/20 to-white/5" />
              </div>
              <div className="mt-2 h-8 w-28 rounded-lg bg-accent/80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
