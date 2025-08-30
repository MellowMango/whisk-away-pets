export default function EmailSignupThankYou() {
  return (
    <div className="max-w-3xl mx-auto space-y-12 text-center">
      <section className="space-y-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h1 className="text-4xl font-extrabold">Thank You!</h1>
        <p className="text-xl text-neutral-700">
          Your free pet relocation guide is on its way to your inbox.
        </p>
      </section>

      <div className="bg-green-50 border border-green-200 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-green-800 mb-4">What Happens Next?</h2>
        <div className="space-y-4 text-left">
          <div className="flex items-start gap-4">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h3 className="font-semibold">Check Your Email (5 minutes)</h3>
              <p className="text-sm text-neutral-700">Your comprehensive pet relocation guide and country-specific requirements are being delivered now.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h3 className="font-semibold">Start Your 7-Day Email Course (Tomorrow)</h3>
              <p className="text-sm text-neutral-700">Receive step-by-step guidance delivered directly to your inbox, one actionable step per day.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h3 className="font-semibold">Get Early Access Discounts</h3>
              <p className="text-sm text-neutral-700">Be the first to know about our premium checklists and receive exclusive subscriber-only discounts.</p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white rounded-xl border p-8">
        <h2 className="text-2xl font-bold mb-6">Don't See the Email?</h2>
        <div className="space-y-4 text-sm text-left">
          <div className="flex items-start gap-3">
            <span className="text-blue-600 mt-1">📧</span>
            <span>Check your spam/junk folder and mark our email as "not spam"</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 mt-1">⏰</span>
            <span>It can take up to 10 minutes for the email to arrive</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 mt-1">📬</span>
            <span>Add pets@whiskaway.com to your address book for future emails</span>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Take the Next Step?</h2>
        <p className="text-neutral-700 mb-6">
          While you're waiting for your guide, you can get started with our intake form 
          to receive a personalized checklist for your specific situation.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/intake" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Get My Custom Checklist
          </a>
          <a href="/pricing" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
            View Pricing
          </a>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-xl font-bold mb-4">Have Questions?</h2>
        <p className="text-neutral-700 mb-4">
          We're here to help make your pet's international move as smooth as possible.
        </p>
        <a href="/contact" className="text-blue-600 hover:underline">
          Contact our support team →
        </a>
      </section>
    </div>
  );
}