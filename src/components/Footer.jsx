import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-stone-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        <div>
          <h3 className="text-amber-400 text-xl font-bold mb-4">🍽️ Bella Vista</h3>
          <p className="text-sm leading-relaxed mb-4">Authentic Italian cuisine crafted with passion and the finest ingredients since 2005.</p>
          <div className="flex gap-3">
            {['f', 'tw', 'in', 'yt'].map(s => (
              <a key={s} href="#" className="w-8 h-8 bg-stone-700 hover:bg-amber-500 hover:text-black rounded flex items-center justify-center text-xs transition">{s}</a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            {[['/', 'Home'], ['/#about', 'About Us'], ['/contact', 'Contact Us'], ['/menu', 'Menu'], ['/contact', 'Reservation']].map(([to, label]) => (
              <li key={label}><Link to={to} className="hover:text-amber-400 transition">→ {label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>📍 125 Street, New York, USA</li>
            <li>📞 +012 345 67890</li>
            <li>✉️ info@bellavista.com</li>
            <li>🕐 Mon–Sat: 09AM–08PM</li>
            <li>🕐 Sunday: 10AM–08PM</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Newsletter</h4>
          <p className="text-sm mb-4">Join our subscribers list to get the latest news, updates and special offers.</p>
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email address"
              className="flex-1 bg-stone-700 text-white px-4 py-2 rounded-l text-sm focus:outline-none focus:ring-1 focus:ring-amber-400 placeholder-gray-500"
            />
            <button
              onClick={() => setEmail('')}
              className="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-r transition text-sm font-semibold"
            >→</button>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-700 py-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Bella Vista. All Rights Reserved. | <a href="#" className="hover:text-amber-400">Privacy Policy</a> | <a href="#" className="hover:text-amber-400">Terms</a></p>
      </div>
    </footer>
  )
}
