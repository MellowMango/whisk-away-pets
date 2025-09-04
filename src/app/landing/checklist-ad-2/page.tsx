export default function ChecklistAd2() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-extrabold leading-tight">
          Moving Your Pet Abroad? Don't Leave It to Chance.
        </h1>
        <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
          One missed requirement can delay your move by months. Get the exact 
          checklist you need for seamless pet relocation.
        </p>
      </section>

      <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-red-800 mb-4">Common Mistakes That Cost Time & Money:</h2>
        <div className="grid gap-4 md:grid-cols-2 text-sm">
          <div className="flex items-start gap-3">
            <span className="text-red-600 mt-1">✗</span>
            <span>Starting vaccinations too late (can delay by 6+ months)</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-600 mt-1">✗</span>
            <span>Missing microchip requirements ($500+ in delays)</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-600 mt-1">✗</span>
            <span>Wrong health certificate forms (restart the entire process)</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-600 mt-1">✗</span>
            <span>Booking non-pet-friendly airlines (last-minute rebooking)</span>
          </div>
        </div>
      </div>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Get It Right The First Time</h2>
          <p className="text-neutral-700">
            Our checklists are created by pet relocation experts and updated with 
            the latest regulations from government veterinary authorities.
          </p>
          
          <div className="bg-white rounded-xl border p-6">
            <h3 className="font-bold mb-4">What's Included:</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Vaccination Schedule:</strong> Exact timing for rabies, DHPP, and country-specific requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Documentation Checklist:</strong> All certificates, forms, and permits needed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Timeline Planner:</strong> When to complete each step (3-6 months out)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Airline Requirements:</strong> Pet-friendly carriers and booking tips</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Quarantine Info:</strong> What to expect and how to prepare</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-b from-blue-50 to-white rounded-xl border p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Special Launch Pricing</h3>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-3xl font-bold text-blue-600">$25</span>
              <span className="text-lg text-neutral-500 line-through">$50</span>
            </div>
            <p className="text-sm text-neutral-600">Early bird discount - limited time!</p>
          </div>

          <div className="space-y-3 text-sm mb-6">
            <div className="bg-white rounded-lg p-3 border">
              <div className="font-semibold">🎯 Immediate Access</div>
              <div className="text-neutral-600">Download immediately after purchase</div>
            </div>
            <div className="bg-white rounded-lg p-3 border">
              <div className="font-semibold">🌍 Any Country</div>
              <div className="text-neutral-600">200+ destination countries covered</div>
            </div>
            <div className="bg-white rounded-lg p-3 border">
              <div className="font-semibold">💯 Guarantee</div>
              <div className="text-neutral-600">30-day money-back guarantee</div>
            </div>
          </div>

          <a href="/intake" className="block w-full text-center px-6 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-semibold mb-4">
            Start My Checklist
          </a>

          <div className="text-center">
            <p className="text-xs text-neutral-500">
              ⏰ Over 500 pet families served<br/>
              🔒 Secure payment • No subscription required
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold mb-8">Don't Risk Delays or Extra Costs</h2>
        <p className="text-neutral-700 mb-6 max-w-2xl mx-auto">
          Join hundreds of pet owners who've successfully relocated their pets 
          using our proven checklists. Get started in the next 2 minutes.
        </p>
        <a href="/intake" className="px-8 py-4 bg-black text-white rounded-md hover:opacity-90 font-semibold text-lg">
          Get My Custom Checklist →
        </a>
      </section>
    </div>
  );
}