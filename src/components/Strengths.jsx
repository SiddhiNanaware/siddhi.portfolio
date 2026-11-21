import React from 'react';
import { Zap, Briefcase, Brain, Heart, Search, Sparkles } from 'lucide-react';

export default function Strengths() {
  const strengths = [
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: "Quick Learner",
      description: "Rapidly comprehends novel programming concepts, frameworks, and engineering tools through self-directed study and practice."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
      title: "Hardworking",
      description: "Maintains strong work ethic and persistence when solving complex bugs, building projects, and meeting challenging deadlines."
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      title: "Smart Working",
      description: "Approaches problem-solving strategically by breaking big goals into manageable modules, researching best practices, and optimizing workflows."
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: "Dedicated & Consistent",
      description: "Shows up every day with steady discipline, taking ownership of tasks and striving for continuous incremental improvement."
    },
    {
      icon: <Search className="w-6 h-6 text-emerald-600" />,
      title: "Attention to Detail",
      description: "Ensures clean code formatting, edge-case testing, semantic UI alignment, and thorough verification of software specifications."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-brand-600" />,
      title: "Eager for New Technologies",
      description: "Possesses genuine curiosity to explore upcoming development stacks, artificial intelligence paradigms, and collaborative developer tools."
    }
  ];

  return (
    <section id="strengths" className="py-20 bg-[#fafafb] border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-700 text-xs font-semibold tracking-wide border border-blue-200/60">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PERSONAL ATTRIBUTES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Personal Strengths &amp; Work Ethic
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Core personal traits that drive my academic consistency and technical growth.
          </p>
        </div>

        {/* Strengths Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((s, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:shadow-card hover:border-brand-300 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-50/50 transition-all duration-200">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
