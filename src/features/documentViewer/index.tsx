import { useAppContext } from "@/context/AppContext";
import { useSettings } from "@/context/SettingsContext";
import ReactMarkdown from "react-markdown";

const DocumentViewer = () => {
  const { currentDocument } = useAppContext();
  const { theme } = useSettings();

  if (!currentDocument) {
    return (
      <div
        className="w-full h-full flex items-center justify-center theme-transition"
        style={{
          backgroundColor: theme.background + "99",
          color: theme.text,
        }}
      >
        <h1>No Document Selected</h1>
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-full flex flex-col theme-transition"
      style={{
        backgroundColor: theme.background + "99",
      }}
    >
      <div className="absolute w-full h-full overflow-hidden p-8">
        <div style={{ color: theme.text }}>
          <ReactMarkdown
            className="markdown-body absolute w-[calc(100%-3rem)] h-[calc(100%-4rem)] overflow-auto pr-8 custom-scrollbar"
            children={currentDocument}
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentViewer;
