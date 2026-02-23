import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch("/api/wishlist")
      .then((res) => res.json())
      .then((data) => setWishlist(data));
  }, []);

  const removeFromWishlist = async (id) => {
    await fetch("/api/wishlist", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const addToCart = async (product) => {
    await fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    alert(`${product.name} added to cart!`);
  };

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
                  className="flex-1 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700"
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
