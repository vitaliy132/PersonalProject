"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { useCart } from "@/components/forma/cart-context";
import { formatPrice } from "@/lib/forma-content";

const steps = ["Information", "Shipping", "Review"] as const;

export function CheckoutClient() {
  const { cart, cartSubtotal, clearCart } = useCart();
  const [step, setStep] = useState(0);
  const [complete, setComplete] = useState(false);
  const [form, setForm] = useState({
    email: "",
    name: "",
    address: "",
    city: "",
    postcode: "",
    shipping: "standard",
  });

  const shippingCost =
    form.shipping === "express" ? 12 : cartSubtotal >= 100 ? 0 : 5;
  const total = cartSubtotal + shippingCost;

  function onContinue(event: FormEvent) {
    event.preventDefault();
    if (step < steps.length - 1) {
      setStep((s) => s + 1);
      return;
    }
    setComplete(true);
    clearCart();
  }

  if (complete) {
    return (
      <div className="mx-auto max-w-lg py-16 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--fo-olive-soft)] text-[var(--fo-olive)]">
          <Check size={28} />
        </div>
        <h1 className="font-display mt-6 text-3xl">Order confirmed</h1>
        <p className="mt-4 text-[var(--fo-stone)]">
          This is a portfolio checkout mockup — no payment was processed. Thank
          you for exploring FORMA Studio.
        </p>
        <Link href="/work/forma-studio/shop" className="fo-btn fo-btn-primary mt-8">
          Continue shopping
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-lg py-16 text-center">
        <h1 className="font-display text-3xl">Your cart is empty</h1>
        <p className="mt-4 text-[var(--fo-stone)]">
          Add a few essentials before checking out.
        </p>
        <Link href="/work/forma-studio/shop" className="fo-btn fo-btn-primary mt-8">
          Shop collection
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
      <div>
        <ol className="mb-10 flex gap-4 text-xs tracking-[0.12em] uppercase">
          {steps.map((label, index) => (
            <li
              key={label}
              className={
                index === step
                  ? "font-medium text-[var(--fo-black)]"
                  : index < step
                    ? "text-[var(--fo-olive)]"
                    : "text-[var(--fo-stone-soft)]"
              }
            >
              {index + 1}. {label}
            </li>
          ))}
        </ol>

        <form onSubmit={onContinue} className="space-y-5">
          {step === 0 && (
            <>
              <h1 className="font-display text-3xl">Contact information</h1>
              <label className="block">
                <span className="text-xs tracking-wide uppercase">Email</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  className="mt-2 w-full border border-[var(--fo-border)] bg-[var(--fo-bg-elevated)] px-4 py-3 text-sm outline-none focus:border-[var(--fo-black)]"
                />
              </label>
              <label className="block">
                <span className="text-xs tracking-wide uppercase">Full name</span>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
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
                  onChange={(e) =>
                    setForm((f) => ({ ...f, address: e.target.value }))
                  }
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
                    onChange={(e) =>
                      setForm((f) => ({ ...f, city: e.target.value }))
                    }
                    className="mt-2 w-full border border-[var(--fo-border)] bg-[var(--fo-bg-elevated)] px-4 py-3 text-sm outline-none focus:border-[var(--fo-black)]"
                  />
                </label>
                <label className="block">
                  <span className="text-xs tracking-wide uppercase">Postcode</span>
                  <input
                    required
                    type="text"
                    value={form.postcode}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, postcode: e.target.value }))
                    }
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
                        onChange={() =>
                          setForm((f) => ({ ...f, shipping: method.id }))
                        }
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
                  <span className="text-[var(--fo-stone)]">Email:</span>{" "}
                  {form.email}
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
              <button
                type="button"
                className="fo-btn fo-btn-secondary"
                onClick={() => setStep((s) => s - 1)}
              >
                Back
              </button>
            )}
            <button type="submit" className="fo-btn fo-btn-primary flex-1">
              {step === steps.length - 1 ? "Place order" : "Continue"}
            </button>
          </div>
        </form>
      </div>

      <aside className="h-fit border border-[var(--fo-border)] bg-[var(--fo-bg-elevated)] p-6">
        <h2 className="text-sm font-medium tracking-[0.12em] uppercase">
          Order summary
        </h2>
        <ul className="mt-5 space-y-4">
          {cart.map((line) => (
            <li key={line.key} className="flex gap-3">
              <div className="relative h-16 w-14 shrink-0 overflow-hidden bg-[var(--fo-bg)]">
                <Image
                  src={line.product.images[0].src}
                  alt={line.product.images[0].alt}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex-1 text-sm">
                <p className="font-medium leading-snug">{line.product.name}</p>
                <p className="mt-1 text-xs text-[var(--fo-stone)]">
                  {line.color} · {line.size} · Qty {line.quantity}
                </p>
              </div>
              <p className="text-sm">
                {formatPrice(line.product.price * line.quantity)}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-6 space-y-2 border-t border-[var(--fo-border)] pt-4 text-sm">
          <div className="flex justify-between">
            <span className="text-[var(--fo-stone)]">Subtotal</span>
            <span>{formatPrice(cartSubtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[var(--fo-stone)]">Shipping</span>
            <span>
              {shippingCost === 0 ? "Free" : formatPrice(shippingCost)}
            </span>
          </div>
          <div className="flex justify-between pt-2 text-base font-medium">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
