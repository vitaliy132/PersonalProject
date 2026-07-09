"use client";

import Image from "next/image";
import type { FormaProduct } from "@/lib/forma-content";

type ProductGalleryProps = {
  product: FormaProduct;
  activeImage: number;
  onSelect: (index: number) => void;
};

export function ProductGallery({
  product,
  activeImage,
  onSelect,
}: ProductGalleryProps) {
  return (
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
            onClick={() => onSelect(index)}
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
  );
}
