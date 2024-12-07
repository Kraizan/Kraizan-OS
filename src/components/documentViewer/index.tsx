import { useAppContext } from '@/context/AppContext';
import ReactMarkdown from 'react-markdown';

const DocumentViewer = () => {
  const { currentDocument, closeDocument } = useAppContext();

  if (!currentDocument) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-background">
        <h1>No Document Selected</h1>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col bg-white shadow-lg">
      {/* Title Bar */}
      <div className="flex justify-between items-center p-4 bg-gray-200 border-b">
        <h2 className="text-xl font-semibold">Document Viewer</h2>
        <button
          onClick={closeDocument}
          className="text-red-500 hover:text-red-700 focus:outline-none"
        >
          Close
        </button>
      </div>
      
      {/* Content Area */}
      <div className="flex-grow p-4 overflow-auto">
        <ReactMarkdown className="prose prose-lg">
          {currentDocument}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default DocumentViewer;
