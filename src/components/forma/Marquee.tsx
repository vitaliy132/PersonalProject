import { MicrositeMarquee } from "@/components/microsite/MicrositeMarquee";

const items = [
  "Free UK shipping £100+",
  "2-year guarantee",
  "Repair programme",
  "30-day returns",
  "Carbon-aware logistics",
  "Designed in London",
];

export function Marquee() {
  return (
    <div className="border-y border-[var(--fo-border)] bg-[var(--fo-bg-elevated)] py-3">
      <div className="fo-marquee">
        <MicrositeMarquee
          items={items}
          trackClassName="ms-marquee-track font-mono text-[0.68rem] tracking-[0.16em] text-[var(--fo-stone)] uppercase"
          itemClassName="gap-2.5"
          separator={
            <span className="h-1 w-1 rounded-full bg-[var(--fo-accent)]" />
          }
        />
      </div>
    </div>
  );
}
