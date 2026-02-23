import { useEffect, useState } from "react";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("/api/notifications")
      .then((res) => res.json())
      .then((data) => setNotifications(data));
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Notifications</h1>
      {notifications.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">No notifications yet.</p>
      ) : (
        <div className="space-y-4">
          {notifications.map((n) => (
            <div
              key={n.id}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <h2 className="font-semibold dark:text-white">{n.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{n.message}</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(n.date).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
