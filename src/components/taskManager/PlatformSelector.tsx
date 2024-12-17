import { platforms, Platform } from '@/data/platforms';
import { useSettings } from '@/context/SettingsContext';

interface PlatformSelectorProps {
  selectedPlatform: string;
  onPlatformSelect: (platform: string) => void;
}

const PlatformSelector = ({ selectedPlatform, onPlatformSelect }: PlatformSelectorProps) => {
  const { theme } = useSettings();

  return (
    <div className="w-1/4 p-4 theme-transition" style={{ 
      backgroundColor: theme.primary + 'cc'
    }}>
      <h2 className="text-2xl font-bold mb-6 text-white">Platforms</h2>
      <ul className="space-y-2">
        {platforms.map((platform: Platform) => (
          <li
            key={platform.name}
            className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
              selectedPlatform === platform.name
                ? "shadow-md transform scale-105"
                : "hover:bg-opacity-50"
            }`}
            style={{ 
              backgroundColor: selectedPlatform === platform.name ? theme.accent + '99' : theme.primary + '99',
              color: '#FFFFFF'
            }}
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