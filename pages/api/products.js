// pages/api/products.js

export default function handler(req, res) {
  // Dummy product data (later DB connect করা যাবে)
  const products = [
    { id: 1, name: "Laptop", price: 1200, stock: 10 },
    { id: 2, name: "Smartphone", price: 800, stock: 20 },
    { id: 3, name: "Headphones", price: 150, stock: 50 },
  ];

  if (req.method === "GET") {
    // সব products দেখাবে
    res.status(200).json(products);
  } else if (req.method === "POST") {
    // নতুন product যোগ করার জন্য (future use)
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json({ message: "Product added", product: newProduct });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
