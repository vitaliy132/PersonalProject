"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { SplitText } from "@/components/arden/motion";
import { usePrefersReducedMotion } from "@/components/motion/usePrefersReducedMotion";
import {
  ardenPortfolio,
  formatCurrency,
} from "@/lib/arden-content";
import { ensureGsap, gsap } from "@/lib/gsap";

ensureGsap();

function AllocationChart() {
  const total = ardenPortfolio.allocation.reduce((s, a) => s + a.value, 0);
  let cumulative = 0;
  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
      <svg viewBox="0 0 180 180" className="h-44 w-44 shrink-0" aria-hidden>
        <circle
          cx="90"
          cy="90"
          r={radius}
          fill="none"
          stroke="var(--aw-mist-deep)"
          strokeWidth="22"
        />
        {ardenPortfolio.allocation.map((slice) => {
          const pct = slice.value / total;
          const dash = circumference * pct;
          const offset = -circumference * cumulative;
          cumulative += pct;
          return (
            <circle
              key={slice.label}
              data-slice
              cx="90"
              cy="90"
              r={radius}
              fill="none"
              stroke={slice.color}
              strokeWidth="22"
              strokeDasharray={`${dash} ${circumference - dash}`}
              strokeDashoffset={offset}
              transform="rotate(-90 90 90)"
            />
          );
        })}
      </svg>
      <ul className="w-full space-y-3">
        {ardenPortfolio.allocation.map((slice) => (
          <li key={slice.label} className="flex items-center justify-between gap-4 text-sm">
            <span className="flex items-center gap-2 text-[var(--aw-ink)]">
              <span
                className="h-2.5 w-2.5 shrink-0"
                style={{ background: slice.color }}
              />
              {slice.label}
            </span>
            <span className="tabular-nums text-[var(--aw-slate)]">{slice.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Sparkline() {
  const points = ardenPortfolio.performance;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const w = 320;
  const h = 80;
  const coords = points.map((v, i) => {
    const x = (i / (points.length - 1)) * w;
    const y = h - ((v - min) / (max - min || 1)) * (h - 8) - 4;
    return { x, y };
  });
  const line = coords
    .map((p, i) => `${i === 0 ? "M" : "L"}${p.x} ${p.y}`)
    .join(" ");
  const area = `${line} L${w} ${h} L0 ${h} Z`;

  return (
    <div>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="h-28 w-full"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="awPerfFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--aw-champagne)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--aw-champagne)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#awPerfFill)" />
        <path
          data-spark
          d={line}
          fill="none"
          stroke="var(--aw-champagne)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <div className="mt-3 flex justify-between text-[0.62rem] tracking-[0.14em] text-[var(--aw-slate)] uppercase">
        {ardenPortfolio.months.filter((_, i) => i % 3 === 0).map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </div>
  );
}

export function PlatformClient() {
  const rootRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduced) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-platform-card]", {
        y: 36,
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.15,
      });

      const obj = { val: 0 };
      gsap.to(obj, {
        val: ardenPortfolio.netWorth,
        duration: 1.8,
        ease: "power2.out",
        delay: 0.2,
        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.textContent = formatCurrency(Math.round(obj.val));
          }
        },
      });

      const slices = root.querySelectorAll("[data-slice]");
      slices.forEach((node) => {
        const el = node as SVGCircleElement;
        const full = 2 * Math.PI * 70;
        const current = el.getAttribute("stroke-dasharray") || `${full} 0`;
        gsap.fromTo(
          el,
          { strokeDasharray: `0 ${full}` },
          {
            strokeDasharray: current,
            duration: 1.4,
            ease: "power2.out",
            delay: 0.4,
          },
        );
      });

      const spark = root.querySelector("[data-spark]") as SVGPathElement | null;
      if (spark) {
        const length = spark.getTotalLength();
        gsap.set(spark, {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: 1,
        });
        gsap.to(spark, {
          strokeDashoffset: 0,
          duration: 1.4,
          ease: "power2.out",
          delay: 0.5,
        });
      }

      gsap.from("[data-holding-row]", {
        y: 16,
        opacity: 0,
        stagger: 0.06,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-holdings]",
          start: "top 80%",
          once: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <div ref={rootRef} className="relative pb-28 pt-32 sm:pt-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_20%_0%,rgba(42,99,70,0.1),transparent_55%)]" />
      <div className="aw-container relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="aw-eyebrow">Platform</p>
            <SplitText
              as="h1"
              mode="words"
              className="font-display mt-4 text-[clamp(2.6rem,5.5vw,4.5rem)] text-[var(--aw-ink)]"
            >
              Portfolio overview
            </SplitText>
            <p className="mt-3 text-sm text-[var(--aw-slate)]">
              Private workspace · Mayfair desk
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/work/arden-wealth/planning" className="aw-btn aw-btn-outline">
              Planning
            </Link>
            <Link href="/work/arden-wealth/advisory" className="aw-btn aw-btn-primary">
              Advisory
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <div
            data-platform-card
            className="aw-panel relative overflow-hidden col-span-1 p-8 lg:col-span-1"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--aw-verdant-soft)]" />
            <p className="text-[0.62rem] tracking-[0.18em] text-[var(--aw-slate)] uppercase">
              Net worth
            </p>
            <p className="font-display mt-4 text-4xl text-[var(--aw-ink)] sm:text-5xl">
              <span ref={numberRef}>
                {reduced ? formatCurrency(ardenPortfolio.netWorth) : "£0"}
              </span>
            </p>
            <div className="mt-4 inline-flex border border-[var(--aw-verdant)]/25 bg-[var(--aw-verdant-soft)] px-2.5 py-1 text-sm text-[var(--aw-verdant)]">
              +{ardenPortfolio.changeYtd}% {ardenPortfolio.changeLabel}
            </div>
          </div>

          <div data-platform-card className="aw-panel p-8 lg:col-span-2">
            <p className="text-[0.62rem] tracking-[0.18em] text-[var(--aw-slate)] uppercase">
              12-month performance
            </p>
            <div className="mt-5">
              <Sparkline />
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <div data-platform-card className="aw-panel p-8">
            <p className="mb-7 text-[0.62rem] tracking-[0.18em] text-[var(--aw-slate)] uppercase">
              Asset allocation
            </p>
            <AllocationChart />
          </div>

          <div data-platform-card className="aw-panel p-8" data-holdings>
            <p className="mb-7 text-[0.62rem] tracking-[0.18em] text-[var(--aw-slate)] uppercase">
              Holdings
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[28rem] text-left text-sm">
                <thead>
                  <tr className="border-b border-[var(--aw-border)] text-[0.65rem] tracking-[0.12em] text-[var(--aw-slate)] uppercase">
                    <th className="pb-3 font-semibold">Name</th>
                    <th className="pb-3 font-semibold">Type</th>
                    <th className="pb-3 text-right font-semibold">Value</th>
                    <th className="pb-3 text-right font-semibold">Chg</th>
                  </tr>
                </thead>
                <tbody>
                  {ardenPortfolio.holdings.map((h) => (
                    <tr
                      key={h.name}
                      data-holding-row
                      className="border-b border-[var(--aw-border)]/60"
                    >
                      <td className="py-3.5 font-medium text-[var(--aw-ink)]">
                        {h.name}
                      </td>
                      <td className="py-3.5 text-[var(--aw-slate)]">{h.type}</td>
                      <td className="py-3.5 text-right tabular-nums">
                        {formatCurrency(h.value)}
                      </td>
                      <td
                        className={`py-3.5 text-right tabular-nums ${
                          h.change >= 0
                            ? "text-[var(--aw-verdant)]"
                            : "text-red-700"
                        }`}
                      >
                        {h.change >= 0 ? "+" : ""}
                        {h.change}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
