// components/AdminOrders.js
import { useEffect, useState } from "react";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("/api/orders");
        if (!res.ok) throw new Error("Failed to fetch orders");
        const data = await res.json();
        setOrders(data);
      } catch (error) {
        console.error("Orders fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const updateOrderStatus = async (id, status) => {
    try {
      const res = await fetch("/api/orders", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });

      if (!res.ok) throw new Error("Failed to update order");

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === id ? { ...order, status } : order
        )
      );
    } catch (error) {
      console.error("Update order error:", error);
    }
  };

  if (loading) {
    return (
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 dark:text-white">Order Management</h1>
        <p className="text-gray-600 dark:text-gray-300">Loading orders...</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Order Management</h1>

      {orders.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">No orders found.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4"
            >
              <h2 className="font-semibold dark:text-white">Order #{order.id}</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Customer: {order.customer}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Total: ${order.total}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Status: {order.status}
              </p>
              <div className="mt-3 space-x-2">
                <button
                  onClick={() => updateOrderStatus(order.id, "Processing")}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                >
                  Mark Processing
                </button>
                <button
                  onClick={() => updateOrderStatus(order.id, "Shipped")}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Mark Shipped
                </button>
                <button
                  onClick={() => updateOrderStatus(order.id, "Delivered")}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Mark Delivered
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
