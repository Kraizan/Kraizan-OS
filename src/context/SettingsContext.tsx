import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { extractThemeFromImage } from '@/utils/colorExtractor';

export interface Theme {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

interface SettingsContextType {
  theme: Theme;
  setTheme: (themeId: string) => void;
  wallpaper: string;
  setWallpaper: (wallpaperId: string) => void;
}

const defaultTheme: Theme = {
  id: 'ocean',
  name: 'Ocean Theme',
  primary: '#1a1a1a',
  secondary: '#2d2d2d',
  accent: '#3498db',
  background: '#121212',
  text: '#ffffff'
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [wallpaper, setWallpaperState] = useState<string>('/assets/wallpapers/ocean.jpg');

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('portfolioSettings');
    if (savedSettings) {
      const { theme, wallpaper } = JSON.parse(savedSettings);
      setThemeState(theme);
      setWallpaperState(wallpaper);
    }
  }, []);

  // Extract theme colors when wallpaper changes
  useEffect(() => {
    const updateThemeFromWallpaper = async () => {
      try {
        const colors = await extractThemeFromImage(wallpaper);
        const newTheme: Theme = {
          id: 'wallpaper',
          name: 'Wallpaper Theme',
          ...colors
        };
        setThemeState(newTheme);
      } catch (error) {
        console.error('Failed to extract theme from wallpaper:', error);
      }
    };

    updateThemeFromWallpaper();
  }, [wallpaper]);

  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('portfolioSettings', JSON.stringify({
      theme,
      wallpaper
    }));

    // Apply theme to document
    document.documentElement.style.setProperty('--primary-color', theme.primary + 'cc');
    document.documentElement.style.setProperty('--secondary-color', theme.secondary + 'cc');
    document.documentElement.style.setProperty('--accent-color', theme.accent);
    document.documentElement.style.setProperty('--background-color', theme.background + '99');
    document.documentElement.style.setProperty('--text-color', theme.text);

    // Apply wallpaper
    document.body.style.backgroundImage = `url(${wallpaper})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
  }, [theme, wallpaper]);

  const setTheme = (themeId: string) => {
    // Theme is now automatically set from wallpaper
    console.warn('Manual theme setting is disabled. Theme is extracted from wallpaper.');
  };

  const setWallpaper = (wallpaperId: string) => {
    const wallpaperUrl = wallpapers.find(w => w.id === wallpaperId)?.url || '/assets/wallpapers/ocean.jpg';
    setWallpaperState(wallpaperUrl);
  };

  return (
    <SettingsContext.Provider value={{
      theme,
      setTheme,
      wallpaper,
      setWallpaper,
    }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

export const wallpapers = [
  { id: 'space', name: 'Space', url: '/assets/wallpapers/default.jpg' },
  { id: 'mountains', name: 'Mountains', url: '/assets/wallpapers/mountains.jpg' },
  { id: 'forest', name: 'Forest', url: '/assets/wallpapers/forest.jpg' },
  { id: 'ocean', name: 'Ocean', url: '/assets/wallpapers/ocean.jpg' },
  { id: 'city', name: 'City', url: '/assets/wallpapers/city.jpg' },
  { id: 'train', name: 'Train', url: '/assets/wallpapers/train.jpg' },
]; 