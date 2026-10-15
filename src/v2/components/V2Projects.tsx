import React from 'react';
import { FiArrowUpRight, FiBookOpen } from 'react-icons/fi';
import type { V2View } from '../types';

interface V2ProjectsProps {
  setView: (view: V2View) => void;
}

interface SecondaryProject {
  title: string;
  description: string;
  tag: string;
  link?: string;
  github?: string;
}

const otherProjects: SecondaryProject[] = [
  {
    title: 'Ad Leverage',
    description: 'Schema design and query tuning for a digital-marketing platform handling high-volume campaign and transaction data.',
    tag: 'MySQL · 2025'
  },
  {
    title: 'Cimet',
    description: 'Energy-comparison platform. Automated data migrations across dev, staging and production with reconciliation checks.',
    tag: 'MySQL · 2024'
  },
  {
    title: 'MySocially',
    description: 'Social-engagement app. Designed ER and data-flow diagrams, built the schema, and ran migrations from test to production.',
    tag: 'MySQL, dbForge · 2023–24'
  },
  {
    title: 'EkStep–Diksha',
    description: 'Telemetry analysis of clicks, logins and language settings to understand how learners use the app and portal.',
    tag: 'PySpark, Linux · 2020–23'
  },
  {
    title: 'crmdost.com',
    description: 'A responsive business CRM website with reusable React components, forms and modals — live in production.',
    tag: 'React, Tailwind · 2025',
    link: 'https://crmdost.com'
  },
  {
    title: 'Full-stack web app',
    description: 'A proof-of-concept built for scale: React and Tailwind on the front, GraphQL and MongoDB behind it.',
    tag: 'GraphQL, MongoDB · 2025–'
  },
  {
    title: 'guruConnect',
    description: 'A full-stack educational management platform with teacher portals, Cloudinary pipelines, and role-based access.',
    tag: 'MERN, TypeScript · 2024–25',
    link: 'https://guru-connect.vercel.app'
  },
  {
    title: 'Gyansthali School Website',
    description: 'Modern educational institution platform with online admissions and custom CMS setup assistant.',
    tag: 'React, TypeScript, Node · 2024',
    link: 'https://gyansthali-website.vercel.app'
  }
];

const V2Projects: React.FC<V2ProjectsProps> = ({ setView }) => {
  return (
    <section id="v2-projects" className="py-20 md:py-24">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 flex flex-col gap-10">
        <h2 className="font-head font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em] text-v2-text-main m-0">
          Projects
        </h2>

        {/* Featured Card: datacube.ai */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-v2-border bg-v2-card shadow-2xl">
          {/* Card Left Details */}
          <div className="p-7 sm:p-10 md:p-12 flex flex-col gap-4.5 justify-center">
            <p className="m-0 text-sm text-v2-accent font-semibold tracking-wider uppercase">
              FEATURED · SUNFOCUS SOLUTIONS · 2026
            </p>

            <h3 className="m-0 font-head text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-white">
              datacube.ai
            </h3>

            <p className="m-0 text-v2-text-body leading-relaxed text-base md:text-lg">
              A BI platform that consolidates company data and turns it into live KPIs. I own the SQL behind the numbers — custom KPIs, optimised procedures, and the validation that keeps them consistent.
            </p>

            <p className="m-0 font-mono text-sm text-v2-text-muted">
              MySQL, stored procedures, triggers, indexing
            </p>

            <div className="pt-2">
              <button
                type="button"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-v2-accent hover:bg-v2-accent-hover text-v2-bg font-semibold text-sm md:text-[15px] border border-v2-accent transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(255,184,107,0.3)] cursor-pointer w-fit"
                onClick={() => {
                  setView('case-study');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <FiBookOpen className="mr-2" />
                Read the case study
              </button>
            </div>
          </div>

          {/* Card Right: Live BI Dashboard Preview Visual */}
          <div className="min-h-[340px] bg-v2-dark border-t lg:border-t-0 lg:border-l border-v2-border p-7 flex flex-col justify-between gap-4">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <span className="w-2 h-2 rounded-full bg-[#6EE7B7] shadow-[0_0_8px_#6EE7B7]"></span>
                <span className="font-mono text-xs text-v2-text-muted">datacube.ai / KPI Engine</span>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#18225A] text-v2-blue-1">
                P95 &lt; 42ms
              </span>
            </div>

            {/* KPI Metrics row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-v2-panel rounded-xl p-3.5 border border-v2-border-light">
                <div className="text-xs text-v2-text-muted font-mono">Avg Query Latency</div>
                <div className="text-2xl font-bold text-v2-accent mt-1 font-head">18.4ms</div>
                <div className="text-[11px] text-[#6EE7B7] mt-0.5">&darr; 74% vs baseline</div>
              </div>

              <div className="bg-v2-panel rounded-xl p-3.5 border border-v2-border-light">
                <div className="text-xs text-v2-text-muted font-mono">Reconciliation Match</div>
                <div className="text-2xl font-bold text-v2-text-main mt-1 font-head">100%</div>
                <div className="text-[11px] text-v2-blue-1 mt-0.5">Zero data drift</div>
              </div>
            </div>

            {/* Live Chart preview */}
            <div className="rounded-xl bg-v2-panel border border-v2-border-light flex items-end gap-2.5 p-5 pb-3.5 min-h-[140px]" aria-hidden="true">
              <span className="flex-1 bg-[#5262CC] rounded" style={{ height: '42%' }}></span>
              <span className="flex-1 bg-[#6F7FE8] rounded" style={{ height: '68%' }}></span>
              <span className="flex-1 bg-[#8B9CFF] rounded" style={{ height: '54%' }}></span>
              <span className="flex-1 bg-[#A9B6FF] rounded" style={{ height: '82%' }}></span>
              <span className="flex-1 bg-v2-accent rounded shadow-[0_0_12px_rgba(255,184,107,0.4)]" style={{ height: '94%' }}></span>
            </div>

            <div className="text-v2-text-muted font-mono text-xs flex justify-between">
              <span>Stored Procedure: sp_calc_retention_kpi</span>
              <span className="text-v2-accent">Executed in 0.012s</span>
            </div>
          </div>
        </div>

        {/* Secondary Projects Table/Rows */}
        <div className="flex flex-col border-t border-v2-border mt-6">
          {otherProjects.map((p, idx) => (
            <div
              key={idx}
              className="flex flex-wrap gap-2 md:gap-8 py-6 border-b border-v2-border items-baseline"
            >
              <h3 className="flex-[1_1_200px] m-0 text-xl font-semibold text-v2-text-main">
                {p.link ? (
                  <a 
                    href={p.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="underline decoration-v2-border underline-offset-[6px] hover:text-v2-accent"
                  >
                    {p.title} <FiArrowUpRight size={16} className="inline align-middle" />
                  </a>
                ) : (
                  p.title
                )}
              </h3>

              <p className="flex-[3_1_360px] m-0 text-v2-text-body leading-relaxed text-sm md:text-[15px]">
                {p.description}
              </p>

              <p className="flex-[1_1_200px] m-0 font-mono text-xs md:text-sm text-v2-text-muted">
                {p.tag}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default V2Projects;
