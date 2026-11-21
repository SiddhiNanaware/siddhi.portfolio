import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-850">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
              SN
            </div>
            <div>
              <p className="text-white font-bold text-base tracking-tight">Siddhi Rameshwar Nanaware</p>
              <p className="text-xs text-slate-400">Computer Engineering Student • Dr. D. Y. Patil College of Engg. &amp; Innovation</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/siddhinanaware"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/siddhi-nanaware"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-brand-400 hover:bg-slate-800 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:siddhinanaware3541@gmail.com"
              aria-label="Email"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-red-400 hover:bg-slate-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              type="button"
              aria-label="Back to top"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-brand-600 transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Quick Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1">
            <span>Handcrafted with precision &amp; dedication • © {new Date().getFullYear()} Siddhi Rameshwar Nanaware</span>
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#about" className="hover:text-slate-300 transition-colors">About</a>
            <a href="#education" className="hover:text-slate-300 transition-colors">Education</a>
            <a href="#skills" className="hover:text-slate-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-slate-300 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
