import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/#about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Top info bar */}
      <div className="hidden md:flex bg-stone-900 text-gray-400 text-sm px-8 py-2 justify-between items-center">
        <div className="flex gap-6">
          <span>✉️ info@bellavista.com</span>
          <span>📞 +(123) 456-7890</span>
        </div>
        <div className="flex gap-4 text-lg">
          <a href="#" className="hover:text-amber-400 transition">f</a>
          <a href="#" className="hover:text-amber-400 transition">in</a>
          <a href="#" className="hover:text-amber-400 transition">tw</a>
          <a href="#" className="hover:text-amber-400 transition">yt</a>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="sticky top-0 w-full bg-black/95 text-white z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-amber-400">
            🍽️ <span>Bella <span className="text-white">Vista</span></span>
          </Link>

          <ul className="hidden md:flex gap-8 font-medium">
            {links.map(l => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    isActive ? 'text-amber-400' : 'hover:text-amber-400 transition'
                  }
                >{l.label}</NavLink>
              </li>
            ))}
          </ul>

          <Link to="/contact" className="hidden md:block bg-amber-500 hover:bg-amber-600 text-black font-semibold px-5 py-2 rounded transition">
            Book a Table
          </Link>

          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>☰</button>
        </div>

        {open && (
          <ul className="md:hidden bg-black px-6 pb-4 flex flex-col gap-4 font-medium">
            {links.map(l => (
              <li key={l.to}>
                <NavLink to={l.to} onClick={() => setOpen(false)} className="hover:text-amber-400 transition">{l.label}</NavLink>
              </li>
            ))}
            <li>
              <Link to="/contact" onClick={() => setOpen(false)} className="bg-amber-500 text-black font-semibold px-4 py-2 rounded inline-block">Book a Table</Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  )
}
