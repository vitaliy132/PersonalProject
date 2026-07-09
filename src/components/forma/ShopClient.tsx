"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/forma/ProductCard";
import {
  formaCategories,
  formaProducts,
  type FormaCategory,
} from "@/lib/forma-content";

function ProductSkeleton() {
  return (
    <div className="border border-[var(--fo-border)]">
      <div className="fo-skeleton aspect-[4/5]" />
      <div className="space-y-2 p-4">
        <div className="fo-skeleton h-3 w-20" />
        <div className="fo-skeleton h-4 w-40" />
        <div className="fo-skeleton h-3 w-28" />
      </div>
    </div>
  );
}

export function ShopClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "all";
  const [category, setCategory] = useState<string>(initialCategory);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    setLoading(true);
    const t = window.setTimeout(() => setLoading(false), 280);
    return () => window.clearTimeout(t);
  }, [category, query]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return formaProducts.filter((product) => {
      const matchesCategory =
        category === "all" || product.category === (category as FormaCategory);
      const matchesQuery =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 border border-[var(--fo-border)] bg-[var(--fo-bg-elevated)] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <div className="flex flex-wrap gap-2">
          {formaCategories.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCategory(item.id)}
              className={`rounded-full px-4 py-2 font-mono text-[0.65rem] font-medium tracking-[0.12em] uppercase transition-colors ${
                category === item.id
                  ? "bg-[var(--fo-ink)] text-white"
                  : "border border-[var(--fo-border)] text-[var(--fo-stone)] hover:border-[var(--fo-ink)] hover:text-[var(--fo-ink)]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <label className="relative block w-full max-w-xs">
          <span className="sr-only">Filter products</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search SKU / product…"
            className="w-full border border-[var(--fo-border)] bg-[var(--fo-bg)] px-4 py-2.5 font-mono text-xs tracking-wide outline-none focus:border-[var(--fo-ink)]"
          />
        </label>
      </div>

      <p className="mt-6 font-mono text-[0.68rem] tracking-[0.14em] text-[var(--fo-stone)] uppercase">
        {loading ? "Loading…" : `${filtered.length} products`}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <ProductSkeleton key={i} />)
          : filtered.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
      </div>

      {!loading && filtered.length === 0 && (
        <p className="py-16 text-center text-[var(--fo-stone)]">
          No products match your filters.
        </p>
      )}
    </div>
  );
}
