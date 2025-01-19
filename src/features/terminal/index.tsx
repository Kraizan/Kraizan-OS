import { useState, useEffect, useRef } from "react";
import TerminalHeader from "./components/Header";
import TerminalPrompt from "./components/Prompt";
import TerminalOutput from "./components/Output";
import { useTerminalCommands } from "@/hooks/useTerminalCommands";

const Terminal = () => {
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [outputHistory, setOutputHistory] = useState<
    Array<{ type: "command" | "output"; content: string; path?: string }>
  >([]);
  const { currentPath, executeCommand } = useTerminalCommands();
  const outputRef = useRef<HTMLDivElement>(null);

  const handleCommand = async (command: string) => {
    if (command.toLowerCase() === "clear") {
      setOutputHistory([]);
      return;
    }

    setCommandHistory((prev) => [...prev, command]);
    setOutputHistory((prev) => [
      ...prev,
      { type: "command", content: command, path: currentPath },
    ]);

    const output = await executeCommand(command);
    if (output !== "CLEAR_TERMINAL") {
      setOutputHistory((prev) => [
        ...prev,
        { type: "output", content: output },
      ]);
    } else {
      setOutputHistory([]);
    }
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [outputHistory]);

  return (
    <div className="w-full h-full flex flex-col bg-gray-900 text-green-500 font-mono text-sm rounded-lg overflow-hidden border border-gray-700 shadow-xl">
      <TerminalHeader className="flex-shrink-0" />
      <div className="flex-1 min-h-0 flex flex-col">
        <TerminalOutput outputHistory={outputHistory} />
        <div className="flex-shrink-0 border-t border-gray-700 bg-gray-800 bg-opacity-50">
          <TerminalPrompt
            currentPath={currentPath}
            onCommand={handleCommand}
            commandHistory={commandHistory}
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
