import React from 'react'
import ContactHero from './components/ContactHero'
import ContactInfo from './components/ContactInfo'
import ConsultationForm from './components/ConsultationForm'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <ContactHero />
      <ContactInfo />
      <ConsultationForm />
      <footer className="py-10 text-center text-blue-200/60">
        © {new Date().getFullYear()} Your IT Company • AI Solutions & Data Analytics
      </footer>
    </div>
  )
}

export default App
