import React, { useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { FiUser, FiCode, FiBriefcase, FiMail, FiMonitor } from 'react-icons/fi';

type Tab = 'hero' | 'about' | 'experience' | 'projects' | 'contact';

const DashboardLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('hero');

  const renderContent = () => {
    switch (activeTab) {
      case 'hero': return <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-8 animate-fade-up"><Hero /></div>;
      case 'about': return <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-8 animate-fade-up"><About /></div>;
      case 'experience': return <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-8 animate-fade-up"><Experience /></div>;
      case 'projects': return <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-8 animate-fade-up"><Projects /></div>;
      case 'contact': return <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-8 animate-fade-up"><Contact /></div>;
      default: return null;
    }
  };

  const navItems = [
    { id: 'hero' as Tab, label: 'Home', icon: FiMonitor },
    { id: 'about' as Tab, label: 'About', icon: FiUser },
    { id: 'experience' as Tab, label: 'Experience', icon: FiBriefcase },
    { id: 'projects' as Tab, label: 'Projects', icon: FiCode },
    { id: 'contact' as Tab, label: 'Contact', icon: FiMail },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden bg-[#05050a] text-white">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-[260px] bg-white/[0.02] border-b md:border-b-0 md:border-r border-white/[0.08] flex flex-row md:flex-col items-center md:items-stretch justify-between md:justify-start p-3 sm:p-5 md:p-8 backdrop-blur-xl z-10 shrink-0">
        <div className="text-xl md:text-2xl font-bold tracking-tight md:mb-10 bg-gradient-to-r from-[#00f2fe] to-[#7b2cbf] bg-clip-text text-transparent">
          Portfolio.
        </div>
        
        <nav className="flex flex-row md:flex-col gap-1.5 md:gap-2 overflow-x-auto md:overflow-visible">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-3 px-3 py-2 sm:px-4 sm:py-3 rounded-xl text-sm md:text-base font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#00f2fe]/15 to-[#7b2cbf]/15 text-[#00f2fe] border border-[#00f2fe]/30 shadow-[0_0_15px_rgba(0,242,254,0.15)]'
                    : 'text-[#9ca3af] hover:text-white hover:bg-white/[0.05] border border-transparent'
                }`}
              >
                <Icon size={19} className="shrink-0" />
                <span className="hidden md:inline">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-3 md:p-8 overflow-hidden flex min-w-0">
        <div className="flex-1 bg-white/[0.01] border border-white/[0.08] rounded-2xl md:rounded-3xl backdrop-blur-xl overflow-hidden relative shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] flex flex-col">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;

