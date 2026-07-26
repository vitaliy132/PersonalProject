import type { ReactNode } from "react";

type MicrositeMarqueeProps = {
  items: string[];
  className?: string;
  trackClassName?: string;
  itemClassName?: string;
  separator?: ReactNode;
  /** Default: before the label (FORMA). Use "after" for BRICK & SALT. */
  separatorPosition?: "before" | "after";
};

/**
 * Content-driven marquee track. Brands supply outer chrome + class tokens;
 * animation comes from shared `.ms-marquee` / `.ms-marquee-track` in microsite-base.
 */
export function MicrositeMarquee({
  items,
  className = "",
  trackClassName = "ms-marquee gap-10 px-4",
  itemClassName = "",
  separator,
  separatorPosition = "before",
}: MicrositeMarqueeProps) {
  const loop = [...items, ...items];

  return (
    <div className={className} aria-hidden>
      <div className={trackClassName}>
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className={`inline-flex shrink-0 items-center ${itemClassName}`}
          >
            {separatorPosition === "before" ? separator : null}
            {item}
            {separatorPosition === "after" ? separator : null}
          </span>
        ))}
      </div>
    </div>
  );
}
