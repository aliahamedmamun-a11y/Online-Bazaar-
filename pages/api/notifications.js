import Pusher from "pusher";

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: "ap2",
  useTLS: true,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, message } = req.body;

    // Trigger notification event
    await pusher.trigger("notifications-channel", "new-notification", {
      title,
      message,
      date: new Date().toISOString(),
    });

    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
