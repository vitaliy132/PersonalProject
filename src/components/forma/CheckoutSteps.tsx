"use client";

export const checkoutSteps = ["Information", "Shipping", "Review"] as const;

type CheckoutStepsProps = {
  step: number;
};

export function CheckoutSteps({ step }: CheckoutStepsProps) {
  return (
    <ol className="mb-10 flex gap-4 text-xs tracking-[0.12em] uppercase">
      {checkoutSteps.map((label, index) => (
        <li
          key={label}
          className={
            index === step
              ? "font-medium text-[var(--fo-black)]"
              : index < step
                ? "text-[var(--fo-olive)]"
                : "text-[var(--fo-stone-soft)]"
          }
        >
          {index + 1}. {label}
        </li>
      ))}
    </ol>
  );
}
