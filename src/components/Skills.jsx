import React from 'react';
import { Code2, Globe, Wrench, CheckCircle, Sparkles, BookOpen } from 'lucide-react';

export default function Skills() {
  const coreLanguages = [
    {
      name: "C Programming",
      level: "Core Foundation",
      tag: "Proficient",
      description: "Structured programming, pointers, dynamic memory allocation, file handling, and algorithmic problem solving."
    },
    {
      name: "C++ Programming",
      level: "Core Foundation",
      tag: "Proficient",
      description: "Object-Oriented Programming (Classes, Inheritance, Polymorphism, Encapsulation), STL data structures, and algorithmic logic."
    }
  ];

  const learningSkills = [
    {
      name: "React.js & Component Architecture",
      status: "Actively Learning",
      description: "Modern declarative UI development, component state, hooks, and responsive frontends."
    },
    {
      name: "JavaScript (ES6+)",
      status: "Actively Learning",
      description: "DOM manipulation, asynchronous JavaScript (Promises, async/await), arrow functions, and ES6 modules."
    },
    {
      name: "HTML5 & Modern CSS3 / Tailwind",
      status: "Actively Learning",
      description: "Semantic layouts, responsive flexbox & grid design, mobile-first styling with Tailwind CSS."
    },
    {
      name: "Full Stack Concepts & REST APIs",
      status: "Actively Learning",
      description: "API communication, JSON payloads, client-server integration, and backend routing concepts."
    }
  ];

  const devTools = [
    { name: "Git & GitHub", category: "Version Control" },
    { name: "VS Code", category: "IDE" },
    { name: "Vite", category: "Build Tool" },
    { name: "Command Line / Shell", category: "Environment" },
    { name: "Responsive UI Design", category: "UI/UX" },
  ];

  return (
    <section id="skills" className="py-20 bg-white border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold tracking-wide">
            <Code2 className="w-3.5 h-3.5 text-brand-600" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technical Skills &amp; Stack
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Clear distinction between existing foundational proficiencies and technologies currently in active learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Core Programming Languages (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-blue-50 text-brand-600">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Core Languages</h3>
                  <p className="text-xs text-slate-500">Established Foundation</p>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/60">
                Verified Skills
              </span>
            </div>

            <div className="space-y-4">
              {coreLanguages.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#fafafb] border border-slate-200/80 hover:border-brand-300 hover:shadow-subtle transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-slate-900">{skill.name}</h4>
                    <span className="px-2.5 py-0.5 rounded-md bg-slate-900 text-white text-xs font-semibold tracking-wide">
                      {skill.tag}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {skill.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-medium text-emerald-700">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Academic &amp; Practical Problem Solving</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Tools & Workflow Card */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-brand-400">
                <Wrench className="w-4 h-4" />
                <h4 className="text-sm font-bold uppercase tracking-wider">Developer Environment &amp; Tools</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {devTools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700/60 text-xs font-medium text-slate-200 hover:border-brand-400 hover:text-white transition-colors"
                  >
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Column 2: Full Stack Web Development - Currently Learning (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-amber-50 text-amber-600">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Full Stack Web Development</h3>
                  <p className="text-xs text-slate-500">Currently in Active Learning &amp; Hands-on Practice</p>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
                In Progress
              </span>
            </div>

            {/* Note box */}
            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/70 text-xs sm:text-sm text-amber-900 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong className="font-semibold">Honest Learning Journey:</strong> I am actively dedicating focused time each week to learn full-stack web architecture, implementing concepts immediately through hands-on hackathon projects and personal web applications.
              </span>
            </div>

            {/* Cards for learning topics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {learningSkills.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400 hover:shadow-subtle transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                      <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                        {item.status}
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-base leading-snug">
                      {item.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <span>Practical Application</span>
                    <span className="text-brand-600 font-medium">Projects &amp; Demos</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
