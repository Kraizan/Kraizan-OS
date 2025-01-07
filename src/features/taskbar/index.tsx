import { useState, useEffect } from "react";
import SkillsMenu from "@/features/skills";
import { useSettings } from "@/context/SettingsContext";
import TaskbarApp from "./components/TaskbarApp";
import Tooltip from './components/Tooltip';

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

  const formattedDate = dateTime.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const formattedTime = dateTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <>
      <SkillsMenu
        isOpen={skillsMenuOpen}
        onClose={() => setSkillsMenuOpen(false)}
      />
      <div
        className="w-full h-16 mx-auto pr-5 flex items-end justify-between theme-transition backdrop-blur-sm"
        style={{ backgroundColor: theme.primary + "cc" }}
      >
        <div
          className="w-1/3 self-center p-2 rounded-lg transition-all duration-150 hover:scale-[102%] active:scale-[99%] cursor-pointer"
          style={{
            backgroundColor: skillsMenuOpen
              ? theme.accent + "40"
              : "transparent",
          }}
          onClick={() => setSkillsMenuOpen(!skillsMenuOpen)}
        >
          <img src="/assets/home.png" alt="home" className="w-10 h-10" />
        </div>
        <div className="w-full mx-auto flex justify-center gap-x-2 px-0.5">
          <TaskbarApp appName="terminal" />
          <TaskbarApp appName="explorer" />
          <TaskbarApp appName="taskManager" />
          <TaskbarApp appName="telegram" />
          <TaskbarApp appName="settings" />
        </div>
        <div className="w-1/3 justify-end flex gap-x-2 items-center h-full">
          <Tooltip text="100% charging">
            <div>
              <img src="/assets/battery.png" className="w-6 h-6" />
            </div>
          </Tooltip>
          <Tooltip text="KraizanFi">
            <div>
              <img src="/assets/wifi.png" className="w-6 h-6" />
            </div>
          </Tooltip>
          <div className="h-[calc(100%-1rem)] w-1 mx-2" style={{backgroundColor: theme.primary}}/>
          <div className="self-center text-right font-medium">
            <p style={{ color: theme.text + "cc" }}>{formattedDate}</p>
            <p style={{ color: theme.text + "cc" }}>{formattedTime}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Taskbar;
