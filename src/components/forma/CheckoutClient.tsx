"use client";

import { useState, type FormEvent } from "react";
import { useCart } from "@/components/forma/cart-context";
import {
  CheckoutForm,
  type CheckoutFormState,
} from "@/components/forma/CheckoutForm";
import { CheckoutEmpty, CheckoutSuccess } from "@/components/forma/CheckoutSuccess";
import {
  CheckoutSteps,
  checkoutSteps,
} from "@/components/forma/CheckoutSteps";
import { OrderSummary } from "@/components/forma/OrderSummary";

export function CheckoutClient() {
  const { cart, cartSubtotal, clearCart } = useCart();
  const [step, setStep] = useState(0);
  const [complete, setComplete] = useState(false);
  const [form, setForm] = useState<CheckoutFormState>({
    email: "",
    name: "",
    address: "",
    city: "",
    postcode: "",
    shipping: "standard",
  });

  const shippingCost =
    form.shipping === "express" ? 12 : cartSubtotal >= 100 ? 0 : 5;
  const total = cartSubtotal + shippingCost;

  function onContinue(event: FormEvent) {
    event.preventDefault();
    if (step < checkoutSteps.length - 1) {
      setStep((s) => s + 1);
      return;
    }
    setComplete(true);
    clearCart();
  }

  if (complete) {
    return <CheckoutSuccess />;
  }

  if (cart.length === 0) {
    return <CheckoutEmpty />;
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
      <div>
        <CheckoutSteps step={step} />
        <CheckoutForm
          step={step}
          form={form}
          cartSubtotal={cartSubtotal}
          onChange={setForm}
          onBack={() => setStep((s) => s - 1)}
          onSubmit={onContinue}
          isLastStep={step === checkoutSteps.length - 1}
        />
      </div>
      <OrderSummary
        cart={cart}
        cartSubtotal={cartSubtotal}
        shippingCost={shippingCost}
        total={total}
      />
    </div>
  );
}
