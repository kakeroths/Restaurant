import BookingForm from '../components/BookingForm'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <div
        className="py-24 text-white text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-300">Home / Contact</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Drop us a line */}
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 mb-10">
          <p className="text-amber-500 uppercase tracking-widest text-sm text-center mb-2">Get In Touch</p>
          <h2 className="text-3xl font-bold text-stone-800 text-center mb-8">Drop Us A Line</h2>
          <ContactForm />
        </div>

        {/* Info + Map */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-amber-500 text-xl">📍</span>
                  <h4 className="font-bold text-stone-800">Address</h4>
                </div>
                <p className="text-gray-500 text-sm ml-8">Tower: 123 Second Street, New York</p>
                <p className="text-gray-500 text-sm ml-8">City: Kingston, United States</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-amber-500 text-xl">🕐</span>
                  <h4 className="font-bold text-stone-800">Open Hours</h4>
                </div>
                <p className="text-gray-500 text-sm ml-8">Day: Monday – Friday</p>
                <p className="text-gray-500 text-sm ml-8">Time: 10:00 AM – 7:30 PM</p>
                <p className="text-gray-500 text-sm ml-8">Phone: +86 7883 6383 6307</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-amber-500 text-xl">🔗</span>
                  <h4 className="font-bold text-stone-800">Find Us On</h4>
                </div>
                <div className="flex gap-3 ml-8">
                  {['tw', 'yt', 'ig', 'fb'].map(s => (
                    <a key={s} href="#" className="w-8 h-8 bg-amber-100 hover:bg-amber-500 text-amber-600 hover:text-black rounded flex items-center justify-center text-xs font-bold transition">{s}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <iframe
              title="Bella Vista Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291865!2d-73.9878449!3d40.7484405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Booking form */}
        <BookingForm />
      </div>
    </div>
  )
}
