const featuresChecklist = [
  "Country-pair checklist (origin → destination)",
  "Vaccines, microchip, quarantine, airline rules",
  "Instant delivery via email/portal",
];

const featuresConcierge = [
  "Everything in Checklist",
  "Email access to an expert (your case manager)",
  "Edge cases (medical, rare breeds, military orders, exotic routes)",
];

function Card({
  title, price, features, href
}: { title: string; price: string; features: string[]; href: string }) {
  return (
    <div className="border rounded-xl bg-white p-6 flex flex-col">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-2 text-3xl font-extrabold">{price}</div>
      <ul className="mt-4 space-y-2 text-sm text-neutral-700">
        {features.map(f => <li key={f} className="flex gap-2"><span>•</span><span>{f}</span></li>)}
      </ul>
      <a href={href} className="mt-6 inline-block px-5 py-3 rounded-md bg-black text-white text-center hover:opacity-90">
        Continue
      </a>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card
        title="Checklist"
        price="$50 one-time"
        features={featuresChecklist}
        href="/checkout?tier=checklist"
      />
      <Card
        title="Concierge"
        price="$150 one-time"
        features={featuresConcierge}
        href="/checkout?tier=concierge"
      />
    </div>
  );
}