# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
WhiskAway Pets is a Next.js application that provides country-specific pet relocation checklists and concierge services. The app uses a simple three-page flow: Intake → Pricing → Checkout with Stripe integration.

## Development Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server  
npm start

# Run ESLint
npm run lint
```

## Architecture & Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form with Zod validation
- **Payment**: Stripe Checkout integration
- **TypeScript**: Full TypeScript support with strict mode

## Key Application Flow
1. **Intake Form** (`/intake`) - Multi-pet data collection using React Hook Form
2. **Pricing Page** (`/pricing`) - Service tier selection (Checklist $50 / Concierge $150)  
3. **Checkout** (`/checkout`) - Stripe Checkout session creation with optional auto-discount
4. **Thank You** (`/thank-you`) - Post-payment confirmation

## Core Components
- `EnhancedIntakeForm.tsx` - Complex multi-pet intake form with country selection, phone validation, and Zod schema validation
- `CouponModal.tsx` - Early-days discount modal for user acquisition
- `IntakeForm.tsx` - Simplified intake form variant

## API Routes
- `/api/intake` - Processes and validates intake form submissions
- `/api/checkout` - Creates Stripe checkout sessions with pricing tier and discount logic

## Environment Configuration
The app requires several Stripe-related environment variables:
- `STRIPE_SECRET_KEY` - Stripe secret key
- `STRIPE_PRICE_CHECKLIST` - Price ID for checklist tier ($50)
- `STRIPE_PRICE_CONCIERGE` - Price ID for concierge tier ($150)
- `STRIPE_COUPON_ID` or `STRIPE_PROMOTION_CODE_ID` - For early-days discount
- `EARLY_DISCOUNT_ENABLED` - Boolean to enable/disable auto-discount
- `STRIPE_PROMO_PERCENT` - Discount percentage (typically 50)
- `NEXT_PUBLIC_SITE_URL` - Site URL for checkout redirects

## Key Libraries
- `world-countries` + `react-country-flag` - Country selection with flags
- `react-phone-number-input` + `libphonenumber-js` - International phone validation
- `react-select` - Enhanced dropdown components
- `@stripe/stripe-js` - Client-side Stripe integration
- `clsx` - Conditional CSS classes

## Data Flow
1. User completes intake form with pet details, travel info, and contact data
2. Form data is validated using Zod schemas and stored in component state
3. User selects service tier on pricing page
4. Checkout API creates Stripe session with intake data in metadata
5. Successful payment redirects to thank-you page with session ID

## Code Patterns
- All forms use React Hook Form with Zod resolver for validation
- Stripe integration follows server-side session creation pattern
- Component styling uses Tailwind utility classes
- TypeScript interfaces define data shapes throughout the app
- Error handling includes both client-side validation and API error responses