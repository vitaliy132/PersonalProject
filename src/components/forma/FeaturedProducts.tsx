import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/forma/ProductCard";
import { Reveal } from "@/components/forma/Reveal";
import { getFeaturedProducts } from "@/lib/forma-content";

export function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section
      id="featured"
      aria-labelledby="featured-heading"
      className="scroll-mt-24 py-16 sm:py-20"
    >
      <div className="fo-container">
        <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="fo-eyebrow">Collection / Featured</p>
            <h2
              id="featured-heading"
              className="font-display mt-3 max-w-xl text-4xl leading-[1.05] sm:text-5xl"
            >
              Essentials, engineered.
            </h2>
          </div>
          <Link
            href="/work/forma-studio/shop"
            className="inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.12em] uppercase"
          >
            View all
            <ArrowRight size={14} />
          </Link>
        </Reveal>
      </div>

      <div className="mt-10 pl-5 sm:pl-8 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
        <div className="fo-rail pr-5 sm:pr-8">
          {products.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.05}>
              <ProductCard product={product} index={index} />
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <Link
              href="/work/forma-studio/shop"
              className="flex h-full min-h-[28rem] flex-col justify-between border border-dashed border-[var(--fo-border-strong)] bg-[var(--fo-bg-elevated)]/60 p-6 transition-colors hover:border-[var(--fo-ink)]"
            >
              <p className="font-mono text-[0.68rem] tracking-[0.14em] text-[var(--fo-stone)] uppercase">
                06 products
              </p>
              <div>
                <p className="font-display text-3xl leading-tight">
                  Browse the full system
                </p>
                <p className="mt-3 text-sm text-[var(--fo-stone)]">
                  Filter by category, colour and use-case.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.12em] uppercase">
                  Open shop
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
