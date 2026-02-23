export default function handler(req, res) {
  const notifications = [
    {
      id: 1,
      title: "Order Update",
      message: "Your order #1234 has been shipped.",
      date: "2026-02-23T10:30:00Z",
    },
    {
      id: 2,
      title: "Special Offer",
      message: "Get 20% off on Electronics today!",
      date: "2026-02-23T12:00:00Z",
    },
    {
      id: 3,
      title: "Wishlist Reminder",
      message: "The Laptop in your wishlist is now on sale.",
      date: "2026-02-23T14:00:00Z",
    },
  ];

  res.status(200).json(notifications);
}
