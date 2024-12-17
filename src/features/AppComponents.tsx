import Terminal from '@/features/terminal';
import TaskManager from '@/features/taskManager';
import Explorer from '@/features/explorer';
import Settings from '@/features/settings';
import DocumentViewer from '@/features/documentViewer';

const AppComponents: { [key: string]: () => JSX.Element } = {
  terminal: Terminal,
  taskManager: TaskManager,
  explorer: Explorer,
  settings: Settings,
  documentViewer: DocumentViewer,
};

export default AppComponents;