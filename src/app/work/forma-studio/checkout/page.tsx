import { CheckoutClient } from "@/components/forma/CheckoutClient";

export const metadata = {
  title: "Checkout | FORMA Studio",
  description: "Complete your FORMA Studio order.",
};

export default function CheckoutPage() {
  return (
    <main className="pb-20 pt-10 sm:pb-24 sm:pt-14">
      <div className="fo-container">
        <CheckoutClient />
      </div>
    </main>
  );
}
