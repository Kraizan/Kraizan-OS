import Explorer from '@/components/explorer';
import DocumentViewer from '@/components/documentViewer';
import TaskManager from '@/components/taskManager';

const AppComponents: { [key: string]: React.ComponentType } = {
  explorer: Explorer,
  documentViewer: DocumentViewer,
  taskManager: TaskManager,
};

export default AppComponents;