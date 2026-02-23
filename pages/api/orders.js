// pages/api/orders.js

let orders = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    // Return all orders
    return res.status(200).json(orders);
  }

  if (req.method === "POST") {
    try {
      const order = req.body;

      if (!order || !order.id || !order.items) {
        return res.status(400).json({ message: "Invalid order data" });
      }

      orders.push(order);
      return res.status(201).json({ message: "Order placed", order });
    } catch (error) {
      console.error("Order API error:", error);
      return res.status(500).json({ message: "Failed to place order" });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}
