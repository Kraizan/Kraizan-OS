import { useState, useEffect } from 'react';
import TaskbarApp from './TaskbarApp';
import { useAppContext } from '@/context/AppContext';

const Taskbar = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const { minimizeAllApps } = useAppContext();

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = dateTime.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  const formattedTime = dateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <div className="w-full h-16 mx-auto bg-taskbar px-5 flex items-end justify-between">
      <div
        className="self-center hover:cursor-pointer opacity-85 active:opacity-100"
        onClick={minimizeAllApps}
      >
        <img src="/assets/home.png" alt="home" className="w-12 h-12" />
      </div>
      <div className="max-w-max mx-auto">
        <div className="flex justify-center gap-x-3 px-0.5">
          <TaskbarApp appName="terminal" />
          <TaskbarApp appName="explorer" />
          <TaskbarApp appName="browser" />
          <TaskbarApp appName="about" />
          <TaskbarApp appName="settings" />
        </div>
      </div>
      <div className="self-center text-white text-right">
        <p>{formattedDate}</p>
        <p>{formattedTime}</p>
      </div>
    </div>
  );
};

export default Taskbar;