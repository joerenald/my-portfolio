import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import MouseGlow from "./components/MouseGlow";
function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gray-900 text-white">
      
     {/* Premium Background System */}
<div className="fixed inset-0 -z-10 overflow-hidden">
  
  {/* Aurora Layer */}
  <div className="aurora-bg"></div>

  {/* Animated Grid */}
  <div className="grid-overlay"></div>

  {/* Floating Orb 1 */}
  <div className="orb orb--1"></div>

  {/* Floating Orb 2 */}
  <div className="orb orb--2"></div>

  {/* Floating Orb 3 */}
  <div className="orb orb--3"></div>

  {/* Noise Texture */}
  <div className="noise-overlay"></div>
</div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <MouseGlow />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll To Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;