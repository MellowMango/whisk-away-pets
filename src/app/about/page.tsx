export default function About() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-extrabold">About WhiskAway Pets</h1>
        <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
          We make international pet relocation simple, affordable, and stress-free with 
          country-specific checklists and expert concierge support.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="text-neutral-700">
            Moving pets internationally shouldn't be overwhelming or prohibitively expensive. 
            We've distilled years of veterinary expertise and regulatory knowledge into clear, 
            actionable checklists that work for any origin-destination pair.
          </p>
          <p className="text-neutral-700">
            Whether you're a military family, digital nomad, or simply relocating for work, 
            we provide the guidance you need without the full-service price tag.
          </p>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Why WhiskAway?</h2>
          <ul className="space-y-3 text-neutral-700">
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-1">✓</span>
              <span>Country-specific requirements for 200+ destinations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-1">✓</span>
              <span>Up-to-date with latest rabies, quarantine, and airline regulations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-1">✓</span>
              <span>Clear timelines and step-by-step instructions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-1">✓</span>
              <span>Expert concierge support for complex cases</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-1">✓</span>
              <span>90% less expensive than full-service relocators</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white rounded-xl border p-8">
        <h2 className="text-2xl font-bold mb-6">Our Story</h2>
        <p className="text-neutral-700 mb-4">
          Founded by pet owners who experienced the frustration of navigating complex 
          international pet regulations firsthand, WhiskAway Pets was born from a simple 
          belief: moving with your pet should be straightforward, not stressful.
        </p>
        <p className="text-neutral-700">
          After spending months deciphering conflicting information from government websites, 
          veterinary clinics, and pet relocation companies, we realized there had to be a 
          better way. We've since helped thousands of families reunite with their pets in 
          new countries, one checklist at a time.
        </p>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
        <div className="flex gap-4 justify-center">
          <a href="/intake" className="px-6 py-3 rounded-md bg-black text-white hover:opacity-90">
            Get Your Checklist
          </a>
          <a href="/contact" className="px-6 py-3 rounded-md border hover:bg-neutral-100">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}