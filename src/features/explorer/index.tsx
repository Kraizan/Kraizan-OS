import { useAppContext } from "@/context/AppContext";
import { useSettings } from "@/context/SettingsContext";
import { folderStructure } from "@/data/folderStructure";
import React from 'react';

const Explorer = () => {
  const { explorerState, navigateTo, goBack, goForward, getFolder, openDocument } = useAppContext();
  const { theme } = useSettings();
  const { currentPath, history, historyIndex } = explorerState;

  const currentFolder = getFolder(currentPath);

  if (!currentFolder) {
    return (
      <div className="w-full h-full flex theme-transition" style={{ 
        backgroundColor: theme.background + '99',
        color: theme.text
      }}>
        Folder not found
      </div>
    );
  }

  const handleItemClick = (item: any) => {
    if (item.type === 'file') {
      openDocument(item.content);
    } else {
      navigateTo(item.path);
    }
  };

  return (
    <div className="w-full h-full flex flex-col theme-transition" style={{ 
      backgroundColor: theme.background + '99'
    }}>
      {/* Breadcrumb Navigation */}
      <div className="w-full flex items-center px-4 py-2 border-b theme-transition" style={{ 
        backgroundColor: theme.primary + 'cc',
        borderColor: theme.secondary + '40'
      }}>
        <button 
          onClick={goBack} 
          disabled={historyIndex === 0} 
          className="app-button mr-2 px-2 py-1 disabled:opacity-50"
          style={{ 
            color: theme.text,
            backgroundColor: 'transparent'
          }}
        >
          &#129136; Back
        </button>
        <button
          onClick={goForward}
          disabled={historyIndex === history.length - 1}
          className="app-button mr-2 px-2 py-1 disabled:opacity-50"
          style={{ 
            color: theme.text,
            backgroundColor: 'transparent'
          }}
        >
          Forward &#129138;
        </button>
        <div className="flex-grow text-center" style={{ color: theme.text }}>
          {currentPath
            .split("/")
            .filter(Boolean)
            .map((part, index, arr) => (
              <React.Fragment key={index}>
                <span
                  className="cursor-pointer hover:underline hover:underline-offset-2 mx-2 transition-colors"
                  style={{ color: theme.text }}
                  onClick={() =>
                    navigateTo("/" + arr.slice(0, index + 1).join("/"))
                  }
                >
                  {index === 0 ? "Home" : part}
                </span>
                <span>{index < arr.length - 1 && "\t>\t"}</span>
              </React.Fragment>
            ))}
        </div>
      </div>

      {/* Explorer Content */}
      <div className="flex h-full space-x-2 px-2">
        {/* Sidebar */}
        <div className="w-1/5 app-section" style={{ 
          backgroundColor: theme.primary + '40'
        }}>
          <h2 className="app-subheading" style={{ color: theme.text }}>Home</h2>
          <ul>
            {Object.values(folderStructure.root.children.Home.children).map(
              (folder: any) => (
                <li
                  key={folder.path}
                  className="app-list-item flex items-center gap-2"
                  style={{ 
                    color: theme.text
                  }}
                  onClick={() => navigateTo(folder.path)}
                >
                  <img
                    src={folder.image}
                    alt={folder.name}
                    className="w-8 h-8"
                  />
                  <p>{folder.name}</p>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-4/5 flex flex-col app-section" style={{ 
          backgroundColor: theme.primary + '20'
        }}>
          <div className="flex-grow">
            <h2 className="app-subheading" style={{ color: theme.text }}>{currentFolder.name}</h2>
            <ul className="flex flex-wrap gap-6">
              {Object.values(currentFolder.children).map((item: any) => (
                <li
                  key={item.path}
                  className="app-list-item text-center px-5 py-2"
                  style={{ 
                    color: theme.text
                  }}
                  onClick={() => handleItemClick(item)}
                >
                  <img
                    src={item.type === 'file' ? '/assets/file.png' : item.image}
                    alt={item.name}
                    className="w-20 h-20 mx-auto mb-2"
                  />
                  <p className="">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explorer;