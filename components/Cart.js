// components/Cart.js
import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch("/api/cart");
        if (!res.ok) throw new Error("Failed to fetch cart");
        const data = await res.json();
        setCart(data);
      } catch (error) {
        console.error("Cart fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const removeFromCart = async (id) => {
    try {
      const res = await fetch("/api/cart", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) throw new Error("Failed to remove item");

      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Remove item error:", error);
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 dark:text-white">Your Cart</h1>
        <p className="text-gray-600 dark:text-gray-300">Loading cart...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">No items in cart</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white dark:bg-gray-800 shadow-md rounded-lg p-4"
            >
              <div>
                <h2 className="text-lg font-semibold dark:text-white">{item.name}</h2>
                <p className="text-gray-600 dark:text-gray-300">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
