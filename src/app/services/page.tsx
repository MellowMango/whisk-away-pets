export default function Services() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-extrabold">Our Services</h1>
        <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
          Choose the level of support that's right for your pet's international relocation journey.
        </p>
      </section>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="bg-white rounded-xl border p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Checklist Service</h2>
            <div className="text-3xl font-bold mb-2">$50</div>
            <p className="text-neutral-600">Perfect for DIY pet parents</p>
          </div>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-1">✓</span>
              <span>Country-specific requirements checklist</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-1">✓</span>
              <span>Step-by-step timeline (3-6 months)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-1">✓</span>
              <span>Vaccination schedule & requirements</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-1">✓</span>
              <span>Required documents & forms list</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-1">✓</span>
              <span>Airline & travel crate guidelines</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-1">✓</span>
              <span>Cost estimation worksheet</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-1">✓</span>
              <span>30-day money-back guarantee</span>
            </li>
          </ul>

          <div className="text-center">
            <a href="/intake" className="block w-full px-6 py-3 bg-black text-white rounded-md hover:opacity-90 font-medium">
              Get Your Checklist
            </a>
            <p className="text-xs text-neutral-500 mt-2">Instant download after purchase</p>
          </div>
        </div>

        <div className="bg-gradient-to-b from-blue-50 to-white rounded-xl border-2 border-blue-200 p-8 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
          </div>
          
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">White-Glove Concierge</h2>
            <div className="text-3xl font-bold mb-2">$150</div>
            <p className="text-neutral-600">Full-service support & guidance</p>
          </div>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span><strong>Everything in Checklist, plus:</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span>1-on-1 consultation call (30 mins)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span>Personalized timeline review</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span>Document review & feedback</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span>Airline booking assistance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span>Veterinary coordination support</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span>Email support throughout process</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span>Emergency support line</span>
            </li>
          </ul>

          <div className="text-center">
            <a href="/services/white-glove" className="block w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium">
              Learn More
            </a>
            <p className="text-xs text-neutral-500 mt-2">Includes consultation scheduling</p>
          </div>
        </div>
      </div>

      <section className="bg-neutral-100 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose WhiskAway Pets?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Proven Process</h3>
            <p className="text-sm text-neutral-700">
              2,500+ pets successfully relocated using our systematic approach and country-specific expertise.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Save Time & Money</h3>
            <p className="text-sm text-neutral-700">
              Avoid expensive mistakes and delays. Our clients save an average of $3,000 compared to full-service relocators.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Peace of Mind</h3>
            <p className="text-sm text-neutral-700">
              Know exactly what needs to be done, when to do it, and have expert support when you need it.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-xl border p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">How long does the process typically take?</h3>
            <p className="text-sm text-neutral-700">
              Most pet relocations require 2-4 months of preparation, depending on your destination country's requirements. 
              Some countries like Australia or Hawaii may require up to 6 months due to quarantine protocols.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">What's the difference between the two services?</h3>
            <p className="text-sm text-neutral-700">
              The Checklist gives you all the information you need to handle everything yourself. The Concierge service 
              adds personal guidance, document review, and ongoing support throughout the entire process.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Do you handle the actual shipping/transport?</h3>
            <p className="text-sm text-neutral-700">
              We provide guidance and can help coordinate, but we don't directly transport pets. We'll connect you with 
              trusted airlines and transport services, and help you navigate the booking process.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">What if my situation is complex or unusual?</h3>
            <p className="text-sm text-neutral-700">
              The Concierge service is perfect for complex cases - military moves, rare breeds, medical conditions, 
              or unusual destinations. We'll work with you to create a custom plan.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-neutral-700 mb-6">
          Take our 2-minute intake form to get personalized recommendations.
        </p>
        <a href="/intake" className="px-8 py-4 bg-black text-white rounded-md hover:opacity-90 font-semibold text-lg">
          Start My Pet's Journey →
        </a>
      </section>
    </div>
  );
}