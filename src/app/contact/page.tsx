"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would integrate with your email service
    // For now, simulate submission and redirect to thank you page
    setTimeout(() => {
      window.location.href = "/thank-you/contact";
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-extrabold">Contact Us</h1>
        <p className="text-xl text-neutral-700">
          Have questions about moving your pet? We're here to help.
        </p>
      </section>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-xl border p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            <div>
              <label htmlFor="inquiryType" className="block text-sm font-medium mb-2">
                Inquiry Type
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="general">General Question</option>
                <option value="checklist">Checklist Support</option>
                <option value="concierge">Concierge Service</option>
                <option value="technical">Technical Issue</option>
                <option value="partnership">Partnership Inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Please provide details about your pet relocation needs or question..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-black text-white rounded-md hover:opacity-90 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl border p-6">
            <h3 className="font-semibold mb-4">Quick Answers</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium">Response Time:</p>
                <p className="text-neutral-600">Usually within 24 hours</p>
              </div>
              <div>
                <p className="font-medium">Emergency Support:</p>
                <p className="text-neutral-600">Available for Concierge customers</p>
              </div>
              <div>
                <p className="font-medium">Languages:</p>
                <p className="text-neutral-600">English, Spanish, French</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border p-6">
            <h3 className="font-semibold mb-4">Common Questions</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium">How long does the process take?</p>
                <p className="text-neutral-600">Typically 2-4 months depending on destination requirements.</p>
              </div>
              <div>
                <p className="font-medium">Do you handle airline bookings?</p>
                <p className="text-neutral-600">Our concierge service can assist with pet-friendly airline selection and booking guidance.</p>
              </div>
              <div>
                <p className="font-medium">What about quarantine?</p>
                <p className="text-neutral-600">We provide detailed quarantine requirements for your specific destination.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-neutral-600 mb-4">Need immediate help?</p>
            <a href="/intake" className="inline-block px-4 py-2 bg-black text-white text-sm rounded-md hover:opacity-90">
              Start Your Checklist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}