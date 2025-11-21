import React from 'react'
import { Mail } from 'lucide-react'

function ContactInfo({ compact = false }) {
  return (
    <section className={compact ? '' : 'py-10 md:py-12 bg-slate-900/40'}>
      <div className={compact ? '' : 'max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8'}>
        <div className={"rounded-xl border border-slate-700/60 bg-slate-800/60 " + (compact ? 'p-3' : 'p-6')}>
          <h2 className={"text-white font-semibold " + (compact ? 'text-base' : 'text-2xl')}>Contact us</h2>
          <p className={"text-blue-200/80 mt-1 " + (compact ? 'text-xs' : '')}>Prefer email? Reach our team directly.</p>
          <a href="mailto:contact@youritcompany.com" className={"mt-2 inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors " + (compact ? 'text-sm' : '')}>
            <Mail size={16} /> contact@youritcompany.com
          </a>
        </div>

        {!compact && (
          <div className="rounded-2xl border border-slate-700/60 bg-slate-800/60 p-6">
            <h3 className="text-white text-xl font-semibold">Office hours</h3>
            <p className="text-blue-200/80 mt-2">Mon–Fri, 9:00–18:00 (your timezone)</p>
            <p className="text-blue-300/80 text-sm mt-3">We typically respond within one business day.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default ContactInfo
