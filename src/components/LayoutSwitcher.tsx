import React from 'react';
import { FiLayout, FiSidebar, FiDatabase, FiGrid } from 'react-icons/fi';

export type PortfolioVersion = 'v1' | 'v2';
export type LayoutMode = 'classic' | 'dashboard';

interface LayoutSwitcherProps {
  currentVersion: PortfolioVersion;
  setVersion: (version: PortfolioVersion) => void;
  layoutMode: LayoutMode;
  setLayoutMode: (mode: LayoutMode) => void;
}

const LayoutSwitcher: React.FC<LayoutSwitcherProps> = ({
  currentVersion,
  setVersion,
  layoutMode,
  setLayoutMode
}) => {
  return (
    <aside 
      aria-label="UI Version Switcher"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-[9999] flex items-center font-body select-none"
    >
      <div className="bg-[#0B1030]/95 backdrop-blur-xl border-y border-l border-white/15 hover:border-v2-accent/60 rounded-l-2xl p-2 sm:p-2.5 shadow-[-8px_0_30px_rgba(0,0,0,0.65)] flex flex-col items-center gap-2.5 transition-all duration-300">
        
        {/* Vertical Label Header */}
        <div className="flex flex-col items-center gap-1.5 pt-1">
          <span className="w-2 h-2 rounded-full bg-v2-accent shadow-[0_0_8px_#FFB86B] animate-pulse"></span>
          <span 
            className="text-[9px] font-bold text-v2-text-muted tracking-widest uppercase opacity-85"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            UI
          </span>
        </div>

        <div className="w-5 h-px bg-white/10"></div>

        {/* Version Switch Buttons */}
        <div className="flex flex-col gap-2">
          {/* V2 Button */}
          <button
            type="button"
            onClick={() => setVersion('v2')}
            title="Switch to New UI (v2) - Data Engineer Studio"
            className={`group relative flex flex-col items-center justify-center w-10 h-11 rounded-xl transition-all duration-200 cursor-pointer ${
              currentVersion === 'v2'
                ? 'bg-v2-accent text-v2-bg font-bold shadow-[0_0_18px_rgba(255,184,107,0.5)] scale-105'
                : 'text-v2-text-muted hover:text-white hover:bg-white/10'
            }`}
          >
            <FiDatabase size={15} />
            <span className="text-[10px] font-bold mt-0.5 leading-none">v2</span>
            
            {/* Tooltip on hover (desktop) */}
            <span className="pointer-events-none absolute right-full mr-3 hidden group-hover:block whitespace-nowrap rounded-lg bg-[#070A22] border border-white/15 px-2.5 py-1 text-xs font-medium text-white shadow-xl">
              New UI (v2)
            </span>
          </button>

          {/* V1 Button */}
          <button
            type="button"
            onClick={() => setVersion('v1')}
            title="Switch to Current UI (v1) - Cyber Space"
            className={`group relative flex flex-col items-center justify-center w-10 h-11 rounded-xl transition-all duration-200 cursor-pointer ${
              currentVersion === 'v1'
                ? 'bg-gradient-to-br from-cyber-cyan to-cyber-purple text-white shadow-[0_0_16px_rgba(0,242,254,0.5)] scale-105'
                : 'text-v2-text-muted hover:text-white hover:bg-white/10'
            }`}
          >
            <FiGrid size={15} />
            <span className="text-[10px] font-bold mt-0.5 leading-none">v1</span>
            
            {/* Tooltip on hover (desktop) */}
            <span className="pointer-events-none absolute right-full mr-3 hidden group-hover:block whitespace-nowrap rounded-lg bg-[#070A22] border border-white/15 px-2.5 py-1 text-xs font-medium text-white shadow-xl">
              Current UI (v1)
            </span>
          </button>
        </div>

        {/* If v1 is active, show Classic vs Dashboard sub-switcher */}
        {currentVersion === 'v1' && (
          <>
            <div className="w-5 h-px bg-white/10"></div>
            <div 
              className="flex flex-col gap-1 bg-black/50 border border-white/10 rounded-lg p-1"
              title="V1 Layout Mode: Classic vs Dashboard"
            >
              <button
                type="button"
                onClick={() => setLayoutMode('classic')}
                title="Classic Single Page View"
                className={`w-7 h-7 rounded flex items-center justify-center transition-colors cursor-pointer ${
                  layoutMode === 'classic'
                    ? 'bg-white/20 text-cyber-cyan'
                    : 'text-v2-text-muted hover:text-white'
                }`}
              >
                <FiLayout size={13} />
              </button>

              <button
                type="button"
                onClick={() => setLayoutMode('dashboard')}
                title="Dashboard Tabbed View"
                className={`w-7 h-7 rounded flex items-center justify-center transition-colors cursor-pointer ${
                  layoutMode === 'dashboard'
                    ? 'bg-white/20 text-cyber-cyan'
                    : 'text-v2-text-muted hover:text-white'
                }`}
              >
                <FiSidebar size={13} />
              </button>
            </div>
          </>
        )}

      </div>
    </aside>
  );
};

export default LayoutSwitcher;
