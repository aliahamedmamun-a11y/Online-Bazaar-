// pages/register.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to register");

      const data = await res.json();
      setMessage("Account created successfully!");
      setForm({ name: "", email: "", password: "" });
    } catch (error) {
      console.error("Register error:", error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center dark:text-white">
            Create an Account
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white"
              required
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-300"
            >
              Register
            </button>
          </form>
          {message && (
            <p className="mt-4 text-center text-green-600 dark:text-green-400">
              {message}
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
