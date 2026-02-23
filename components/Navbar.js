import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#4f46e5", color: "white" }}>
      <h2 style={{ display: "inline-block", marginRight: "2rem" }}>
        Online Bazaar
      </h2>
      <Link href="/">Home</Link> |{" "}
      <Link href="/products">Products</Link> |{" "}
      <Link href="/cart">Cart</Link> |{" "}
      <Link href="/checkout">Checkout</Link> |{" "}
      <Link href="/login">Login</Link>
    </nav>
  );
}
