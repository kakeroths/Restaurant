import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="min-h-screen bg-stone-950 text-white flex items-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full py-20 pt-28 md:pt-20">
        {/* Left */}
        <div className="relative z-10 text-center md:text-left">
          <p className="text-amber-400 uppercase tracking-widest text-sm mb-4 flex items-center justify-center md:justify-start gap-2">
            <span className="w-8 h-px bg-amber-400 inline-block" /> Sustaining The Delicious World
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            The Perfect Space<br />to Enjoy <span className="text-amber-400">Best</span><br />Food
          </h1>
          <p className="text-gray-400 mb-8 text-base md:text-lg max-w-md mx-auto md:mx-0">
            Experience authentic Italian cuisine crafted with passion, fresh ingredients, and decades of culinary tradition.
          </p>
          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <Link to="/contact" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 md:px-8 py-3 rounded transition text-base md:text-lg">
              Book a Table
            </Link>
            <Link to="/menu" className="border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black px-6 md:px-8 py-3 rounded transition text-base md:text-lg">
              View Menu
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 justify-center md:justify-start">
            {[['50+', 'Menu Items'], ['18+', 'Years Exp.'], ['10k+', 'Happy Guests']].map(([num, label]) => (
              <div key={label}>
                <p className="text-amber-400 text-2xl font-bold">{num}</p>
                <p className="text-gray-400 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - circular food image — hidden on small screens */}
        <div className="relative hidden sm:flex justify-center items-center">
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-amber-500/30 shadow-2xl shadow-amber-500/20">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800"
              alt="Delicious food"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          {/* Floating badges */}
          <div className="absolute top-4 right-8 bg-amber-500 text-black rounded-full px-4 py-2 text-sm font-bold shadow-lg">
            ⭐ 4.9 Rating
          </div>
          <div className="absolute bottom-8 left-8 bg-stone-800 text-white rounded-xl px-4 py-3 shadow-lg text-sm">
            <p className="font-semibold">🔥 Today's Special</p>
            <p className="text-amber-400">Osso Buco — $28</p>
          </div>
        </div>
      </div>
    </section>
  )
}
