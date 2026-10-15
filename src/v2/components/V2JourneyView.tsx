import React from 'react';
import { FiArrowLeft, FiMail, FiCheckCircle } from 'react-icons/fi';
import type { V2View } from '../types';

interface V2JourneyViewProps {
  setView: (view: V2View) => void;
  onNavigateSection: (sectionId: string) => void;
}

const chapters = [
  {
    num: '1',
    period: '2008 – 2015',
    title: 'Learning the foundations',
    description: 'B.Tech in Information Technology at RITM (RTU Kota), then an M.Tech in Computer Science at Manipal University, Jaipur. Deep focus on database architecture, data structures, and computer organization.',
    style: 'default'
  },
  {
    num: '2',
    period: '2016 – 2019',
    title: 'Assistant Professor, Arya College of Engineering & IT',
    description: 'Three and a half years teaching engineering students. Taught DBMS, Operating Systems, Computer Networks, and C/C++. Led lab workshops and guided capstone projects. It is where I learned to explain complex systems with simplicity and precision.',
    style: 'blue'
  },
  {
    num: '3',
    period: '2019 – 2023',
    title: 'Analytics at national scale, Tibil Solutions',
    description: 'First engineering role. Analysed telemetry for EkStep–Diksha with PySpark on Linux — daily funnels, weekly retention, and content-consumption patterns of millions of learners across India. Built automated shell scripts for data integrity validation.',
    style: 'default'
  },
  {
    num: '4',
    period: '2023 – 2026',
    title: 'Running production databases, Wits Infotech',
    description: 'As Database Administrator, I designed schemas and ER diagrams, wrote stored procedures, events, and triggers, and migrated large-scale databases between environments for Ad Leverage, Cimet and MySocially without losing a single row. On the side, built and deployed crmdost.com in React.',
    style: 'default'
  },
  {
    num: '5',
    period: '2026 – now',
    title: 'Business intelligence, Sunfocus Solutions',
    description: 'Now building the KPI engine for datacube.ai — writing optimized SQL, procedures, and reconciliation checks behind every number a client sees.',
    style: 'amber',
    hasCaseStudyLink: true
  }
];

