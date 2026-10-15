import React from 'react';

const V2Footer: React.FC = () => {
  return (
    <footer className="border-t border-v2-border bg-v2-dark py-8 text-v2-text-muted text-sm">
      <div className="max-w-8xl mx-auto px-6 md:px-8 flex flex-wrap gap-4 justify-between items-center">
        <span>&copy; {new Date().getFullYear()} Nagendra Kumar Sutliya</span>
        <span className="font-mono text-xs md:text-sm">Jaipur, India &bull; Open for Remote &amp; Hybrid roles</span>
      </div>
    </footer>
  );
};

export default V2Footer;
