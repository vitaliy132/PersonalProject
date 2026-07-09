const items = [
  "Free UK shipping £100+",
  "2-year guarantee",
  "Repair programme",
  "30-day returns",
  "Carbon-aware logistics",
  "Designed in London",
];

export function Marquee() {
  const loop = [...items, ...items];

  return (
    <div className="border-y border-[var(--fo-border)] bg-[var(--fo-bg-elevated)] py-3">
      <div className="fo-marquee">
        <div className="fo-marquee-track font-mono text-[0.68rem] tracking-[0.16em] text-[var(--fo-stone)] uppercase">
          {loop.map((item, index) => (
            <span key={`${item}-${index}`} className="inline-flex items-center gap-2.5">
              <span className="h-1 w-1 rounded-full bg-[var(--fo-accent)]" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
