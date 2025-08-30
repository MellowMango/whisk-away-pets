"use client";

import { useEffect, useState } from "react";

export default function CouponModal({
  percent = Number(process.env.NEXT_PUBLIC_STRIPE_PROMO_PERCENT) || 50,
  openByDefault = true,
  storageKey = "whiskaway:couponShown",
  onAccept,
}: {
  percent?: number;
  openByDefault?: boolean;
  storageKey?: string;
  onAccept?: () => void;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const already = localStorage.getItem(storageKey);
    if (!already && openByDefault) {
      setTimeout(() => setOpen(true), 300); // small delay for UX
    }
  }, [openByDefault, storageKey]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        <h3 className="text-xl font-bold">You just unlocked {percent}% off 🎉</h3>
        <p className="mt-2 text-sm text-neutral-700">
          Early-days special: we&apos;re giving {percent}% off your first checklist or concierge purchase.
          The discount will be applied automatically at checkout.
        </p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            className="px-4 py-2 rounded-md border hover:bg-neutral-100"
            onClick={() => setOpen(false)}
          >
            Not now
          </button>
          <button
            className="px-4 py-2 rounded-md bg-black text-white hover:opacity-90"
            onClick={() => {
              localStorage.setItem(storageKey, "1");
              setOpen(false);
              onAccept?.();
            }}
          >
            Awesome — thanks!
          </button>
        </div>
      </div>
    </div>
  );
}