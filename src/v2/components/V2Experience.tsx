import React from 'react';
import type { V2View } from '../types';

interface V2ExperienceProps {
  setView: (view: V2View) => void;
}

const V2Experience: React.FC<V2ExperienceProps> = ({ setView }) => {
  return (
    <section id="v2-experience" className="py-20 md:py-24">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 flex flex-col gap-10">
        <h2 className="font-head font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em] text-v2-text-main m-0">
          Experience
        </h2>

        <div className="flex flex-col border-t border-v2-border">
          
          {/* 1: Sunfocus Solutions */}
          <div className="flex flex-wrap gap-6 md:gap-12 py-9 border-b border-v2-border">
            <div className="flex-[1_1_260px] flex flex-col gap-1.5">
              <p className="m-0 font-mono text-sm text-v2-accent font-medium">
                Feb 2026 – Present
              </p>
              <h3 className="m-0 text-xl md:text-[22px] font-semibold text-v2-text-main">
                Sunfocus Solutions
              </h3>
              <p className="m-0 text-sm md:text-[15px] text-v2-text-muted">
                Software Engineer, Mohali
              </p>
            </div>
            <p className="flex-[2_1_420px] m-0 text-v2-text-body leading-relaxed text-base">
              Building the KPI layer of <strong className="text-white font-semibold">datacube.ai</strong>, a business-intelligence platform. I write the SQL for new KPIs, tune stored procedures and indexes, and run reconciliation checks so every dashboard number holds up.
            </p>
          </div>

          {/* 2: Wits Infotech */}
          <div className="flex flex-wrap gap-6 md:gap-12 py-9 border-b border-v2-border">
            <div className="flex-[1_1_260px] flex flex-col gap-1.5">
              <p className="m-0 font-mono text-sm text-v2-blue-1 font-medium">
                Feb 2023 – Jan 2026
              </p>
              <h3 className="m-0 text-xl md:text-[22px] font-semibold text-v2-text-main">
                Wits Infotech
              </h3>
              <p className="m-0 text-sm md:text-[15px] text-v2-text-muted">
                Database Administrator, Mohali
              </p>
            </div>
            <p className="flex-[2_1_420px] m-0 text-v2-text-body leading-relaxed text-base">
              Owned MySQL schemas for three high-volume products — a marketing platform (Ad Leverage), an energy-comparison site (Cimet) and a social app (MySocially). Designed ER diagrams, wrote procedures, triggers and events, and migrated data across test, staging and production without losing a row.
            </p>
          </div>

          {/* 3: Tibil Solutions */}
          <div className="flex flex-wrap gap-6 md:gap-12 py-9 border-b border-v2-border">
            <div className="flex-[1_1_260px] flex flex-col gap-1.5">
              <p className="m-0 font-mono text-sm text-v2-blue-1 font-medium">
                Jun 2019 – Jan 2023
              </p>
              <h3 className="m-0 text-xl md:text-[22px] font-semibold text-v2-text-main">
                Tibil Solutions
              </h3>
              <p className="m-0 text-sm md:text-[15px] text-v2-text-muted">
                Software Engineer, Bengaluru
              </p>
            </div>
            <p className="flex-[2_1_420px] m-0 text-v2-text-body leading-relaxed text-base">
              Analysed telemetry for <strong className="text-white font-semibold">EkStep–Diksha</strong>, a national learning platform, with PySpark on Linux: daily funnels, weekly retention and content-consumption reports, plus shell-script validation.
            </p>
          </div>

          {/* 4: Arya College */}
          <div className="flex flex-wrap gap-6 md:gap-12 py-9 border-b border-v2-border">
            <div className="flex-[1_1_260px] flex flex-col gap-1.5">
              <p className="m-0 font-mono text-sm text-v2-blue-1 font-medium">
                Jan 2016 – Jun 2019
              </p>
              <h3 className="m-0 text-xl md:text-[22px] font-semibold text-v2-text-main">
                Arya College of Engineering &amp; IT
              </h3>
              <p className="m-0 text-sm md:text-[15px] text-v2-text-muted">
                Assistant Professor, Jaipur
              </p>
            </div>
            <p className="flex-[2_1_420px] m-0 text-v2-text-body leading-relaxed text-base">
              Taught computer-science students for three and a half years. It's where I learned to explain a complex system simply — a skill I now use in every schema review and handover.{' '}
              <button
                type="button"
                onClick={() => {
                  setView('journey');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-transparent border-0 p-0 text-v2-accent font-semibold underline hover:text-v2-accent-hover cursor-pointer font-body inline"
              >
                Read the full story &rarr;
              </button>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default V2Experience;
