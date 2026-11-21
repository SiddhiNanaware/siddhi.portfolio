import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const educationHistory = [
    {
      institution: "Dr. D. Y. Patil College of Engineering & Innovation",
      degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
      status: "Second Year (Currently Enrolled)",
      score: "First Year CGPA: 8.7 / 10.0",
      scoreHighlight: "8.7 CGPA",
      location: "Varale, Talegaon, Pune, Maharashtra",
      period: "2024 – 2028 (Expected)",
      details: [
        "Consistent academic excellence with an 8.7 CGPA in First Year Engineering.",
        "Core foundational studies: Data Structures & Algorithms, Object-Oriented Programming (C++), Computer Organization, Discrete Mathematics, and Software Engineering Basics.",
        "Active contributor to student technical initiatives, hackathons, and innovative collaborative projects."
      ]
    },
    {
      institution: "Sundarbai Marathe Vidyalaya",
      degree: "Secondary School Certificate (SSC)",
      status: "Completed with High Distinction",
      score: "Schooling Foundation",
      scoreHighlight: "SSC Board",
      location: "Kharadi, Pune - 411014",
      period: "Completed",
      details: [
        "Completed foundational secondary schooling with strong focus on Mathematics and Science.",
        "Cultivated early analytical skills, dedication to academics, and enthusiasm for computer science.",
        "Participated actively in science exhibitions, school academic competitions, and leadership activities."
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-[#fafafb]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-700 text-xs font-semibold tracking-wide border border-blue-200/60">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education &amp; Qualifications
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A solid academic track record built on continuous learning and consistent performance.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationHistory.map((edu, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-subtle hover:shadow-card hover:border-brand-300 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Banner Tag */}
              <div className="flex items-center justify-between gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-brand-600" />
                  {edu.period}
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/60">
                  <Award className="w-3.5 h-3.5 text-emerald-600" />
                  {edu.scoreHighlight}
                </span>
              </div>

              {/* Institution and Degree */}
              <div className="space-y-2 mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  {edu.institution}
                </h3>
                <p className="text-base font-semibold text-brand-700">
                  {edu.degree}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{edu.location}</span>
                </div>
              </div>

              {/* Key Highlights list */}
              <div className="pt-4 border-t border-slate-100 space-y-2.5">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Academic Focus &amp; Highlights:
                </p>
                {edu.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Bottom status badge */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium">{edu.status}</span>
                <span className="font-semibold text-slate-800">{edu.score}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
