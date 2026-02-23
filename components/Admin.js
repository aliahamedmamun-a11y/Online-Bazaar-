// components/Admin.js
import { useEffect, useState } from "react";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", image: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Products fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) throw new Error("Failed to add product");

      const addedProduct = await res.json();
      setProducts([...products, addedProduct.product]);
      setNewProduct({ name: "", price: "", image: "" });
    } catch (error) {
      console.error("Add product error:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const res = await fetch("/api/products", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) throw new Error("Failed to delete product");

      setProducts(products.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Delete product error:", error);
    }
  };

  if (loading) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 dark:text-white">Admin Panel</h1>
        <p className="text-gray-600 dark:text-gray-300">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Admin Panel</h1>

      {/* Add Product Form */}
      <form
        onSubmit={addProduct}
        className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mb-6"
      >
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Add New Product</h2>
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="w-full mb-3 px-4 py-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          className="w-full mb-3 px-4 py-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          className="w-full mb-3 px-4 py-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Add Product
        </button>
      </form>

      {/* Product List */}
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Manage Products</h2>
      <div className="space-y-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="flex justify-between items-center bg-white dark:bg-gray-800 shadow-md rounded-lg p-4"
          >
            <div>
              <h3 className="font-semibold dark:text-white">{p.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">${p.price}</p>
            </div>
            <button
              onClick={() => deleteProduct(p.id)}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
