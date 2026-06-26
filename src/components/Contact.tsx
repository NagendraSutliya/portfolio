
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section relative-section">
      <div className="contact-glow-bg"></div>
      <div className="container contact-container">
        <div className="contact-content animate-fade-up">
          <h2 className="heading-lg" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Let's Work <span className="text-gradient">Together</span></h2>
          <p className="text-lead" style={{ marginBottom: '3rem' }}>
            I am currently open to new opportunities. Whether you have a project, a question, or just want to connect, my inbox is always open!
          </p>
          
          <div className="contact-tiles">
            <a href="mailto:hello@nagendra.com" className="contact-tile glass-panel">
              <div className="tile-icon"><FiMail size={24} /></div>
              <div className="tile-info">
                <span className="tile-label">Email Me At</span>
                <span className="tile-value">hello@nagendra.com</span>
              </div>
            </a>
            
            <div className="contact-tile glass-panel">
              <div className="tile-icon"><FiMapPin size={24} /></div>
              <div className="tile-info">
                <span className="tile-label">Location</span>
                <span className="tile-value">Remote / India</span>
              </div>
            </div>
            
            <div className="contact-socials mt-2">
              <a href="https://github.com/NagendraSutliya" target="_blank" rel="noreferrer" className="social-pill glass-panel"><FiGithub size={20} /> GitHub</a>
              <a href="#" target="_blank" rel="noreferrer" className="social-pill glass-panel"><FiLinkedin size={20} /> LinkedIn</a>
            </div>
          </div>
        </div>

        <form className="glass-panel contact-form animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="John Doe" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="john@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={5} placeholder="Hello..." required></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
