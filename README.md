# WhiskAway Pets (MVP)

- Next.js App Router + Tailwind
- Intake → Pricing → Checkout
- Stripe Checkout with early-days auto-coupon (50% off)

## Configure Stripe

Create two Prices in your Stripe Dashboard (or Stripe CLI):

- Checklist: **$50** USD (one-time)
- Concierge: **$150** USD (one-time)

Put their IDs into `.env.local`:

```
STRIPE_PRICE_CHECKLIST=price_xxx
STRIPE_PRICE_CONCIERGE=price_xxx
```

### Auto-discount (recommended early days)
Option A — **Coupon**:

With Stripe CLI installed and logged in:

```bash
stripe coupons create percent_off=50 duration=once
```

Copy the returned co_… into STRIPE_COUPON_ID

Option B — **Promotion Code** (nicer for analytics/marketing):

```bash
stripe coupons create percent_off=50 duration=once
# take co_…
stripe promotion_codes create coupon=co_… code=WHISKAWAY50 max_redemptions=999
```

copy pc_… into STRIPE_PROMOTION_CODE_ID

Set:

```
EARLY_DISCOUNT_ENABLED=true
STRIPE_PROMO_PERCENT=50
```

## Local dev

```bash
npm run dev
```

## Deploy (Vercel)
- `npm i -g vercel`
- `vercel login`
- `vercel`
- Set all env vars in Vercel Project Settings → Environment Variables (including Stripe keys & price IDs)
- Redeploy

## Notes
- Intake JSON is attached to the Stripe session `metadata.intake`.
- You can add a Webhook later to generate and email the PDF checklist post-payment.
- Turn off the auto-discount by setting `EARLY_DISCOUNT_ENABLED=false`.