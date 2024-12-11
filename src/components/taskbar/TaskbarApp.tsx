import { useAppContext } from '@/context/AppContext';

const TaskbarApp = ({ appName }: { appName: string }) => {
  const { openApp, isAppOpened } = useAppContext();
  const isOpened = isAppOpened(appName);

  return (
    <div
      className={`hover:cursor-pointer p-1 ${
        isOpened ? 'bg-white/40 scale-105' : 'hover:bg-white/30'
      }`}
      onClick={() => openApp(appName)}
    >
      <img src={`/assets/${appName}.png`} alt={`${appName}`} className="w-12 h-12" />
    </div>
  );
};

export default TaskbarApp;