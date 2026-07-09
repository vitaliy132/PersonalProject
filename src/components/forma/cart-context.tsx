"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { FormaProduct } from "@/lib/forma-content";

export type CartLine = {
  key: string;
  product: FormaProduct;
  color: string;
  size: string;
  quantity: number;
};

type CartContextValue = {
  cart: CartLine[];
  wishlist: string[];
  cartOpen: boolean;
  searchOpen: boolean;
  setCartOpen: (open: boolean) => void;
  setSearchOpen: (open: boolean) => void;
  addToCart: (
    product: FormaProduct,
    options?: { color?: string; size?: string; quantity?: number },
  ) => void;
  removeFromCart: (key: string) => void;
  updateQuantity: (key: string, quantity: number) => void;
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  cartCount: number;
  cartSubtotal: number;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function lineKey(productId: string, color: string, size: string) {
  return `${productId}__${color}__${size}`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const addToCart = useCallback(
    (
      product: FormaProduct,
      options?: { color?: string; size?: string; quantity?: number },
    ) => {
      const color = options?.color ?? product.colors[0]?.name ?? "Default";
      const size = options?.size ?? product.sizes[0] ?? "One size";
      const quantity = options?.quantity ?? 1;
      const key = lineKey(product.id, color, size);

      setCart((prev) => {
        const existing = prev.find((line) => line.key === key);
        if (existing) {
          return prev.map((line) =>
            line.key === key
              ? { ...line, quantity: line.quantity + quantity }
              : line,
          );
        }
        return [...prev, { key, product, color, size, quantity }];
      });
      setCartOpen(true);
    },
    [],
  );

  const removeFromCart = useCallback((key: string) => {
    setCart((prev) => prev.filter((line) => line.key !== key));
  }, []);

  const updateQuantity = useCallback((key: string, quantity: number) => {
    setCart((prev) =>
      prev
        .map((line) =>
          line.key === key ? { ...line, quantity: Math.max(0, quantity) } : line,
        )
        .filter((line) => line.quantity > 0),
    );
  }, []);

  const toggleWishlist = useCallback((productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  }, []);

  const isWishlisted = useCallback(
    (productId: string) => wishlist.includes(productId),
    [wishlist],
  );

  const clearCart = useCallback(() => setCart([]), []);

  const cartCount = useMemo(
    () => cart.reduce((sum, line) => sum + line.quantity, 0),
    [cart],
  );

  const cartSubtotal = useMemo(
    () => cart.reduce((sum, line) => sum + line.product.price * line.quantity, 0),
    [cart],
  );

  const value = useMemo(
    () => ({
      cart,
      wishlist,
      cartOpen,
      searchOpen,
      setCartOpen,
      setSearchOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleWishlist,
      isWishlisted,
      cartCount,
      cartSubtotal,
      clearCart,
    }),
    [
      cart,
      wishlist,
      cartOpen,
      searchOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleWishlist,
      isWishlisted,
      cartCount,
      cartSubtotal,
      clearCart,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}
