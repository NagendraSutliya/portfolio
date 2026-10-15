import React from 'react';
import { FiAward } from 'react-icons/fi';

const V2Education: React.FC = () => {
  return (
    <section aria-label="Education" className="py-12 md:py-16">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <h2 className="font-head font-semibold text-xl md:text-2xl text-v2-text-main m-0 mb-6">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 rounded-2xl border border-v2-border bg-v2-card flex flex-col gap-2 shadow-lg hover:border-v2-accent transition-colors">
            <div className="flex justify-between items-center">
              <p className="m-0 font-mono text-sm text-v2-blue-1 font-medium">
                2013 – 2015
              </p>
              <FiAward className="text-v2-accent" size={18} />
            </div>
            <h3 className="m-0 text-xl font-semibold text-v2-text-main">
              M.Tech, Computer Science
            </h3>
            <p className="m-0 text-v2-text-muted text-sm md:text-[15px]">
              Manipal University, Jaipur
            </p>
          </div>

          <div className="p-7 rounded-2xl border border-v2-border bg-v2-card flex flex-col gap-2 shadow-lg hover:border-v2-accent transition-colors">
            <div className="flex justify-between items-center">
              <p className="m-0 font-mono text-sm text-v2-blue-1 font-medium">
                2008 – 2012
              </p>
              <FiAward className="text-v2-accent" size={18} />
            </div>
            <h3 className="m-0 text-xl font-semibold text-v2-text-main">
              B.Tech, Information Technology
            </h3>
            <p className="m-0 text-v2-text-muted text-sm md:text-[15px]">
              RITM (RTU Kota), Jaipur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default V2Education;
