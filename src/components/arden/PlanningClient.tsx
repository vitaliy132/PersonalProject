"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { SplitText } from "@/components/arden/motion";
import { usePlanning } from "@/components/arden/planning-context";
import { usePrefersReducedMotion } from "@/components/motion/usePrefersReducedMotion";
import {
  ardenGoals,
  ardenRiskProfiles,
  formatCurrency,
} from "@/lib/arden-content";
import { ensureGsap, gsap } from "@/lib/gsap";

ensureGsap();

export function PlanningClient() {
  const {
    selectedGoalIds,
    toggleGoal,
    monthlyContribution,
    setMonthlyContribution,
    horizonYears,
    setHorizonYears,
    riskId,
    setRiskId,
    projectedValue,
    totalTarget,
  } = usePlanning();

  const chartRef = useRef<SVGPathElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  const progress = totalTarget
    ? Math.min(projectedValue / totalTarget, 1.4)
    : 0;
  const chartHeight = 160;
  const chartWidth = 400;
  const endY = chartHeight - progress * (chartHeight - 20);
  const path = `M0 ${chartHeight} C ${chartWidth * 0.35} ${chartHeight * 0.85}, ${chartWidth * 0.55} ${endY + 40}, ${chartWidth} ${endY}`;

  useEffect(() => {
    if (reduced || !chartRef.current) return;
    const el = chartRef.current;
    const length = el.getTotalLength();
    gsap.fromTo(
      el,
      { strokeDasharray: length, strokeDashoffset: length },
      { strokeDashoffset: 0, duration: 0.9, ease: "power2.out" },
    );
  }, [path, reduced]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduced) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-plan-block]", {
        y: 28,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
      });
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <div ref={rootRef} className="relative pb-28 pt-32 sm:pt-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_80%_0%,rgba(196,160,110,0.1),transparent_50%)]" />
      <div className="aw-container relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="aw-eyebrow">Planning</p>
            <SplitText
              as="h1"
              mode="words"
              className="font-display mt-4 text-[clamp(2.6rem,5.5vw,4.5rem)] text-[var(--aw-ink)]"
            >
              Scenario studio
            </SplitText>
            <p className="mt-4 max-w-lg text-[var(--aw-slate)] leading-relaxed">
              Select goals, set contributions and risk — watch the projection reshape in real time.
            </p>
          </div>
          <Link href="/work/arden-wealth/advisory" className="aw-btn aw-btn-primary">
            Discuss with advisor
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div data-plan-block className="space-y-4">
            <p className="text-[0.62rem] tracking-[0.18em] text-[var(--aw-slate)] uppercase">
              Goals
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {ardenGoals.map((goal) => {
                const active = selectedGoalIds.includes(goal.id);
                return (
                  <button
                    key={goal.id}
                    type="button"
                    onClick={() => toggleGoal(goal.id)}
                    className={`border p-6 text-left transition-all duration-300 ${
                      active
                        ? "border-[var(--aw-verdant)] bg-[var(--aw-verdant-soft)] shadow-[0_16px_40px_rgba(42,99,70,0.12)]"
                        : "border-[var(--aw-border)] bg-[var(--aw-panel)] hover:border-[var(--aw-ink)]/30 hover:shadow-[var(--aw-shadow)]"
                    }`}
                  >
                    <p className="font-display text-xl text-[var(--aw-ink)]">
                      {goal.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--aw-slate)]">
                      {goal.description}
                    </p>
                    <p className="mt-5 text-[0.62rem] tracking-[0.16em] text-[var(--aw-champagne)] uppercase">
                      Target {formatCurrency(goal.target, true)} · {goal.horizon}y
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div data-plan-block className="aw-panel space-y-8 p-8">
            <div>
              <label className="aw-label" htmlFor="contribution">
                Monthly contribution — {formatCurrency(monthlyContribution)}
              </label>
              <input
                id="contribution"
                type="range"
                min={1000}
                max={25000}
                step={500}
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                className="mt-2 w-full accent-[var(--aw-verdant)]"
              />
            </div>

            <div>
              <label className="aw-label" htmlFor="horizon">
                Horizon — {horizonYears} years
              </label>
              <input
                id="horizon"
                type="range"
                min={3}
                max={30}
                step={1}
                value={horizonYears}
                onChange={(e) => setHorizonYears(Number(e.target.value))}
                className="mt-2 w-full accent-[var(--aw-verdant)]"
              />
            </div>

            <div>
              <p className="aw-label">Risk profile</p>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {ardenRiskProfiles.map((risk) => (
                  <button
                    key={risk.id}
                    type="button"
                    onClick={() => setRiskId(risk.id)}
                    className={`border px-3 py-3 text-sm font-medium transition-colors ${
                      riskId === risk.id
                        ? "border-[var(--aw-ink)] bg-[var(--aw-ink)] text-[var(--aw-mist)]"
                        : "border-[var(--aw-border)] text-[var(--aw-ink)] hover:border-[var(--aw-ink)]/40"
                    }`}
                  >
                    {risk.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-[var(--aw-border)] pt-6">
              <p className="text-[0.65rem] tracking-[0.16em] text-[var(--aw-slate)] uppercase">
                Projected outcome
              </p>
              <p className="font-display mt-2 text-4xl text-[var(--aw-ink)]">
                {formatCurrency(projectedValue)}
              </p>
              <p className="mt-1 text-sm text-[var(--aw-slate)]">
                vs target {formatCurrency(totalTarget || 0)}
                {totalTarget > 0 && (
                  <span
                    className={
                      projectedValue >= totalTarget
                        ? " text-[var(--aw-verdant)]"
                        : " text-[var(--aw-champagne)]"
                    }
                  >
                    {" "}
                    ({Math.round((projectedValue / totalTarget) * 100)}%)
                  </span>
                )}
              </p>

              <svg
                viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                className="mt-6 h-36 w-full"
                aria-hidden
              >
                <line
                  x1="0"
                  y1={chartHeight - Math.min(1, totalTarget ? projectedValue / totalTarget : 0) * 0}
                  x2={chartWidth}
                  y2={20}
                  stroke="var(--aw-border)"
                  strokeDasharray="4 4"
                  opacity={totalTarget ? 0.8 : 0}
                />
                <path
                  ref={chartRef}
                  d={path}
                  fill="none"
                  stroke="var(--aw-verdant)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
