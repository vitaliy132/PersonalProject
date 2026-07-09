"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type BookingContextValue = {
  bookingOpen: boolean;
  openBooking: () => void;
  closeBooking: () => void;
  setBookingOpen: (open: boolean) => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookingOpen, setBookingOpen] = useState(false);

  const openBooking = useCallback(() => setBookingOpen(true), []);
  const closeBooking = useCallback(() => setBookingOpen(false), []);

  const value = useMemo(
    () => ({ bookingOpen, openBooking, closeBooking, setBookingOpen }),
    [bookingOpen, openBooking, closeBooking],
  );

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used within BookingProvider");
  }
  return ctx;
}
