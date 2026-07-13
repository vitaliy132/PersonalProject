import Link from "next/link";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

const variants = {
  primary:
    "bg-accent text-off-white hover:bg-accent-strong border border-accent",
  secondary:
    "bg-transparent text-off-white border border-border-strong hover:border-off-white/50 hover:bg-white/[0.03]",
  ghost: "bg-transparent text-muted hover:text-off-white border border-transparent",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300",
    variants[variant],
    disabled ? "cursor-not-allowed opacity-60" : "",
    className,
  ].join(" ");

  if (href) {
    const external = href.startsWith("http");
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    }
    if (href.startsWith("#")) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
