interface TerminalHeaderProps {
  className?: string;
}

const TerminalHeader = ({ className = '' }: TerminalHeaderProps) => {
  const asciiArt = `───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───
───█▒▒░░░░░░░░░▒▒█───
────█░░█░░░░░█░░█────
─▄▄──█░░░▀█▀░░░█──▄▄─
█░░█─▀▄░░░░░░░▄▀─█░░█
`;

  return (
    <div className={`h-[150px] overflow-y-hidden p-4 border-b border-gray-700 ${className}`}>
      <pre className="text-green-500 text-xs">{asciiArt}</pre>
      <div className="mt-4 text-xs text-gray-500">
        Welcome to the terminal. Type 'help' to see available commands.
      </div>
    </div>
  );
};

export default TerminalHeader;