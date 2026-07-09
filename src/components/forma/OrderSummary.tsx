"use client";

import Image from "next/image";
import { formatPrice } from "@/lib/forma-content";
import type { CartLine } from "@/components/forma/cart-context";

type OrderSummaryProps = {
  cart: CartLine[];
  cartSubtotal: number;
  shippingCost: number;
  total: number;
};

export function OrderSummary({
  cart,
  cartSubtotal,
  shippingCost,
  total,
}: OrderSummaryProps) {
  return (
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
  );
}
