import React, { useState } from 'react';
import { FiMenu, FiX, FiFileText } from 'react-icons/fi';
import type { V2View } from '../types';

interface V2HeaderProps {
  currentView: V2View;
  setView: (view: V2View) => void;
  onNavigateSection: (sectionId: string) => void;
}

const V2Header: React.FC<V2HeaderProps> = ({ currentView, setView, onNavigateSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (sectionId?: string, targetView?: V2View) => {
    setMobileMenuOpen(false);
    if (targetView) {
      setView(targetView);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId) {
      if (currentView !== 'overview') {
        setView('overview');
        setTimeout(() => {
          onNavigateSection(sectionId);
        }, 80);
      } else {
        onNavigateSection(sectionId);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0B1030]/90 backdrop-blur-md border-b border-v2-border transition-all">
      <div className="max-w-8xl mx-auto px-6 md:px-8 py-4 flex flex-wrap gap-4 items-center justify-between">
        <div 
          className="font-head font-semibold text-lg tracking-tight text-v2-text-main cursor-pointer hover:text-v2-accent transition-colors"
          onClick={() => {
            setView('overview');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          role="button"
          tabIndex={0}
        >
          nagendra<span className="text-v2-accent">.</span>sutliya
        </div>

        <button 
          className="md:hidden text-v2-text-main text-2xl p-1 bg-transparent border-0 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav 
          className={`${
            mobileMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row w-full md:w-auto gap-2 md:gap-1 items-start md:items-center pt-4 md:pt-0 border-t md:border-t-0 border-v2-border`}
          aria-label="Main Navigation"
        >
          <button 
            type="button"
            className="px-3.5 py-2 text-[15px] font-body text-v2-text-main hover:text-v2-accent rounded-lg transition-colors bg-transparent border-0 cursor-pointer"
            onClick={() => handleLinkClick('experience')}
          >
            Experience
          </button>
          <button 
            type="button"
            className={`px-3.5 py-2 text-[15px] font-body rounded-lg transition-colors bg-transparent border-0 cursor-pointer ${
              currentView === 'case-study' ? 'text-v2-accent font-medium' : 'text-v2-text-main hover:text-v2-accent'
            }`}
            onClick={() => handleLinkClick('projects')}
          >
            Projects
          </button>
          <button 
            type="button"
            className="px-3.5 py-2 text-[15px] font-body text-v2-text-main hover:text-v2-accent rounded-lg transition-colors bg-transparent border-0 cursor-pointer"
            onClick={() => handleLinkClick('skills')}
          >
            Skills
          </button>
          <button 
            type="button"
            className={`px-3.5 py-2 text-[15px] font-body rounded-lg transition-colors bg-transparent border-0 cursor-pointer ${
              currentView === 'journey' ? 'text-v2-accent font-medium' : 'text-v2-text-main hover:text-v2-accent'
            }`}
            onClick={() => handleLinkClick(undefined, 'journey')}
          >
            Journey
          </button>
          <button 
            type="button"
            className="mt-2 md:mt-0 md:ml-2 px-5 py-2 text-sm font-semibold border border-v2-accent text-v2-accent hover:bg-v2-accent hover:text-v2-bg rounded-full transition-all duration-200 cursor-pointer inline-flex items-center justify-center w-full md:w-auto hover:shadow-[0_0_15px_rgba(255,184,107,0.3)]"
            onClick={() => handleLinkClick('contact')}
          >
            <FiFileText className="mr-1.5 inline" />
            Download résumé
          </button>
        </nav>
      </div>
    </header>
  );
};

export default V2Header;
