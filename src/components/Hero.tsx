import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-container">
          
          {/* Left Column: Intro */}
          <div className="hero-left animate-fade-up">
            <h1 className="heading-xl">
              Hi, I'm <br/>
              <span className="text-gradient">Nagendra</span>
            </h1>
            <h2 className="role-title">Software Engineer & DBA</h2>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View Portfolio
              </a>
            </div>
          </div>

          {/* Center Column: Hexagon Profile */}
          <div className="hero-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="hexagon-wrapper">
              <div className="hexagon-border"></div>
              <div className="hexagon-image">
                <img src="/nagendra.jpeg" alt="Nagendra Sutliya" />
              </div>
            </div>
          </div>

          {/* Right Column: Bio and Links */}
          <div className="hero-right animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="bio-section">
              <h3 className="section-label">ABOUT ME</h3>
              <p className="text-lead">
                Software Engineer at Sunfocus Solutions working on business intelligence & analytics. 7+ years of experience in database design, complex SQL, and performance tuning. Currently expanding into robust Full-Stack Development.
              </p>
              <a href="#about" className="learn-more">Learn More &rarr;</a>
            </div>

            <div className="social-section mt-2">
              <h3 className="section-label">FOLLOW ME</h3>
              <div className="social-links">
                <a href="https://github.com/NagendraSutliya" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub size={20}/></a>
                <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin size={20}/></a>
                <a href="#" target="_blank" rel="noreferrer" aria-label="Twitter"><FiTwitter size={20}/></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
