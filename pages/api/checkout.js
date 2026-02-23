// pages/api/orders.js
import stripe from "../../lib/stripe";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { items } = req.body;

      if (!items || !Array.isArray(items)) {
        return res.status(400).json({ error: "Invalid items data" });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: items.map((item) => ({
          price_data: {
            currency: "usd",
            product_data: { name: item.name || "Unnamed Product" },
            unit_amount: (item.price ?? 0) * 100, // fallback if price missing
          },
          quantity: item.quantity ?? 1,
        })),
        mode: "payment",
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cancel`,
      });

      return res.status(200).json({ id: session.id });
    } catch (error) {
      console.error("Stripe checkout error:", error);
      return res.status(500).json({ error: error.message });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}
