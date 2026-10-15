import React from 'react';
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[radial-gradient(circle,rgba(123,44,191,0.15)_0%,transparent_70%)] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column */}
        <div className="flex flex-col gap-6 animate-fade-up">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3">
              Let's Work <span className="bg-gradient-to-r from-[#00f2fe] to-[#7b2cbf] bg-clip-text text-transparent">Together</span>
            </h2>
            <p className="text-base sm:text-lg text-[#9ca3af] leading-relaxed">
              I am currently open to new opportunities. Whether you have a project, a question, or just want to connect, my inbox is always open!
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <a href="mailto:nagendrasutliya@gmail.com" className="flex items-center gap-5 p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md hover:translate-x-2 hover:border-[#00f2fe]/40 hover:bg-white/[0.05] transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#00f2fe]/10 flex items-center justify-center text-[#00f2fe] border border-[#00f2fe]/30">
                <FiMail size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-[#9ca3af] mb-0.5">Email Me At</span>
                <span className="text-base font-semibold text-white">nagendrasutliya@gmail.com</span>
              </div>
            </a>
            
            <div className="flex items-center gap-5 p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md">
              <div className="w-12 h-12 rounded-full bg-[#00f2fe]/10 flex items-center justify-center text-[#00f2fe] border border-[#00f2fe]/30">
                <FiMapPin size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-[#9ca3af] mb-0.5">Location</span>
                <span className="text-base font-semibold text-white">Remote / Jaipur, India</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-2">
              <a 
                href="https://github.com/NagendraSutliya" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/[0.02] border border-white/[0.08] backdrop-blur-md text-white text-sm font-medium hover:-translate-y-0.5 hover:border-[#7b2cbf] hover:shadow-[0_5px_15px_rgba(123,44,191,0.3)] hover:text-[#00f2fe] transition-all duration-200"
              >
                <FiGithub size={18} /> GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/nagendra-kumar-sutliya/" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/[0.02] border border-white/[0.08] backdrop-blur-md text-white text-sm font-medium hover:-translate-y-0.5 hover:border-[#7b2cbf] hover:shadow-[0_5px_15px_rgba(123,44,191,0.3)] hover:text-[#00f2fe] transition-all duration-200"
              >
                <FiLinkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <form 
          className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-7 sm:p-9 backdrop-blur-md flex flex-col gap-4.5 shadow-2xl animate-fade-up" 
          style={{ animationDelay: '0.2s' }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you! Your message has been sent.");
          }}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="v1-name" className="text-xs font-medium text-[#9ca3af]">Name</label>
            <input 
              type="text" 
              id="v1-name" 
              placeholder="John Doe" 
              required 
              className="w-full px-4 py-3 rounded-lg bg-white/[0.02] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-[#00f2fe] focus:bg-[#00f2fe]/5 focus:ring-2 focus:ring-[#00f2fe]/20 transition-all duration-200"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="v1-email" className="text-xs font-medium text-[#9ca3af]">Email</label>
            <input 
              type="email" 
              id="v1-email" 
              placeholder="john@example.com" 
              required 
              className="w-full px-4 py-3 rounded-lg bg-white/[0.02] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-[#00f2fe] focus:bg-[#00f2fe]/5 focus:ring-2 focus:ring-[#00f2fe]/20 transition-all duration-200"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="v1-message" className="text-xs font-medium text-[#9ca3af]">Message</label>
            <textarea 
              id="v1-message" 
              rows={5} 
              placeholder="Hello..." 
              required
              className="w-full px-4 py-3 rounded-lg bg-white/[0.02] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-[#00f2fe] focus:bg-[#00f2fe]/5 focus:ring-2 focus:ring-[#00f2fe]/20 transition-all duration-200 resize-y"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full mt-2 inline-flex items-center justify-center py-3.5 rounded-full font-semibold text-sm bg-gradient-to-r from-[#00f2fe] to-[#7b2cbf] text-white shadow-[0_4px_15px_rgba(0,242,254,0.3)] hover:shadow-[0_8px_25px_rgba(123,44,191,0.5)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
