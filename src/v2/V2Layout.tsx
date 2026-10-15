import React, { useState } from 'react';
import type { V2View } from './types';
import V2Header from './components/V2Header';
import V2Hero from './components/V2Hero';
import V2TimelineBar from './components/V2TimelineBar';
import V2Experience from './components/V2Experience';
import V2Projects from './components/V2Projects';
import V2SkillsSchema from './components/V2SkillsSchema';
import V2TeachingCallout from './components/V2TeachingCallout';
import V2Education from './components/V2Education';
import V2Contact from './components/V2Contact';
import V2JourneyView from './components/V2JourneyView';
import V2CaseStudyView from './components/V2CaseStudyView';
import V2Footer from './components/V2Footer';

const V2Layout: React.FC = () => {
  const [currentView, setCurrentView] = useState<V2View>('overview');

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(`v2-${sectionId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-v2-bg text-v2-text-main font-body min-h-screen w-full relative overflow-x-hidden antialiased selection:bg-v2-accent selection:text-v2-bg">
      <V2Header 
        currentView={currentView} 
        setView={setCurrentView} 
        onNavigateSection={handleNavigateSection} 
      />

      <main>
        {currentView === 'overview' && (
          <>
            <V2Hero onNavigateSection={handleNavigateSection} />
            <V2TimelineBar />
            <V2Experience setView={setCurrentView} />
            <V2Projects setView={setCurrentView} />
            <V2SkillsSchema />
            <V2TeachingCallout />
            <V2Education />
            <V2Contact />
          </>
        )}

        {currentView === 'journey' && (
          <V2JourneyView 
            setView={setCurrentView} 
            onNavigateSection={handleNavigateSection} 
          />
        )}

        {currentView === 'case-study' && (
          <V2CaseStudyView 
            setView={setCurrentView} 
            onNavigateSection={handleNavigateSection} 
          />
        )}
      </main>

      <V2Footer />
    </div>
  );
};

export default V2Layout;
