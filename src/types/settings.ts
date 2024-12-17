import { Theme } from '@/context/SettingsContext';

export interface TabItem {
  id: TabId;
  name: string;
  icon: string;
}

export type TabId = 'appearance' | 'system' | 'about';

export interface TabProps {
  theme: Theme;
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export interface AppearanceTabProps {
  theme: Theme;
  wallpaper: string;
  setWallpaper: (id: string) => void;
}

export interface SystemTabProps {
  theme: Theme;
}

export interface AboutTabProps {
  theme: Theme;
} 