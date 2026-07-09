import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={[
        "glass rounded-2xl p-6 sm:p-7",
        hover
          ? "transition-[background,border-color,transform] duration-300 hover:border-border-strong hover:bg-surface-hover"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
