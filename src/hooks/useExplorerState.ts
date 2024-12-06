import { useState } from 'react';
import { folderStructure } from '@/data/folderStructure';

export interface ExplorerState {
  currentPath: string;
  history: string[];
  historyIndex: number;
}

export const useExplorerState = () => {
  const [state, setState] = useState<ExplorerState>({
    currentPath: '/Home',
    history: ['/Home'],
    historyIndex: 0,
  });

  const navigateTo = (path: string) => {
    const newHistory = state.history.slice(0, state.historyIndex + 1);
    newHistory.push(path);
    setState({
      currentPath: path,
      history: newHistory,
      historyIndex: newHistory.length - 1,
    });
  };

  const goBack = () => {
    if (state.historyIndex > 0) {
      setState({
        ...state,
        currentPath: state.history[state.historyIndex - 1],
        historyIndex: state.historyIndex - 1,
      });
    }
  };

  const goForward = () => {
    if (state.historyIndex < state.history.length - 1) {
      setState({
        ...state,
        currentPath: state.history[state.historyIndex + 1],
        historyIndex: state.historyIndex + 1,
      });
    }
  };

  const getFolder = (path: string) => {
    const parts = path.split('/').filter(Boolean);
    let folder = folderStructure.root;
    for (const part of parts) {
      if (!folder.children[part]) {
        return null;
      }
      folder = folder.children[part];
    }
    return folder;
  };

  const resetExplorerState = () => {
    setState({
      currentPath: '/Home',
      history: ['/Home'],
      historyIndex: 0,
    });
  };

  return {
    state,
    navigateTo,
    goBack,
    goForward,
    getFolder,
    resetExplorerState,
  };
};