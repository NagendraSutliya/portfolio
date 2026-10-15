import { useState } from 'react';
import LayoutSwitcher, { type PortfolioVersion, type LayoutMode } from './components/LayoutSwitcher';
import ClassicLayout from './layouts/ClassicLayout';
import DashboardLayout from './layouts/DashboardLayout';
import V2Layout from './v2/V2Layout';

function App() {
  const [version, setVersion] = useState<PortfolioVersion>('v2');

  const [layoutMode, setLayoutMode] = useState<LayoutMode>('classic');

  return (
    <>
      <LayoutSwitcher
        currentVersion={version}
        setVersion={setVersion}
        layoutMode={layoutMode}
        setLayoutMode={setLayoutMode}
      />

      {version === 'v1' ? (
        <div className="relative min-h-screen v1-cyber-bg text-white overflow-hidden">
          <div className="spotlight-top"></div>
          {layoutMode === 'classic' && <ClassicLayout />}
          {layoutMode === 'dashboard' && <DashboardLayout />}
        </div>
      ) : (
        <V2Layout />
      )}
    </>
  );
}

export default App;
