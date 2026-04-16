const reviews = [
  { name: 'Sarah Johnson', role: 'Food Blogger', text: 'Absolutely incredible dining experience. The Osso Buco was the best I\'ve ever had outside of Italy. Will definitely be coming back!', rating: 5, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
  { name: 'Michael Chen', role: 'Regular Customer', text: 'Bella Vista never disappoints. The ambiance, the service, and most importantly the food — all top notch. My go-to restaurant for special occasions.', rating: 5, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
  { name: 'Emily Rodriguez', role: 'Food Critic', text: 'A hidden gem in the city. The pasta is made fresh daily and you can taste the difference. The tiramisu alone is worth the visit.', rating: 5, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-stone-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-amber-400 uppercase tracking-widest text-sm text-center mb-2 flex items-center justify-center gap-2">
          <span className="w-8 h-px bg-amber-400 inline-block" /> Testimonial <span className="w-8 h-px bg-amber-400 inline-block" />
        </p>
        <h2 className="text-4xl font-bold text-center mb-12">Our Clients Say!!!</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={r.name} className={`p-6 md:p-8 rounded-2xl relative ${i === 1 ? 'bg-amber-500 text-black' : 'bg-stone-800'}`}>
              <div className={`text-6xl font-serif leading-none mb-4 ${i === 1 ? 'text-black/20' : 'text-amber-500/30'}`}>"</div>
              <p className={`leading-relaxed mb-6 text-sm ${i === 1 ? 'text-black/80' : 'text-gray-400'}`}>{r.text}</p>
              <div className="flex items-center gap-3">
                <img src={r.img} alt={r.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="font-bold">{r.name}</p>
                  <p className={`text-sm ${i === 1 ? 'text-black/60' : 'text-gray-500'}`}>{r.role}</p>
                </div>
                <div className="ml-auto text-amber-400 text-sm">{'★'.repeat(r.rating)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
