import { useState } from 'react';
import { useSettings } from '@/context/SettingsContext';
import { TabId } from '@/types/settings';
import Tabs from './components/Tabs';
import SystemTab from './components/SystemTab';
import AppearanceTab from './components/AppearanceTab';
import AboutTab from './components/AboutTab';

const Settings = () => {
  const [activeTab, setActiveTab] = useState<TabId>('appearance');
  const { theme, wallpaper, setWallpaper } = useSettings();

  return (
    <div className="w-full h-full max-h-[calc(100vh-110px)] flex theme-transition" style={{ backgroundColor: theme.background + 'dd' }}>
      <Tabs 
        theme={theme}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {activeTab === 'appearance' && (
          <AppearanceTab 
            theme={theme}
            wallpaper={wallpaper}
            setWallpaper={setWallpaper}
          />
        )}
        {activeTab === 'system' && (
          <SystemTab theme={theme} />
        )}
        {activeTab === 'about' && (
          <AboutTab theme={theme} />
        )}
      </div>
    </div>
  );
};

export default Settings;