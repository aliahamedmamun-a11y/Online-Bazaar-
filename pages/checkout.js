import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

export default function Checkout() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleCheckout = async () => {
    setLoading(true);

    // Example order data
    const order = {
      id: Date.now(),
      items: [{ id: 1, name: "Laptop", price: 1200, quantity: 1 }],
      total: 1200,
    };

    // 1. Save order (Orders API)
    await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });

    // 2. Stripe payment session
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: order.items }),
    });

    const data = await res.json();
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

    await stripe.redirectToCheckout({ sessionId: data.id });
    setLoading(false);
    setMessage("Redirecting to payment...");
  };

  return (
    <div>
      <h1>Checkout - Online Bazaar</h1>
      <button onClick={handleCheckout} disabled={loading}>
        {loading ? "Processing..." : "Pay with Stripe"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}
