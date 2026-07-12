"use client";

import type { FormEvent } from "react";
import {
  brickSaltPartySizes,
  brickSaltTimes,
} from "@/lib/brick-salt-content";
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
          <label htmlFor="bs-date" className="bs-label">
            Date
          </label>
          <input
            id="bs-date"
            type="date"
            min={todayISO()}
            className="bs-input"
            value={form.date}
            onChange={(e) => onUpdate("date", e.target.value)}
            aria-invalid={Boolean(errors.date)}
          />
          {errors.date ? (
            <p className="mt-1.5 text-xs text-[var(--bs-brick-hot)]">
              {errors.date}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="bs-time" className="bs-label">
            Time
          </label>
          <select
            id="bs-time"
            className="bs-input"
            value={form.time}
            onChange={(e) => onUpdate("time", e.target.value)}
            aria-invalid={Boolean(errors.time)}
          >
            <option value="">Select time</option>
            {brickSaltTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.time ? (
            <p className="mt-1.5 text-xs text-[var(--bs-brick-hot)]">
              {errors.time}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="bs-party" className="bs-label">
          Party size
        </label>
        <select
          id="bs-party"
          className="bs-input"
          value={form.partySize}
          onChange={(e) => onUpdate("partySize", e.target.value)}
          aria-invalid={Boolean(errors.partySize)}
        >
          {brickSaltPartySizes.map((n) => (
            <option key={n} value={String(n)}>
              {n} {n === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
        {errors.partySize ? (
          <p className="mt-1.5 text-xs text-[var(--bs-brick-hot)]">
            {errors.partySize}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="bs-name" className="bs-label">
          Name
        </label>
        <input
          id="bs-name"
          type="text"
          autoComplete="name"
          className="bs-input"
          placeholder="Your full name"
          value={form.name}
          onChange={(e) => onUpdate("name", e.target.value)}
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name ? (
          <p className="mt-1.5 text-xs text-[var(--bs-brick-hot)]">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="bs-email" className="bs-label">
          Email
        </label>
        <input
          id="bs-email"
          type="email"
          autoComplete="email"
          className="bs-input"
          placeholder="you@example.com"
          value={form.email}
          onChange={(e) => onUpdate("email", e.target.value)}
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email ? (
          <p className="mt-1.5 text-xs text-[var(--bs-brick-hot)]">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="bs-phone" className="bs-label">
          Phone{" "}
          <span className="normal-case tracking-normal text-[var(--bs-muted)]">
            (optional)
          </span>
        </label>
        <input
          id="bs-phone"
          type="tel"
          autoComplete="tel"
          className="bs-input"
          placeholder="+44 …"
          value={form.phone}
          onChange={(e) => onUpdate("phone", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="bs-notes" className="bs-label">
          Notes{" "}
          <span className="normal-case tracking-normal text-[var(--bs-muted)]">
            (optional)
          </span>
        </label>
        <textarea
          id="bs-notes"
          rows={3}
          className="bs-input resize-none"
          placeholder="Allergies, occasion, seating preference…"
          value={form.notes}
          onChange={(e) => onUpdate("notes", e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="bs-btn bs-btn-primary mt-2 w-full"
        disabled={submitting}
      >
        {submitting ? "Confirming…" : "Confirm reservation"}
      </button>
    </form>
  );
}
