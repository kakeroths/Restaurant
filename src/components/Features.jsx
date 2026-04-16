const features = [
  { icon: '👨‍🍳', title: 'Master Chefs', desc: 'Trained in Italy\'s finest culinary schools with decades of experience.' },
  { icon: '🥗', title: 'Quality Food', desc: 'Fresh, locally sourced ingredients in every dish we serve.' },
  { icon: '🛵', title: 'Online Order', desc: 'Order your favorite dishes online for delivery or pickup.' },
  { icon: '🕐', title: '24/7 Service', desc: 'We are always here to serve you, any time of the day.' },
]

export default function Features() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map(f => (
          <div key={f.title} className="text-center p-6 rounded-xl hover:shadow-lg transition group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{f.icon}</div>
            <h3 className="font-bold text-stone-800 text-lg mb-2">{f.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
