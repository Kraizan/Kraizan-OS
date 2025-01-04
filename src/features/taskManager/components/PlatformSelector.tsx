import { platforms, Platform } from '@/data/platforms';
import { useSettings } from '@/context/SettingsContext';
import { PlatformSelectorProps } from '@/types/contest'

const PlatformSelector = ({ selectedPlatform, onPlatformSelect }: PlatformSelectorProps) => {
  const { theme } = useSettings();

  return (
    <div className="w-1/4 app-content theme-transition" style={{ 
      backgroundColor: theme.primary + 'cc'
    }}>
      <h2 className="app-heading" style={{ color: theme.text }}>Platforms</h2>
      <ul className="space-y-2">
        {platforms.map((platform: Platform) => (
          <li
            key={platform.name}
            className={`app-list-item ${
              selectedPlatform === platform.name
                ? "shadow-md"
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