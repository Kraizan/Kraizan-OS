import { useAppContext } from '@/context/AppContext';
import AppComponents from '@/components/AppComponents';
import { useState, useEffect } from 'react';

const OpenedApps = () => {
  const { openedApps, closeApp, minimized } = useAppContext();
  const [isClosing, setIsClosing] = useState(false);
  const [currentClosingApp, setCurrentClosingApp] = useState<string | null>(null);

  useEffect(() => {
    if (openedApps.length === 0) {
      setIsClosing(false);
      setCurrentClosingApp(null);
    }
  }, [openedApps]);

  if (openedApps.length === 0 || minimized) {
    return <div className='w-full h-full' />;
  }

  const currentApp = openedApps[openedApps.length - 1];
  const CurrentAppComponent = AppComponents[currentApp];

  const handleClose = () => {
    setIsClosing(true);
    setCurrentClosingApp(currentApp);
    setTimeout(() => {
      closeApp();
    }, 300); // Match animation duration
  };

  return (
    <div className={`h-full flex flex-col border border-white m-1 ${
      isClosing && currentClosingApp === currentApp ? 'animate-scaleDown' : 'animate-scaleUp'
    }`}>
      <div className="flex justify-between p-1 bg-gray-800 bg-opacity-75 rounded-t">
        <div className="text-white font-semibold">
          {currentApp.charAt(0).toUpperCase() + currentApp.slice(1)}
        </div>
        <button onClick={handleClose} className="rounded-full hover:bg-gray-700 p-1">
          <img src="/assets/close.png" alt="close" className='w-5 h-5'/>
        </button>
      </div>
      <div className="flex-grow flex items-center justify-center bg-gray-100">
        {CurrentAppComponent ? <CurrentAppComponent /> : <h1 className="text-2xl">App not found</h1>}
      </div>
    </div>  
  );
};

export default OpenedApps;