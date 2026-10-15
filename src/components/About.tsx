import React from 'react';
import { FiCode, FiLayout, FiDatabase } from 'react-icons/fi';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-3">About Me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          
          {/* Main Bio Panel */}
          <div className="lg:col-span-3 lg:row-span-2 justify-center bg-white/[0.02] border border-white/[0.08] rounded-2xl p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:border-[#00f2fe]/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,242,254,0.1)] flex flex-col relative overflow-hidden animate-fade-up">
            <h3 className="text-2xl font-bold text-white mb-4">Detail-Oriented Engineering</h3>
            <p className="text-[#9ca3af] text-base md:text-lg leading-relaxed">
              I am an enthusiastic professional highly proficient in database management and full-stack development. 
              My core strength lies in SQL (DML &amp; DDL), schema design, complex query optimization, and performance tuning for massive datasets. 
              <br/><br/>
              Beyond the database, I build responsive, modern UI/UX applications using React.js and Tailwind CSS, and leverage Python and PySpark for large-scale data analysis and visualization. Known for strong analytical and debugging skills, I thrive in collaborative environments and am driven by a passion for continuous learning.
            </p>
          </div>

          {/* Stat Panel 1 */}
          <div 
            className="lg:col-span-1 justify-center items-center text-center bg-gradient-to-br from-[#00f2fe]/10 to-[#7b2cbf]/10 border border-white/[0.08] rounded-2xl p-7 backdrop-blur-md transition-all duration-300 hover:border-[#00f2fe]/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,242,254,0.1)] flex flex-col animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="text-5xl font-extrabold leading-none mb-2 bg-gradient-to-r from-[#00f2fe] to-[#7b2cbf] bg-clip-text text-transparent">7+</div>
            <div className="text-xs uppercase tracking-widest text-[#9ca3af]">Years of<br/>Experience</div>
          </div>

          {/* Stat Panel 2 */}
          <div 
            className="lg:col-span-1 justify-center items-center text-center bg-gradient-to-br from-[#7b2cbf]/10 to-[#00f2fe]/10 border border-white/[0.08] rounded-2xl p-7 backdrop-blur-md transition-all duration-300 hover:border-[#00f2fe]/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,242,254,0.1)] flex flex-col animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="text-5xl font-extrabold leading-none mb-2 bg-gradient-to-r from-[#7b2cbf] to-[#00f2fe] bg-clip-text text-transparent">15+</div>
            <div className="text-xs uppercase tracking-widest text-[#9ca3af]">Technologies<br/>Mastered</div>
          </div>

          {/* Database & Data Panel */}
          <div 
            className="lg:col-span-2 bg-white/[0.02] border border-white/[0.08] rounded-2xl p-7 backdrop-blur-md transition-all duration-300 hover:border-[#00f2fe]/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,242,254,0.1)] flex flex-col animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <FiDatabase className="text-[#00f2fe]" /> Data &amp; Analytics
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {['MySQL', 'PostgreSQL', 'SQL', 'MongoDB', 'Python', 'PySpark', 'Pandas', 'Apache Superset'].map((tech) => (
                <span key={tech} className="bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-full text-xs font-medium text-[#9ca3af] hover:text-white hover:border-[#00f2fe] hover:bg-[#00f2fe]/15 hover:-translate-y-0.5 transition-all duration-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend Panel */}
          <div 
            className="lg:col-span-2 bg-white/[0.02] border border-white/[0.08] rounded-2xl p-7 backdrop-blur-md transition-all duration-300 hover:border-[#00f2fe]/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,242,254,0.1)] flex flex-col animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <FiLayout className="text-[#00f2fe]" /> Web &amp; Frontend
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {['React.js', 'Tailwind CSS', 'JavaScript', 'Node.js', 'GraphQL', 'HTML5', 'CSS3', 'Bootstrap'].map((tech) => (
                <span key={tech} className="bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-full text-xs font-medium text-[#9ca3af] hover:text-white hover:border-[#00f2fe] hover:bg-[#00f2fe]/15 hover:-translate-y-0.5 transition-all duration-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tools Panel */}
          <div 
            className="lg:col-span-4 bg-white/[0.02] border border-white/[0.08] rounded-2xl p-7 backdrop-blur-md transition-all duration-300 hover:border-[#00f2fe]/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,242,254,0.1)] flex flex-col animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <FiCode className="text-[#00f2fe]" /> Engineering Tools &amp; OS
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {['Git & GitHub', 'Linux', 'MacBook', 'MySQL Workbench', 'dbForge Studio', 'Postman', 'PyCharm'].map((tech) => (
                <span key={tech} className="bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-full text-xs font-medium text-[#9ca3af] hover:text-white hover:border-[#00f2fe] hover:bg-[#00f2fe]/15 hover:-translate-y-0.5 transition-all duration-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
