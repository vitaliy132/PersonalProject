"use client";

import type { FormEvent } from "react";

export type CheckoutFormState = {
  email: string;
  name: string;
  address: string;
  city: string;
  postcode: string;
  shipping: string;
};

type CheckoutFormProps = {
  step: number;
  form: CheckoutFormState;
  cartSubtotal: number;
  onChange: (next: CheckoutFormState) => void;
  onBack: () => void;
  onSubmit: (event: FormEvent) => void;
  isLastStep: boolean;
};

export function CheckoutForm({
  step,
  form,
  cartSubtotal,
  onChange,
  onBack,
  onSubmit,
  isLastStep,
}: CheckoutFormProps) {
  function setField<K extends keyof CheckoutFormState>(
    key: K,
    value: CheckoutFormState[K],
  ) {
    onChange({ ...form, [key]: value });
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {step === 0 && (
        <>
          <h1 className="font-display text-3xl">Contact information</h1>
          <label className="block">
            <span className="text-xs tracking-wide uppercase">Email</span>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setField("email", e.target.value)}
              className="mt-2 w-full border border-[var(--fo-border)] bg-[var(--fo-bg-elevated)] px-4 py-3 text-sm outline-none focus:border-[var(--fo-black)]"
            />
          </label>
          <label className="block">
            <span className="text-xs tracking-wide uppercase">Full name</span>
            <input
              required
              type="text"
              value={form.name}
              onChange={(e) => setField("name", e.target.value)}
              className="mt-2 w-full border border-[var(--fo-border)] bg-[var(--fo-bg-elevated)] px-4 py-3 text-sm outline-none focus:border-[var(--fo-black)]"
            />
          </label>
        </>
      )}

      {step === 1 && (
        <>
          <h1 className="font-display text-3xl">Shipping</h1>
          <label className="block">
            <span className="text-xs tracking-wide uppercase">Address</span>
            <input
              required
              type="text"
              value={form.address}
              onChange={(e) => setField("address", e.target.value)}
              className="mt-2 w-full border border-[var(--fo-border)] bg-[var(--fo-bg-elevated)] px-4 py-3 text-sm outline-none focus:border-[var(--fo-black)]"
            />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs tracking-wide uppercase">City</span>
              <input
                required
                type="text"
                value={form.city}
                onChange={(e) => setField("city", e.target.value)}
                className="mt-2 w-full border border-[var(--fo-border)] bg-[var(--fo-bg-elevated)] px-4 py-3 text-sm outline-none focus:border-[var(--fo-black)]"
              />
            </label>
            <label className="block">
              <span className="text-xs tracking-wide uppercase">Postcode</span>
              <input
                required
                type="text"
                value={form.postcode}
                onChange={(e) => setField("postcode", e.target.value)}
                className="mt-2 w-full border border-[var(--fo-border)] bg-[var(--fo-bg-elevated)] px-4 py-3 text-sm outline-none focus:border-[var(--fo-black)]"
              />
            </label>
          </div>
          <fieldset className="space-y-3">
            <legend className="text-xs tracking-wide uppercase">
              Shipping method
            </legend>
            {[
              {
                id: "standard",
                label: "Standard (3–5 days)",
                price: cartSubtotal >= 100 ? "Free" : "£5",
              },
              { id: "express", label: "Express (1–2 days)", price: "£12" },
            ].map((method) => (
              <label
                key={method.id}
                className={`flex cursor-pointer items-center justify-between border px-4 py-3 text-sm ${
                  form.shipping === method.id
                    ? "border-[var(--fo-black)]"
                    : "border-[var(--fo-border)]"
                }`}
              >
                <span className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="shipping"
                    value={method.id}
                    checked={form.shipping === method.id}
                    onChange={() => setField("shipping", method.id)}
                  />
                  {method.label}
                </span>
                <span>{method.price}</span>
              </label>
            ))}
          </fieldset>
        </>
      )}

      {step === 2 && (
        <>
          <h1 className="font-display text-3xl">Review order</h1>
          <div className="space-y-3 border border-[var(--fo-border)] p-5 text-sm">
            <p>
              <span className="text-[var(--fo-stone)]">Email:</span> {form.email}
            </p>
            <p>
              <span className="text-[var(--fo-stone)]">Ship to:</span>{" "}
              {form.name}, {form.address}, {form.city} {form.postcode}
            </p>
            <p>
              <span className="text-[var(--fo-stone)]">Method:</span>{" "}
              {form.shipping === "express" ? "Express" : "Standard"}
            </p>
          </div>
          <p className="text-sm text-[var(--fo-stone)]">
            Demo checkout only — placing an order will not charge a card.
          </p>
        </>
      )}

      <div className="flex gap-3 pt-2">
        {step > 0 && (
          <button type="button" className="fo-btn fo-btn-secondary" onClick={onBack}>
            Back
          </button>
        )}
        <button type="submit" className="fo-btn fo-btn-primary flex-1">
          {isLastStep ? "Place order" : "Continue"}
        </button>
      </div>
    </form>
  );
}
