"use client";

import { brickSalt } from "@/lib/brick-salt-content";

const items = [
  "Small plates",
  "Live fire",
  "Natural wine",
  "Shared tables",
  brickSalt.city,
  "Seasonal menu",
  "Craft cocktails",
  "Northern produce",
];

export function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden border-y-2 border-[var(--bs-charcoal)] bg-[var(--bs-charcoal)] py-4 text-[var(--bs-salt)]"
      aria-hidden
    >
      <div className="bs-marquee gap-10 px-4">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-10 text-[0.75rem] font-bold uppercase tracking-[0.28em]"
          >
            {item}
            <span className="inline-block h-1.5 w-1.5 bg-[var(--bs-brick)]" />
          </span>
        ))}
      </div>
    </div>
  );
}
