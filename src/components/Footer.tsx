import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center border-t border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[#9ca3af] text-sm">
          &copy; {new Date().getFullYear()} Nagendra Sutliya. Built with React &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
