import React from 'react';

const V2TimelineBar: React.FC = () => {
  return (
    <section aria-label="Career timeline" className="py-16 md:py-20">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <h2 className="font-head font-semibold text-xl md:text-2xl text-v2-text-main mb-7">
          Ten years, one thread: data
        </h2>

        <div className="overflow-x-auto pb-3">
          <div className="min-w-[760px] flex gap-2.5">
            
            {/* 1: Arya College */}
            <div className="flex-[3.5_1_0%] flex flex-col gap-3">
              <div className="h-3.5 rounded-full bg-v2-blue-1 shadow-[0_0_12px_rgba(139,156,255,0.4)]"></div>
              <p className="font-semibold text-[15px] text-v2-text-main m-0">Assistant Professor</p>
              <p className="text-sm text-v2-text-muted leading-snug m-0">
                Arya College, Jaipur<br />
                <span className="font-mono text-xs">2016 – 2019</span>
              </p>
            </div>

            {/* 2: Tibil Solutions */}
            <div className="flex-[3.6_1_0%] flex flex-col gap-3">
              <div className="h-3.5 rounded-full bg-v2-blue-2"></div>
              <p className="font-semibold text-[15px] text-v2-text-main m-0">Software Engineer</p>
              <p className="text-sm text-v2-text-muted leading-snug m-0">
                Tibil Solutions, Bengaluru<br />
                <span className="font-mono text-xs">2019 – 2023</span>
              </p>
            </div>

            {/* 3: Wits Infotech */}
            <div className="flex-[3_1_0%] flex flex-col gap-3">
              <div className="h-3.5 rounded-full bg-v2-blue-3"></div>
              <p className="font-semibold text-[15px] text-v2-text-main m-0">Database Administrator</p>
              <p className="text-sm text-v2-text-muted leading-snug m-0">
                Wits Infotech, Mohali<br />
                <span className="font-mono text-xs">2023 – 2026</span>
              </p>
            </div>

            {/* 4: Sunfocus */}
            <div className="flex-[1.4_1_0%] min-w-[160px] flex flex-col gap-3">
              <div className="h-3.5 rounded-full bg-v2-accent shadow-[0_0_14px_rgba(255,184,107,0.45)]"></div>
              <p className="font-semibold text-[15px] text-v2-accent m-0">Software Engineer</p>
              <p className="text-sm text-v2-text-muted leading-snug m-0">
                Sunfocus, Mohali<br />
                <span className="font-mono text-xs">2026 – now</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default V2TimelineBar;
