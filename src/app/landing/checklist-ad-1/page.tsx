export default function ChecklistAd1() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-extrabold leading-tight">
          Stop Guessing About Pet Import Requirements
        </h1>
        <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
          Get country-specific, step-by-step checklists that eliminate confusion 
          and ensure your pet's smooth international relocation.
        </p>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 max-w-2xl mx-auto text-left">
          <p className="font-semibold text-yellow-800">Limited Time: 50% Off</p>
          <p className="text-yellow-700">Complete checklists starting at just $25 (normally $50)</p>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Why Pet Owners Choose Our Checklists</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 rounded-full p-2 mt-1">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Country-Specific Requirements</h3>
                <p className="text-neutral-700">No more generic advice. Get exact requirements for YOUR origin-destination pair.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-green-100 rounded-full p-2 mt-1">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Clear Timelines</h3>
                <p className="text-neutral-700">Know exactly when to start each step - from vaccinations to documentation.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 rounded-full p-2 mt-1">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Save Thousands</h3>
                <p className="text-neutral-700">Avoid expensive mistakes and reduce relocation service costs by 90%.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Get Your Checklist Today</h3>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-3xl font-bold">$25</span>
              <span className="text-lg text-neutral-500 line-through">$50</span>
              <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">50% OFF</span>
            </div>
            <p className="text-sm text-neutral-600">Limited time offer - ends soon!</p>
          </div>

          <div className="space-y-4 text-sm text-neutral-700 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>Instant download after payment</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>Country-specific requirements</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>Step-by-step timeline</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>30-day money-back guarantee</span>
            </div>
          </div>

          <a href="/intake" className="block w-full text-center px-6 py-4 bg-black text-white rounded-md hover:opacity-90 font-semibold">
            Get My Checklist Now
          </a>
          
          <p className="text-xs text-center text-neutral-500 mt-4">
            Secure checkout • Instant access • No subscription
          </p>
        </div>
      </section>

      <section className="bg-neutral-100 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-8">What Pet Owners Are Saying</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg">
            <p className="text-sm text-neutral-700 mb-4">"Saved me months of research and stress. The checklist was exact and comprehensive."</p>
            <p className="font-semibold">- Sarah M., moved dog to New Zealand</p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <p className="text-sm text-neutral-700 mb-4">"Worth every penny. Avoided costly mistakes that would have delayed our move by weeks."</p>
            <p className="font-semibold">- Michael R., moved 2 cats to Singapore</p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <p className="text-sm text-neutral-700 mb-4">"Crystal clear instructions. My vet was impressed with how organized everything was."</p>
            <p className="font-semibold">- Lisa K., moved dog to Germany</p>
          </div>
        </div>
      </section>
    </div>
  );
}