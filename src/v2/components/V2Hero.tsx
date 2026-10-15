import React, { useState } from 'react';
import { FiDatabase, FiPlay } from 'react-icons/fi';

interface QueryData {
  label: string;
  sql: string;
  cols: string[];
  rows: [string, string, string][];
}

const terminalQueries: Record<string, QueryData> = {
  exp: {
    label: 'Experience',
    sql: 'SELECT role, company, period\nFROM experience ORDER BY started DESC;',
    cols: ['role', 'company', 'period'],
    rows: [
      ['Software Engineer', 'Sunfocus Solutions', '2026 – now'],
      ['Database Admin', 'Wits Infotech', '2023 – 2026'],
      ['Software Engineer', 'Tibil Solutions', '2019 – 2023'],
      ['Asst. Professor', 'Arya College', '2016 – 2019']
    ]
  },
  proj: {
    label: 'Projects',
    sql: 'SELECT name, domain, stack\nFROM projects LIMIT 5;',
    cols: ['name', 'domain', 'stack'],
    rows: [
      ['datacube.ai', 'BI & KPIs', 'MySQL'],
      ['Ad Leverage', 'Ad tech', 'MySQL'],
      ['Cimet', 'Energy', 'MySQL'],
      ['MySocially', 'Social', 'MySQL'],
      ['EkStep–Diksha', 'EdTech', 'PySpark']
    ]
  },
  stack: {
    label: 'Stack',
    sql: 'SELECT area, daily, also\nFROM stack;',
    cols: ['area', 'daily', 'also'],
    rows: [
      ['Databases', 'MySQL, PostgreSQL', 'MongoDB'],
      ['Data', 'Python, PySpark', 'Superset'],
      ['Web', 'React, Tailwind', 'GraphQL'],
      ['Tools', 'Workbench, dbForge', 'Git']
    ]
  },
  edu: {
    label: 'Education',
    sql: 'SELECT degree, institute, years\nFROM education;',
    cols: ['degree', 'institute', 'years'],
    rows: [
      ['M.Tech, CS', 'Manipal University', '2013 – 2015'],
      ['B.Tech, IT', 'RITM (RTU Kota)', '2008 – 2012']
    ]
  }
};

interface V2HeroProps {
  onNavigateSection: (sectionId: string) => void;
}

