export default function Hero() {
  return (
    <section
      style={{
        padding: "4rem",
        textAlign: "center",
        background: "#f3f4f6",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Welcome to Online Bazaar
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        Your one-stop shop for modern products
      </p>
      <a
        href="/products"
        style={{
          background: "#4f46e5",
          color: "white",
          padding: "0.8rem 1.5rem",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
        Shop Now
      </a>
    </section>
  );
}
