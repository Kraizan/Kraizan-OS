import { useAppContext } from '@/context/AppContext';

const OpenedApps = () => {
  const { openedApps, closeApp } = useAppContext();

  if (openedApps.length === 0) {
    return null;
  }

  const currentApp = openedApps[openedApps.length - 1];

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-85 flex flex-col">
      <div className="flex justify-end p-2">
        <button onClick={closeApp} className="bg-red-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <h1 className="text-2xl">{currentApp}</h1>
      </div>
    </div>
  );
};

export default OpenedApps;