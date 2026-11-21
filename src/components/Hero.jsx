import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, Sparkles, MapPin, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-slate-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-brand-700 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Second Year • Dr. D. Y. Patil College of Engg. & Innovation</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Hi, I'm <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-brand-700 to-blue-600">
                  Siddhi Rameshwar Nanaware
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-slate-700 flex items-center gap-2 pt-1">
                <span className="w-8 h-[2px] bg-brand-500 inline-block"></span>
                Computer Engineering Student
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              I am a second-year Computer Engineering student at Dr. D. Y. Patil College of Engineering &amp; Innovation. I have a strong interest in technology, programming, and software development. With a solid foundation in <strong className="text-slate-800 font-semibold">C and C++ programming</strong>, I am currently exploring <strong className="text-slate-800 font-semibold">Full Stack Web Development</strong>. I believe in continuous learning, hard work, and smart work to build innovative, user-friendly solutions.
            </p>

            {/* Two Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-brand-600 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Explore My Work
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-800 border border-slate-300 hover:border-brand-500 hover:text-brand-600 text-sm font-semibold transition-all duration-200 shadow-xs hover:shadow-sm hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </div>

            {/* Social Icons with working links */}
            <div className="pt-4 flex items-center gap-4 border-t border-slate-200/70">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Connect With Me:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/siddhi-nanaware"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg text-slate-600 bg-slate-100 hover:bg-brand-50 hover:text-brand-600 border border-slate-200 transition-all hover:-translate-y-0.5"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/siddhinanaware"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 border border-slate-200 transition-all hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="mailto:siddhinanaware3541@gmail.com"
                  aria-label="Email Siddhi"
                  className="p-2.5 rounded-lg text-slate-600 bg-slate-100 hover:bg-red-50 hover:text-red-600 border border-slate-200 transition-all hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Profile Photo Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative soft border */}
              <div className="p-3 bg-white rounded-3xl shadow-card border border-slate-200/80 transition-all duration-300 hover:shadow-card-hover">
                <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/5] shadow-inner">
                  <img
                    src="/profile.jpg"
                    alt="Siddhi Rameshwar Nanaware"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    loading="eager"
                  />
                  
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />
                  
                  {/* Overlay Name on mobile / subtle bottom badge */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-sm font-semibold tracking-wide drop-shadow-sm">Siddhi Nanaware</p>
                    <p className="text-xs text-blue-200 drop-shadow-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> Pune, Maharashtra
                    </p>
                  </div>
                </div>

                {/* Floating Academic Badge */}
                <div className="absolute -bottom-4 -left-3 sm:-left-4 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl px-4 py-2.5 shadow-md flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-brand-600 flex items-center justify-center font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">First Year CGPA</p>
                    <p className="text-base font-bold text-slate-900 leading-tight">8.7 / 10.0</p>
                  </div>
                </div>

                {/* Floating Hackathon & Project Tag */}
                <div className="absolute -top-3 -right-2 sm:-right-3 bg-slate-900 text-white border border-slate-700/80 rounded-xl px-3 py-1.5 shadow-md flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-xs font-semibold tracking-wide">5+ Projects Built</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
