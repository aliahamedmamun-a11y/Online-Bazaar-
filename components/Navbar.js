// components/Navbar.js
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-indigo-600 text-white">
      <h2 className="text-xl font-bold">Online Bazaar</h2>
      <div className="flex items-center space-x-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/products" className="hover:underline">
          Products
        </Link>
        <Link href="/cart" className="hover:underline">
          Cart
        </Link>
        <Link href="/checkout" className="hover:underline">
          Checkout
        </Link>
        <Link href="/login" className="hover:underline">
          Login
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
