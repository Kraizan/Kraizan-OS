import { useAppContext } from '@/context/AppContext';
import { useSettings } from '@/context/SettingsContext';

const TaskbarApp = ({ appName }: { appName: string }) => {
  const { openApp, isAppOpened } = useAppContext();
  const { theme } = useSettings();
  const isOpened = isAppOpened(appName);

  return (
    <div
      className={`hover:cursor-pointer p-1 transition-colors rounded-lg hover:bg-opacity-20 ${
        isOpened ? 'scale-105' : ''
      }`}
      style={{ 
        backgroundColor: isOpened ? theme.accent + '40' : 'transparent'
      }}
      onClick={() => openApp(appName)}
    >
      <img src={`/assets/${appName}.png`} alt={`${appName}`} className="w-12 h-12" />
    </div>
  );
};

export default TaskbarApp;