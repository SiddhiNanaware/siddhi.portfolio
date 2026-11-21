import React, { useState } from 'react';
import { FolderGit2, Github, ExternalLink, Sparkles, MapPin, Calculator, BrainCircuit, School, Compass } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'loan-checker',
      title: "Loan Eligibility Checker",
      category: "web",
      categoryLabel: "Financial Web App",
      icon: <Calculator className="w-5 h-5 text-brand-600" />,
      description: "Developed a Loan Eligibility Checker that helps users understand their loan eligibility based on financial details and predefined eligibility criteria. It simplifies the initial loan assessment process and provides quick, user-friendly results with financial evaluations.",
      tags: ["JavaScript", "Full-Stack Logic", "Financial Calculations", "Responsive UI"],
      githubUrl: "https://github.com/siddhinanaware",
      featured: true,
      highlights: "Evaluates financial parameters, credit score ranges, and borrowing eligibility."
    },
    {
      id: 'dnyanex-ai',
      title: "DnyanexAI",
      category: "ai",
      categoryLabel: "AI Hackathon Project",
      icon: <BrainCircuit className="w-5 h-5 text-purple-600" />,
      description: "Worked on an AI-based hackathon project focused on exploring the potential of artificial intelligence to solve real-world problems through innovative and user-friendly solutions. Built for Smart Innovation Hackathon to assist project handover and institutional knowledge verification.",
      tags: ["Artificial Intelligence", "Python", "Hackathon Project", "Document Analysis"],
      githubUrl: "https://github.com/siddhinanaware",
      featured: true,
      highlights: "Transforms engineering documentation into verified, human-approved claims."
    },
    {
      id: 'ct-maps',
      title: "CT Maps",
      category: "maps",
      categoryLabel: "Navigation & Maps",
      icon: <Compass className="w-5 h-5 text-emerald-600" />,
      description: "Developed a map-based hackathon project focused on making city exploration and navigation easier by providing useful location-based information and helping users discover places around them in an intuitive interface.",
      tags: ["Geolocation", "Interactive Maps", "Hackathon Project", "Web Application"],
      githubUrl: "https://github.com/siddhinanaware",
      featured: false,
      highlights: "Simplifies local urban discovery and location-aware route navigation."
    },
    {
      id: 'city-life',
      title: "City Life – Smart City Exploration",
      category: "maps",
      categoryLabel: "Smart City Platform",
      icon: <MapPin className="w-5 h-5 text-amber-600" />,
      description: "Developed a smart city exploration platform that helps users discover local attractions, restaurants, hotels, and budget-friendly places. It also focuses on safety, traffic conditions, and smarter route exploration to improve the overall city experience.",
      tags: ["Smart City", "Urban Exploration", "UI/UX Design", "Route Planning"],
      githubUrl: "https://github.com/siddhinanaware",
      featured: true,
      highlights: "Covers local tourism, budget recommendations, and urban safety insights."
    },
    {
      id: 'campus-ai',
      title: "CampusAI – Smart Campus Management",
      category: "ai",
      categoryLabel: "Academic Full-Stack (Verified Files)",
      icon: <School className="w-5 h-5 text-indigo-600" />,
      description: "A full-stack campus management and academic assistant platform developed with a FastAPI backend and React frontend. Features attendance tracking, timetable management, academic roadmaps, and intelligent student support.",
      tags: ["FastAPI", "React", "Python", "Tailwind CSS", "SQLite"],
      githubUrl: "https://github.com/siddhinanaware",
      featured: false,
      isEditable: true,
      highlights: "Full-stack academic platform with student dashboards, insights, and AI assistance."
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-[#fafafb] border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-700 text-xs font-semibold tracking-wide border border-blue-200/60">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects &amp; Prototypes
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Practical software projects developed through coursework, hackathons, and independent learning.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { key: 'all', label: 'All Projects' },
            { key: 'web', label: 'Web & Full Stack' },
            { key: 'ai', label: 'AI & Hackathons' },
            { key: 'maps', label: 'Smart City & Maps' }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === tab.key
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-subtle hover:shadow-card hover:border-brand-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header: Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 group-hover:bg-blue-50 transition-colors">
                    {project.icon}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {project.featured && (
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-brand-700 text-[11px] font-bold border border-blue-200/60">
                        Featured
                      </span>
                    )}
                    <span className="text-xs font-semibold text-slate-500">
                      {project.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-snug mb-3">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key feature callout */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 mb-5 font-medium">
                  {project.highlights}
                </div>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-2 border-t border-slate-100">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center justify-between pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-brand-600 group/btn"
                  >
                    <Github className="w-4 h-4 text-slate-500 group-hover/btn:text-brand-600 transition-colors" />
                    <span>View Repository</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                    aria-label={`Open ${project.title} on GitHub`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* GitHub Note */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-slate-200/80 shadow-subtle max-w-2xl mx-auto">
          <p className="text-sm text-slate-600">
            More experimental repositories and coursework assignments are maintained on my GitHub profile.
          </p>
          <div className="mt-3">
            <a
              href="https://github.com/siddhinanaware"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-600 hover:text-brand-700 underline underline-offset-4"
            >
              <Github className="w-4 h-4" />
              Visit github.com/siddhinanaware
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
