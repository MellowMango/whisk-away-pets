"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import CouponModal from "@/components/CouponModal";

export default function CheckoutPage() {
  const params = useSearchParams();
  const router = useRouter();
  const tierParam = (params.get("tier") || "checklist").toLowerCase();
  const tier = tierParam === "concierge" ? "concierge" : "checklist";
  const [busy, setBusy] = useState(false);
  const [discountAccepted, setDiscountAccepted] = useState(false);

  const priceText = useMemo(() => (tier === "concierge" ? "$150" : "$50"), [tier]);

  const earlyDiscountEnabled = process.env.NEXT_PUBLIC_EARLY_DISCOUNT_ENABLED === "true"
    || (typeof process !== "undefined" && process.env.EARLY_DISCOUNT_ENABLED === "true");

  async function createSession() {
    setBusy(true);
    try {
      const intakeRaw = typeof window !== "undefined" ? localStorage.getItem("whiskaway:intake") : null;
      const intakeData = intakeRaw ? JSON.parse(intakeRaw) : null;

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tier,
          intakeData,
          applyDiscount: earlyDiscountEnabled && localStorage.getItem("whiskaway:couponShown") === "1",
        }),
      });

      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url;
      } else {
        alert("Checkout failed. Try again.");
      }
    } catch (e) {
      console.error(e);
      alert("Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  const [intakeData, setIntakeData] = useState<any>(null);

  useEffect(() => {
    // Basic guard: if no intake, send them to intake
    const intakeRaw = localStorage.getItem("whiskaway:intake");
    if (!intakeRaw) {
      router.push("/intake");
    } else {
      try {
        setIntakeData(JSON.parse(intakeRaw));
      } catch (e) {
        router.push("/intake");
      }
    }
  }, [router]);

  if (!intakeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl space-y-6">
      {earlyDiscountEnabled && (
        <CouponModal onAccept={() => setDiscountAccepted(true)} />
      )}
      <h1 className="text-2xl font-bold">Checkout</h1>
      
      {/* Order Summary */}
      <div className="rounded-xl border bg-white p-6">
        <h2 className="font-semibold mb-4">Your Order</h2>
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="font-semibold capitalize">{tier}</div>
            <div className="text-sm text-neutral-600">
              {tier === "concierge"
                ? "Checklist + email access to your case manager."
                : "Country-pair checklist. Instant delivery."}
            </div>
          </div>
          <div className="text-2xl font-extrabold">{priceText}</div>
        </div>
        
        {/* Travel Summary */}
        <div className="border-t pt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-neutral-600">Route:</span>
            <span>{intakeData.originCountry?.name} → {intakeData.destinationCountry?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-600">Pets:</span>
            <span>{intakeData.pets?.length || 0} pet(s)</span>
          </div>
          {intakeData.pets && (
            <div className="text-xs text-neutral-500">
              {intakeData.pets.map((pet: any, i: number) => (
                <div key={i}>{pet.name} ({pet.type})</div>
              ))}
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-neutral-600">Contact:</span>
            <span>{intakeData.firstName} {intakeData.lastName}</span>
          </div>
        </div>
        
        <button
          onClick={createSession}
          disabled={busy}
          className="mt-6 w-full px-5 py-3 rounded-md bg-black text-white hover:opacity-90 disabled:opacity-50"
        >
          {busy ? "Redirecting…" : "Pay with Stripe"}
        </button>
        <p className="mt-3 text-xs text-neutral-500">
          You&apos;ll be redirected to a secure Stripe checkout.
        </p>
      </div>
    </div>
  );
}