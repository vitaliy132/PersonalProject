"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { useCart } from "@/components/forma/cart-context";
import { formaProducts, formatPrice } from "@/lib/forma-content";

export function SearchDialog() {
  const { searchOpen, setSearchOpen } = useCart();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!searchOpen) setQuery("");
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen, setSearchOpen]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return formaProducts.slice(0, 4);
    return formaProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.includes(q),
    );
  }, [query]);

  if (!searchOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Search products">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        aria-label="Close search"
        onClick={() => setSearchOpen(false)}
      />
      <div className="absolute inset-x-0 top-0 bg-[var(--fo-bg)] shadow-xl">
        <div className="fo-container flex items-center gap-3 py-4">
          <Search size={18} className="text-[var(--fo-stone)]" aria-hidden="true" />
          <input
            autoFocus
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products…"
            className="w-full bg-transparent text-base outline-none placeholder:text-[var(--fo-stone-soft)]"
          />
          <button
            type="button"
            onClick={() => setSearchOpen(false)}
            aria-label="Close search"
            className="flex h-9 w-9 items-center justify-center"
          >
            <X size={18} />
          </button>
        </div>
        <div className="fo-container border-t border-[var(--fo-border)] pb-6">
          <p className="pt-4 text-xs tracking-[0.12em] text-[var(--fo-stone)] uppercase">
            {query.trim() ? "Results" : "Popular"}
          </p>
          <ul className="mt-3 divide-y divide-[var(--fo-border)]">
            {results.length === 0 ? (
              <li className="py-6 text-sm text-[var(--fo-stone)]">
                No products found.
              </li>
            ) : (
              results.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/work/forma-studio/product/${product.slug}`}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center gap-4 py-3 transition-opacity hover:opacity-70"
                  >
                    <div className="relative h-14 w-12 shrink-0 overflow-hidden bg-[var(--fo-bg-elevated)]">
                      <Image
                        src={product.images[0].src}
                        alt={product.images[0].alt}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{product.name}</p>
                      <p className="text-xs text-[var(--fo-stone)]">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
