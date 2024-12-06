import { useAppContext } from "@/context/AppContext";
import { folderStructure } from "@/data/folderStructure";

const Explorer = () => {
  const { explorerState, navigateTo, goBack, goForward, getFolder } =
    useAppContext();
  const { currentPath, history, historyIndex } = explorerState;

  const currentFolder = getFolder(currentPath);

  return (
    <div className="w-full h-full flex bg-background">
      <div className="w-1/4 bg-gray-200 p-4">
        <h2 className="font-bold">Folders</h2>
        <ul>
          {Object.values(folderStructure.root.children).map((folder: any) => (
            <li
              key={folder.path}
              className="cursor-pointer"
              onClick={() => navigateTo(folder.path)}
            >
              {folder.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 flex flex-col">
        <div className="flex items-center bg-gray-300 p-2">
          <button
            onClick={goBack}
            disabled={historyIndex === 0}
            className="mr-2"
          >
            Back
          </button>
          <button
            onClick={goForward}
            disabled={historyIndex === history.length - 1}
            className="mr-2"
          >
            Forward
          </button>
          <div className="flex-grow text-center">
            {currentPath
              .split("/")
              .filter(Boolean)
              .map((part, index, arr) => (
                <span
                  key={index}
                  className="cursor-pointer"
                  onClick={() =>
                    navigateTo("/" + arr.slice(0, index + 1).join("/"))
                  }
                >
                  {part} {index < arr.length - 1 && " / "}
                </span>
              ))}
          </div>
        </div>
        <div className="flex-grow p-4">
          <h2 className="font-bold">{currentFolder.name}</h2>
          <ul>
            {Object.values(currentFolder.children).map((folder: any) => (
              <li
                key={folder.path}
                className="cursor-pointer"
                onClick={() => navigateTo(folder.path)}
              >
                {folder.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Explorer;
