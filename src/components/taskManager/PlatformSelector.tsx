import { platforms, Platform } from '@/data/platforms';

interface PlatformSelectorProps {
  selectedPlatform: string;
  onPlatformSelect: (platform: string) => void;
}

const PlatformSelector = ({ selectedPlatform, onPlatformSelect }: PlatformSelectorProps) => {
  return (
    <div className="w-1/4 bg-white p-4 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Platforms</h2>
      <ul className="space-y-2">
        {platforms.map((platform: Platform) => (
          <li
            key={platform.name}
            className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
              selectedPlatform === platform.name
                ? "bg-blue-500 text-white shadow-md transform scale-105"
                : "hover:bg-gray-100 text-gray-700 hover:shadow"
            }`}
            onClick={() => onPlatformSelect(platform.name)}
          >
            {platform.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlatformSelector; 