import type { FormErrors, FormState } from "./types";

export function todayISO() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export function fakeConfirmationCode() {
  return `BS-${Math.floor(10000 + Math.random() * 90000)}`;
}

export function formatDisplayDate(iso: string) {
  if (!iso) return "";
  const date = new Date(`${iso}T12:00:00`);
  return date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.date) errors.date = "Choose a date";
  if (!form.time) errors.time = "Choose a time";
  if (!form.partySize) errors.partySize = "Choose party size";
  if (!form.name.trim()) errors.name = "Enter your name";
  if (!form.email.trim()) {
    errors.email = "Enter your email";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Enter a valid email";
  }
  return errors;
}
