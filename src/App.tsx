import { useState, useEffect } from 'react';
import Taskbar from "@/features/taskbar";
import { AppProvider, useAppContext } from "@/context/AppContext";
import OpenedApps from "@/features/OpenedApps";
import LoadingScreen from "./LoadingScreen";

const AppContent = () => {
  const [loading, setLoading] = useState(true);
  const [quickstartOpened, setQuickstartOpened] = useState(false);
  const { openApp } = useAppContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (!quickstartOpened) {
        openApp('quickstart');
        setQuickstartOpened(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [openApp, quickstartOpened]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <main className="w-full h-screen flex flex-col overflow-hidden">
      <OpenedApps />
      <Taskbar />
    </main>
  );
};

const App = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;