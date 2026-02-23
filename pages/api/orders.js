// pages/api/orders.js

let orders = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(orders);
  } else if (req.method === "POST") {
    const order = req.body;
    orders.push(order);
    res.status(201).json({ message: "Order placed", order });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
