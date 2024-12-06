import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import Taskbar from "./components/taskbar";
import Explorer from "./components/explorer";

const App = () => {
  return (
    <main className="w-full h-screen bg-wallpaper bg-cover">
      <Taskbar />
    </main>
  );
};

export default App;
