import { useAppContext } from '@/context/AppContext';
import { useSettings } from '@/context/SettingsContext';

const TaskbarApp = ({ appName }: { appName: string }) => {
  const { openApp, isAppOpened } = useAppContext();
  const { theme } = useSettings();
  const isOpened = isAppOpened(appName);

  return (
    <div
      className={`hover:cursor-pointer p-2 rounded-lg transition-all duration-150 hover:scale-105 active:scale-95 ${
        isOpened ? 'scale-105' : ''
      }`}
      style={{
        backgroundColor: isOpened ? theme.accent + '40' : 'transparent'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = theme.accent + '20';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = isOpened ? theme.accent + '40' : 'transparent';
      }}
      onClick={() => openApp(appName)}
    >
      <img src={`/assets/${appName}.png`} alt={`${appName}`} className="w-10 h-10" />
    </div>
  );
};

export default TaskbarApp;