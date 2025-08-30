export default function Resources() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-extrabold">Pet Relocation Resources</h1>
        <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
          Free guides, tools, and information to help you navigate international pet relocation.
        </p>
      </section>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Free Resources</h2>
          
          <div className="bg-white rounded-xl border p-6">
            <h3 className="font-bold mb-3 text-green-600">📋 Complete Planning Guide</h3>
            <p className="text-sm text-neutral-700 mb-4">
              25-page comprehensive guide covering every aspect of pet relocation - 
              from initial planning to arrival day.
            </p>
            <a href="/landing/email-signup" className="text-green-600 hover:underline font-medium">
              Download Free Guide →
            </a>
          </div>

          <div className="bg-white rounded-xl border p-6">
            <h3 className="font-bold mb-3 text-blue-600">🌍 Country Quick Reference</h3>
            <p className="text-sm text-neutral-700 mb-4">
              Quick overview of requirements for popular destinations including 
              Australia, UK, Germany, Japan, and more.
            </p>
            <a href="/contact" className="text-blue-600 hover:underline font-medium">
              Request Access →
            </a>
          </div>

          <div className="bg-white rounded-xl border p-6">
            <h3 className="font-bold mb-3 text-purple-600">💰 Cost Calculator</h3>
            <p className="text-sm text-neutral-700 mb-4">
              Interactive tool to estimate the total cost of your pet's international 
              move including all fees and requirements.
            </p>
            <a href="/landing/email-signup" className="text-purple-600 hover:underline font-medium">
              Get Calculator →
            </a>
          </div>

          <div className="bg-white rounded-xl border p-6">
            <h3 className="font-bold mb-3 text-yellow-600">✈️ Airline Pet Policies</h3>
            <p className="text-sm text-neutral-700 mb-4">
              Comparison of major airlines' pet transport policies, fees, and 
              restrictions for international flights.
            </p>
            <a href="/landing/email-signup" className="text-yellow-600 hover:underline font-medium">
              Download Comparison →
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Educational Articles</h2>
          
          <div className="space-y-4">
            <article className="bg-white rounded-xl border p-6">
              <h3 className="font-semibold mb-2">Understanding Rabies Titers</h3>
              <p className="text-sm text-neutral-700 mb-3">
                What they are, when you need them, and how long they take to process.
              </p>
              <div className="text-xs text-neutral-500">Coming Soon</div>
            </article>

            <article className="bg-white rounded-xl border p-6">
              <h3 className="font-semibold mb-2">Quarantine Requirements by Country</h3>
              <p className="text-sm text-neutral-700 mb-3">
                Which countries require quarantine and how to prepare your pet.
              </p>
              <div className="text-xs text-neutral-500">Coming Soon</div>
            </article>

            <article className="bg-white rounded-xl border p-6">
              <h3 className="font-semibold mb-2">Choosing the Right Travel Crate</h3>
              <p className="text-sm text-neutral-700 mb-3">
                IATA requirements, sizing guidelines, and recommended brands.
              </p>
              <div className="text-xs text-neutral-500">Coming Soon</div>
            </article>

            <article className="bg-white rounded-xl border p-6">
              <h3 className="font-semibold mb-2">Military Pet Moves (PCS)</h3>
              <p className="text-sm text-neutral-700 mb-3">
                Special considerations and support resources for military families.
              </p>
              <div className="text-xs text-neutral-500">Coming Soon</div>
            </article>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-800 mb-3">Newsletter Archive</h3>
            <p className="text-sm text-blue-700 mb-4">
              Access our monthly newsletter with the latest regulation updates, 
              tips, and success stories from pet families.
            </p>
            <a href="/landing/email-signup" className="text-blue-600 hover:underline font-medium">
              Subscribe for Updates →
            </a>
          </div>
        </div>
      </div>

      <section className="bg-neutral-100 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Helpful Links</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="font-semibold mb-3">Government Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-blue-600 hover:underline">USDA APHIS</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Australian Department of Agriculture</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">UK DEFRA</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">EU Pet Passport Info</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Veterinary Organizations</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-blue-600 hover:underline">AVMA</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">USAHA</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Find Accredited Vets</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Rabies Titer Labs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Airlines & Transport</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-blue-600 hover:underline">Lufthansa Cargo</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">KLM Pet Travel</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">United PetSafe</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">IPATA Pet Shippers</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="text-center bg-white rounded-xl border p-8">
        <h2 className="text-2xl font-bold mb-4">Can't Find What You Need?</h2>
        <p className="text-neutral-700 mb-6">
          We're constantly adding new resources. Let us know what would be helpful 
          for your pet relocation journey.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/contact" className="px-6 py-3 bg-black text-white rounded-md hover:opacity-90">
            Request Resource
          </a>
          <a href="/intake" className="px-6 py-3 border border-black rounded-md hover:bg-neutral-50">
            Get Custom Help
          </a>
        </div>
      </section>
    </div>
  );
}