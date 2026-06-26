
import { FiCode, FiLayout, FiDatabase } from 'react-icons/fi';
import './About.css';

const About: React.FC = () => {

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header text-center animate-fade-up">
          <h2 className="heading-lg">About Me</h2>
        </div>

        <div className="bento-grid">
          
          {/* Main Bio Panel */}
          <div className="bento-item bento-bio animate-fade-up">
            <h3>Detail-Oriented Engineering</h3>
            <p>
              I am an enthusiastic professional highly proficient in database management and full-stack development. 
              My core strength lies in SQL (DML & DDL), schema design, complex query optimization, and performance tuning for massive datasets. 
              <br/><br/>
              Beyond the database, I build responsive, modern UI/UX applications using React.js and Tailwind CSS, and leverage Python and PySpark for large-scale data analysis and visualization. Known for strong analytical and debugging skills, I thrive in collaborative environments and am driven by a passion for continuous learning.
            </p>
          </div>

          {/* Stat Panel */}
          <div className="bento-item bento-stat animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="stat-number text-gradient">7+</div>
            <div className="stat-label">Years of<br/>Experience</div>
          </div>

          {/* Stat Panel 2 */}
          <div className="bento-item bento-stat animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="stat-number text-gradient" style={{ background: 'linear-gradient(135deg, #7b2cbf, #00f2fe)', WebkitBackgroundClip: 'text' }}>15+</div>
            <div className="stat-label">Technologies<br/>Mastered</div>
          </div>

          {/* Database & Data Panel */}
          <div className="bento-item bento-db animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <h4><FiDatabase className="icon" /> Data & Analytics</h4>
            <div className="tech-tags-flex">
              <span>MySQL</span><span>PostgreSQL</span><span>SQL</span><span>MongoDB</span>
              <span>Python</span><span>PySpark</span><span>Pandas</span><span>Apache Superset</span>
            </div>
          </div>

          {/* Frontend Panel */}
          <div className="bento-item bento-front animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <h4><FiLayout className="icon" /> Web & Frontend</h4>
            <div className="tech-tags-flex">
              <span>React.js</span><span>Tailwind CSS</span><span>JavaScript</span><span>Node.js</span>
              <span>GraphQL</span><span>HTML5</span><span>CSS3</span><span>Bootstrap</span>
            </div>
          </div>

          {/* Tools Panel */}
          <div className="bento-item bento-tools animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <h4><FiCode className="icon" /> Engineering Tools & OS</h4>
            <div className="tech-tags-flex">
              <span>Git & GitHub</span><span>Linux</span><span>MacBook</span>
              <span>MySQL Workbench</span><span>dbForge Studio</span><span>Postman</span><span>PyCharm</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
