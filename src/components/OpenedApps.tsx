import { useAppContext } from '@/context/AppContext';
import AppComponents from '@/components/AppComponents';

const OpenedApps = () => {
  const { openedApps, closeApp, minimized } = useAppContext();

  if (openedApps.length === 0 || minimized) {
    return <div className='w-full h-full' />;
  }

  const currentApp = openedApps[openedApps.length - 1];
  const CurrentAppComponent = AppComponents[currentApp];

  return (
    <div className="h-full flex flex-col border border-white m-1">
      <div className="flex justify-between p-1">
        <div>
            <h1>{currentApp}</h1>
        </div>
        <button onClick={closeApp} className="rounded-full">
            <img src="/assets/close.png" alt="close" className='w-5 h-5'/>
        </button>
      </div>
      <div className="flex-grow flex items-center justify-center">
        {CurrentAppComponent ? <CurrentAppComponent /> : <h1 className="text-2xl">App not found</h1>}
      </div>
    </div>  
  );
};

export default OpenedApps;