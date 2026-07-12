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
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--bs-brick-soft)] text-[var(--bs-brick)]">
        <Check size={28} strokeWidth={2} aria-hidden="true" />
      </div>
      <p className="mt-5 text-sm text-[var(--bs-muted)]">
        Confirmation reference
      </p>
      <p className="font-display mt-1 text-3xl tracking-wide text-[var(--bs-brick)]">
        {confirmation}
      </p>
      <p className="mt-4 text-base text-[var(--bs-muted)]">
        We&apos;ve reserved a table for{" "}
        <span className="text-[var(--bs-charcoal)]">{submitted.name}</span>.
      </p>

      <dl className="mt-8 space-y-3 border border-[var(--bs-border)] bg-[var(--bs-cream)] p-5 text-left text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-[var(--bs-muted)]">Date</dt>
          <dd className="text-[var(--bs-charcoal)]">
            {formatDisplayDate(submitted.date)}
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-[var(--bs-muted)]">Time</dt>
          <dd className="text-[var(--bs-charcoal)]">{submitted.time}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-[var(--bs-muted)]">Guests</dt>
          <dd className="text-[var(--bs-charcoal)]">{submitted.partySize}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-[var(--bs-muted)]">Email</dt>
          <dd className="truncate text-[var(--bs-charcoal)]">{submitted.email}</dd>
        </div>
      </dl>

      <p className="mt-5 text-xs leading-relaxed text-[var(--bs-muted)]">
        This is a demo confirmation — no email was sent and no table was booked.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          className="bs-btn bs-btn-primary flex-1"
          onClick={onClose}
        >
          Close
        </button>
        <button
          type="button"
          className="bs-btn bs-btn-dark flex-1"
          onClick={onBookAnother}
        >
          Book another
        </button>
      </div>
    </div>
  );
}
