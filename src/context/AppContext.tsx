import { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  openedApps: string[];
  openApp: (appName: string) => void;
  closeApp: () => void;
  minimizeAllApps: () => void;
  isAppOpened: (appName: string) => boolean;
  minimized: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [openedApps, setOpenedApps] = useState<string[]>([]);
  const [minimized, setMinimized] = useState<boolean>(false);

  const openApp = (appName: string) => {
    setOpenedApps((prev) => {
      if (prev.includes(appName)) {
        return [...prev.filter(app => app !== appName), appName];
      }
      return [...prev, appName];
    });
    setMinimized(false);
  };

  const closeApp = () => {
    setOpenedApps((prev) => prev.slice(0, -1));
  };

  const minimizeAllApps = () => {
    setMinimized(true);
  };

  const isAppOpened = (appName: string) => {
    return openedApps.includes(appName);
  };

  return (
    <AppContext.Provider value={{ openedApps, openApp, closeApp, minimizeAllApps, isAppOpened, minimized }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};