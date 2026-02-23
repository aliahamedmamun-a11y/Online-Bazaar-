import { useState } from "react";

export default function Checkout() {
  const [message, setMessage] = useState("");

  const placeOrder = async () => {
    const order = {
      id: Date.now(),
      items: [{ id: 1, name: "Laptop", price: 1200 }],
      total: 1200,
    };

    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div>
      <h1>Checkout</h1>
      <button onClick={placeOrder}>Place Order</button>
      {message && <p>{message}</p>}
    </div>
  );
}
