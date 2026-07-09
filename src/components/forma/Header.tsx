"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/components/forma/cart-context";
import { Logo } from "@/components/forma/Logo";
import { WishlistDrawer } from "@/components/forma/WishlistDrawer";
import { formaNav } from "@/lib/forma-content";

export function Header() {
  const { cartCount, wishlist, setCartOpen, setSearchOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-[var(--fo-border)] bg-[var(--fo-bg)]/92 backdrop-blur-md"
          : "border-b border-[var(--fo-border)] bg-[var(--fo-bg)]/80 backdrop-blur-sm"
      }`}
    >
      <div className="fo-container flex h-14 items-center justify-between sm:h-16">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {formaNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[0.68rem] font-medium tracking-[0.14em] text-[var(--fo-stone)] uppercase transition-colors hover:text-[var(--fo-ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-0.5">
          <button
            type="button"
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center"
            onClick={() => setSearchOpen(true)}
          >
            <Search size={17} />
          </button>
          <button
            type="button"
            aria-label={`Wishlist, ${wishlist.length} items`}
            className="relative flex h-10 w-10 items-center justify-center"
            onClick={() => setWishlistOpen(true)}
          >
            <Heart size={17} />
            {wishlist.length > 0 && (
              <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[var(--fo-accent)]" />
            )}
          </button>
          <button
            type="button"
            aria-label={`Cart, ${cartCount} items`}
            className="relative flex h-10 w-10 items-center justify-center"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBag size={17} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--fo-ink)] px-1 font-mono text-[0.58rem] font-medium text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--fo-border)] bg-[var(--fo-bg)] lg:hidden">
          <nav className="fo-container flex flex-col py-4" aria-label="Mobile">
            {formaNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 font-display text-2xl tracking-tight"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/work/forma-studio/shop"
              className="fo-btn fo-btn-primary mt-4"
              onClick={() => setOpen(false)}
            >
              Shop collection
            </Link>
          </nav>
        </div>
      )}

      <WishlistDrawer open={wishlistOpen} onClose={() => setWishlistOpen(false)} />
    </header>
  );
}
