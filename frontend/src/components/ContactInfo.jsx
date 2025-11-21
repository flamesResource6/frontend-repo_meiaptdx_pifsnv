import React from 'react';

export default function ContactInfo() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Contact our team</h2>
            <p className="mt-2 text-slate-600">
              For project inquiries, partnerships, or general questions, reach us at
            </p>
            <a href="mailto:contact@youritcompany.com" className="mt-3 inline-block text-indigo-600 hover:text-indigo-700">
              contact@youritcompany.com
            </a>
          </div>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-600"/> AI Strategy & Roadmapping</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-600"/> MLOps & Model Deployment</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-600"/> Data Warehousing & BI Dashboards</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-600"/> Custom LLM Integrations</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
