import { useState } from 'react';
import { folderStructure } from '@/data/folderStructure';
import type { FolderItem } from '@/data/folderStructure';

export const useTerminalCommands = () => {
  const [currentPath, setCurrentPath] = useState('/');

  const getNodeAtPath = (targetPath: string): FolderItem | null => {
    if (targetPath === '/') return folderStructure.root;
    
    const parts = targetPath.split('/').filter(Boolean);
    let current: FolderItem = folderStructure.root;
    
    for (const part of parts) {
      if (current.type === 'file' || !current.children || !(part in current.children)) return null;
      current = current.children[part];
    }
    
    return current;
  };

  const getAbsolutePath = (targetPath: string): string => {
    if (targetPath.startsWith('/')) return targetPath;
    if (targetPath === '..') {
      const parts = currentPath.split('/').filter(Boolean);
      parts.pop();
      return '/' + parts.join('/');
    }
    if (currentPath === '/') return '/' + targetPath;
    return currentPath + '/' + targetPath;
  };

  const commands = {
    help: () => `Available commands:
  ls              List directory contents
  cd <dir>        Change directory
  pwd             Print working directory
  cat <file>      Display file contents
  clear           Clear the terminal screen`,

    pwd: () => currentPath,

    ls: (args: string[]) => {
      const targetPath = args[0] ? getAbsolutePath(args[0]) : currentPath;
      const node = getNodeAtPath(targetPath);
      
      if (!node || node.type !== 'folder') {
        return `ls: cannot access '${targetPath}': No such directory`;
      }

      return Object.entries(node.children)
        .map(([name, item]) => {
          if (item.type === 'folder') return `<span class="text-blue-500">${name}/</span>`;
          return name;
        })
        .join('  ');
    },

    cd: (args: string[]) => {
      if (!args[0] || args[0] === '~') {
        setCurrentPath('/Home');
        return '';
      }

      const targetPath = getAbsolutePath(args[0]);
      const node = getNodeAtPath(targetPath);

      if (!node || node.type !== 'folder') {
        return `cd: no such directory: ${args[0]}`;
      }

      setCurrentPath(targetPath);
      return '';
    },

    cat: (args: string[]) => {
      if (!args[0]) return 'cat: missing file operand';

      const targetPath = getAbsolutePath(args[0]);
      const node = getNodeAtPath(targetPath);

      if (!node || node.type !== 'file') {
        return `cat: ${args[0]}: No such file`;
      }

      return node.content || '';
    },

    clear: () => {
      return 'CLEAR_TERMINAL';
    }
  };

  const executeCommand = async (input: string): Promise<string> => {
    const [cmd, ...args] = input.trim().split(' ');
    const command = commands[cmd as keyof typeof commands];

    if (!command) {
      return `Command not found: ${cmd}\nType 'help' to see available commands.`;
    }

    try {
      return await command(args);
    } catch (error) {
      return `Error executing command: ${error}`;
    }
  };

  return {
    currentPath,
    executeCommand
  };
}; 