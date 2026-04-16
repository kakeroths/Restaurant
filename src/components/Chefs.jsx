const chefs = [
  { name: 'Marco Rossi', role: 'Head Chef', img: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400' },
  { name: 'Luca Ferrari', role: 'Pasta Specialist', img: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400' },
  { name: 'Sofia Bianchi', role: 'Pastry Chef', img: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400' },
  { name: 'Antonio Greco', role: 'Grill Master', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400' },
]

export default function Chefs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-amber-500 uppercase tracking-widest text-sm text-center mb-2 flex items-center justify-center gap-2">
          <span className="w-8 h-px bg-amber-500 inline-block" /> Team Members <span className="w-8 h-px bg-amber-500 inline-block" />
        </p>
        <h2 className="text-4xl font-bold text-stone-800 text-center mb-12">Meet Our Master Chefs</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {chefs.map(c => (
            <div key={c.name} className="text-center group">
              <div className="relative overflow-hidden rounded-full w-40 h-40 mx-auto mb-4 border-4 border-amber-100 group-hover:border-amber-400 transition">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-bold text-stone-800 text-lg">{c.name}</h3>
              <p className="text-amber-500 text-sm">{c.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
