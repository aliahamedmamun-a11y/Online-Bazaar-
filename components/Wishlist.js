// components/Wishlist.js
import { useEffect, useState } from "react";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await fetch("/api/wishlist");
        if (!res.ok) throw new Error("Failed to fetch wishlist");
        const data = await res.json();
        setWishlist(data);
      } catch (error) {
        console.error("Wishlist fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  const removeFromWishlist = async (id) => {
    try {
      const res = await fetch("/api/wishlist", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) throw new Error("Failed to remove item");

      setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Remove wishlist item error:", error);
    }
  };

  const addToCart = async (product) => {
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (!res.ok) throw new Error("Failed to add to cart");

      alert(`${product.name} added to cart!`);
    } catch (error) {
      console.error("Add to cart error:", error);
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 dark:text-white">My Wishlist</h1>
        <p className="text-gray-600 dark:text-gray-300">Loading wishlist...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">No items in wishlist</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4"
            >
              <img
                src={item.image || "/logo.png"}
                alt={item.name}
                className="w-full h-40 object-cover rounded"
              />
              <h2 className="text-lg font-semibold mt-2 dark:text-white">
                {item.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">${item.price}</p>
              <div className="flex space-x-2 mt-3">
                <button
                  onClick={() => addToCart(item)}
                  className="flex-1 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-300"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-300"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
