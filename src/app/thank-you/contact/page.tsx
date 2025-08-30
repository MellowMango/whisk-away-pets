export default function ContactThankYou() {
  return (
    <div className="max-w-3xl mx-auto space-y-12 text-center">
      <section className="space-y-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h1 className="text-4xl font-extrabold">Message Received!</h1>
        <p className="text-xl text-neutral-700">
          Thank you for contacting us. We'll get back to you within 24 hours.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">What Happens Next?</h2>
        <div className="space-y-4 text-left">
          <div className="flex items-start gap-4">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h3 className="font-semibold">We Review Your Message</h3>
              <p className="text-sm text-neutral-700">Our pet relocation experts will carefully review your inquiry and gather any additional information needed.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h3 className="font-semibold">Personalized Response (Within 24 Hours)</h3>
              <p className="text-sm text-neutral-700">We'll send you a detailed response with specific guidance for your situation, including next steps and recommendations.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h3 className="font-semibold">Follow-up Support</h3>
              <p className="text-sm text-neutral-700">If needed, we'll schedule a call or provide additional resources to help with your pet's relocation.</p>
            </div>
          </div>
        </div>
      </div>

      <section className="grid gap-6 md:grid-cols-2 text-left">
        <div className="bg-white rounded-xl border p-6">
          <h3 className="font-bold mb-3">📧 Check Your Email</h3>
          <p className="text-sm text-neutral-700">
            You should receive an auto-confirmation shortly. If you don't see it, 
            check your spam folder and add us to your safe senders list.
          </p>
        </div>
        
        <div className="bg-white rounded-xl border p-6">
          <h3 className="font-bold mb-3">⏰ Response Time</h3>
          <p className="text-sm text-neutral-700">
            Most inquiries receive a response within 4-8 hours during business days. 
            Complex cases may require up to 24 hours for a thorough response.
          </p>
        </div>
      </section>

      <section className="bg-green-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">While You Wait...</h2>
        <p className="text-neutral-700 mb-6">
          Take advantage of our free resources to get started on your pet's relocation planning.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/landing/email-signup" className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700">
            Download Free Guide
          </a>
          <a href="/intake" className="px-6 py-3 border border-green-600 text-green-600 rounded-md hover:bg-green-50">
            Start Intake Form
          </a>
        </div>
      </section>

      <section className="bg-neutral-100 rounded-xl p-8">
        <h2 className="text-xl font-bold mb-4">Urgent Question?</h2>
        <p className="text-neutral-700 mb-4">
          If you have an urgent pet relocation question or need immediate assistance, 
          consider upgrading to our concierge service for priority support.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/services/white-glove" className="text-blue-600 hover:underline font-medium">
            Learn About Concierge Service →
          </a>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-lg font-bold mb-2">Need to Update Your Message?</h2>
        <p className="text-neutral-600 text-sm">
          Remembered something important? Feel free to send us another message with additional details.
        </p>
      </section>
    </div>
  );
}