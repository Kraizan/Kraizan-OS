import { useState, useEffect, useRef } from "react";
import TerminalHeader from "./TerminalHeader";
import TerminalPrompt from "./TerminalPrompt";
import TerminalOutput from "./TerminalOutput";
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
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [outputHistory]);

  return (
    <div className="w-full h-full flex flex-col bg-terminal text-green-500 font-mono text-sm">
      <TerminalHeader />
      <div className="flex-1 flex flex-col">
        <TerminalOutput outputHistory={outputHistory} />
        <TerminalPrompt
          currentPath={currentPath}
          onCommand={handleCommand}
          commandHistory={commandHistory}
        />
        <div
          ref={outputRef}
          className="flex-1 overflow-y-auto terminal-scrollbar"
        ></div>
      </div>
    </div>
  );
};

export default Terminal;
