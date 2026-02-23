// lib/stripe.js
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Please add your STRIPE_SECRET_KEY to .env.local");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15", // সর্বশেষ stable API version ব্যবহার করা ভালো
});

export default stripe;
