import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("Establishing remote connection to Vanshaj Bhatnagar's PC");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 250);

    if (progress === 100) {
      setTimeout(() => setMessage("Connection successful"), 1000);
      setTimeout(() => setMessage("Welcome to Kraizan OS"), 2000);
    }
  }, [progress]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-cover bg-center text-white z-50" style={{ backgroundImage: 'url(/assets/wallpapers/ocean.jpg)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="relative text-2xl mb-4 animate-bounce">{message}</div>
      <div className="relative w-3/4 h-2 bg-gray-700 rounded-full overflow-hidden mb-4">
        <div className="h-full bg-blue-500 transition-all duration-300" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="relative text-lg animate-fade-in">{progress}%</div>
    </div>
  );
};

export default LoadingScreen;