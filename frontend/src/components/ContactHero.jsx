import React from 'react';

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          AI Solutions • Data Analytics • Free Consultation
        </p>
        <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
          Let's talk about your next AI & Data initiative
        </h1>
        <p className="mt-4 max-w-2xl text-white/80">
          Whether you're exploring predictive models, data platforms, or end-to-end AI apps, our team can help from strategy to production.
        </p>
      </div>
    </section>
  );
}
