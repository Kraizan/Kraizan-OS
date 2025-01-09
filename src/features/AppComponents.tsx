import Terminal from '@/features/terminal';
import TaskManager from '@/features/taskManager';
import Explorer from '@/features/explorer';
import Settings from '@/features/settings';
import DocumentViewer from '@/features/documentViewer';
import Telegram from '@/features/telegram';
import Quickstart from '@/features/quickstart';

const AppComponents: { [key: string]: () => JSX.Element } = {
  terminal: Terminal,
  taskManager: TaskManager,
  explorer: Explorer,
  settings: Settings,
  documentViewer: DocumentViewer,
  telegram: Telegram,
  quickstart: Quickstart,
};

export default AppComponents;