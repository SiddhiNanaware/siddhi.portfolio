import React from 'react';
import { Award, Trophy, Code2, Users, BookMarked, CheckCircle2, Sparkles } from 'lucide-react';

export default function Achievements() {
  const sections = [
    {
      category: "Hackathon Participation",
      icon: <Trophy className="w-5 h-5 text-amber-500" />,
      items: [
        {
          title: "Smart Innovation Hackathon 2026",
          team: "Team MahaMinds",
          role: "Core Developer & Problem Solver",
          description: "Contributed to building DnyanexAI, an intelligent project handover platform designed to eliminate institutional context loss and automate evidence-backed claim verification."
        },
        {
          title: "City Innovation & Smart Navigation Hackathons",
          team: "Collaborative Student Team",
          role: "Frontend & Logic Developer",
          description: "Conceptualized and built CT Maps and City Life platforms focused on simplifying urban navigation, local discovery, and transit information for citizens."
        }
      ]
    },
    {
      category: "Technical Projects & Engineering Practice",
      icon: <Code2 className="w-5 h-5 text-brand-600" />,
      items: [
        {
          title: "5+ Practical Full-Stack & Systems Projects",
          team: "Academic & Personal Portfolio",
          role: "Independent & Collaborative Builder",
          description: "Engineered real-world applications including the Loan Eligibility Checker, CampusAI management system, and algorithmic exercises in C/C++."
        },
        {
          title: "Continuous Git & GitHub Collaboration",
          team: "Open Practice",
          role: "Developer",
          description: "Regularly commits, maintains structured repositories, documents code architectures, and follows standard engineering workflows."
        }
      ]
    },
    {
      category: "Workshops, Bootcamps & Academic Milestones",
      icon: <BookMarked className="w-5 h-5 text-emerald-600" />,
      items: [
        {
          title: "First Year Academic Distinction (8.7 CGPA)",
          team: "Dr. D. Y. Patil College of Engineering & Innovation",
          role: "Undergraduate Student",
          description: "Achieved an 8.7 CGPA across First Year Engineering, maintaining high discipline in core programming and engineering mathematics."
        },
        {
          title: "Technical Workshops on Programming & Web Development",
          team: "Department & Technical Clubs",
          role: "Active Participant",
          description: "Attended college-level technical seminars and hands-on workshops covering C/C++ fundamentals, object-oriented principles, and modern web application basics."
        }
      ]
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold tracking-wide">
            <Award className="w-3.5 h-3.5 text-brand-600" />
            <span>MILESTONES &amp; ACTIVITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Achievements &amp; Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Verified academic accomplishments, hackathon contributions, and technical training.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className="bg-[#fafafb] rounded-3xl p-7 border border-slate-200/80 shadow-subtle hover:border-brand-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-200">
                  <div className="p-2.5 rounded-xl bg-white shadow-xs border border-slate-200/60">
                    {sec.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {sec.category}
                  </h3>
                </div>

                {/* Items */}
                <div className="space-y-6">
                  {sec.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="space-y-1.5">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-base font-bold text-slate-900 leading-tight">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs font-semibold text-brand-700">
                        {item.team} • {item.role}
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed pt-1">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Badge */}
              <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Verified Record
                </span>
                <span className="text-[11px] text-slate-400">Editable Section</span>
              </div>

            </div>
          ))}
        </div>

        {/* Future Goals Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-blue-50/70 border border-blue-200/70 text-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <Sparkles className="w-5 h-5 text-brand-600 shrink-0 hidden sm:block" />
            <div>
              <p className="text-sm font-bold text-slate-900">
                Actively seeking hackathons &amp; tech collaborations
              </p>
              <p className="text-xs text-slate-600">
                Interested in software development internships, coding competitions, and open-source contributions.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-brand-600 transition-colors shrink-0"
          >
            Connect With Me
          </a>
        </div>

      </div>
    </section>
  );
}
