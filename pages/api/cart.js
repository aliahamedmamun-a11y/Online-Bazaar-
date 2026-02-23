// pages/api/cart.js

let cart = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(cart);
  } else if (req.method === "POST") {
    const product = req.body;
    cart.push(product);
    res.status(201).json({ message: "Added to cart", cart });
  } else if (req.method === "DELETE") {
    const { id } = req.body;
    cart = cart.filter((item) => item.id !== id);
    res.status(200).json({ message: "Removed from cart", cart });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
