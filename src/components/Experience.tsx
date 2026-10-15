import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Sunfocus Solutions Pvt Ltd",
      location: "Mohali",
      role: "Software Engineer",
      duration: "Feb 2026 – Present",
      description: "Working on datacube.ai BI platform. Developing SQL queries for custom KPIs, optimizing complex queries, stored procedures, and performing advanced database performance tuning.",
      tech: ["MySQL", "SQL Tuning", "BI & Analytics"]
    },
    {
      company: "Wits Infotech Pvt Ltd",
      location: "Mohali",
      role: "Database Developer & Administrator",
      duration: "Feb 2023 – Jan 2026",
      description: "Managed high-volume customer data platforms (Ad Leverage, Cimet, MySocially). Designed robust MySQL schemas, executed complex data migrations across environments, and implemented heavy indexing strategies.",
      tech: ["MySQL", "Data Migration", "System Architecture"]
    },
    {
      company: "Tibil Solutions Pvt Ltd",
      location: "Bengaluru",
      role: "Software Engineer",
      duration: "Jan 2020 – Jan 2023",
      description: "Conducted telemetry analysis on the EkStep-Diksha project. Performed daily funnel analysis, retention tracking, and implemented data validation using PySpark and Linux shell scripting.",
      tech: ["PySpark", "Linux", "Data Analytics"]
    },
    {
      company: "Arya College of Engineering & IT",
      location: "Jaipur",
      role: "Assistant Professor",
      duration: "Jan 2016 – Dec 2019",
      description: "Taught core computer science fundamentals, guiding students in technical software projects and continuous learning methodologies.",
      tech: ["Computer Science", "Mentoring"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-3">Professional Experience</h2>
          <p className="text-base md:text-lg text-[#9ca3af] max-w-2xl mx-auto">
            7+ years of building robust databases, scalable software, and high-performance analytics pipelines.
          </p>
        </div>

        <div className="relative max-w-[800px] mx-auto mt-16 pl-6 sm:pl-8 before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[19px] before:w-[2px] before:bg-gradient-to-b before:from-[#00f2fe] before:via-[#7b2cbf] before:to-transparent before:shadow-[0_0_15px_rgba(0,242,254,0.5)]">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative pl-10 sm:pl-14 mb-12 animate-fade-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[13px] top-6 w-3.5 h-3.5 rounded-full bg-[#00f2fe] shadow-[0_0_10px_#00f2fe,0_0_20px_#00f2fe] z-[2]">
                <span className="absolute -inset-1 rounded-full border-2 border-[#00f2fe]/50 animate-ping"></span>
              </div>

              {/* Timeline Content */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md transition-all duration-300 hover:translate-x-2 hover:border-[#00f2fe]/40 hover:shadow-[-5px_5px_20px_rgba(0,242,254,0.1)]">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white m-0">{exp.role}</h3>
                  <span className="text-xs font-medium text-[#9ca3af] bg-white/[0.03] px-3 py-1 rounded-full border border-white/[0.08]">
                    {exp.duration}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-medium text-[#00f2fe] mb-3">
                  {exp.company} <span className="text-[#9ca3af] font-normal text-xs">&bull; {exp.location}</span>
                </h4>
                <p className="text-[#9ca3af] text-sm sm:text-base leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="bg-white/[0.03] border border-white/[0.08] px-3 py-1 rounded-full text-xs text-[#9ca3af]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
