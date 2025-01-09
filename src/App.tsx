import { useState, useEffect } from 'react';
import Taskbar from "./features/taskbar";
import { AppProvider } from "@/context/AppContext";
import OpenedApps from "@/features/OpenedApps";
import LoadingScreen from "./LoadingScreen";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <AppProvider>
      <main className="w-full h-screen flex flex-col overflow-hidden">
        <OpenedApps />
        <Taskbar />
      </main>
    </AppProvider>
  );
};

export default App;