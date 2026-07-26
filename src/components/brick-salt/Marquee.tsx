import { MicrositeMarquee } from "@/components/microsite/MicrositeMarquee";
import { brickSalt } from "@/lib/brick-salt/content";

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
  return (
    <MicrositeMarquee
      items={items}
      className="overflow-hidden border-y-2 border-[var(--bs-charcoal)] bg-[var(--bs-charcoal)] py-4 text-[var(--bs-salt)]"
      trackClassName="ms-marquee gap-10 px-4"
      itemClassName="gap-10 text-[0.75rem] font-bold uppercase tracking-[0.28em]"
      separatorPosition="after"
      separator={
        <span className="inline-block h-1.5 w-1.5 bg-[var(--bs-brick)]" />
      }
    />
  );
}
