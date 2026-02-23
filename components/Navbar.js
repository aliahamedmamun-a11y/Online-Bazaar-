import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-indigo-600 text-white">
      <h2 className="text-xl font-bold">Online Bazaar</h2>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/checkout">Checkout</Link>
        <Link href="/login">Login</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
