import Terminal from '@/components/terminal';
import TaskManager from '@/components/taskManager';
import Explorer from '@/components/explorer';
import Settings from '@/components/settings';
import DocumentViewer from '@/components/documentViewer';

const AppComponents: { [key: string]: () => JSX.Element } = {
  terminal: Terminal,
  taskManager: TaskManager,
  explorer: Explorer,
  settings: Settings,
  documentViewer: DocumentViewer,
};

export default AppComponents;