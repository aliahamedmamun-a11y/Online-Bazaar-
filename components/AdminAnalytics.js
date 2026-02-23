// components/AdminAnalytics.js
import { useEffect, useState } from "react";

export default function AdminAnalytics() {
  const [analytics, setAnalytics] = useState({ sales: 0, revenue: 0, users: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await fetch("/api/analytics");
        if (!res.ok) throw new Error("Failed to fetch analytics");
        const data = await res.json();
        setAnalytics(data);
      } catch (error) {
        console.error("Analytics fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) {
    return (
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 dark:text-white">Analytics Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-300">Loading analytics...</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Analytics Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold dark:text-white">Total Sales</h2>
          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            {analytics.sales}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold dark:text-white">Revenue</h2>
          <p className="text-2xl font-bold text-green-600 dark:text-green-400">
            ${analytics.revenue}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold dark:text-white">Active Users</h2>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {analytics.users}
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Sales Overview</h2>
        <p className="text-gray-600 dark:text-gray-300">
          (Here you can integrate charts using libraries like Chart.js or Recharts)
        </p>
      </div>
    </div>
  );
}
