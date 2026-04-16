import { useState } from 'react'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db } from '../firebase'

export default function BookingForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', time: '', guests: '2' })
  const [status, setStatus] = useState('')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      await addDoc(collection(db, 'bookings'), { ...form, createdAt: Timestamp.now() })
      setStatus('success')
      setForm({ name: '', email: '', phone: '', date: '', time: '', guests: '2' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass = "w-full bg-stone-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-gray-400"

  return (
    <div className="bg-stone-800 rounded-2xl p-8 shadow-xl">
      <h3 className="text-2xl font-bold text-white mb-6">Reserve a Table</h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required className={inputClass} />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address" required className={inputClass} />
        <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Phone Number" required className={inputClass} />
        <select name="guests" value={form.guests} onChange={handleChange} className={inputClass}>
          {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
        </select>
        <input name="date" type="date" value={form.date} onChange={handleChange} required className={inputClass} min={new Date().toISOString().split('T')[0]} />
        <select name="time" value={form.time} onChange={handleChange} required className={inputClass}>
          <option value="">Select Time</option>
          {['12:00','13:00','14:00','18:00','19:00','20:00','21:00'].map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="md:col-span-2 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-black font-bold py-3 rounded-full transition text-lg"
        >
          {status === 'loading' ? 'Booking...' : 'Confirm Booking'}
        </button>
        {status === 'success' && <p className="md:col-span-2 text-green-400 text-center">✅ Booking confirmed! We'll see you soon.</p>}
        {status === 'error' && <p className="md:col-span-2 text-red-400 text-center">❌ Something went wrong. Please try again.</p>}
      </form>
    </div>
  )
}
