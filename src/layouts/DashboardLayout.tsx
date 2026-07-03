import React, { useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { FiUser, FiCode, FiBriefcase, FiMail, FiMonitor } from 'react-icons/fi';
import './DashboardLayout.css';

type Tab = 'hero' | 'about' | 'experience' | 'projects' | 'contact';

const DashboardLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('hero');

  const renderContent = () => {
    switch (activeTab) {
      case 'hero': return <div className="dashboard-content-scroll"><Hero /></div>;
      case 'about': return <div className="dashboard-content-scroll"><About /></div>;
      case 'experience': return <div className="dashboard-content-scroll"><Experience /></div>;
      case 'projects': return <div className="dashboard-content-scroll"><Projects /></div>;
      case 'contact': return <div className="dashboard-content-scroll"><Contact /></div>;
      default: return null;
    }
  };

  return (
    <div className="dashboard-layout">
      {/* Sidebar Navigation */}
      <aside className="dashboard-sidebar">
        <div className="dashboard-logo text-gradient">Portfolio.</div>
        <nav className="dashboard-nav">
          <button className={`nav-item ${activeTab === 'hero' ? 'active' : ''}`} onClick={() => setActiveTab('hero')}>
            <FiMonitor size={20} /> <span>Home</span>
          </button>
          <button className={`nav-item ${activeTab === 'about' ? 'active' : ''}`} onClick={() => setActiveTab('about')}>
            <FiUser size={20} /> <span>About</span>
          </button>
          <button className={`nav-item ${activeTab === 'experience' ? 'active' : ''}`} onClick={() => setActiveTab('experience')}>
            <FiBriefcase size={20} /> <span>Experience</span>
          </button>
          <button className={`nav-item ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => setActiveTab('projects')}>
            <FiCode size={20} /> <span>Projects</span>
          </button>
          <button className={`nav-item ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => setActiveTab('contact')}>
            <FiMail size={20} /> <span>Contact</span>
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-main">
        <div className="dashboard-glass-panel">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
