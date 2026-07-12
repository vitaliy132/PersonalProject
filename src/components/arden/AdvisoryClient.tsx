"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import gsap from "gsap";
import { SplitText } from "@/components/arden/motion";
import { usePlanning } from "@/components/arden/planning-context";
import { usePrefersReducedMotion } from "@/components/motion/usePrefersReducedMotion";
import {
  ardenAdvisorySteps,
  ardenGoals,
  ardenTimeSlots,
} from "@/lib/arden-content";

type FormState = {
  name: string;
  email: string;
  phone: string;
  aum: string;
  date: string;
  slot: string;
  notes: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  aum: "",
  date: "",
  slot: ardenTimeSlots[0],
  notes: "",
};

export function AdvisoryClient() {
  const { selectedGoalIds } = usePlanning();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initial);
  const [success, setSuccess] = useState(false);
  const [localGoals, setLocalGoals] = useState<string[]>(selectedGoalIds);
  const panelRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    setLocalGoals(selectedGoalIds);
  }, [selectedGoalIds]);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel || reduced) return;
    gsap.fromTo(
      panel,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.55, ease: "power3.out" },
    );
  }, [step, success, reduced]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleGoal(id: string) {
    setLocalGoals((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id],
    );
  }

  function next() {
    setStep((s) => Math.min(s + 1, ardenAdvisorySteps.length - 1));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSuccess(true);
  }

  if (success) {
    return (
      <div className="relative flex min-h-[80svh] items-center py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(42,99,70,0.1),transparent_55%)]" />
        <div className="aw-container relative max-w-2xl text-center">
          <div className="mx-auto mb-6 flex justify-center">
            <p className="aw-eyebrow">Confirmed</p>
          </div>
          <SplitText
            as="h1"
            mode="chars"
            className="font-display mt-2 text-[clamp(2.75rem,6.5vw,5rem)] text-[var(--aw-ink)]"
          >
            We will be in touch.
          </SplitText>
          <p className="mx-auto mt-7 max-w-md leading-relaxed text-[var(--aw-slate)]">
            Thank you, {form.name || "guest"}. Your private consultation is reserved
            for {form.date || "your selected date"} at {form.slot}. A concierge
            note is on its way to {form.email || "your inbox"}.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative pb-28 pt-32 sm:pt-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_50%_0%,rgba(42,99,70,0.08),transparent_50%)]" />
      <div className="aw-container relative max-w-3xl">
        <p className="aw-eyebrow">Advisory</p>
        <SplitText
          as="h1"
          mode="words"
          className="font-display mt-4 text-[clamp(2.6rem,5.5vw,4.25rem)] text-[var(--aw-ink)]"
        >
          Private consultation
        </SplitText>
        <p className="mt-4 max-w-lg leading-relaxed text-[var(--aw-slate)]">
          Ninety minutes with an Arden partner. Structured discovery — no pitch deck theatre.
        </p>

        <ol className="mt-12 flex flex-wrap gap-2">
          {ardenAdvisorySteps.map((s, i) => (
            <li
              key={s.id}
              className={`border px-3.5 py-2 text-[0.62rem] tracking-[0.16em] uppercase transition-colors ${
                i === step
                  ? "border-[var(--aw-ink)] bg-[var(--aw-ink)] text-[var(--aw-mist)]"
                  : i < step
                    ? "border-[var(--aw-verdant)] text-[var(--aw-verdant)]"
                    : "border-[var(--aw-border)] text-[var(--aw-slate)]"
              }`}
            >
              {s.label}
            </li>
          ))}
        </ol>

        <form onSubmit={onSubmit} className="mt-10">
          <div ref={panelRef} className="aw-panel p-8 sm:p-10">
            {step === 0 && (
              <div className="space-y-4">
                <p className="aw-label">What matters most?</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {ardenGoals.map((goal) => {
                    const active = localGoals.includes(goal.id);
                    return (
                      <button
                        key={goal.id}
                        type="button"
                        onClick={() => toggleGoal(goal.id)}
                        className={`border p-4 text-left transition-colors ${
                          active
                            ? "border-[var(--aw-verdant)] bg-[var(--aw-verdant-soft)]"
                            : "border-[var(--aw-border)]"
                        }`}
                      >
                        <span className="font-medium text-[var(--aw-ink)]">
                          {goal.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="aw-label" htmlFor="name">
                    Full name
                  </label>
                  <input
                    id="name"
                    required
                    className="aw-input"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                  />
                </div>
                <div>
                  <label className="aw-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="aw-input"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </div>
                <div>
                  <label className="aw-label" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    className="aw-input"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="aw-label" htmlFor="aum">
                    Approximate investable assets
                  </label>
                  <select
                    id="aum"
                    className="aw-input"
                    value={form.aum}
                    onChange={(e) => update("aum", e.target.value)}
                    required
                  >
                    <option value="">Select range</option>
                    <option value="1-3">£1M – £3M</option>
                    <option value="3-10">£3M – £10M</option>
                    <option value="10-25">£10M – £25M</option>
                    <option value="25+">£25M+</option>
                  </select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="aw-label" htmlFor="date">
                    Preferred date
                  </label>
                  <input
                    id="date"
                    type="date"
                    required
                    className="aw-input"
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                  />
                </div>
                <div>
                  <label className="aw-label" htmlFor="slot">
                    Time (London)
                  </label>
                  <select
                    id="slot"
                    className="aw-input"
                    value={form.slot}
                    onChange={(e) => update("slot", e.target.value)}
                  >
                    {ardenTimeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="aw-label" htmlFor="notes">
                    Notes for the partner
                  </label>
                  <textarea
                    id="notes"
                    rows={4}
                    className="aw-input resize-none"
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4 text-sm leading-relaxed text-[var(--aw-slate)]">
                <p>
                  <span className="font-semibold text-[var(--aw-ink)]">Name:</span>{" "}
                  {form.name}
                </p>
                <p>
                  <span className="font-semibold text-[var(--aw-ink)]">Contact:</span>{" "}
                  {form.email}
                  {form.phone ? ` · ${form.phone}` : ""}
                </p>
                <p>
                  <span className="font-semibold text-[var(--aw-ink)]">Assets:</span>{" "}
                  {form.aum || "—"}
                </p>
                <p>
                  <span className="font-semibold text-[var(--aw-ink)]">Schedule:</span>{" "}
                  {form.date} at {form.slot}
                </p>
                <p>
                  <span className="font-semibold text-[var(--aw-ink)]">Goals:</span>{" "}
                  {localGoals
                    .map((id) => ardenGoals.find((g) => g.id === id)?.title)
                    .filter(Boolean)
                    .join(", ") || "None selected"}
                </p>
                {form.notes && (
                  <p>
                    <span className="font-semibold text-[var(--aw-ink)]">Notes:</span>{" "}
                    {form.notes}
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-wrap justify-between gap-3">
            <button
              type="button"
              onClick={back}
              disabled={step === 0}
              className="aw-btn aw-btn-outline disabled:opacity-40"
            >
              Back
            </button>
            {step < ardenAdvisorySteps.length - 1 ? (
              <button type="button" onClick={next} className="aw-btn aw-btn-primary">
                Continue
              </button>
            ) : (
              <button type="submit" className="aw-btn aw-btn-primary">
                Confirm consultation
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
