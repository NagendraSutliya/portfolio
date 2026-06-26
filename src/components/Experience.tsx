import './Experience.css';

const Experience = () => {
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
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header text-center animate-fade-up">
          <h2 className="heading-lg">Professional Experience</h2>
          <p className="text-lead" style={{ margin: '0 auto' }}>
            7+ years of building robust databases, scalable software, and high-performance analytics pipelines.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="timeline-item animate-fade-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <div className="timeline-header">
                  <h3>{exp.role}</h3>
                  <span className="timeline-duration">{exp.duration}</span>
                </div>
                <h4 className="timeline-company">{exp.company} <span style={{ opacity: 0.6, fontSize: '0.9em' }}>• {exp.location}</span></h4>
                <p className="text-secondary mt-2 mb-3">{exp.description}</p>
                <div className="tech-tags-flex" style={{ marginTop: '1rem' }}>
                  {exp.tech.map((t, i) => (
                    <span key={i}>{t}</span>
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
