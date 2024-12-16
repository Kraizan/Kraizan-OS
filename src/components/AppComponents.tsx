import Terminal from '@/components/terminal';
import TaskManager from '@/components/taskManager';
import Explorer from '@/components/explorer';
// import About from '@/components/about';
// import Settings from '@/components/settings';

const AppComponents: { [key: string]: () => JSX.Element } = {
  terminal: Terminal,
  taskManager: TaskManager,
  explorer: Explorer,
  // about: About,
  // settings: Settings,
};

export default AppComponents;