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
          Your Pet&apos;s <span className="text-orange-500">International Pawsport</span> 🐾
        </h1>
        <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
          Choose the perfect support level for moving your fur family member internationally. 
          Country-specific requirements that eliminate confusion and costly mistakes.
        </p>
      </section>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Product 1 - Essential Checklist */}
        <div className="bg-white rounded-xl border-2 border-orange-200 p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-orange-600">Essential Checklist</h2>
            <div className="text-4xl font-bold text-orange-600 my-4">$59</div>
            <p className="text-gray-600 text-sm">Perfect for organized pet parents</p>
          </div>
          
          <ul className="space-y-3 text-sm mb-8">
            <li className="flex items-center gap-2">✅ Country-specific requirements</li>
            <li className="flex items-center gap-2">✅ Complete vaccination schedule</li>
            <li className="flex items-center gap-2">✅ Documentation checklist</li>
            <li className="flex items-center gap-2">✅ Step-by-step timeline</li>
            <li className="flex items-center gap-2">✅ Cost breakdown</li>
          </ul>
          
          <a href="/intake?tier=checklist" className="block w-full px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 font-semibold text-center transition-all">
            Get Essential Checklist
          </a>
        </div>

        {/* Product 2 - Premium Support */}
        <div className="bg-white rounded-xl border-2 border-blue-200 p-8 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
            Most Popular
          </div>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-blue-600">Premium Support</h2>
            <div className="text-4xl font-bold text-blue-600 my-4">$249</div>
            <p className="text-gray-600 text-sm">Enhanced guidance & resources</p>
          </div>
          
          <ul className="space-y-3 text-sm mb-8">
            <li className="flex items-center gap-2">✅ Everything in Essential Checklist</li>
            <li className="flex items-center gap-2">✅ Direct links to required forms</li>
            <li className="flex items-center gap-2">✅ Vet & government contacts</li>
            <li className="flex items-center gap-2">✅ Detailed timeline with reminders</li>
            <li className="flex items-center gap-2">✅ Top pet-friendly airline recommendations</li>
            <li className="flex items-center gap-2">✅ Airline-specific requirements</li>
          </ul>
          
          <a href="/intake?tier=premium" className="block w-full px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 font-semibold text-center transition-all">
            Get Premium Support
          </a>
        </div>

        {/* Product 3 - Personal Coach */}
        <div className="bg-white rounded-xl border-2 border-purple-200 p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-purple-600">Personal Coach</h2>
            <div className="text-4xl font-bold text-purple-600 my-4">$1199</div>
            <p className="text-gray-600 text-sm">White-glove concierge service</p>
          </div>
          
          <ul className="space-y-3 text-sm mb-8">
            <li className="flex items-center gap-2">✅ Everything in Premium Support</li>
            <li className="flex items-center gap-2">✅ Personal Pet Travel Coach</li>
            <li className="flex items-center gap-2">✅ WhatsApp direct access</li>
            <li className="flex items-center gap-2">✅ Document review & feedback</li>
            <li className="flex items-center gap-2">✅ 1-on-1 consultations</li>
            <li className="flex items-center gap-2">✅ Emergency support</li>
          </ul>
          
          <a href="/intake?tier=coach" className="block w-full px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 font-semibold text-center transition-all">
            Get Personal Coach
          </a>
        </div>
      </div>

      <section className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Which Option is Right for You?</h2>
        
        <div className="grid gap-6 md:grid-cols-3 text-center text-sm">
          <div>
            <h3 className="font-bold text-orange-600 mb-2">Essential Checklist</h3>
            <p className="text-gray-600">Perfect for organized pet parents who like detailed planning and prefer to handle things themselves. Great for standard relocations with healthy pets to common destinations.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-blue-600 mb-2">Premium Support</h3>
            <p className="text-gray-600">Ideal when you want extra guidance with direct links, contacts, and airline-specific requirements. Best for complex routes or when you want enhanced resources.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-purple-600 mb-2">Personal Coach</h3>
            <p className="text-gray-600">Perfect for high-stakes moves, complex situations, or when you want white-glove concierge service with direct access to a pet travel expert.</p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-xl border p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Customer Success Stories</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-neutral-50 p-6 rounded-lg">
            <p className="text-neutral-700 italic mb-3">
              &ldquo;The checklist was incredibly detailed and saved me weeks of research. 
              Everything was exactly as described - no surprises!&rdquo;
            </p>
            <p className="font-medium">- Sarah M., moved dog to Australia</p>
          </div>
          
          <div className="bg-neutral-50 p-6 rounded-lg">
            <p className="text-neutral-700 italic mb-3">
              &ldquo;Worth every penny. The timeline helped me stay organized and 
              my cat&apos;s move went smoothly.&rdquo;
            </p>
            <p className="font-medium">- James R., moved cat to Germany</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Questions About Which Option to Choose?</h2>
        <p className="text-neutral-700 mb-6">
          Not sure which level of support is right for your pet&apos;s move? We&apos;re here to help you decide.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Get Personalized Advice
          </a>
          <a href="/resources" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
            Browse Free Resources
          </a>
        </div>
      </section>
    </div>
  );
}