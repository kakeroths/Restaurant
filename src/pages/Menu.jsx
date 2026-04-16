import { useState } from 'react'
import MenuCard, { menuData } from '../components/MenuCard'

export default function Menu() {
  const categories = menuData.map(c => c.category)
  const [active, setActive] = useState(categories[0])

  const items = menuData.find(c => c.category === active)?.items || []

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <div
        className="py-24 text-white text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-2">Our Menu</h1>
          <p className="text-gray-300">Home / Menu</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-amber-500 uppercase tracking-widest text-sm text-center mb-2">What We Offer</p>
        <h2 className="text-4xl font-bold text-stone-800 text-center mb-10">Our Menu</h2>

        {/* Filter tabs */}
        <div className="flex justify-center gap-3 flex-wrap mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded font-medium transition ${
                active === cat ? 'bg-amber-500 text-black' : 'bg-white text-gray-600 border border-gray-200 hover:border-amber-400 hover:text-amber-500'
              }`}
            >{cat}</button>
          ))}
        </div>

        {/* Menu list */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {items.map(item => <MenuCard key={item.name} {...item} />)}
        </div>
      </div>
    </div>
  )
}
