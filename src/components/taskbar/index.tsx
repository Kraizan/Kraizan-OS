import { useState, useEffect } from 'react';
import TaskbarApp from './TaskbarApp';
import SkillsMenu from '../SkillsMenu';
import { useSettings } from '@/context/SettingsContext';

const Taskbar = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [skillsMenuOpen, setSkillsMenuOpen] = useState(false);
  const { theme } = useSettings();

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
    <>
      <SkillsMenu isOpen={skillsMenuOpen} onClose={() => setSkillsMenuOpen(false)} />
      <div 
        className="w-full h-16 mx-auto pr-5 flex items-end justify-between theme-transition backdrop-blur-sm"
        style={{ backgroundColor: theme.primary + 'cc' }}
      >
        <div
          className="px-3 self-center cursor-pointer opacity-85 hover:bg-white/30 active:opacity-100 p-2 transition-all rounded-lg"
          onClick={() => setSkillsMenuOpen(!skillsMenuOpen)}
        >
          <img src="/assets/home.png" alt="home" className="w-12 h-12" />
        </div>
        <div className="max-w-max mx-auto flex justify-center gap-x-3 px-0.5">
          <TaskbarApp appName="terminal" />
          <TaskbarApp appName="explorer" />
          <TaskbarApp appName="taskManager" />
          <TaskbarApp appName="settings" />
        </div>
        <div className="self-center text-right font-medium">
          <p style={{ color: theme.text + 'cc' }}>{formattedDate}</p>
          <p style={{ color: theme.text + 'cc' }}>{formattedTime}</p>
        </div>
      </div>
    </>
  );
};

export default Taskbar;