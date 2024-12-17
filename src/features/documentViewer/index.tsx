import { useAppContext } from '@/context/AppContext';
import { useSettings } from '@/context/SettingsContext';
import ReactMarkdown from 'react-markdown';

const DocumentViewer = () => {
  const { currentDocument, closeDocument } = useAppContext();
  const { theme } = useSettings();

  if (!currentDocument) {
    return (
      <div className="w-full h-full flex items-center justify-center theme-transition" style={{ 
        backgroundColor: theme.background + '99',
        color: theme.text
      }}>
        <h1>No Document Selected</h1>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col theme-transition" style={{ 
      backgroundColor: theme.background + '99'
    }}>
      {/* Title Bar */}
      <div className="flex justify-between items-center p-4 border-b theme-transition" style={{ 
        backgroundColor: theme.primary + 'cc',
        borderColor: theme.secondary + '40'
      }}>
        <h2 className="text-xl font-semibold" style={{ color: theme.text }}>Document Viewer</h2>
        <button
          onClick={closeDocument}
          className="hover:opacity-80 focus:outline-none transition-opacity"
          style={{ color: theme.accent }}
        >
          Close
        </button>
      </div>
      
      {/* Content Area */}
      <div className="flex-grow p-4 overflow-auto">
        <div style={{ color: theme.text }}>
          <ReactMarkdown className="prose prose-lg">
            {currentDocument}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default DocumentViewer;
