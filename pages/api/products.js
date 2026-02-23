// pages/api/products.js

// Dummy product data (later DB connect করা যাবে)
let products = [
  { id: 1, name: "Laptop", price: 1200, stock: 10 },
  { id: 2, name: "Smartphone", price: 800, stock: 20 },
  { id: 3, name: "Headphones", price: 150, stock: 50 },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    // সব products দেখাবে
    return res.status(200).json(products);
  }

  if (req.method === "POST") {
    try {
      const newProduct = req.body;

      if (!newProduct || !newProduct.id || !newProduct.name || !newProduct.price) {
        return res.status(400).json({ message: "Invalid product data" });
      }

      products.push(newProduct);
      return res.status(201).json({ message: "Product added", product: newProduct });
    } catch (error) {
      console.error("Product API error:", error);
      return res.status(500).json({ message: "Failed to add product" });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}
