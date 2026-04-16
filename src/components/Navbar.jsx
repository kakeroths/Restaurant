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
    <header className="bg-[#0d0d0d]">
      {/* Top info bar */}
      <div className="border-b border-stone-800 px-6 md:px-12 py-2 flex justify-between items-center text-sm text-gray-400">
        <div className="flex items-center gap-6 flex-wrap">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            info@bellavista.com
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            +(123) 456-7890
          </span>
          <span className="hidden md:flex items-center gap-2">
            <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            123 Bella Vista, Italy
          </span>
        </div>
        <div className="flex items-center gap-4">
          {[
            <svg key="fb" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>,
            <svg key="ig" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={2}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={2}/></svg>,
            <svg key="tw" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>,
            <svg key="yt" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon fill="#0d0d0d" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>,
          ].map((icon, i) => (
            <a key={i} href="#" className="hover:text-amber-400 transition">{icon}</a>
          ))}
        </div>
      </div>

      {/* Main navbar */}
      <nav className="px-6 md:px-12 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <span className="text-2xl">🍽️</span>
          <span className="text-white">Bella <span className="text-amber-400">Vista</span></span>
        </Link>

        <ul className="hidden md:flex gap-8 font-medium">
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  isActive
                    ? 'text-amber-400 border-b-2 border-amber-400 pb-1'
                    : 'text-gray-300 hover:text-amber-400 transition'
                }
              >{l.label}</NavLink>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="hidden md:flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-black font-semibold px-5 py-2.5 rounded transition">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth={2}/><line x1="16" y1="2" x2="16" y2="6" strokeWidth={2}/><line x1="8" y1="2" x2="8" y2="6" strokeWidth={2}/><line x1="3" y1="10" x2="21" y2="10" strokeWidth={2}/></svg>
          Book a Table
        </Link>

        <button className="md:hidden text-white text-2xl" onClick={() => setOpen(!open)}>☰</button>
      </nav>

      {open && (
        <ul className="md:hidden bg-[#111] px-6 pb-4 flex flex-col gap-4 font-medium border-t border-stone-800">
          {links.map(l => (
            <li key={l.to}>
              <NavLink to={l.to} onClick={() => setOpen(false)} className="text-gray-300 hover:text-amber-400 transition">{l.label}</NavLink>
            </li>
          ))}
          <li>
            <Link to="/contact" onClick={() => setOpen(false)} className="bg-amber-400 text-black font-semibold px-4 py-2 rounded inline-block">Book a Table</Link>
          </li>
        </ul>
      )}
    </header>
  )
}
