import { createContext, useContext, ReactNode, useState } from 'react';
import { useExplorerState, ExplorerState } from '@/hooks/useExplorerState';

interface AppContextType {
  // App state
  openedApps: string[];
  openApp: (appName: string) => void;
  closeApp: () => void;
  minimizeAllApps: () => void;
  isAppOpened: (appName: string) => boolean;
  minimized: boolean;

  // Explorer state
  explorerState: ExplorerState;
  navigateTo: (path: string) => void;
  goBack: () => void;
  goForward: () => void;
  getFolder: (path: string) => any;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [openedApps, setOpenedApps] = useState<string[]>([]);
  const [minimized, setMinimized] = useState<boolean>(false);
  const {
    state: explorerState,
    navigateTo,
    goBack,
    goForward,
    getFolder,
    resetExplorerState,
  } = useExplorerState();

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
    const appToClose = openedApps[openedApps.length - 1];
    if (appToClose === 'explorer') {
      resetExplorerState();
    }
    setOpenedApps((prev) => prev.slice(0, -1));
  };

  const minimizeAllApps = () => {
    setMinimized(true);
  };

  const isAppOpened = (appName: string) => {
    return openedApps.includes(appName);
  };

  return (
    <AppContext.Provider value={{
      openedApps,
      openApp,
      closeApp,
      minimizeAllApps,
      isAppOpened,
      minimized,
      explorerState,
      navigateTo,
      goBack,
      goForward,
      getFolder,
    }}>
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