import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-[#061018] hover:bg-[#7ab0ff] shadow-[0_0_0_1px_rgba(91,159,255,0.35),0_12px_40px_-12px_var(--accent-glow)]",
  secondary:
    "bg-surface text-text border border-border hover:border-border-strong hover:bg-surface-hover",
  ghost: "text-muted hover:text-text",
};

type ButtonBase = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsLink = ButtonBase & {
  href: string;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "children" | "className">;

type ButtonAsButton = ButtonBase & {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<"button">, "children" | "className">;

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonAsLink | ButtonAsButton) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium tracking-tight transition-colors duration-200",
    variants[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in props && props.href) {
    const { href, onClick, ...rest } = props;
    return (
      <Link href={href} className={classes} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
