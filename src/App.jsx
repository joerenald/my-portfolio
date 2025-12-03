import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Education from "./components/Education";
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Certificates from './components/Certificates.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

export default function App() {
  return (
    <div className="bg-gray-900 text-white relative overflow-x-hidden">
      <div className="orb orb--1 pointer-events-none" aria-hidden />
      <div className="orb orb--2 pointer-events-none" aria-hidden />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />   
        <Skills />
        <Projects />
        <Certificates/>
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
