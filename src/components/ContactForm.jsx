import { useState } from 'react'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db } from '../firebase'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      await addDoc(collection(db, 'messages'), { ...form, createdAt: Timestamp.now() })
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass = "w-full bg-stone-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-gray-400"

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required className={inputClass} />
      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address" required className={inputClass} />
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" required rows={5} className={inputClass} />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-black font-bold py-3 rounded-full transition text-lg"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && <p className="text-green-400 text-center">✅ Message sent! We'll get back to you soon.</p>}
      {status === 'error' && <p className="text-red-400 text-center">❌ Something went wrong. Please try again.</p>}
    </form>
  )
}
