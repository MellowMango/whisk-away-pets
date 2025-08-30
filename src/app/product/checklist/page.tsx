export default function ChecklistProduct() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-6">
        <div className="flex justify-center mb-6">
          <img 
            src="/images/InternationalPawsport-3D-BookImage.png" 
            alt="International Pawsport" 
            className="w-64 h-auto drop-shadow-2xl"
          />
        </div>
        <h1 className="text-4xl font-extrabold text-neutral-900">
          Your Pet's <span className="text-orange-500">International Pawsport</span> 🐾
        </h1>
        <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
          The complete step-by-step guide for moving your furry family member internationally. 
          Country-specific requirements that eliminate confusion and costly mistakes.
        </p>
        <div className="flex items-center justify-center gap-4">
          <div className="text-4xl font-bold text-orange-600">$50</div>
          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 px-4 py-2 rounded-full text-sm font-bold shadow-sm">
            ✨ Instant Download
          </div>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="bg-white rounded-xl border p-8">
            <h2 className="text-2xl font-bold mb-6">What's Included</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full p-2 mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Country-Specific Requirements</h3>
                  <p className="text-sm text-neutral-700">
                    Exact requirements for your origin-destination pair. No generic information - 
                    just what YOU need for YOUR route.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-full p-2 mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Complete Timeline</h3>
                  <p className="text-sm text-neutral-700">
                    Month-by-month breakdown showing when to complete each step. 
                    Start 3-6 months before your move date.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 rounded-full p-2 mt-1">
                  <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Vaccination Schedule</h3>
                  <p className="text-sm text-neutral-700">
                    Detailed vaccination requirements including rabies titers, 
                    DHPP, and any country-specific immunizations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 rounded-full p-2 mt-1">
                  <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Documentation Checklist</h3>
                  <p className="text-sm text-neutral-700">
                    All required forms, health certificates, permits, and 
                    endorsement procedures explained clearly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-100 rounded-full p-2 mt-1">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Travel & Logistics</h3>
                  <p className="text-sm text-neutral-700">
                    Pet-friendly airlines, crate specifications, booking tips, 
                    and what to expect at airports.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 rounded-full p-2 mt-1">
                  <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Cost Planning</h3>
                  <p className="text-sm text-neutral-700">
                    Detailed breakdown of all expenses so you can budget 
                    accurately for your pet's move.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-b from-green-50 to-white rounded-xl border p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-4">Perfect For</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-green-600 mt-1">👨‍👩‍👧‍👦</span>
                <div>
                  <h4 className="font-semibold">Organized Families</h4>
                  <p className="text-sm text-neutral-700">You like detailed planning and prefer to handle things yourself</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-green-600 mt-1">🏠</span>
                <div>
                  <h4 className="font-semibold">Standard Relocations</h4>
                  <p className="text-sm text-neutral-700">Healthy dogs/cats moving to common destinations</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-green-600 mt-1">⏰</span>
                <div>
                  <h4 className="font-semibold">Plenty of Time</h4>
                  <p className="text-sm text-neutral-700">You have 3+ months before your move date</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-green-600 mt-1">💰</span>
                <div>
                  <h4 className="font-semibold">Budget-Conscious</h4>
                  <p className="text-sm text-neutral-700">Want to save money vs. full-service relocators</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border p-6">
            <h3 className="font-bold mb-4 text-center">Customer Success</h3>
            <div className="space-y-4 text-sm">
              <div className="bg-neutral-50 p-4 rounded-lg">
                <p className="text-neutral-700 italic mb-2">
                  "The checklist was incredibly detailed and saved me weeks of research. 
                  Everything was exactly as described - no surprises!"
                </p>
                <p className="font-medium">- Sarah M., moved dog to Australia</p>
              </div>
              
              <div className="bg-neutral-50 p-4 rounded-lg">
                <p className="text-neutral-700 italic mb-2">
                  "Worth every penny. The timeline helped me stay organized and 
                  my cat's move went smoothly."
                </p>
                <p className="font-medium">- James R., moved cat to Germany</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl border border-blue-200 p-6 text-center">
            <h3 className="font-bold text-blue-800 mb-4">Ready to Get Started?</h3>
            <div className="mb-6">
              <div className="text-3xl font-bold mb-2">$50</div>
              <p className="text-sm text-neutral-600">One-time purchase • Instant download</p>
            </div>
            
            <a href="/intake" className="block w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 font-semibold text-lg mb-4 shadow-lg transform hover:scale-105 transition-all">
              Get My Pawsport Now! ✈️
            </a>
            
            <div className="space-y-2 text-xs text-neutral-500">
              <p>✅ 30-day money-back guarantee</p>
              <p>🚀 Available immediately after purchase</p>
              <p>📧 Email support included</p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Need More Support?</h2>
        <p className="text-center text-neutral-700 mb-6">
          If your situation is complex or you'd prefer guided support, consider our Concierge service.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/services/white-glove" className="px-6 py-3 bg-yellow-600 text-white rounded-md hover:bg-yellow-700">
            Learn About Concierge
          </a>
          <a href="/contact" className="px-6 py-3 border border-yellow-600 text-yellow-600 rounded-md hover:bg-yellow-50">
            Ask Questions
          </a>
        </div>
      </section>
    </div>
  );
}