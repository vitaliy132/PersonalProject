import { Star } from "lucide-react";

export function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < Math.round(rating)
              ? "fill-[var(--fo-black)] text-[var(--fo-black)]"
              : "text-[var(--fo-stone-soft)]"
          }
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
