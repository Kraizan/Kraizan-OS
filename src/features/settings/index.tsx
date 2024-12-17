import { FC, useState } from 'react';
import { useSettings } from '@/context/SettingsContext';
import { TabId } from '@/types/settings';
import { Tabs } from './components/Tabs';
import { AppearanceTab } from './components/AppearanceTab';
import { SystemTab } from './components/SystemTab';
import { AboutTab } from './components/AboutTab';

const Settings: FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('appearance');
  const { theme, wallpaper, setWallpaper } = useSettings();

  return (
    <div className="w-full h-full max-h-[calc(100vh-110px)] flex theme-transition" style={{ backgroundColor: theme.background + '99' }}>
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