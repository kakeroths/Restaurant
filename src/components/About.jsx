export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image grid */}
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400" alt="Restaurant" className="rounded-2xl h-48 w-full object-cover" />
          <img src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400" alt="Chef" className="rounded-2xl h-48 w-full object-cover mt-8" />
          <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400" alt="Dining" className="rounded-2xl h-48 w-full object-cover" />
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400" alt="Food" className="rounded-2xl h-48 w-full object-cover mt-8" />
        </div>

        {/* Text */}
        <div>
          <p className="text-amber-500 uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
            <span className="w-8 h-px bg-amber-500 inline-block" /> About Us
          </p>
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            Welcome to 🍽️ <span className="text-amber-500">Bella Vista</span>
          </h2>
          <p className="text-gray-500 mb-4 leading-relaxed">
            Founded in 2005, Bella Vista has been serving authentic Italian cuisine crafted from
            family recipes passed down through generations. Every dish is made with fresh,
            locally sourced ingredients.
          </p>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Our chefs bring decades of experience from Italy's finest kitchens, ensuring every
            visit is a memorable culinary journey.
          </p>
          <div className="flex gap-10 mb-8">
            <div>
              <p className="text-amber-500 text-3xl font-bold">15+</p>
              <p className="text-gray-500 text-sm uppercase tracking-wide">Years of Experience</p>
            </div>
            <div className="w-px bg-gray-200" />
            <div>
              <p className="text-amber-500 text-3xl font-bold">50+</p>
              <p className="text-gray-500 text-sm uppercase tracking-wide">Popular Master Chefs</p>
            </div>
          </div>
          <a href="#" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 rounded transition inline-block">
            Read More
          </a>
        </div>
      </div>
    </section>
  )
}
