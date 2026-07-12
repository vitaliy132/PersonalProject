import { CheckoutClient } from "@/components/forma/CheckoutClient";
import { formaSeo } from "@/lib/forma-content";

export const metadata = {
  title: formaSeo.checkout.title,
  description: formaSeo.checkout.description,
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
