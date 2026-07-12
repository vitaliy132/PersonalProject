export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-[1.2rem] leading-none tracking-[-0.02em] text-current sm:text-[1.4rem] ${className}`}
    >
      BRICK &amp; SALT
    </span>
  );
}
