interface TerminalOutputProps {
  outputHistory: Array<{ type: 'command' | 'output', content: string, path?: string }>;
}

const TerminalOutput = ({ outputHistory }: TerminalOutputProps) => {
  return (
    <div className="space-y-1 max-h-[calc(100vh-25rem)] overflow-y-auto custom-scrollbar px-4 py-2">
      {outputHistory.map((entry, index) => (
        <div key={index} className="terminal-text">
          {entry.type === 'command' ? (
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-blue-500">
                user@portfolio:<span className="text-green-500">{entry.path === '/' ? '~' : `~${entry.path}`}</span>$
              </span>
              <span className="text-green-500">{entry.content}</span>
            </div>
          ) : (
            <div 
              className="text-gray-300 whitespace-pre-wrap my-2"
              dangerouslySetInnerHTML={{ __html: entry.content }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TerminalOutput;