const V2Hero: React.FC<V2HeroProps> = ({ onNavigateSection }) => {
  const [activeKey, setActiveKey] = useState<string>('exp');

  const currentQuery = terminalQueries[activeKey];

  return (
    <section className="py-16 md:py-24 border-b border-v2-border bg-v2-grid bg-grid-56 bg-top">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Intro */}
          <div className="flex flex-col gap-7">
            
            {/* Author Profile Badge with Photo */}
            <div className="inline-flex items-center gap-3.5 px-4 py-1.5 pl-1.5 rounded-full bg-v2-card/85 border border-v2-border shadow-lg backdrop-blur-sm self-start hover:border-v2-accent transition-all duration-200">
              <div className="relative w-11 h-11 rounded-full border-2 border-v2-accent overflow-hidden shrink-0">
                <img 
                  src="/nagendra.jpeg" 
                  alt="Nagendra Kumar Sutliya" 
                  className="w-full h-full rounded-full object-cover block" 
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-v2-text-main tracking-tight">Nagendra Kumar Sutliya</span>
                <span className="inline-flex items-center gap-1.5 text-xs text-v2-text-muted">
                  <span className="w-2 h-2 rounded-full bg-[#6EE7B7] shadow-[0_0_8px_#6EE7B7] animate-pulse" aria-hidden="true"></span>
                  Software Engineer &bull; Sunfocus Solutions
                </span>
              </div>
            </div>

            <h1 className="font-head font-extrabold text-[36px] sm:text-[46px] lg:text-[62px] leading-[1.04] tracking-[-0.035em] text-v2-text-main">
              I make data fast, correct and easy to trust.
            </h1>

            <p className="text-base md:text-lg text-v2-text-muted leading-relaxed max-w-[32em]">
              I'm Nagendra Kumar Sutliya, a database and data engineer from Jaipur. Seven years building MySQL, PostgreSQL and analytics systems — after three and a half years teaching engineering students.
            </p>

            <div className="flex flex-wrap gap-3.5 pt-2">
              <button 
                type="button" 
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-v2-accent hover:bg-v2-accent-hover text-v2-bg font-semibold text-sm md:text-[15px] border border-v2-accent transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(255,184,107,0.3)] cursor-pointer"
                onClick={() => onNavigateSection('projects')}
              >
                See my projects
              </button>
              <button 
                type="button" 
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-v2-border bg-v2-card hover:border-v2-accent text-v2-text-main hover:text-v2-accent font-semibold text-sm md:text-[15px] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                onClick={() => onNavigateSection('contact')}
              >
                Get in touch
              </button>
            </div>
          </div>

          {/* Right Column: Interactive SQL Terminal */}
          <div className="bg-v2-dark border border-v2-border rounded-2xl shadow-[0_0_0_6px_#10184A,0_30px_80px_#04061A] overflow-hidden">
            <div className="flex items-center justify-between gap-3 px-4 py-3.5 border-b border-v2-border-light bg-[#0D1338]">
              <div className="flex gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
              </div>
              <div className="font-mono text-xs md:text-sm text-v2-text-muted flex items-center gap-2">
                <FiDatabase size={14} className="text-v2-accent" />
                <span>mysql&gt; nagendra</span>
              </div>
            </div>

            {/* Query Selector Chips */}
            <div className="px-4 pt-4 flex flex-wrap gap-2" role="group" aria-label="Run a SQL query">
              {Object.keys(terminalQueries).map((key) => {
                const q = terminalQueries[key];
                const isActive = activeKey === key;
                return (
                  <button
                    key={key}
                    type="button"
                    className={`min-h-[40px] px-4 rounded-full font-mono text-xs cursor-pointer transition-all duration-200 border flex items-center ${
                      isActive 
                        ? 'bg-v2-accent text-v2-bg border-v2-accent font-semibold shadow-[0_0_12px_rgba(255,184,107,0.35)]' 
                        : 'bg-v2-panel text-v2-text-body border-v2-border hover:border-v2-blue-1 hover:text-white'
                    }`}
                    onClick={() => setActiveKey(key)}
                    aria-pressed={isActive}
                  >
                    {isActive && <FiPlay size={10} className="mr-1.5" />}
                    {q.label}
                  </button>
                );
              })}
            </div>

            {/* Terminal Body */}
            <div className="p-5 md:p-6 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
              <div className="text-v2-blue-1 whitespace-pre-wrap font-medium min-h-[48px]">
                mysql&gt; {currentQuery.sql}
              </div>

              <div className="mt-4 min-w-[420px] border border-v2-border-light rounded-lg overflow-hidden bg-v2-panel/40">
                <div className="grid grid-cols-[1.1fr_1.2fr_1fr] gap-3 px-3.5 py-2.5 bg-v2-panel text-v2-text-muted font-semibold border-b border-v2-border-light uppercase text-[11px] tracking-wider">
                  {currentQuery.cols.map((col, i) => (
                    <span key={i}>{col}</span>
                  ))}
                </div>

                <div>
                  {currentQuery.rows.map((row, rIdx) => (
                    <div 
                      key={rIdx} 
                      className="grid grid-cols-[1.1fr_1.2fr_1fr] gap-3 px-3.5 py-2.5 border-t border-v2-border-light text-v2-text-main hover:bg-v2-blue-1/10 transition-colors"
                    >
                      <span>{row[0]}</span>
                      <span className="text-v2-text-body">{row[1]}</span>
                      <span className="text-v2-accent font-medium">{row[2]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3.5 text-xs text-v2-text-muted flex items-center gap-1.5">
                <span>{currentQuery.rows.length} rows in set (0.00 sec)</span>
                <span className="inline-block text-v2-accent animate-cursor-blink" aria-hidden="true">▍</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default V2Hero;
