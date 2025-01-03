import { useState } from "react";
import { folderStructure } from "@/data/folderStructure";
import type { FolderItem } from "@/data/folderStructure";
import { skillCategories } from "@/data/skills";

export const useTerminalCommands = () => {
  const [currentPath, setCurrentPath] = useState("/");

  const getNodeAtPath = (targetPath: string): FolderItem | null => {
    if (targetPath === "/") return folderStructure.root;

    const parts = targetPath.split("/").filter(Boolean);
    let current: FolderItem = folderStructure.root;

    for (const part of parts) {
      if (
        current.type === "file" ||
        !current.children ||
        !(part in current.children)
      )
        return null;
      current = current.children[part];
    }

    return current;
  };

  const getAbsolutePath = (targetPath: string): string => {
    if (targetPath.startsWith("/")) return targetPath;
    if (targetPath === "..") {
      const parts = currentPath.split("/").filter(Boolean);
      parts.pop();
      return "/" + parts.join("/");
    }
    if (currentPath === "/") return "/" + targetPath;
    return currentPath + "/" + targetPath;
  };

  const formatHelp = (cmd: string, desc: string) => {
    return `<div class="flex">
      <span class="text-yellow-500 w-28 flex-shrink-0">${cmd}</span>
      <span class="text-gray-300">${desc}</span>
    </div>`;
  };

  const commands = {
    help: () => `<div class="space-y-2">
      <span class="text-blue-400 font-bold text-lg block mb-2">Available Commands:</span>
      ${formatHelp("ls", "List directory contents")}
      ${formatHelp("cd [dir]", "Change directory")}
      ${formatHelp("pwd", "Print working directory")}
      ${formatHelp("cat [file]", "Display file contents")}
      ${formatHelp("clear", "Clear the terminal screen")}
      ${formatHelp("whoami", "Display user information")}
      ${formatHelp("date", "Display current date and time")}
      ${formatHelp("skills", "List all skills and proficiencies")}
      ${formatHelp("tree", "Display directory structure as tree")}
      ${formatHelp("echo [text]", "Display a line of text")}
    </div>`,

    pwd: () => currentPath,

    ls: (args: string[]) => {
      const targetPath = args[0] ? getAbsolutePath(args[0]) : currentPath;
      const node = getNodeAtPath(targetPath);

      if (!node || node.type !== "folder") {
        return `ls: cannot access '${targetPath}': No such directory`;
      }

      const entries = Object.entries(node.children);
      if (entries.length === 0)
        return '<span class="text-gray-500">Directory is empty</span>';

      return entries
        .map(([name, item]) => {
          if (item.type === "folder")
            return `<span class="text-blue-500 font-bold">${name}/</span>`;
          return `<span class="text-gray-300">${name}</span>`;
        })
        .join("  ");
    },

    cd: (args: string[]) => {
      if (!args[0] || args[0] === "~") {
        setCurrentPath("/Home");
        return "";
      }

      const targetPath = getAbsolutePath(args[0]);
      const node = getNodeAtPath(targetPath);

      if (!node || node.type !== "folder") {
        return `cd: no such directory: ${args[0]}`;
      }

      setCurrentPath(targetPath);
      return "";
    },

    cat: (args: string[]) => {
      if (!args[0]) return "cat: missing file operand";

      const targetPath = getAbsolutePath(args[0]);
      const node = getNodeAtPath(targetPath);

      if (!node || node.type !== "file") {
        return `cat: ${args[0]}: No such file`;
      }

      return `<div class="bg-gray-900 p-4 rounded-lg shadow-inner border border-gray-700">
        <div class="text-blue-400 font-bold mb-2">${args[0]}</div>
        <div class="text-gray-300">${node.content || ""}</div>
      </div>`;
    },

    clear: () => "CLEAR_TERMINAL",

    whoami:
      () => `<div class="bg-gray-900 p-4 rounded-lg shadow-inner border border-gray-700">
<span class="text-blue-400 font-bold">User Information</span>
<div class="mt-2 space-y-1">
  <div><span class="text-yellow-500">Username:</span> <span class="text-gray-300">user</span></div>
  <div><span class="text-yellow-500">Host:</span> <span class="text-gray-300">portfolio</span></div>
  <div><span class="text-yellow-500">Shell:</span> <span class="text-gray-300">/bin/bash</span></div>
  <div><span class="text-yellow-500">Location:</span> <span class="text-gray-300">${currentPath}</span></div>
</div>
</div>`,

    date: () => {
      const now = new Date();
      return `<div class="text-yellow-500">${now.toLocaleString()}</div>`;
    },

    skills: () => {
      const formatSkill = (name: string, proficiency: number) => {
        const dots = "●".repeat(proficiency) + "○".repeat(5 - proficiency);
        return `<div class="flex justify-between">
          <span class="text-gray-300">${name}</span>
          <span class="text-blue-500">${dots}</span>
        </div>`;
      };

      return `<div class="space-y-4">
        ${skillCategories
          .map(
            (category) => `
          <div class="bg-gray-900 p-4 rounded-lg shadow-inner border border-gray-700">
            <div class="text-yellow-500 font-bold mb-2">${category.name}</div>
            <div class="space-y-1">
              ${category.skills
                .map((skill) => formatSkill(skill.name, skill.proficiency))
                .join("")}
            </div>
          </div>
        `
          )
          .join("")}
      </div>`;
    },

    tree: (args: string[]) => {
      const targetPath = args[0] ? getAbsolutePath(args[0]) : currentPath;
      const node = getNodeAtPath(targetPath);

      if (!node || node.type !== "folder") {
        return `tree: cannot access '${targetPath}': No such directory`;
      }

      const buildTree = (node: FolderItem, prefix = ""): string => {
        if (node.type === "file") {
          return `<div>${prefix}<span class="text-gray-300">└── ${node.name}</span></div>`;
        }

        const entries = Object.entries(node.children);
        return entries
          .map(([name, item], index) => {
            const isLast = index === entries.length - 1;
            const newPrefix = prefix + (isLast ? "    " : "│   ");
            const connector = isLast ? "└── " : "├── ";

            if (item.type === "folder") {
              return `<div>${prefix}${connector}<span class="text-blue-500 font-bold">${name}/</span></div>${buildTree(
                item,
                newPrefix
              )}`;
            }
            return `<div>${prefix}${connector}<span class="text-gray-300">${name}</span></div>`;
          })
          .join("");
      };

      return `<div class="font-mono">
        <div><span class="text-blue-500 font-bold">${
          targetPath === "/" ? "/" : targetPath.split("/").pop()
        }</span></div>
        ${buildTree(node)}
      </div>`;
    },

    echo: (args: string[]) => {
      if (!args.length) return "";
      return `<span class="text-gray-300">${args.join(" ")}</span>`;
    },
  };

  const executeCommand = async (input: string): Promise<string> => {
    const [cmd, ...args] = input.trim().split(" ");
    const command = commands[cmd as keyof typeof commands];

    if (!command) {
      return `<span class="text-red-500">Command not found: ${cmd}</span>
<span class="text-gray-500">Type 'help' to see available commands.</span>`;
    }

    try {
      return await command(args);
    } catch (error) {
      return `<span class="text-red-500">Error executing command: ${error}</span>`;
    }
  };

  return {
    currentPath,
    executeCommand,
  };
};
