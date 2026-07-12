import { Suspense } from "react";
import { ShopClient } from "@/components/forma/ShopClient";
import { formaSeo } from "@/lib/forma-content";

export const metadata = {
  title: formaSeo.shop.title,
  description: formaSeo.shop.description,
};

export default function ShopPage() {
  return (
    <main className="pb-20 pt-10 sm:pb-24 sm:pt-14">
      <div className="fo-container">
        <p className="fo-eyebrow">Index / Collection</p>
        <h1 className="font-display mt-3 text-4xl tracking-tight sm:text-5xl lg:text-6xl">
          Shop the system
        </h1>
        <p className="mt-4 max-w-lg text-[var(--fo-stone)]">
          Minimal carry goods designed for work, travel and everyday life.
          Filter by category or search by use-case.
        </p>
        <div className="mt-10">
          <Suspense
            fallback={
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="border border-[var(--fo-border)]">
                    <div className="fo-skeleton aspect-[4/5]" />
                    <div className="fo-skeleton m-4 h-4 w-32" />
                  </div>
                ))}
              </div>
            }
          >
            <ShopClient />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
