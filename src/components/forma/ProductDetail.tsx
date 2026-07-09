"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Heart, Minus, Plus, ShieldCheck, Truck } from "lucide-react";
import { useCart } from "@/components/forma/cart-context";
import { ProductCard } from "@/components/forma/ProductCard";
import { Reveal } from "@/components/forma/Reveal";
import {
  formatPrice,
  getRelatedProducts,
  type FormaProduct,
} from "@/lib/forma-content";

type ProductDetailProps = {
  product: FormaProduct;
};

export function ProductDetail({ product }: ProductDetailProps) {
  const { addToCart, toggleWishlist, isWishlisted } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [color, setColor] = useState(product.colors[0]?.name ?? "");
  const [size, setSize] = useState(product.sizes[0] ?? "");
  const [quantity, setQuantity] = useState(1);
  const related = getRelatedProducts(product.slug);
  const wished = isWishlisted(product.id);

  return (
    <main className="pb-20 pt-8 sm:pb-24 sm:pt-10">
      <div className="fo-container">
        <nav
          className="mb-8 font-mono text-[0.68rem] tracking-[0.12em] text-[var(--fo-stone)] uppercase"
          aria-label="Breadcrumb"
        >
          <Link href="/work/forma-studio" className="hover:text-[var(--fo-ink)]">
            Home
          </Link>
          <span className="mx-2 text-[var(--fo-stone-soft)]">/</span>
          <Link href="/work/forma-studio/shop" className="hover:text-[var(--fo-ink)]">
            Shop
          </Link>
          <span className="mx-2 text-[var(--fo-stone-soft)]">/</span>
          <span className="text-[var(--fo-ink)]">
            {product.name.replace("FORMA ", "")}
          </span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <div className="relative aspect-[4/5] overflow-hidden border border-[var(--fo-border)] bg-[#ececee]">
              <Image
                src={product.images[activeImage].src}
                alt={product.images[activeImage].alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {product.limited && (
                <span className="absolute top-4 left-4 bg-[var(--fo-accent)] px-2.5 py-1 font-mono text-[0.62rem] tracking-[0.14em] text-white uppercase">
                  Limited
                </span>
              )}
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`relative aspect-square overflow-hidden border ${
                    activeImage === index
                      ? "border-[var(--fo-ink)]"
                      : "border-[var(--fo-border)]"
                  }`}
                  aria-label={`View image ${index + 1}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

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
                    onClick={() => setColor(c.name)}
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
                    onClick={() => setSize(s)}
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
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  <Minus size={16} />
                </button>
                <span className="w-10 text-center font-mono text-sm">{quantity}</span>
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => q + 1)}
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
        </div>

        <section
          className="mt-20 border-t border-[var(--fo-border)] pt-14"
          aria-labelledby="pdp-reviews"
        >
          <Reveal>
            <p className="fo-eyebrow">Signal</p>
            <h2 id="pdp-reviews" className="font-display mt-3 text-3xl sm:text-4xl">
              Customer reviews
            </h2>
            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {[
                {
                  name: "Hannah P.",
                  quote:
                    "Quality feels exceptional. Exactly as described and beautifully packed.",
                },
                {
                  name: "David K.",
                  quote:
                    "Bought as a gift — they asked where it was from immediately.",
                },
                {
                  name: "Priya S.",
                  quote:
                    "Clean design, thoughtful details. Already eyeing a second piece.",
                },
              ].map((review) => (
                <blockquote
                  key={review.name}
                  className="border border-[var(--fo-border)] bg-[var(--fo-bg-elevated)] p-5"
                >
                  <p className="font-mono text-[0.65rem] tracking-[0.14em] text-[var(--fo-stone)] uppercase">
                    ★★★★★
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--fo-stone)]">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <p className="mt-4 text-sm font-medium">{review.name}</p>
                </blockquote>
              ))}
            </div>
          </Reveal>
        </section>

        <section
          className="mt-20 border-t border-[var(--fo-border)] pt-14"
          aria-labelledby="related-heading"
        >
          <Reveal>
            <p className="fo-eyebrow">Related</p>
            <h2 id="related-heading" className="font-display mt-3 text-3xl sm:text-4xl">
              Complete the system
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <ProductCard key={item.id} product={item} index={index} />
              ))}
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}
