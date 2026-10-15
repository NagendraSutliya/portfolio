import React from 'react';

const V2TeachingCallout: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <div className="rounded-3xl bg-[#E8ECFF] text-[#0B1030] p-8 sm:p-12 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center shadow-2xl">
          <h2 className="m-0 font-head font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-[-0.03em] text-[#0B1030]">
            I taught before I engineered. It shows in the work.
          </h2>

          <div className="flex flex-col gap-4 text-base md:text-lg leading-relaxed text-[#26306B]">
            <p className="m-0">
              Schemas come with ER diagrams. Migrations come with validation reports. Handovers come with documentation the next person can actually follow.
            </p>
            <p className="m-0 font-medium">
              Three and a half years in front of a classroom made clear explanation a habit, not an extra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default V2TeachingCallout;
