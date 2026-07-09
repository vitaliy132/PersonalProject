"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { useCart } from "@/components/forma/cart-context";
import { formaProducts, formatPrice } from "@/lib/forma-content";

type WishlistDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function WishlistDrawer({ open, onClose }: WishlistDrawerProps) {
  const { wishlist, toggleWishlist, addToCart } = useCart();
  const items = formaProducts.filter((p) => wishlist.includes(p.id));

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Wishlist">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        aria-label="Close wishlist"
        onClick={onClose}
      />
      <aside className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-[var(--fo-bg)] shadow-2xl">
        <div className="flex items-center justify-between border-b border-[var(--fo-border)] px-5 py-4">
          <h2 className="text-sm font-medium tracking-[0.12em] uppercase">
            Wishlist ({items.length})
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close wishlist"
            className="flex h-9 w-9 items-center justify-center"
          >
            <X size={18} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="py-12 text-center text-sm text-[var(--fo-stone)]">
              Save products you love for later.
            </p>
          ) : (
            <ul className="space-y-5">
              {items.map((product) => (
                <li key={product.id} className="flex gap-4">
                  <Link
                    href={`/work/forma-studio/product/${product.slug}`}
                    onClick={onClose}
                    className="relative h-24 w-20 shrink-0 overflow-hidden bg-[var(--fo-bg-elevated)]"
                  >
                    <Image
                      src={product.images[0].src}
                      alt={product.images[0].alt}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </Link>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <Link
                      href={`/work/forma-studio/product/${product.slug}`}
                      onClick={onClose}
                      className="text-sm font-medium"
                    >
                      {product.name}
                    </Link>
                    <p className="mt-1 text-sm">{formatPrice(product.price)}</p>
                    <div className="mt-auto flex gap-3 pt-3">
                      <button
                        type="button"
                        className="text-xs font-medium underline-offset-2 hover:underline"
                        onClick={() => {
                          addToCart(product);
                          onClose();
                        }}
                      >
                        Add to cart
                      </button>
                      <button
                        type="button"
                        className="text-xs text-[var(--fo-stone)] underline-offset-2 hover:underline"
                        onClick={() => toggleWishlist(product.id)}
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
      </aside>
    </div>
  );
}
