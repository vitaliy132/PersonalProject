"use client";

import { Heart, Minus, Plus, ShieldCheck, Truck } from "lucide-react";
import { useCart } from "@/components/forma/cart-context";
import { formatPrice, type FormaProduct } from "@/lib/forma-content";

type ProductPurchaseProps = {
  product: FormaProduct;
  color: string;
  size: string;
  quantity: number;
  onColorChange: (color: string) => void;
  onSizeChange: (size: string) => void;
  onQuantityChange: (quantity: number) => void;
};

export function ProductPurchase({
  product,
  color,
  size,
  quantity,
  onColorChange,
  onSizeChange,
  onQuantityChange,
}: ProductPurchaseProps) {
  const { addToCart, toggleWishlist, isWishlisted } = useCart();
  const wished = isWishlisted(product.id);

  return (
    <div>
      <div className="flex items-center justify-between gap-3 font-mono text-[0.68rem] tracking-[0.12em] text-[var(--fo-stone)] uppercase">
        <span>{product.category}</span>
        <span>
          {product.rating.toFixed(1)} ★ · {product.reviewCount}
        </span>
      </div>
      <h1 className="font-display mt-3 text-3xl tracking-tight sm:text-4xl lg:text-5xl">
        {product.name.replace("FORMA ", "")}
      </h1>
      <div className="mt-4 flex items-baseline gap-3">
        <p className="font-mono text-xl">{formatPrice(product.price)}</p>
        {product.compareAt ? (
          <p className="font-mono text-sm text-[var(--fo-stone-soft)] line-through">
            {formatPrice(product.compareAt)}
          </p>
        ) : null}
      </div>
      <p className="mt-5 text-base leading-relaxed text-[var(--fo-stone)]">
        {product.longDescription}
      </p>

      <fieldset className="mt-8">
        <legend className="font-mono text-[0.68rem] tracking-[0.14em] uppercase">
          Colour — {color}
        </legend>
        <div className="mt-3 flex gap-2">
          {product.colors.map((c) => (
            <button
              key={c.name}
              type="button"
              aria-label={c.name}
              onClick={() => onColorChange(c.name)}
              className={`h-9 w-9 rounded-full border-2 ${
                color === c.name
                  ? "border-[var(--fo-ink)]"
                  : "border-transparent"
              }`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="font-mono text-[0.68rem] tracking-[0.14em] uppercase">
          Size
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => onSizeChange(s)}
              className={`min-w-[4.5rem] border px-3 py-2 font-mono text-xs tracking-wide uppercase ${
                size === s
                  ? "border-[var(--fo-ink)] bg-[var(--fo-ink)] text-white"
                  : "border-[var(--fo-border)] hover:border-[var(--fo-ink)]"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-6">
        <p className="font-mono text-[0.68rem] tracking-[0.14em] uppercase">
          Quantity
        </p>
        <div className="mt-3 inline-flex items-center border border-[var(--fo-border)]">
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center"
            aria-label="Decrease quantity"
            onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
          >
            <Minus size={16} />
          </button>
          <span className="w-10 text-center font-mono text-sm">{quantity}</span>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center"
            aria-label="Increase quantity"
            onClick={() => onQuantityChange(quantity + 1)}
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          className="fo-btn fo-btn-primary flex-1"
          onClick={() => addToCart(product, { color, size, quantity })}
        >
          Add to cart — {formatPrice(product.price * quantity)}
        </button>
        <button
          type="button"
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          className="fo-btn fo-btn-secondary"
          onClick={() => toggleWishlist(product.id)}
        >
          <Heart
            size={16}
            className={
              wished ? "fill-[var(--fo-accent)] text-[var(--fo-accent)]" : ""
            }
          />
          Wishlist
        </button>
      </div>

      <div className="mt-6 grid gap-px border border-[var(--fo-border)] bg-[var(--fo-border)] sm:grid-cols-2">
        <p className="flex items-center gap-2 bg-[var(--fo-bg-elevated)] px-4 py-3 text-sm text-[var(--fo-stone)]">
          <Truck size={16} className="text-[var(--fo-accent)]" />
          Free UK shipping over £100
        </p>
        <p className="flex items-center gap-2 bg-[var(--fo-bg-elevated)] px-4 py-3 text-sm text-[var(--fo-stone)]">
          <ShieldCheck size={16} className="text-[var(--fo-accent)]" />
          2-year product guarantee
        </p>
      </div>

      <ul className="mt-8 space-y-0 border-t border-[var(--fo-border)]">
        {product.benefits.map((benefit, index) => (
          <li
            key={benefit}
            className="grid grid-cols-[3rem_1fr] gap-3 border-b border-[var(--fo-border)] py-4 text-sm text-[var(--fo-stone)]"
          >
            <span className="font-mono text-[0.68rem] tracking-[0.12em] text-[var(--fo-accent)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}
