"use client";

import Link from "next/link";
import { Check } from "lucide-react";

export function CheckoutSuccess() {
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

export function CheckoutEmpty() {
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
