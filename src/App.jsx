import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Strengths from './components/Strengths';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafafb] text-slate-800 antialiased selection:bg-brand-100 selection:text-brand-900 font-sans">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Strengths />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
