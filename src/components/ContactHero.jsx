import React from 'react'

function ContactHero({ compact = false }) {
  return (
    <section className={compact ? 'pt-2' : 'relative overflow-hidden'}>
      {!compact && <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.25),rgba(59,130,246,0)_60%)]" />}
      <div className={compact ? 'relative' : 'relative max-w-6xl mx-auto px-6 pt-20 pb-12 md:pt-28 md:pb-16'}>
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-500/10 text-blue-300 ring-1 ring-inset ring-blue-400/20">AI & Data Analytics</span>
        <h1 className={"mt-2 font-extrabold tracking-tight text-white " + (compact ? 'text-xl leading-tight' : 'text-4xl md:text-5xl') }>
          Contact our AI & Data specialists
        </h1>
        <p className={"mt-2 text-blue-200/90 " + (compact ? 'text-sm' : 'text-lg max-w-2xl')}>
          From predictive analytics to generative AI, we help you design and scale data-driven solutions.
        </p>
      </div>
    </section>
  )
}

export default ContactHero
