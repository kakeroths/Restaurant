import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0d0d0d] text-white flex items-center relative overflow-hidden">
      {/* Scattered food decorations */}
      <div className="absolute top-20 right-10 opacity-40 hidden lg:block">🌿</div>
      <div className="absolute top-40 right-32 opacity-40 hidden lg:block">🥜</div>
      <div className="absolute bottom-32 right-20 opacity-40 hidden lg:block">🌿</div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center w-full py-20">
        {/* Left */}
        <div className="relative z-10 text-center lg:text-left">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-xs mb-6 flex items-center justify-center lg:justify-start gap-3">
            <span className="w-10 h-px bg-amber-400" /> Sustaining The Delicious World
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            The Perfect Space<br />to Enjoy <span className="text-amber-400">Best Food</span>
          </h1>
          <p className="text-gray-400 mb-10 text-base lg:text-lg max-w-lg mx-auto lg:mx-0">
            Experience authentic Italian cuisine crafted with passion, fresh ingredients, and decades of culinary tradition.
          </p>
          <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
            <Link to="/contact" className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-3 rounded transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth={2}/><line x1="16" y1="2" x2="16" y2="6" strokeWidth={2}/><line x1="8" y1="2" x2="8" y2="6" strokeWidth={2}/><line x1="3" y1="10" x2="21" y2="10" strokeWidth={2}/></svg>
              Book a Table
            </Link>
            <Link to="/menu" className="flex items-center gap-2 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-6 py-3 rounded transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              View Menu
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-8 lg:gap-12 mt-14 justify-center lg:justify-start flex-wrap">
            {[
              [<svg key="1" className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>, '50+', 'Menu Items'],
              [<svg key="2" className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>, '18+', 'Years Exp.'],
              [<svg key="3" className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>, '10K+', 'Happy Guests'],
            ].map(([icon, num, label], i) => (
              <div key={i} className="flex items-center gap-3">
                {icon}
                <div>
                  <p className="text-amber-400 text-2xl font-bold">{num}</p>
                  <p className="text-gray-400 text-sm">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - circular food image with decorations */}
        <div className="relative hidden lg:flex justify-center items-center">
          <div className="w-[500px] h-[500px] rounded-full overflow-hidden border-4 border-stone-800 shadow-2xl relative">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800"
              alt="Delicious steak"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          {/* Rating badge */}
          <div className="absolute top-8 right-12 bg-black border-2 border-amber-400 rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-xl">
            <span className="text-amber-400 text-xl">⭐</span>
            <p className="text-white text-2xl font-bold">4.9</p>
            <p className="text-gray-400 text-xs">Rating</p>
          </div>

          {/* Today's Special badge */}
          <div className="absolute bottom-16 left-8 bg-stone-900 border border-amber-400/30 rounded-2xl px-5 py-3 shadow-xl">
            <p className="text-white font-semibold flex items-center gap-2">
              <span className="text-amber-400">🔥</span> Today's Special
            </p>
            <p className="text-amber-400 font-bold">Osso Buco — $28</p>
          </div>

          {/* Cursive text */}
          <div className="absolute bottom-8 right-8 font-serif italic text-amber-400/60 text-2xl">
            Made with<br/>Passion
          </div>

          {/* Scattered food items */}
          <div className="absolute top-12 left-12 text-4xl opacity-70">🥜</div>
          <div className="absolute top-32 left-4 text-3xl opacity-70">🌶️</div>
          <div className="absolute bottom-40 left-0 text-3xl opacity-70">🥜</div>
        </div>
      </div>
    </section>
  )
}
