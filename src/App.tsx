import { useState } from 'react';
import LayoutSwitcher, { type LayoutMode } from './components/LayoutSwitcher';
import ClassicLayout from './layouts/ClassicLayout';
import DashboardLayout from './layouts/DashboardLayout';
import './App.css';

function App() {
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('classic');

  return (
    <div className={`app-container mode-${layoutMode}`}>
      <div className="spotlight-top"></div>
      
      <LayoutSwitcher currentMode={layoutMode} setMode={setLayoutMode} />

      {layoutMode === 'classic' && <ClassicLayout />}
      {layoutMode === 'dashboard' && <DashboardLayout />}
    </div>
  );
}

export default App;
