import React, { useState } from 'react'

const COUNTRY_CODES = ['+1', '+44', '+61', '+91', '+81', '+49', '+33', '+971', '+65', '+82']

function ConsultationForm() {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    company: '',
    email: '',
    country_code: COUNTRY_CODES[0],
    phone_number: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: '', message: '' })
    setLoading(true)

    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

    try {
      const res = await fetch(`${baseUrl}/consultations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.detail || 'Failed to submit. Please try again.')
      }

      setStatus({ type: 'success', message: 'Thanks! We\'ll be in touch shortly.' })
      setForm({ first_name: '', last_name: '', company: '', email: '', country_code: COUNTRY_CODES[0], phone_number: '', message: '' })
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Something went wrong.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl border border-slate-700/60 bg-slate-800/60 p-6 md:p-8">
          <h2 className="text-white text-2xl font-semibold">Get a free consultation</h2>
          <p className="text-blue-200/80 mt-2">Tell us about your AI or analytics needs. We\'ll respond within one business day.</p>

          {status.message && (
            <div className={`mt-4 rounded border px-4 py-3 text-sm ${status.type === 'success' ? 'border-green-500/40 bg-green-500/10 text-green-300' : 'border-red-500/40 bg-red-500/10 text-red-300'}`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-blue-200/80 text-sm mb-1">First name</label>
              <input required name="first_name" value={form.first_name} onChange={handleChange} className="w-full rounded-lg bg-slate-900/60 border border-slate-700/60 px-3 py-2 text-white placeholder-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Jane" />
            </div>
            <div>
              <label className="block text-blue-200/80 text-sm mb-1">Last name</label>
              <input required name="last_name" value={form.last_name} onChange={handleChange} className="w-full rounded-lg bg-slate-900/60 border border-slate-700/60 px-3 py-2 text-white placeholder-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Doe" />
            </div>
            <div>
              <label className="block text-blue-200/80 text-sm mb-1">Company (optional)</label>
              <input name="company" value={form.company} onChange={handleChange} className="w-full rounded-lg bg-slate-900/60 border border-slate-700/60 px-3 py-2 text-white placeholder-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Acme AI" />
            </div>
            <div>
              <label className="block text-blue-200/80 text-sm mb-1">Email</label>
              <input required type="email" name="email" value={form.email} onChange={handleChange} className="w-full rounded-lg bg-slate-900/60 border border-slate-700/60 px-3 py-2 text-white placeholder-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="you@example.com" />
            </div>
            <div className="md:col-span-2 grid grid-cols-3 gap-3">
              <div>
                <label className="block text-blue-200/80 text-sm mb-1">Code</label>
                <select name="country_code" value={form.country_code} onChange={handleChange} className="w-full rounded-lg bg-slate-900/60 border border-slate-700/60 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                  {COUNTRY_CODES.map(code => (
                    <option key={code} value={code}>{code}</option>
                  ))}
                </select>
              </div>
              <div className="col-span-2">
                <label className="block text-blue-200/80 text-sm mb-1">Phone number</label>
                <input required name="phone_number" value={form.phone_number} onChange={handleChange} className="w-full rounded-lg bg-slate-900/60 border border-slate-700/60 px-3 py-2 text-white placeholder-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="123 456 789" />
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-blue-200/80 text-sm mb-1">Message (optional)</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full rounded-lg bg-slate-900/60 border border-slate-700/60 px-3 py-2 text-white placeholder-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Briefly describe your goals or challenges" />
            </div>
            <div className="md:col-span-2 flex justify-end">
              <button type="submit" disabled={loading} className="inline-flex items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white font-semibold px-4 py-2 transition-colors">
                {loading ? 'Submitting...' : 'Request consultation'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ConsultationForm
