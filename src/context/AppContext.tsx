import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  openedApps: string[];
  openApp: (appName: string) => void;
  closeApp: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [openedApps, setOpenedApps] = useState<string[]>([]);

  const openApp = (appName: string) => {
    setOpenedApps((prev) => [...prev, appName]);
  };

  const closeApp = () => {
    setOpenedApps((prev) => prev.slice(0, -1));
  };

  return (
    <AppContext.Provider value={{ openedApps, openApp, closeApp }}>
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