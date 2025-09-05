import Stripe from "stripe";

// Commented out for build - add STRIPE_SECRET_KEY to environment variables when ready
// if (!process.env.STRIPE_SECRET_KEY) {
//   throw new Error("Missing STRIPE_SECRET_KEY");
// }

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_placeholder", {
  apiVersion: "2025-07-30.basil",
});