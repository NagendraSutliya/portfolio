import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "datacube.ai",
      description: "A business intelligence and analytics platform enabling organizations to consolidate data, track KPIs, and generate real-time actionable insights. Optimized complex SQL queries and stored procedures.",
      tech: ["MySQL", "SQL", "Performance Tuning"],
      github: "#",
      live: "#"
    },
    {
      title: "Ad Leverage",
      description: "Digital marketing platform managing high-volume customer, campaign, and transaction data. Designed robust MySQL schemas and implemented heavy indexing strategies.",
      tech: ["MySQL", "Database Design"],
      github: "#",
      live: "#"
    },
    {
      title: "Cimet",
      description: "Energy comparison platform managing consumer, vendor, and transaction data. Automated data migration scripts and conducted large-scale database optimization.",
      tech: ["MySQL", "Data Migration"],
      github: "#",
      live: "#"
    },
    {
      title: "MySocially",
      description: "Social engagement platform managing user profiles and data flows. Designed system architecture (ER/DFD) and built optimized triggers and functions for reliable data processing.",
      tech: ["MySQL", "System Architecture"],
      github: "#",
      live: "#"
    },
    {
      title: "EkStep-Diksha",
      description: "Telemetry analysis engine measuring user interactions to categorize data for insights. Conducted daily funnel analysis and implemented validation scripts.",
      tech: ["PySpark", "Linux", "Shell Scripting"],
      github: "#",
      live: "#"
    },
    {
      title: "Full-Stack Web App (POC)",
      description: "A highly scalable full-stack proof-of-concept web application built with a modern frontend and a GraphQL backend integration.",
      tech: ["React.js", "Tailwind CSS", "GraphQL", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      title: "crmdost.com",
      description: "A responsive business Customer Relationship Management (CRM) website. Designed with reusable components and interactive features.",
      tech: ["React.js", "Tailwind CSS"],
      github: "https://github.com/NagendraSutliya/crmdost-website",
      live: "https://crmdost.com"
    },
    {
      title: "guruConnect",
      description: "A full-stack MERN platform for educational management. Features secure role-based teacher portals, Cloudinary image pipelines, and a global toast notification architecture.",
      tech: ["MongoDB", "Express", "React", "Node.js", "TypeScript"],
      github: "https://github.com/NagendraSutliya/guruConnect",
      live: "https://guru-connect.vercel.app"
    },
    {
      title: "Gyansthali School Website",
      description: "A modern educational platform featuring online admissions and a custom CMS setup assistant with real-time completion tracking and intelligent UI progress generation.",
      tech: ["React", "TypeScript", "Node.js", "Vercel"],
      github: "https://github.com/NagendraSutliya/school-website",
      live: "https://gyansthali-website.vercel.app"
    }
  ];

  const handleCardClick = (live: string, github: string) => {
    if (live && live !== "#") {
      window.open(live, "_blank", "noreferrer");
    } else if (github && github !== "#") {
      window.open(github, "_blank", "noreferrer");
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-3">Featured Projects</h2>
          <p className="text-base md:text-lg text-[#9ca3af] max-w-2xl mx-auto">
            Some of the recent work I've done.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const isFeatured = index % 3 === 0;
            return (
              <div 
                key={index} 
                className={`flex flex-col h-full p-7 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md transition-all duration-300 hover:border-[#00f2fe]/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,242,254,0.15)] relative overflow-hidden cursor-pointer group animate-fade-up ${
                  isFeatured ? 'md:col-span-2' : ''
                }`}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                onClick={() => handleCardClick(project.live, project.github)}
              >
                {/* Glow circle */}
                <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#7b2cbf]/20 transition-all duration-500 group-hover:bg-[#00f2fe]/30 group-hover:scale-125 pointer-events-none"></div>

                <div className="flex justify-between items-start gap-4 mb-4 relative z-10">
                  <h3 className={`font-bold transition-colors ${isFeatured ? 'text-2xl text-[#00f2fe]' : 'text-xl text-white'}`}>
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-[#9ca3af] text-lg">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-[#00f2fe] transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <FiGithub />
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noreferrer" 
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-[#00f2fe] transition-colors"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>

                <p className="text-[#9ca3af] text-sm sm:text-base leading-relaxed flex-grow mb-6 relative z-10">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-white/[0.03] border border-white/[0.08] px-3 py-1 rounded-full text-xs text-[#9ca3af]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
