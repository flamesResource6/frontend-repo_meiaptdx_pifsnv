import React from 'react'

function ContactHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.25),rgba(59,130,246,0)_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-12 md:pt-28 md:pb-16">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 ring-1 ring-inset ring-blue-400/20">AI & Data Analytics</span>
        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Contact our AI & Data specialists
        </h1>
        <p className="mt-4 max-w-2xl text-blue-200/90 text-lg">
          From predictive analytics to generative AI, our team helps you design, build, and scale data-driven solutions that create measurable impact.
        </p>
      </div>
    </section>
  )
}

export default ContactHero
