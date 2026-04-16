import Hero from '../components/Hero'
import Features from '../components/Features'
import About from '../components/About'
import MenuCard, { menuData } from '../components/MenuCard'
import Chefs from '../components/Chefs'
import Testimonials from '../components/Testimonials'
import BookingForm from '../components/BookingForm'
import { Link } from 'react-router-dom'

export default function Home() {
  const popular = menuData.find(c => c.category === 'Popular').items

  return (
    <>
      <Hero />
      <Features />
      <About />

      {/* Most Popular Items */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-amber-500 uppercase tracking-widest text-sm text-center mb-2 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-amber-500 inline-block" /> Food Menu <span className="w-8 h-px bg-amber-500 inline-block" />
          </p>
          <h2 className="text-4xl font-bold text-stone-800 text-center mb-4">Most Popular Items</h2>

          {/* Category tabs */}
          <div className="flex justify-center gap-6 mb-10 flex-wrap">
            {['Popular', 'Breakfast', 'Lunch', 'Dinner'].map((cat, i) => (
              <span key={cat} className={`flex items-center gap-2 font-medium cursor-pointer pb-1 ${i === 0 ? 'text-amber-500 border-b-2 border-amber-500' : 'text-gray-500 hover:text-amber-500 transition'}`}>
                {['🍽️','🥞','🥗','🌙'][i]} {cat}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-2 bg-white rounded-2xl shadow-sm overflow-hidden">
            {popular.map(item => <MenuCard key={item.name} {...item} />)}
          </div>

          <div className="text-center mt-8">
            <Link to="/menu" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 rounded transition">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Booking + Image split */}
      <section className="py-20 bg-stone-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800"
              alt="Dining"
              className="rounded-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-2xl cursor-pointer hover:scale-110 transition shadow-xl">▶</div>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>

      <Chefs />
      <Testimonials />
    </>
  )
}
