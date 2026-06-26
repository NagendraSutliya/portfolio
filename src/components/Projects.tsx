
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

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

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header text-center animate-fade-up">
          <h2 className="heading-lg">Featured Projects</h2>
          <p className="text-lead" style={{ margin: '0 auto 3rem auto' }}>
            Some of the recent work I've done.
          </p>
        </div>

        <div className="projects-bento-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`glass-panel project-card animate-fade-up ${index % 3 === 0 ? 'project-featured' : ''}`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer"><FiGithub size={20}/></a>
                    <a href={project.live} target="_blank" rel="noreferrer"><FiExternalLink size={20}/></a>
                  </div>
                </div>
                <p className="text-secondary project-desc">{project.description}</p>
                <div className="tech-tags-flex project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
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

export default Projects;
