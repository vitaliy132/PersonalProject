export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex flex-col leading-none tracking-[-0.04em] text-current ${className}`}
    >
      <span className="font-display text-[1.35rem] sm:text-[1.5rem]">Savoy</span>
      <span className="mt-0.5 text-[0.58rem] font-medium uppercase tracking-[0.32em] opacity-70">
        Sip
      </span>
    </span>
  );
}
