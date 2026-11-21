import React from 'react';
import { User, Code2, Rocket, Lightbulb, Compass, HeartHandshake } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Code2 className="w-5 h-5 text-brand-600" />,
      title: "Strong Technical Core",
      description: "Solid conceptual base in C and C++, understanding object-oriented design, algorithms, and systematic problem solving."
    },
    {
      icon: <Rocket className="w-5 h-5 text-brand-600" />,
      title: "Hands-on Project Builder",
      description: "Believes in learning by doing — from financial calculators to city exploration platforms and hackathon AI prototypes."
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-brand-600" />,
      title: "Exploring Full-Stack Web",
      description: "Actively mastering frontend and backend web architecture, modern React interfaces, and clean RESTful API integration."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-brand-600" />,
      title: "Teamwork & Hackathons",
      description: "Thrives in fast-paced hackathon environments, collaborating with peers to brainstorm and execute practical software solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white border-t border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold tracking-wide">
            <User className="w-3.5 h-3.5 text-brand-600" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About My Journey &amp; Passion
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A grounded approach to learning technology, writing clean software, and solving real-world challenges.
          </p>
        </div>

        {/* Narrative & Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Detailed Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p>
              I am currently in my second year pursuing a <strong className="text-slate-900 font-semibold">Bachelor of Engineering in Computer Engineering</strong> at <strong className="text-slate-900 font-semibold">Dr. D. Y. Patil College of Engineering &amp; Innovation</strong>, Pune. My interest in technology began with a curiosity about how software systems translate logical instructions into tangible tools that help people everyday.
            </p>

            <p>
              Throughout my first year—where I maintained an academic record of <strong className="text-slate-900 font-semibold">8.7 CGPA</strong>—I dedicated myself to understanding fundamental programming principles. I focused intensively on <strong className="text-slate-900 font-semibold">C and C++ programming</strong>, developing a disciplined grasp of memory management, data structures, and procedural as well as object-oriented paradigms.
            </p>

            <p>
              Today, I am actively expanding my skillset into <strong className="text-slate-900 font-semibold">Full Stack Web Development</strong>. I enjoy turning abstract concepts into functional web applications with responsive user interfaces, structured components, and intuitive interactions. 
            </p>

            <p>
              Beyond the classroom, I am deeply enthusiastic about participating in hackathons and building innovative collaborative projects like <span className="text-brand-700 font-medium">DnyanexAI</span>, <span className="text-brand-700 font-medium">CT Maps</span>, and <span className="text-brand-700 font-medium">City Life</span>. I strongly believe that consistent practice, curiosity to learn new technologies, and a healthy balance of hard work and smart work are the keys to becoming a capable software engineer.
            </p>

            {/* Quote / Philosophy Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border-l-4 border-brand-500 text-slate-800 text-sm sm:text-base font-medium italic mt-6">
              "Continuous learning is not just about adopting new tools; it is about building the discipline to understand problems thoroughly and crafting solutions that make a meaningful difference."
            </div>
          </div>

          {/* Quick Pillars (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#fafafb] border border-slate-200/80 hover:border-brand-300 hover:shadow-subtle transition-all duration-200 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-200">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-900 text-base">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
