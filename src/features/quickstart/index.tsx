import { useSettings } from '@/context/SettingsContext';

const Quickstart = () => {
  const { theme } = useSettings();

  return (
    <div className="flex items-center justify-center h-full">
      <div className="p-6 rounded-lg shadow-lg flex flex-col theme-transition max-w-5xl mx-auto max-h-[70vh] overflow-y-auto custom-scrollbar" style={{ 
        backgroundColor: theme.primary + 'cc',
        color: theme.text
      }}>
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome to Kraizan OS</h2>
        <p className="mb-6 text-center">Kraizan OS is an attempt to create a unique interactive portfolio by someone who doesn't like CSS much. It provides a seamless and user-friendly experience for showcasing projects, skills, and experiences.</p>
        
        <h3 className="text-xl font-semibold mb-4">How to Use Kraizan OS:</h3>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><span className="font-bold">Taskbar:</span> Use the taskbar at the bottom to open different apps.</li>
          <li><span className="font-bold">File Explorer:</span> Browse the work experiences, projects, and the societies that I've contributed to.</li>
          <li><span className="font-bold">Terminal:</span> Execute commands and navigate the system using the command-line interface.</li>
          <li><span className="font-bold">Task Manager:</span> Monitor the coding profiles on various competitive programming and DSA platforms.</li>
          <li><span className="font-bold">Telegram:</span> Check the testimonials and what others have to say about me.</li>
          <li><span className="font-bold">Settings:</span> Customize the appearance and behavior of Kraizan OS. Check the about section to connect with me.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Additional Features:</h3>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><span className="font-bold">Customizable Themes:</span> Change the look and feel of the OS to match your preferences.</li>
          <li><span className="font-bold">Responsive Design:</span> The responsive design is under development. Currently, it is better viewed on PC screens.</li>
          <li><span className="font-bold">Interactive UI:</span> Enjoy a smooth and engaging user experience with interactive elements.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Getting Started:</h3>
        <p className="mb-6">To get started, explore the different apps using the taskbar at the bottom. Customize the appearance in the settings app to make the OS your own. If you have any questions or need assistance, feel free to reach out through the contact info in settings.</p>

        <div className="mt-8 text-center">
          <p className="text-lg font-semibold">Close the Quickstart app from top-right and explore Kraizan OS on your own!</p>
        </div>
      </div>
    </div>
  );
};

export default Quickstart;