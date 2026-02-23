// pages/api/cart.js

let cart = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    // Get all cart items
    return res.status(200).json(cart);
  }

  if (req.method === "POST") {
    try {
      const product = req.body;
      if (!product || !product.id) {
        return res.status(400).json({ message: "Invalid product data" });
      }
      cart.push(product);
      return res.status(201).json({ message: "Added to cart", cart });
    } catch (error) {
      return res.status(500).json({ message: "Error adding to cart" });
    }
  }

  if (req.method === "DELETE") {
    try {
      const { id } = req.body;
      if (!id) {
        return res.status(400).json({ message: "Product ID required" });
      }
      cart = cart.filter((item) => item.id !== id);
      return res.status(200).json({ message: "Removed from cart", cart });
    } catch (error) {
      return res.status(500).json({ message: "Error removing from cart" });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}
