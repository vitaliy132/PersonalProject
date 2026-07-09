"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useBooking } from "@/components/copper-pan/booking-context";
import { BookingForm } from "./BookingForm";
import { BookingSuccess } from "./BookingSuccess";
import { emptyForm, type FormErrors, type FormState } from "./types";
import { fakeConfirmationCode, validate } from "./validation";

export function BookingModal() {
  const { bookingOpen, closeBooking } = useBooking();
  const reduceMotion = useReducedMotion();
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [confirmation, setConfirmation] = useState("");
  const [submitted, setSubmitted] = useState<FormState | null>(null);

  const reset = useCallback(() => {
    setForm(emptyForm);
    setErrors({});
    setStatus("idle");
    setConfirmation("");
    setSubmitted(null);
  }, []);

  const handleClose = useCallback(() => {
    closeBooking();
    window.setTimeout(reset, 280);
  }, [closeBooking, reset]);

  useEffect(() => {
    if (!bookingOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [bookingOpen, handleClose]);

  useEffect(() => {
    if (!bookingOpen || !dialogRef.current) return;

    const dialog = dialogRef.current;
    const focusable = dialog.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const onTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || focusable.length === 0) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    dialog.addEventListener("keydown", onTab);
    return () => dialog.removeEventListener("keydown", onTab);
  }, [bookingOpen, status]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted({ ...form });
    setConfirmation(fakeConfirmationCode());
    setStatus("success");
  }

  return (
    <AnimatePresence>
      {bookingOpen ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close booking dialog"
            onClick={handleClose}
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 flex max-h-[92svh] w-full max-w-lg flex-col overflow-hidden border border-[var(--cp-border-strong)] bg-[var(--cp-bg-elevated)] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] sm:max-h-[90vh]"
            initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-[var(--cp-border)] px-5 py-4 sm:px-6">
              <div>
                <p className="cp-eyebrow">Reservations</p>
                <h2
                  id={titleId}
                  className="font-display mt-1 text-2xl text-[var(--cp-ink)]"
                >
                  {status === "success" ? "Table confirmed" : "Book a table"}
                </h2>
              </div>
              <button
                ref={closeRef}
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center text-[var(--cp-muted)] transition-colors hover:text-[var(--cp-ink)]"
                aria-label="Close"
                onClick={handleClose}
              >
                <X size={20} />
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
              {status === "success" && submitted ? (
                <BookingSuccess
                  confirmation={confirmation}
                  submitted={submitted}
                  onClose={handleClose}
                  onBookAnother={reset}
                />
              ) : (
                <BookingForm
                  form={form}
                  errors={errors}
                  submitting={status === "submitting"}
                  onUpdate={updateField}
                  onSubmit={onSubmit}
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
