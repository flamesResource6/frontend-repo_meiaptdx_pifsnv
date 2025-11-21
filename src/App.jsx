import React from 'react'
import ContactHero from './components/ContactHero'
import ContactInfo from './components/ContactInfo'
import ConsultationForm from './components/ConsultationForm'

function App() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="h-full max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-center">
        <div className="w-full rounded-2xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-md p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="flex flex-col gap-3">
              <ContactHero compact />
              <ContactInfo compact />
              <p className="text-xs text-blue-200/60 mt-1">© {new Date().getFullYear()} Your IT Company • AI Solutions & Data Analytics</p>
            </div>
            <div className="max-h-[72vh] overflow-auto rounded-xl border border-slate-800/60 bg-slate-900/60 p-3 md:p-4">
              <ConsultationForm compact />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
