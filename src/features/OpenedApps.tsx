import { useAppContext } from '@/context/AppContext';
import { useSettings } from '@/context/SettingsContext';
import AppComponents from '@/features/AppComponents';

const OpenedApps = () => {
  const { openedApps, closeApp, minimized } = useAppContext();
  const { theme } = useSettings();

  if (openedApps.length === 0 || minimized) {
    return <div className='w-full h-full' />;
  }

  const currentApp = openedApps[openedApps.length - 1];
  const CurrentAppComponent = AppComponents[currentApp];

  return (
    <div className="h-full flex flex-col border m-1 theme-transition" style={{ 
      borderColor: theme.secondary + '40'
    }}>
      <div className="flex justify-between p-1 rounded-t theme-transition" style={{ 
        backgroundColor: theme.primary + 'cc'
      }}>
        <div className="font-semibold" style={{ color: theme.text }}>
          {currentApp.charAt(0).toUpperCase() + currentApp.slice(1)}
        </div>
        <button 
          onClick={closeApp} 
          className="rounded-full p-1 transition-colors hover:bg-opacity-20"
          style={{ 
            backgroundColor: 'transparent'
          }}
        >
          <img src="/assets/close.png" alt="close" className='w-5 h-5'/>
        </button>
      </div>
      <div className="flex-grow flex theme-transition" style={{ 
        backgroundColor: theme.background + '99'
      }}>
        {CurrentAppComponent ? (
          <div className="w-full h-full">
            <CurrentAppComponent />
          </div>
        ) : (
          <div className="flex items-center justify-center w-full">
            <h1 className="text-2xl" style={{ color: theme.text }}>App not found</h1>
          </div>
        )}
      </div>
    </div>  
  );
};

export default OpenedApps;