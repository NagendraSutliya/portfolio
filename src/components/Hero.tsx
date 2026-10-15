import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-28 pb-16 flex items-center relative">
      <div className="max-w-[1200px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] gap-12 items-center text-center lg:text-left">
          
          {/* Left Column: Intro */}
          <div className="flex flex-col justify-center items-center lg:items-start animate-fade-up">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              Hi, I'm <br/>
              <span className="bg-gradient-to-r from-[#00f2fe] to-[#7b2cbf] bg-clip-text text-transparent">Nagendra</span>
            </h1>
            <h2 className="text-lg font-medium tracking-wider text-[#00f2fe] uppercase mt-2 mb-6">
              Software Engineer &amp; DBA
            </h2>
            <div className="flex justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-7 py-3 rounded-full font-semibold text-sm bg-gradient-to-r from-[#00f2fe] to-[#7b2cbf] text-white shadow-[0_4px_15px_rgba(0,242,254,0.3)] hover:shadow-[0_8px_25px_rgba(123,44,191,0.5)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                View Portfolio
              </a>
            </div>
          </div>

          {/* Center Column: Hexagon Profile */}
          <div className="flex justify-center items-center relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="hexagon-wrapper">
              
              {/* Outer Hexagon border */}
              <div className="hexagon-border"></div>
              
              {/* Inner Hexagon with Image */}
              <div className="hexagon-image">
                <img 
                  src="/nagendra.jpeg" 
                  alt="Nagendra Sutliya" 
                />
              </div>

            </div>
          </div>

          {/* Right Column: Bio and Links */}
          <div className="flex flex-col gap-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-xs font-semibold text-white tracking-widest uppercase mb-3 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-1/2 lg:after:left-0 after:-translate-x-1/2 lg:after:translate-x-0 after:w-5 after:h-0.5 after:bg-[#00f2fe]">
                ABOUT ME
              </h3>
              <p className="text-base text-[#9ca3af] leading-relaxed">
                Software Engineer at Sunfocus Solutions working on business intelligence &amp; analytics. 7+ years of experience in database design, complex SQL, and performance tuning. Currently expanding into robust Full-Stack Development.
              </p>
              <a href="#about" className="inline-block mt-3 text-sm font-semibold text-white hover:text-[#00f2fe] transition-colors">
                Learn More &rarr;
              </a>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-xs font-semibold text-white tracking-widest uppercase mb-3 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-1/2 lg:after:left-0 after:-translate-x-1/2 lg:after:translate-x-0 after:w-5 after:h-0.5 after:bg-[#00f2fe]">
                FOLLOW ME
              </h3>
              <div className="flex gap-3 justify-center lg:justify-start mt-2">
                <a 
                  href="https://github.com/NagendraSutliya" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="GitHub"
                  className="w-11 h-11 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#9ca3af] hover:text-[#00f2fe] hover:border-[#00f2fe] hover:bg-[#00f2fe]/10 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <FiGithub size={20}/>
                </a>
                <a 
                  href="https://www.linkedin.com/in/nagendra-kumar-sutliya/" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#9ca3af] hover:text-[#00f2fe] hover:border-[#00f2fe] hover:bg-[#00f2fe]/10 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <FiLinkedin size={20}/>
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="Twitter"
                  className="w-11 h-11 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#9ca3af] hover:text-[#00f2fe] hover:border-[#00f2fe] hover:bg-[#00f2fe]/10 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <FiTwitter size={20}/>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
