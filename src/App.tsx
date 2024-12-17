import Taskbar from "./features/taskbar";
import { AppProvider } from "@/context/AppContext";
import OpenedApps from "@/features/OpenedApps";

const App = () => {
  return (
    <AppProvider>
      <main className="w-full h-screen bg-wallpaper bg-cover flex flex-col overflow-hidden">
        <OpenedApps />
        <Taskbar />
      </main>
    </AppProvider>
  );
};

export default App;
