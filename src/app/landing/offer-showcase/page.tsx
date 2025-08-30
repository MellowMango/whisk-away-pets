export default function OfferShowcase() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-extrabold leading-tight">
          Everything You Need for Pet Relocation
        </h1>
        <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
          Choose from our complete range of services - from DIY checklists to full concierge support.
        </p>
      </section>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="bg-white rounded-xl border-2 p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">DIY Checklist</h2>
            <div className="text-3xl font-bold text-green-600 mb-2">$50</div>
            <p className="text-neutral-600">Perfect for organized pet parents</p>
          </div>

          <div className="space-y-3 mb-8 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-green-600 mt-1">✓</span>
              <span>Country-specific requirements checklist</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 mt-1">✓</span>
              <span>Complete timeline (3-6 months out)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 mt-1">✓</span>
              <span>All required forms and documents</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 mt-1">✓</span>
              <span>Vaccination schedule breakdown</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 mt-1">✓</span>
              <span>Airline and crate requirements</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 mt-1">✓</span>
              <span>Cost estimation worksheet</span>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-green-800 mb-2">Great For:</h3>
            <ul className="text-xs text-green-700 space-y-1">
              <li>• First-time movers with common destinations</li>
              <li>• Simple cases (healthy dogs/cats)</li>
              <li>• Pet parents who like detailed planning</li>
            </ul>
          </div>

          <a href="/product/checklist" className="block w-full text-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 font-medium">
            Get Checklist
          </a>
        </div>

        <div className="bg-gradient-to-b from-blue-50 to-white rounded-xl border-2 border-blue-200 p-8 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Recommended</span>
          </div>

          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Concierge Support</h2>
            <div className="text-3xl font-bold text-blue-600 mb-2">$150</div>
            <p className="text-neutral-600">Full guidance & peace of mind</p>
          </div>

          <div className="space-y-3 mb-6 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span><strong>Everything in Checklist, PLUS:</strong></span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span>30-minute personal consultation</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span>Custom timeline review</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span>Document review & feedback</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span>Airline booking assistance</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span>Email support throughout</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span>Emergency support hotline</span>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-blue-800 mb-2">Perfect For:</h3>
            <ul className="text-xs text-blue-700 space-y-1">
              <li>• Complex cases (medical, rare breeds)</li>
              <li>• Military/corporate relocations</li>
              <li>• Tight timelines or challenging destinations</li>
              <li>• First-time movers who want guidance</li>
            </ul>
          </div>

          <a href="/services/white-glove" className="block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium">
            Get Concierge
          </a>
        </div>
      </div>

      <section className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-yellow-800">🎁 Limited Time: Get Both Services</h2>
          <p className="text-yellow-700">Special bundle pricing for comprehensive support</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 text-center">
          <div className="mb-4">
            <span className="text-2xl line-through text-neutral-400">$200</span>
            <span className="text-4xl font-bold text-yellow-600 ml-4">$175</span>
            <span className="text-sm text-yellow-600 ml-2">Save $25</span>
          </div>
          <p className="text-sm text-neutral-700 mb-4">
            Get the complete package: DIY checklist + full concierge support for ultimate peace of mind
          </p>
          <a href="/contact" className="px-8 py-3 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 font-semibold">
            Contact for Bundle Pricing
          </a>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-3">
        <div className="text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🌍</span>
          </div>
          <h3 className="font-semibold mb-2">200+ Countries</h3>
          <p className="text-sm text-neutral-700">
            Comprehensive coverage for virtually any destination worldwide
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⏰</span>
          </div>
          <h3 className="font-semibold mb-2">Fast Results</h3>
          <p className="text-sm text-neutral-700">
            Instant access to checklists, consultation calls scheduled within 48 hours
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">✨</span>
          </div>
          <h3 className="font-semibold mb-2">Expert Support</h3>
          <p className="text-sm text-neutral-700">
            Created by pet relocation specialists with 15+ years experience
          </p>
        </div>
      </section>

      <section className="text-center bg-neutral-100 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Not Sure Which Service?</h2>
        <p className="text-neutral-700 mb-6">
          Take our quick 2-minute assessment to get a personalized recommendation.
        </p>
        <a href="/intake" className="px-8 py-4 bg-black text-white rounded-md hover:opacity-90 font-semibold text-lg">
          Get My Recommendation →
        </a>
      </section>
    </div>
  );
}