import { useAppContext } from '@/context/AppContext';

const TaskbarApp = ({ appName }: { appName: string }) => {
  const { openApp, isAppOpened } = useAppContext();
  const isOpened = isAppOpened(appName);

  return (
    <div
      className={`hover:scale-[120%] transition-all duration-100 hover:-translate-y-1 hover:cursor-pointer p-0.5 ${isOpened ? 'bg-white bg-opacity-40' : 'hover:bg-slate-50 hover:bg-opacity-30'}`}
      onClick={() => openApp(appName)}
    >
      <img src={`/assets/${appName}.png`} alt={`${appName}`} className="w-12 h-12" />
    </div>
  );
};

export default TaskbarApp;