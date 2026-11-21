import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Check, Copy, ExternalLink, MessageSquare, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailAddress = "siddhinanaware3541@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate immediate smooth feedback
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleMailtoDirect = () => {
    const subject = encodeURIComponent(formData.subject || "Portfolio Inquiry - Siddhi Nanaware");
    const body = encodeURIComponent(
      `Hi Siddhi,\n\nMy Name: ${formData.name}\nMy Email: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold tracking-wide">
            <MessageSquare className="w-3.5 h-3.5 text-brand-600" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Feel free to reach out for hackathon collaborations, technical projects, or academic discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-slate-900">
                Contact Information
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                I am always open to discussing new technology, software projects, or opportunities to learn and collaborate with fellow developers.
              </p>
            </div>

            {/* Email Card with Copy button */}
            <div className="p-5 rounded-2xl bg-[#fafafb] border border-slate-200/80 hover:border-brand-300 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-50 text-brand-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Address</p>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-sm sm:text-base font-bold text-slate-900 hover:text-brand-600 transition-colors break-all"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  title="Copy email address"
                  className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-brand-600 hover:bg-slate-50 transition-colors shrink-0"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <p className="text-xs text-emerald-600 font-semibold mt-2 text-right animate-fadeIn">
                  ✓ Copied to clipboard!
                </p>
              )}
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/siddhi-nanaware"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#fafafb] border border-slate-200/80 hover:border-brand-300 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">LinkedIn</p>
                  <p className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                    linkedin.com/in/siddhi-nanaware
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-brand-600 transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/siddhinanaware"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#fafafb] border border-slate-200/80 hover:border-brand-300 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-slate-100 text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">GitHub</p>
                  <p className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                    github.com/siddhinanaware
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
            </a>

            {/* Location card */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3 text-xs text-slate-600">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
              <span>Pune, Maharashtra, India • Dr. D. Y. Patil College of Engg. &amp; Innovation</span>
            </div>

          </div>

          {/* Right Column: Clean Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#fafafb] rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-subtle">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Fill out the form below to initiate an email message directly to my inbox.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-white border border-emerald-200 text-center space-y-4 shadow-sm animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Message Prepared!</h4>
                  <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-800">{formData.name}</strong>. Click below to launch your default email client with your message details, or send directly to <span className="font-semibold">{emailAddress}</span>.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleMailtoDirect}
                    type="button"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 text-white text-xs sm:text-sm font-semibold hover:bg-brand-700 transition-colors shadow-sm"
                  >
                    <Mail className="w-4 h-4" />
                    Open in Mail Client
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    type="button"
                    className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-200 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Hackathon Team Collaboration / Project Inquiry"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your note, feedback, or collaboration idea here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-brand-600 transition-all duration-200 shadow-sm hover:shadow"
                  >
                    {loading ? (
                      <span>Preparing...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center sm:text-right">
                    Zero spam. Message goes directly to Siddhi.
                  </p>
                </div>
              </form>
            )}

            {/* Note on configuration */}
            <div className="mt-6 pt-4 border-t border-slate-200/70 text-[11px] text-slate-500 leading-normal">
              <span className="font-semibold text-slate-700">Developer Note:</span> For 100% serverless static form deliveries without email client popups, you can also connect a free <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline">Web3Forms</a> or <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline">Formspree</a> access key.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
