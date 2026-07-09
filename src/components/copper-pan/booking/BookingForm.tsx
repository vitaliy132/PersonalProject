"use client";

import type { FormEvent } from "react";
import {
  copperPanPartySizes,
  copperPanTimes,
} from "@/lib/copper-pan-content";
import type { FormErrors, FormState } from "./types";
import { todayISO } from "./validation";

type BookingFormProps = {
  form: FormState;
  errors: FormErrors;
  submitting: boolean;
  onUpdate: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
  onSubmit: (e: FormEvent) => void;
};

export function BookingForm({
  form,
  errors,
  submitting,
  onUpdate,
  onSubmit,
}: BookingFormProps) {
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cp-date" className="cp-label">
            Date
          </label>
          <input
            id="cp-date"
            type="date"
            min={todayISO()}
            className="cp-input"
            value={form.date}
            onChange={(e) => onUpdate("date", e.target.value)}
            aria-invalid={Boolean(errors.date)}
          />
          {errors.date ? (
            <p className="mt-1.5 text-xs text-[var(--cp-copper-hot)]">
              {errors.date}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="cp-time" className="cp-label">
            Time
          </label>
          <select
            id="cp-time"
            className="cp-input"
            value={form.time}
            onChange={(e) => onUpdate("time", e.target.value)}
            aria-invalid={Boolean(errors.time)}
          >
            <option value="">Select time</option>
            {copperPanTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.time ? (
            <p className="mt-1.5 text-xs text-[var(--cp-copper-hot)]">
              {errors.time}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="cp-party" className="cp-label">
          Party size
        </label>
        <select
          id="cp-party"
          className="cp-input"
          value={form.partySize}
          onChange={(e) => onUpdate("partySize", e.target.value)}
          aria-invalid={Boolean(errors.partySize)}
        >
          {copperPanPartySizes.map((n) => (
            <option key={n} value={String(n)}>
              {n} {n === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
        {errors.partySize ? (
          <p className="mt-1.5 text-xs text-[var(--cp-copper-hot)]">
            {errors.partySize}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="cp-name" className="cp-label">
          Name
        </label>
        <input
          id="cp-name"
          type="text"
          autoComplete="name"
          className="cp-input"
          placeholder="Your full name"
          value={form.name}
          onChange={(e) => onUpdate("name", e.target.value)}
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name ? (
          <p className="mt-1.5 text-xs text-[var(--cp-copper-hot)]">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="cp-email" className="cp-label">
          Email
        </label>
        <input
          id="cp-email"
          type="email"
          autoComplete="email"
          className="cp-input"
          placeholder="you@example.com"
          value={form.email}
          onChange={(e) => onUpdate("email", e.target.value)}
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email ? (
          <p className="mt-1.5 text-xs text-[var(--cp-copper-hot)]">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="cp-phone" className="cp-label">
          Phone{" "}
          <span className="normal-case tracking-normal text-[var(--cp-muted)]">
            (optional)
          </span>
        </label>
        <input
          id="cp-phone"
          type="tel"
          autoComplete="tel"
          className="cp-input"
          placeholder="+44 …"
          value={form.phone}
          onChange={(e) => onUpdate("phone", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="cp-notes" className="cp-label">
          Notes{" "}
          <span className="normal-case tracking-normal text-[var(--cp-muted)]">
            (optional)
          </span>
        </label>
        <textarea
          id="cp-notes"
          rows={3}
          className="cp-input resize-none"
          placeholder="Allergies, occasion, seating preference…"
          value={form.notes}
          onChange={(e) => onUpdate("notes", e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="cp-btn cp-btn-primary mt-2 w-full"
        disabled={submitting}
      >
        {submitting ? "Confirming…" : "Confirm reservation"}
      </button>
    </form>
  );
}
