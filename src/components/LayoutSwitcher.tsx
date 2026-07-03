import React from 'react';
import { FiLayout, FiSidebar } from 'react-icons/fi';
import './LayoutSwitcher.css';

export type LayoutMode = 'classic' | 'dashboard';

interface LayoutSwitcherProps {
  currentMode: LayoutMode;
  setMode: (mode: LayoutMode) => void;
}

const LayoutSwitcher: React.FC<LayoutSwitcherProps> = ({ currentMode, setMode }) => {
  return (
    <div className="layout-switcher">
      <div className="switcher-label">UI MODE</div>
      <div className="switcher-buttons">
        <button 
          className={`switcher-btn ${currentMode === 'classic' ? 'active' : ''}`}
          onClick={() => setMode('classic')}
          title="Classic Resume View"
        >
          <FiLayout size={18} />
        </button>
        <button 
          className={`switcher-btn ${currentMode === 'dashboard' ? 'active' : ''}`}
          onClick={() => setMode('dashboard')}
          title="Dashboard View"
        >
          <FiSidebar size={18} />
        </button>
      </div>
    </div>
  );
};

export default LayoutSwitcher;
