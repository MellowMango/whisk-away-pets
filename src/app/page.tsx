export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <section className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight text-neutral-900">
              Your Pet's Journey Home 
              <span className="text-orange-500"> Starts Here</span> 🐾
            </h1>
            <p className="text-xl text-neutral-700 leading-relaxed">
              Moving internationally with your furry family? We make it simple with 
              country-specific guides, step-by-step checklists, and loving support 
              every step of the way.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href="/intake" className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg font-semibold text-lg">
              Get My Pawsport ✈️
            </a>
            <a href="/landing/email-signup" className="px-8 py-4 rounded-xl border-2 border-orange-500 text-orange-600 hover:bg-orange-50 transition-colors font-semibold text-lg">
              Free Guide First 📋
            </a>
          </div>

          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-6">
            <h3 className="font-bold text-orange-800 mb-3">✨ Why Pet Parents Love Us:</h3>
            <div className="grid gap-3">
              <div className="flex items-center gap-3">
                <span className="text-orange-600">🎯</span>
                <span className="text-sm">Country-specific requirements (no generic advice!)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-600">📅</span>
                <span className="text-sm">Clear timelines so you never miss a deadline</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-600">💰</span>
                <span className="text-sm">Save $1000s vs. full-service relocators</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-600">🤗</span>
                <span className="text-sm">Personal support when you need it most</span>
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-center">
          <div className="relative">
            <img 
              src="/images/Frontview-stuffedanimals.png" 
              alt="Happy pets ready to travel" 
              className="w-80 h-auto drop-shadow-2xl"
            />
            <div className="absolute -top-6 -right-6 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold rotate-12 shadow-lg">
              2,500+ Pets Moved! 🎉
            </div>
          </div>
        </section>
      </div>

      {/* How It Works */}
      <section className="bg-white rounded-3xl p-12 shadow-sm">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How Your Pet's Journey Works</h2>
          <p className="text-neutral-600">Simple, stress-free, and surprisingly affordable</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto text-white text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold">Tell Us About Your Move</h3>
            <p className="text-neutral-600">
              Quick 2-minute form about your pet, travel dates, and destination. 
              We handle the rest!
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto text-white text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold">Get Your Pawsport</h3>
            <p className="text-neutral-600">
              Receive your personalized International Pawsport with everything 
              you need - instantly!
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto text-white text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold">Follow & Succeed</h3>
            <p className="text-neutral-600">
              Follow your step-by-step timeline. Get support when needed. 
              Celebrate when your pet arrives safely!
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Thousands of Happy Reunions 💕</h2>
          <div className="flex items-center justify-center gap-8 text-lg">
            <div><strong>2,500+</strong> Pets Moved</div>
            <div><strong>50+</strong> Countries</div>
            <div><strong>4.9⭐</strong> Average Rating</div>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-neutral-700 italic mb-4">
              "The International Pawsport saved our move! Everything was so clear 
              and organized. Luna arrived in Germany without any issues!"
            </p>
            <div className="font-semibold">- Sarah & Luna 🐕</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-neutral-700 italic mb-4">
              "Moving with two cats seemed impossible until we found WhiskAway. 
              The step-by-step guidance was perfect!"
            </p>
            <div className="font-semibold">- Mike & His Kitties 🐱🐱</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm md:col-span-2 lg:col-span-1">
            <p className="text-neutral-700 italic mb-4">
              "Military PCS with pets is stressful, but WhiskAway made it manageable. 
              Highly recommend the concierge service!"
            </p>
            <div className="font-semibold">- Jennifer & Max 🇺🇸</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-orange-500 text-white rounded-3xl p-12">
        <h2 className="text-4xl font-bold mb-6">Ready to Bring Your Pet Home? 🏠</h2>
        <p className="text-xl mb-8 text-orange-100">
          Join thousands of pet families who've made the move with confidence
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/intake" className="px-8 py-4 bg-white text-orange-500 rounded-xl hover:bg-orange-50 transition-colors font-semibold text-lg shadow-lg">
            Start My Pet's Journey ✈️
          </a>
          <a href="/landing/email-signup" className="px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-orange-400 transition-colors font-semibold text-lg">
            Get Free Tips First 📧
          </a>
        </div>
      </section>
    </div>
  );
}