// pages/checkout.js
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleCheckout = async () => {
    setLoading(true);
    setMessage("");

    try {
      const order = {
        id: Date.now(),
        items: [{ id: 1, name: "Laptop", price: 1200, quantity: 1 }],
        total: 1200,
        customer: "Test User",
        status: "Pending",
      };

      // Save order
      const orderRes = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });

      if (!orderRes.ok) throw new Error("Failed to save order");

      // Stripe payment
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: order.items }),
      });

      if (!res.ok) throw new Error("Failed to create checkout session");

      const data = await res.json();
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

      const { error } = await stripe.redirectToCheckout({ sessionId: data.id });
      if (error) throw error;

      setMessage("Redirecting to payment...");
    } catch (error) {
      console.error("Checkout error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-6 max-w-lg mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4 dark:text-white">Checkout</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Review your order and proceed to payment.
        </p>
        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-300"
        >
          {loading ? "Processing..." : "Pay with Stripe"}
        </button>
        {message && <p className="mt-4 text-green-600 dark:text-green-400">{message}</p>}
      </div>
      <Footer />
    </div>
  );
}
