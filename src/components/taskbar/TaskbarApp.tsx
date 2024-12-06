const TaskbarApp = ({appName}: {appName: String}) => {
  return (
    <div className="hover:scale-[120%] transition-all duration-100 hover:-translate-y-1 hover:cursor-pointer hover:bg-slate-50 hover:bg-opacity-30 p-0.5">
      <img src={`/assets/${appName}.png`} alt={`${appName}`} className="w-12 h-12" />
    </div>
  );
};

export default TaskbarApp;
