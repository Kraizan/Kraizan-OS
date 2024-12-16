interface TerminalOutputProps {
  outputHistory: Array<{ type: 'command' | 'output', content: string, path?: string }>;
}

const TerminalOutput = ({ outputHistory }: TerminalOutputProps) => {
  return (
    <div className="p-2 space-y-1">
      {outputHistory.map((entry, index) => (
        <div key={index} className="terminal-text">
          {entry.type === 'command' ? (
            <div className="flex items-center space-x-2">
              <span className="text-blue-500">
                user@portfolio:<span className="text-green-500">{entry.path === '/' ? '~' : `~${entry.path}`}</span>$
              </span>
              <span className="text-green-500">{entry.content}</span>
            </div>
          ) : (
            <div 
              className="text-gray-300 whitespace-pre-wrap pl-4"
              dangerouslySetInnerHTML={{ __html: entry.content }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TerminalOutput;