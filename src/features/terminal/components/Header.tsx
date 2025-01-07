interface TerminalHeaderProps {
  className?: string;
}

const TerminalHeader = ({ className = '' }: TerminalHeaderProps) => {
  const asciiArt = `__    __                     __                               
/  |  /  |                   /  |                              
$$ | /$$/   ______   ______  $$/  ________   ______   _______  
$$ |/$$/   /      \ /      \ /  |/        | /      \ /       \ 
$$  $$<   /$$$$$$  |$$$$$$  |$$ |$$$$$$$$/  $$$$$$  |$$$$$$$  |
$$$$$  \  $$ |  $$/ /    $$ |$$ |  /  $$/   /    $$ |$$ |  $$ |
$$ |$$  \ $$ |     /$$$$$$$ |$$ | /$$$$/__ /$$$$$$$ |$$ |  $$ |
$$ | $$  |$$ |     $$    $$ |$$ |/$$      |$$    $$ |$$ |  $$ |
$$/   $$/ $$/       $$$$$$$/ $$/ $$$$$$$$/  $$$$$$$/ $$/   $$/ 
  `;

  return (
    <div className={`h-1/4 overflow-y-hidden p-4 border-b border-gray-700 ${className}`}>
      <pre className="text-green-500 text-xs">{asciiArt}</pre>
      <div className="mt-4 text-xs text-gray-500">
        Welcome to the terminal. Type 'help' to see available commands.
      </div>
    </div>
  );
};

export default TerminalHeader;