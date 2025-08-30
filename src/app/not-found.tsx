export default function NotFound() {
  return (
    <div className="text-center space-y-8 py-16">
      <div className="space-y-4">
        <h1 className="text-6xl font-extrabold text-neutral-300">404</h1>
        <h2 className="text-3xl font-bold">Page Not Found</h2>
        <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
          Sorry, we couldn't find the page you're looking for. 
          But don't worry - we can still help you with your pet's international move!
        </p>
      </div>

      <div className="bg-white rounded-xl border p-8 max-w-2xl mx-auto">
        <h3 className="text-xl font-bold mb-6">Where would you like to go?</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <a href="/" className="p-4 border rounded-lg hover:bg-neutral-50 text-left">
            <div className="font-semibold mb-1">🏠 Home</div>
            <div className="text-sm text-neutral-600">Learn about our services</div>
          </a>
          
          <a href="/intake" className="p-4 border rounded-lg hover:bg-neutral-50 text-left">
            <div className="font-semibold mb-1">📋 Get Started</div>
            <div className="text-sm text-neutral-600">Begin your pet's checklist</div>
          </a>
          
          <a href="/services" className="p-4 border rounded-lg hover:bg-neutral-50 text-left">
            <div className="font-semibold mb-1">🎯 Our Services</div>
            <div className="text-sm text-neutral-600">Explore checklist & concierge options</div>
          </a>
          
          <a href="/resources" className="p-4 border rounded-lg hover:bg-neutral-50 text-left">
            <div className="font-semibold mb-1">📚 Free Resources</div>
            <div className="text-sm text-neutral-600">Guides and planning tools</div>
          </a>
          
          <a href="/about" className="p-4 border rounded-lg hover:bg-neutral-50 text-left">
            <div className="font-semibold mb-1">ℹ️ About Us</div>
            <div className="text-sm text-neutral-600">Our story and mission</div>
          </a>
          
          <a href="/contact" className="p-4 border rounded-lg hover:bg-neutral-50 text-left">
            <div className="font-semibold mb-1">💬 Contact</div>
            <div className="text-sm text-neutral-600">Get in touch with questions</div>
          </a>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-2xl mx-auto">
        <h3 className="font-bold text-blue-800 mb-3">🚀 Ready to Get Started?</h3>
        <p className="text-sm text-blue-700 mb-4">
          Don't let a wrong turn slow down your pet's relocation planning. 
          Get the guidance you need today.
        </p>
        <div className="flex gap-3 justify-center">
          <a href="/landing/email-signup" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
            Free Guide
          </a>
          <a href="/intake" className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 text-sm">
            Start Checklist
          </a>
        </div>
      </div>

      <div className="text-neutral-500">
        <p>If you think this page should exist, please <a href="/contact" className="text-blue-600 hover:underline">let us know</a>.</p>
      </div>
    </div>
  );
}