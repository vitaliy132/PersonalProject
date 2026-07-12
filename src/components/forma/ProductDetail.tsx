"use client";

import Link from "next/link";
import { useState } from "react";
import { ProductCard } from "@/components/forma/ProductCard";
import { ProductGallery } from "@/components/forma/ProductGallery";
import { ProductPurchase } from "@/components/forma/ProductPurchase";
import { FadeIn as Reveal } from "@/components/ui/FadeIn";
import {
  getRelatedProducts,
  type FormaProduct,
} from "@/lib/forma-content";

type ProductDetailProps = {
  product: FormaProduct;
};

export function ProductDetail({ product }: ProductDetailProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [color, setColor] = useState(product.colors[0]?.name ?? "");
  const [size, setSize] = useState(product.sizes[0] ?? "");
  const [quantity, setQuantity] = useState(1);
  const related = getRelatedProducts(product.slug);

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
          <ProductGallery
            product={product}
            activeImage={activeImage}
            onSelect={setActiveImage}
          />
          <ProductPurchase
            product={product}
            color={color}
            size={size}
            quantity={quantity}
            onColorChange={setColor}
            onSizeChange={setSize}
            onQuantityChange={setQuantity}
          />
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
