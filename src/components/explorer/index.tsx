import { useAppContext } from "@/context/AppContext";
import { folderStructure } from "@/data/folderStructure";

const Explorer = () => {
  const { explorerState, navigateTo, goBack, goForward, getFolder } =
    useAppContext();
  const { currentPath, history, historyIndex } = explorerState;

  const currentFolder = getFolder(currentPath);

  if (!currentFolder) {
    return (
      <div className="w-full h-full flex bg-background">Folder not found</div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col bg-background-dark">
      <div className="w-full flex items-center px-4 py-2">
        <button onClick={goBack} disabled={historyIndex === 0} className="mr-2">
          &#129136; Back
        </button>
        <button
          onClick={goForward}
          disabled={historyIndex === history.length - 1}
          className="mr-2"
        >
          Forward &#129138;
        </button>
        <div className="flex-grow text-center">
          {currentPath
            .split("/")
            .filter(Boolean)
            .map((part, index, arr) => (
              <>
                <span
                  key={index}
                  className="cursor-pointer hover:underline hover:underline-offset-2 mx-2"
                  onClick={() =>
                    navigateTo("/" + arr.slice(0, index + 1).join("/"))
                  }
                >
                  {index === 0 ? "Home" : part}
                </span>
                <span>{index < arr.length - 1 && "\t>\t"}</span>
              </>
            ))}
        </div>
      </div>
      <div className="flex h-full space-x-2 px-2">
        <div className="w-1/5 bg-background p-4 rounded-lg">
          <h2 className="font-bold">Home</h2>
          <ul>
            {Object.values(folderStructure.root.children.Home.children).map(
              (folder: any) => (
                <li
                  key={folder.path}
                  className="cursor-pointer flex items-center gap-2"
                  onClick={() => navigateTo(folder.path)}
                >
                  <img
                    src={folder.image}
                    alt={folder.name}
                    className="w-8 h-8"
                  />
                  <p className="">{folder.name}</p>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="w-4/5 flex flex-col bg-background rounded-lg">
          <div className="flex-grow p-4">
            <h2 className="font-bold">{currentFolder.name}</h2>
            <ul className="flex flex-wrap gap-6">
              {Object.values(currentFolder.children).map((folder: any) => (
                <li
                  key={folder.path}
                  className="cursor-pointer text-center hover:bg-background-dark px-5 py-2"
                  onClick={() => navigateTo(folder.path)}
                >
                  <img
                    src={folder.image}
                    alt={folder.name}
                    className="w-20 h-20 mx-auto"
                  />
                  <p>{folder.name}</p>
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
