export default function RetargetingLanding() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-extrabold leading-tight">
          Ready to Move Your Pet Internationally?
        </h1>
        <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
          You've shown interest in pet relocation. Don't let confusion or delays 
          keep you from reuniting with your furry family member.
        </p>
      </section>

      <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-red-800 mb-4">⚠️ Don't Make These Costly Mistakes:</h2>
        <div className="grid gap-4 md:grid-cols-2 text-sm">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-red-600 mt-1">❌</span>
              <span>Waiting too long to start (6+ month delays)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-600 mt-1">❌</span>
              <span>Using outdated information from forums</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-red-600 mt-1">❌</span>
              <span>Missing key documents ($1000s in delays)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-600 mt-1">❌</span>
              <span>Booking wrong airlines (last-minute panic)</span>
            </div>
          </div>
        </div>
      </div>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Get Back on Track Today</h2>
          <p className="text-neutral-700">
            Since you've been researching pet relocation, you know it's complicated. 
            But you don't have to figure it out alone.
          </p>
          
          <div className="bg-white rounded-xl border p-6">
            <h3 className="font-bold mb-4">What Makes Us Different:</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Current Information:</strong> Updated monthly with latest regulations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Your Specific Route:</strong> Customized for your exact origin-destination pair</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Clear Timeline:</strong> No guessing when to start each step</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Expert Support:</strong> Real help when you get stuck</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="font-bold text-green-800 mb-3">Success Story</h3>
            <p className="text-sm text-green-700 italic mb-3">
              "After weeks of confusing research, I was ready to give up. WhiskAway's 
              checklist gave me exactly what I needed - step by step. My dog Luna 
              arrived in Germany without any issues!"
            </p>
            <p className="text-sm font-medium text-green-800">- Maria S., Frankfurt</p>
          </div>
        </div>

        <div className="bg-gradient-to-b from-blue-50 to-white rounded-xl border-2 border-blue-200 p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-4">Special Offer for Returning Visitors</h3>
            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl font-bold">$35</span>
                <span className="text-lg text-neutral-500 line-through">$50</span>
                <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">30% OFF</span>
              </div>
              <p className="text-sm text-yellow-800 font-medium">
                🔥 Limited time: Save $15 on your checklist
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <h4 className="font-semibold">You'll Get:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-blue-600">📋</span>
                <span>Complete country-specific checklist</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">📅</span>
                <span>Month-by-month timeline</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">💉</span>
                <span>Exact vaccination requirements</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">📝</span>
                <span>All required forms & documents</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✈️</span>
                <span>Airline & crate guidelines</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">💰</span>
                <span>Cost estimation worksheet</span>
              </li>
            </ul>
          </div>

          <a href="/intake" className="block w-full text-center px-6 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-semibold text-lg mb-4">
            Get My Checklist - $35
          </a>

          <div className="text-center text-xs text-neutral-500">
            💯 30-day money-back guarantee<br/>
            🚀 Available after purchase<br/>
            ⏰ Offer expires in 24 hours
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Still Not Sure?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📧</span>
            </div>
            <h3 className="font-semibold mb-2">Get Free Guide First</h3>
            <p className="text-sm text-neutral-700 mb-4">
              Download our 25-page pet relocation guide to get started
            </p>
            <a href="/landing/email-signup" className="text-green-600 hover:underline font-medium">
              Free Download →
            </a>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="font-semibold mb-2">Ask Questions</h3>
            <p className="text-sm text-neutral-700 mb-4">
              Contact us with your specific situation for personalized advice
            </p>
            <a href="/contact" className="text-blue-600 hover:underline font-medium">
              Contact Us →
            </a>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-semibold mb-2">Full Support</h3>
            <p className="text-sm text-neutral-700 mb-4">
              Need help every step of the way? Our concierge service has you covered
            </p>
            <a href="/services/white-glove" className="text-purple-600 hover:underline font-medium">
              Learn More →
            </a>
          </div>
        </div>
      </section>

      <section className="text-center">
        <div className="bg-red-100 border border-red-200 rounded-xl p-6 max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-red-800 mb-4">⏰ Don't Wait Any Longer</h2>
          <p className="text-red-700 mb-4">
            Every week you delay adds stress and potential complications to your pet's move. 
            Start with the right information today.
          </p>
          <a href="/intake" className="px-8 py-4 bg-red-600 text-white rounded-md hover:bg-red-700 font-semibold text-lg">
            Get Started Now - $35
          </a>
        </div>
      </section>
    </div>
  );
}