const V2JourneyView: React.FC<V2JourneyViewProps> = ({ setView, onNavigateSection }) => {
  return (
    <div>
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-v2-border bg-v2-grid bg-grid-56 bg-top">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          
          <button
            type="button"
            onClick={() => {
              setView('overview');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-v2-border bg-v2-card hover:border-v2-accent text-v2-text-main hover:text-v2-accent text-sm font-semibold transition-all mb-9 cursor-pointer"
          >
            <FiArrowLeft className="mr-2" />
            Back to overview
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="font-head font-extrabold text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.04] tracking-[-0.035em] text-v2-text-main m-0">
                From the lecture hall to the production database.
              </h1>

              <p className="m-0 text-base md:text-lg leading-relaxed text-v2-text-muted max-w-[32em]">
                I spent my first working years teaching computer science in Jaipur. Since 2019 I've been on the other side — building and tuning the databases that real products run on.
              </p>

              <div className="p-5 md:p-6 rounded-2xl bg-v2-card border border-dashed border-v2-border text-v2-text-body text-sm md:text-base leading-relaxed max-w-[34em]">
                Teaching taught me that if you can't document a schema clearly or explain why a query is slow, you don't truly understand it. Today, I bring that same educational clarity and empathy to every migration, schema review, and engineering handover.
              </div>
            </div>

            {/* Photo Card */}
            <div className="relative max-w-[400px] w-full justify-self-center">
              <div className="absolute inset-4 -right-4 -bottom-4 rounded-3xl border border-v2-accent pointer-events-none" aria-hidden="true"></div>
              <div className="relative aspect-[4/5] rounded-3xl bg-v2-card border border-v2-border overflow-hidden shadow-2xl">
                <img src="/nagendra.jpeg" alt="Nagendra Kumar Sutliya" className="w-full h-full object-cover block" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Chapters Timeline */}
      <section aria-label="Chapters" className="max-w-[1040px] mx-auto px-6 md:px-8 py-16 md:py-20 flex flex-col">
        {chapters.map((ch, idx) => (
          <div key={idx} className="grid grid-cols-[48px_minmax(0,1fr)] sm:grid-cols-[64px_minmax(0,1fr)] gap-5 sm:gap-7 pb-12 relative">
            <div className="flex flex-col items-center gap-3">
              <span className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-v2-border flex items-center justify-center font-head font-bold text-base sm:text-lg bg-v2-card text-v2-text-main shadow-md ${
                ch.style === 'blue' 
                  ? 'bg-v2-blue-1 text-[#0B1030] border-v2-blue-1' 
                  : ch.style === 'amber' 
                  ? 'bg-v2-accent text-[#0B1030] border-v2-accent shadow-[0_0_16px_rgba(255,184,107,0.45)]' 
                  : ''
              }`}>
                {ch.num}
              </span>
              {idx < chapters.length - 1 && <span className="flex-1 w-px bg-v2-border" aria-hidden="true"></span>}
            </div>

            <div className="flex flex-col gap-2.5 pt-2">
              <p className={`m-0 font-mono text-sm font-medium ${ch.style === 'amber' ? 'text-v2-accent' : 'text-v2-blue-1'}`}>
                {ch.period}
              </p>
              <h2 className="font-head font-semibold text-xl sm:text-2xl text-v2-text-main m-0">
                {ch.title}
              </h2>
              <p className="m-0 text-v2-text-body leading-relaxed text-sm md:text-base">
                {ch.description}
                {ch.hasCaseStudyLink && (
                  <>
                    {' '}
                    <button
                      type="button"
                      onClick={() => {
                        setView('case-study');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="bg-transparent border-0 text-v2-accent font-semibold cursor-pointer p-0 text-inherit font-body underline hover:text-v2-accent-hover inline"
                    >
                      See the case study &rarr;
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Teaching vs Engineering Insights */}
      <section className="py-12 pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-v2-card border border-v2-border flex flex-col gap-3.5 shadow-xl">
            <h2 className="font-head font-semibold text-xl md:text-2xl text-v2-text-main m-0 flex items-center gap-2.5">
              <FiCheckCircle className="text-v2-blue-1 shrink-0" />
              What teaching gave me
            </h2>
            <p className="m-0 text-v2-text-body leading-relaxed text-sm md:text-base">
              Breaking big problems into small, approachable steps. Deep patience with ambiguous questions. Writing clear architectural documentation so teammates and clients can follow seamlessly without me in the room.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-v2-card border border-v2-border flex flex-col gap-3.5 shadow-xl">
            <h2 className="font-head font-semibold text-xl md:text-2xl text-v2-text-main m-0 flex items-center gap-2.5">
              <FiCheckCircle className="text-v2-accent shrink-0" />
              What engineering added
            </h2>
            <p className="m-0 text-v2-text-body leading-relaxed text-sm md:text-base">
              Owning high-concurrency systems with millions of active rows. Surgical query tuning on massive datasets. Shipping zero-loss schema migrations and bulletproof procedures under strict SLAs.
            </p>
          </div>
        </div>
      </section>

      {/* Hiring CTA Banner */}
      <section className="border-t border-v2-border py-16">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 flex flex-wrap gap-7 items-center justify-between">
          <h2 className="font-head font-semibold text-2xl sm:text-3xl text-v2-text-main m-0 max-w-[16em]">
            Hiring for data or databases?
          </h2>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:nagendrasutliya@gmail.com" className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-v2-accent hover:bg-v2-accent-hover text-v2-bg font-semibold text-sm border border-v2-accent transition-all duration-200 hover:-translate-y-0.5 shadow-md">
              <FiMail className="mr-2" />
              Email me
            </a>
            <button
              type="button"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-v2-border bg-v2-card hover:border-v2-accent text-v2-text-main hover:text-v2-accent text-sm font-semibold transition-all duration-200 cursor-pointer"
              onClick={() => {
                setView('overview');
                setTimeout(() => onNavigateSection('projects'), 100);
              }}
            >
              See projects
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default V2JourneyView;
