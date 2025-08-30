import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="max-w-xl space-y-4">
      <h1 className="text-2xl font-bold">Thanks! 🎉</h1>
      <p className="text-neutral-700">
        We've received your order. Check your email for access. If you chose Concierge,
        a case manager will reach out shortly.
      </p>
      <Link href="/" className="inline-block px-5 py-3 rounded-md border hover:bg-neutral-100">
        Back to home
      </Link>
    </div>
  );
}