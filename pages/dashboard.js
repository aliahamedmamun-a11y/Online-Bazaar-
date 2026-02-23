import { useEffect, useState } from "react";

export default function Dashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">
        User Dashboard
      </h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">
          Profile Info
        </h2>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
          <p className="text-gray-700 dark:text-gray-300">Name: Ali Ahamed</p>
          <p className="text-gray-700 dark:text-gray-300">Email: ali@example.com</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 dark:text-white">
          Order History
        </h2>
        {orders.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">No orders yet.</p>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4"
              >
                <h3 className="font-semibold dark:text-white">
                  Order #{order.id}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Total: ${order.total}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Items: {order.items.map((i) => i.name).join(", ")}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
