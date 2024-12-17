interface TerminalHeaderProps {
  className?: string;
}

const TerminalHeader = ({ className = '' }: TerminalHeaderProps) => {
  const systemInfo = {
    os: 'Linux',
    kernel: '6.12.4-arch1-1',
    shell: '/usr/bin/bash',
    packages: '1234',
    memory: '8GB / 16GB',
    cpu: 'AMD Ryzen 7 5800X (16) @ 3.800GHz',
  };

  const asciiArt = `
    ██████╗ ██████╗  ██████╗ ███████╗██╗██╗     ███████╗
    ██╔══██╗██╔══██╗██╔═══██╗██╔════╝██║██║     ██╔════╝
    ██████╔╝██████╔╝██║   ██║█████╗  ██║██║     █████╗  
    ██╔═══╝ ██╔══██╗██║   ██║██╔══╝  ██║██║     ██╔══╝  
    ██║     ██║  ██║╚██████╔╝██║     ██║███████╗███████╗
    ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝╚══════╝
  `;

  return (
    <div className={`p-4 border-b border-gray-700 ${className}`}>
      <div className="flex justify-between">
        <pre className="text-blue-500 text-xs">{asciiArt}</pre>
        <div className="text-xs space-y-1">
          <p><span className="text-blue-500">OS:</span> {systemInfo.os}</p>
          <p><span className="text-blue-500">Kernel:</span> {systemInfo.kernel}</p>
          <p><span className="text-blue-500">Shell:</span> {systemInfo.shell}</p>
          <p><span className="text-blue-500">Packages:</span> {systemInfo.packages}</p>
          <p><span className="text-blue-500">Memory:</span> {systemInfo.memory}</p>
          <p><span className="text-blue-500">CPU:</span> {systemInfo.cpu}</p>
        </div>
      </div>
      <div className="mt-4 text-xs text-gray-500">
        Welcome to the terminal. Type 'help' to see available commands.
      </div>
    </div>
  );
};

export default TerminalHeader; 