import Taskbar from "./components/taskbar";
import { AppProvider } from "@/context/AppContext";
import OpenedApps from "@/components/OpenedApps";

const App = () => {
  return (
    <AppProvider>
      <main className="w-full h-screen bg-wallpaper bg-cover relative">
        <OpenedApps />
        <Taskbar />
      </main>
    </AppProvider>
  );
};

export default App;
