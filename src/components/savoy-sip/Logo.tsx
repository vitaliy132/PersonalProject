export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-[1.35rem] leading-none tracking-[-0.02em] text-current sm:text-[1.5rem] ${className}`}
    >
      The Savoy Sip
    </span>
  );
}
