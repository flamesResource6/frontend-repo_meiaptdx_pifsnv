import React, { useState } from 'react';

const COUNTRY_CODES = [
  { code: '+1', label: 'United States (+1)' },
  { code: '+44', label: 'United Kingdom (+44)' },
  { code: '+61', label: 'Australia (+61)' },
  { code: '+91', label: 'India (+91)' },
  { code: '+81', label: 'Japan (+81)' },
  { code: '+49', label: 'Germany (+49)' },
  { code: '+33', label: 'France (+33)' },
  { code: '+971', label: 'UAE (+971)' },
  { code: '+65', label: 'Singapore (+65)' },
  { code: '+82', label: 'South Korea (+82)' },
];

export default function ConsultationForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    const form = new FormData(e.currentTarget);
    const payload = {
      first_name: form.get('first_name'),
      last_name: form.get('last_name'),
      company: form.get('company') || undefined,
      email: form.get('email'),
      country_code: form.get('country_code'),
      phone_number: form.get('phone_number'),
      message: form.get('message') || undefined,
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/consultations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.detail || 'Submission failed');
      setSuccess('Thanks! We will reach out shortly.');
      e.currentTarget.reset();
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">Get a free consultation</h3>
            <p className="mt-2 text-slate-600">
              Share a few details and we'll schedule time to explore your goals, constraints, and potential ROI.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">First name</label>
                <input name="first_name" required className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Jane"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Last name</label>
                <input name="last_name" required className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Doe"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Company</label>
                <input name="company" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Acme AI"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="you@company.com"/>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <div className="mt-1 grid grid-cols-[140px,1fr] gap-2">
                  <select name="country_code" required className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200">
                    <option value="">Country code</option>
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>{c.label}</option>
                    ))}
                  </select>
                  <input name="phone_number" required className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="555 123 4567"/>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" rows="4" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Tell us about your project, timeline, and success criteria (optional)"/>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <button disabled={loading} className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-indigo-700 disabled:opacity-60">
                {loading ? 'Submitting...' : 'Request consultation'}
              </button>
              {success && <p className="text-sm text-emerald-600">{success}</p>}
              {error && <p className="text-sm text-rose-600">{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
