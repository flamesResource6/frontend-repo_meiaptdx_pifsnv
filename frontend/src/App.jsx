import React from 'react'
import ContactHero from './components/ContactHero'
import ContactInfo from './components/ContactInfo'
import ConsultationForm from './components/ConsultationForm'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ContactHero />
      <ContactInfo />
      <ConsultationForm />
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Your IT Company — AI Solutions & Data Analytics
      </footer>
    </div>
  )
}

export default App
