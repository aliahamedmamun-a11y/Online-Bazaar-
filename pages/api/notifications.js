// pages/api/notifications.js
import Pusher from "pusher";

if (!process.env.PUSHER_APP_ID || !process.env.PUSHER_KEY || !process.env.PUSHER_SECRET) {
  throw new Error("Please add your Pusher credentials to .env.local");
}

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: "ap2",
  useTLS: true,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { title, message } = req.body;

      if (!title || !message) {
        return res.status(400).json({ error: "Title and message are required" });
      }

      // Trigger notification event
      await pusher.trigger("notifications-channel", "new-notification", {
        title,
        message,
        date: new Date().toISOString(),
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Pusher error:", error);
      return res.status(500).json({ error: "Failed to send notification" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
