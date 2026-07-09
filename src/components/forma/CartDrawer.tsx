"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "@/components/forma/cart-context";
import { formatPrice } from "@/lib/forma-content";

export function CartDrawer() {
  const {
    cart,
    cartOpen,
    setCartOpen,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
  } = useCart();

  if (!cartOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        aria-label="Close cart"
        onClick={() => setCartOpen(false)}
      />
      <aside className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-[var(--fo-bg)] shadow-2xl">
        <div className="flex items-center justify-between border-b border-[var(--fo-border)] px-5 py-4">
          <h2 className="text-sm font-medium tracking-[0.12em] uppercase">
            Cart ({cart.reduce((n, l) => n + l.quantity, 0)})
          </h2>
          <button
            type="button"
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
            className="flex h-9 w-9 items-center justify-center"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="text-[var(--fo-stone)]">Your cart is empty.</p>
              <Link
                href="/work/forma-studio/shop"
                className="fo-btn fo-btn-primary mt-6"
                onClick={() => setCartOpen(false)}
              >
                Shop collection
              </Link>
            </div>
          ) : (
            <ul className="space-y-5">
              {cart.map((line) => (
                <li key={line.key} className="flex gap-4">
                  <div className="relative h-24 w-20 shrink-0 overflow-hidden bg-[var(--fo-bg-elevated)]">
                    <Image
                      src={line.product.images[0].src}
                      alt={line.product.images[0].alt}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium leading-snug">
                          {line.product.name}
                        </p>
                        <p className="mt-1 text-xs text-[var(--fo-stone)]">
                          {line.color} · {line.size}
                        </p>
                      </div>
                      <p className="text-sm font-medium">
                        {formatPrice(line.product.price * line.quantity)}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="inline-flex items-center border border-[var(--fo-border)]">
                        <button
                          type="button"
                          className="flex h-8 w-8 items-center justify-center"
                          aria-label="Decrease quantity"
                          onClick={() =>
                            updateQuantity(line.key, line.quantity - 1)
                          }
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          className="flex h-8 w-8 items-center justify-center"
                          aria-label="Increase quantity"
                          onClick={() =>
                            updateQuantity(line.key, line.quantity + 1)
                          }
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        type="button"
                        className="text-xs text-[var(--fo-stone)] underline-offset-2 hover:underline"
                        onClick={() => removeFromCart(line.key)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-[var(--fo-border)] px-5 py-5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[var(--fo-stone)]">Subtotal</span>
              <span className="font-medium">{formatPrice(cartSubtotal)}</span>
            </div>
            <p className="mt-2 text-xs text-[var(--fo-stone)]">
              Shipping calculated at checkout. Free UK shipping over £100.
            </p>
            <Link
              href="/work/forma-studio/checkout"
              className="fo-btn fo-btn-primary mt-4 w-full"
              onClick={() => setCartOpen(false)}
            >
              Checkout
            </Link>
          </div>
        )}
      </aside>
    </div>
  );
}
