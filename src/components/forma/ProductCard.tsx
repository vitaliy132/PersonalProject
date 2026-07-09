"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Plus } from "lucide-react";
import { useCart } from "@/components/forma/cart-context";
import { formatPrice, type FormaProduct } from "@/lib/forma-content";

type ProductCardProps = {
  product: FormaProduct;
  index?: number;
};

export function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart, toggleWishlist, isWishlisted } = useCart();
  const wished = isWishlisted(product.id);
  const code = `F-${product.category.slice(0, 2).toUpperCase()}-${String((index ?? 0) + 1).padStart(2, "0")}`;

  return (
    <article className="group flex h-full flex-col border border-[var(--fo-border)] bg-[var(--fo-bg-elevated)] transition-colors hover:border-[var(--fo-border-strong)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#ececee]">
        <Link href={`/work/forma-studio/product/${product.slug}`} className="absolute inset-0">
          <Image
            src={product.images[0].src}
            alt={product.images[0].alt}
            fill
            sizes="(max-width: 768px) 80vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </Link>
        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-3">
          <span className="font-mono text-[0.62rem] tracking-[0.14em] text-[var(--fo-stone)] uppercase">
            {product.limited ? "LTD" : code}
          </span>
          <button
            type="button"
            aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
            onClick={() => toggleWishlist(product.id)}
            className="pointer-events-auto flex h-8 w-8 items-center justify-center border border-[var(--fo-border)] bg-white/90"
          >
            <Heart
              size={14}
              className={wished ? "fill-[var(--fo-accent)] text-[var(--fo-accent)]" : ""}
            />
          </button>
        </div>
        <button
          type="button"
          onClick={() => addToCart(product)}
          className="absolute right-3 bottom-3 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--fo-ink)] text-white opacity-100 transition-transform duration-300 group-hover:scale-105 sm:translate-y-1 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus size={18} />
        </button>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between gap-3 font-mono text-[0.65rem] tracking-[0.12em] text-[var(--fo-stone)] uppercase">
          <span>{product.category}</span>
          <span>{product.rating.toFixed(1)} ★</span>
        </div>
        <Link
          href={`/work/forma-studio/product/${product.slug}`}
          className="mt-2 text-[0.95rem] font-medium tracking-tight transition-opacity hover:opacity-65"
        >
          {product.name.replace("FORMA ", "")}
        </Link>
        <p className="mt-1 line-clamp-2 text-sm text-[var(--fo-stone)]">
          {product.description}
        </p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-4">
          <div>
            <p className="font-mono text-sm font-medium">{formatPrice(product.price)}</p>
            {product.compareAt ? (
              <p className="font-mono text-[0.7rem] text-[var(--fo-stone-soft)] line-through">
                {formatPrice(product.compareAt)}
              </p>
            ) : null}
          </div>
          <div className="flex gap-1.5">
            {product.colors.slice(0, 3).map((c) => (
              <span
                key={c.name}
                title={c.name}
                className="h-2.5 w-2.5 rounded-full border border-black/10"
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
