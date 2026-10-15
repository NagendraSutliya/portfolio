import React, { useState } from 'react';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiDownload, FiCheckCircle } from 'react-icons/fi';

const V2Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <section id="v2-contact" className="border-t border-v2-border py-20 md:py-28 bg-v2-grid bg-grid-56 bg-top">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <h2 className="font-head font-extrabold text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.08] tracking-[-0.035em] text-v2-text-main m-0">
              Have slow queries or messy data? Let's talk.
            </h2>

            <p className="m-0 text-v2-text-muted text-base md:text-lg leading-relaxed">
              Open to database, data-engineering and analytics roles. Based in Jaipur, happy to work remotely.
            </p>

            <div className="flex flex-col gap-2 font-mono text-base pt-1">
              <a href="mailto:nagendrasutliya@gmail.com" className="inline-flex items-center gap-3 py-1.5 text-v2-text-main hover:text-v2-accent transition-colors">
                <FiMail size={18} className="text-v2-accent" />
                <span>nagendrasutliya@gmail.com</span>
              </a>
              <a href="tel:+918741000303" className="inline-flex items-center gap-3 py-1.5 text-v2-text-main hover:text-v2-accent transition-colors">
                <FiPhone size={18} className="text-v2-accent" />
                <span>+91 87410 00303</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a 
                href="https://www.linkedin.com/in/nagendra-kumar-sutliya/" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-v2-border bg-v2-card text-v2-text-main hover:border-v2-accent hover:text-v2-accent text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
              >
                <FiLinkedin size={16} /> LinkedIn
              </a>
              <a 
                href="https://github.com/NagendraSutliya" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-v2-border bg-v2-card text-v2-text-main hover:border-v2-accent hover:text-v2-accent text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
              >
                <FiGithub size={16} /> GitHub
              </a>
              <a 
                href="#v2-contact" 
                onClick={(e) => {
                  e.preventDefault();
                  alert("Opening Nagendra's resume for download...");
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-v2-accent hover:bg-v2-accent-hover text-v2-bg text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-md hover:shadow-[0_4px_16px_rgba(255,184,107,0.3)]"
              >
                <FiDownload size={16} />
                Download résumé
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <form className="bg-v2-card border border-v2-border rounded-3xl p-7 sm:p-9 flex flex-col gap-5 shadow-2xl" onSubmit={handleSubmit}>
            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-[#6EE7B7]/10 border border-[#6EE7B7] text-[#6EE7B7] text-center flex flex-col items-center">
                <FiCheckCircle size={32} className="mb-2" />
                <p className="m-0 font-semibold text-lg">Message received!</p>
                <p className="m-0 mt-1 text-sm opacity-90">
                  Thank you for reaching out. I'll get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-full border border-v2-border bg-v2-card text-v2-text-main text-xs font-semibold hover:border-v2-accent hover:text-v2-accent transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <label className="flex flex-col gap-2 text-sm font-medium text-v2-text-main">
                  Your name
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-v2-border bg-v2-bg text-v2-text-main placeholder-v2-text-muted/60 focus:outline-none focus:border-v2-accent focus:ring-1 focus:ring-v2-accent text-sm md:text-[15px] transition-colors"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-v2-text-main">
                  Email
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-v2-border bg-v2-bg text-v2-text-main placeholder-v2-text-muted/60 focus:outline-none focus:border-v2-accent focus:ring-1 focus:ring-v2-accent text-sm md:text-[15px] transition-colors"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-v2-text-main">
                  What are you working on?
                  <textarea
                    rows={4}
                    placeholder="Tell me about your dataset, query bottlenecks, or role opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-v2-border bg-v2-bg text-v2-text-main placeholder-v2-text-muted/60 focus:outline-none focus:border-v2-accent focus:ring-1 focus:ring-v2-accent text-sm md:text-[15px] transition-colors resize-y"
                  ></textarea>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[50px] inline-flex items-center justify-center rounded-full bg-v2-accent hover:bg-v2-accent-hover text-v2-bg font-semibold text-sm md:text-[15px] border border-v2-accent transition-all duration-200 cursor-pointer shadow-md hover:shadow-[0_4px_16px_rgba(255,184,107,0.3)] disabled:opacity-60"
                >
                  {isSubmitting ? 'Sending...' : 'Send message'}
                </button>
              </>
            )}
          </form>

        </div>
      </div>
    </section>
  );
};

export default V2Contact;
