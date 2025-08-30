"use client";

import { useState } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [petType, setPetType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would integrate with your email service
    setTimeout(() => {
      window.location.href = "/thank-you/email-signup";
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center space-y-6">
        <div className="flex justify-center mb-6">
          <img 
            src="/images/LeadMag-Top10ProblemstoAvoidTravelingwpets.png" 
            alt="Top 10 Travel Tips" 
            className="w-64 h-auto drop-shadow-xl"
          />
        </div>
        <h1 className="text-4xl font-extrabold leading-tight text-neutral-900">
          FREE: <span className="text-orange-500">Top 10 Travel Tips</span> 
          <br />To Avoid Pet Problems! 🚨
        </h1>
        <p className="text-xl text-neutral-700">
          Don't let simple mistakes delay your move or stress your pet. 
          Get the insider knowledge that saves time, money, and heartache.
        </p>
      </section>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-orange-800 mb-4">🎯 Avoid These Costly Mistakes:</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-1">#1</span>
                <span><strong>Starting Too Late:</strong> Why 6 months ahead isn't optional</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-1">#2</span>
                <span><strong>Wrong Vaccine Timeline:</strong> The rabies mistake that costs months</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-1">#3</span>
                <span><strong>Microchip Madness:</strong> Why location matters more than you think</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-1">#4</span>
                <span><strong>Health Certificate Chaos:</strong> The form mix-up that restarts everything</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-1">#5</span>
                <span><strong>Airline Disasters:</strong> Pet-friendly vs pet-accepting airlines</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 mt-1">+5 More</span>
                <span><strong>Critical mistakes</strong> that can delay or derail your move</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h3 className="font-bold text-yellow-800 mb-3">Bonus: Early Access</h3>
            <p className="text-sm text-yellow-700">
              Get notified first about our premium checklists and receive exclusive 
              discounts up to 50% off our concierge services.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl border-2 border-orange-200 p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2 text-orange-600">Get Your Free Travel Tips!</h3>
              <p className="text-sm text-neutral-600">Save yourself months of stress & thousands in mistakes 💸</p>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium mb-2">
                Where are you moving to? *
              </label>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select destination country</option>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="germany">Germany</option>
                <option value="japan">Japan</option>
                <option value="singapore">Singapore</option>
                <option value="new-zealand">New Zealand</option>
                <option value="other">Other / Not sure yet</option>
              </select>
            </div>

            <div>
              <label htmlFor="petType" className="block text-sm font-medium mb-2">
                What type of pet?
              </label>
              <select
                id="petType"
                value={petType}
                onChange={(e) => setPetType(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select pet type</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="multiple">Multiple pets</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 font-semibold text-lg shadow-lg transform hover:scale-105 transition-all"
            >
              {isSubmitting ? "Sending Your Tips... 📧" : "Send Me The Top 10 Tips! 🚀"}
            </button>

            <p className="text-xs text-center text-neutral-500">
              🔒 Your email is safe with us. We never spam or share your information.
            </p>
          </form>
        </div>
      </div>

      <section className="text-center bg-neutral-100 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Join 1,200+ Pet Parents</h2>
        <p className="text-neutral-700 mb-6">
          Who have successfully moved their pets internationally using our guides and checklists.
        </p>
        <div className="flex items-center justify-center gap-8 text-sm text-neutral-600">
          <div>⭐⭐⭐⭐⭐<br/>4.9/5 rating</div>
          <div>🌍<br/>50+ countries</div>
          <div>🐕‍🦺<br/>2,500+ pets moved</div>
        </div>
      </section>
    </div>
  );
}