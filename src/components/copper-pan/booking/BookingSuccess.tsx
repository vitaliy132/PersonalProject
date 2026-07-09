"use client";

import { Check } from "lucide-react";
import type { FormState } from "./types";
import { formatDisplayDate } from "./validation";

type BookingSuccessProps = {
  confirmation: string;
  submitted: FormState;
  onClose: () => void;
  onBookAnother: () => void;
};

export function BookingSuccess({
  confirmation,
  submitted,
  onClose,
  onBookAnother,
}: BookingSuccessProps) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--cp-copper-soft)] text-[var(--cp-copper)]">
        <Check size={28} strokeWidth={2} aria-hidden="true" />
      </div>
      <p className="mt-5 text-sm text-[var(--cp-muted)]">
        Confirmation reference
      </p>
      <p className="font-display mt-1 text-3xl tracking-wide text-[var(--cp-copper)]">
        {confirmation}
      </p>
      <p className="mt-4 text-base text-[var(--cp-stone)]">
        We&apos;ve reserved a table for{" "}
        <span className="text-[var(--cp-ink)]">{submitted.name}</span>.
      </p>

      <dl className="mt-8 space-y-3 border border-[var(--cp-border)] bg-[var(--cp-bg)] p-5 text-left text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-[var(--cp-muted)]">Date</dt>
          <dd className="text-[var(--cp-ink)]">
            {formatDisplayDate(submitted.date)}
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-[var(--cp-muted)]">Time</dt>
          <dd className="text-[var(--cp-ink)]">{submitted.time}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-[var(--cp-muted)]">Guests</dt>
          <dd className="text-[var(--cp-ink)]">{submitted.partySize}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-[var(--cp-muted)]">Email</dt>
          <dd className="truncate text-[var(--cp-ink)]">{submitted.email}</dd>
        </div>
      </dl>

      <p className="mt-5 text-xs leading-relaxed text-[var(--cp-muted)]">
        This is a demo confirmation — no email was sent and no table was booked.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          className="cp-btn cp-btn-primary flex-1"
          onClick={onClose}
        >
          Close
        </button>
        <button
          type="button"
          className="cp-btn cp-btn-secondary flex-1"
          onClick={onBookAnother}
        >
          Book another
        </button>
      </div>
    </div>
  );
}
