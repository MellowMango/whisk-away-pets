import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const tier: "checklist" | "concierge" = body?.tier === "concierge" ? "concierge" : "checklist";
    const intakeData = body?.intakeData ?? null;
    const applyDiscount: boolean = Boolean(body?.applyDiscount);

    const priceId = tier === "concierge"
      ? process.env.STRIPE_PRICE_CONCIERGE
      : process.env.STRIPE_PRICE_CHECKLIST;

    if (!priceId) {
      return NextResponse.json({ error: "Missing Stripe price ID" }, { status: 500 });
    }

    const discounts: Array<{ coupon?: string; promotion_code?: string }> = [];
    if (applyDiscount) {
      if (process.env.STRIPE_COUPON_ID) {
        discounts.push({ coupon: process.env.STRIPE_COUPON_ID });
      } else if (process.env.STRIPE_PROMOTION_CODE_ID) {
        discounts.push({ promotion_code: process.env.STRIPE_PROMOTION_CODE_ID });
      }
    }

    const successUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/thank-you?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/checkout?tier=${tier}&canceled=1`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      allow_promotion_codes: true,             // still allow manual codes
      discounts: discounts.length ? discounts : undefined,
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        tier,
        intake: intakeData ? JSON.stringify(intakeData) : "",
      },
    });

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to create session" }, { status: 500 });
  }
}