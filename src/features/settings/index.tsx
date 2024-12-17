import { useState } from 'react';
import { useSettings, wallpapers } from '@/context/SettingsContext';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('appearance');
  const { theme, wallpaper, setWallpaper, fontSize, setFontSize } = useSettings();

  const tabs = [
    { id: 'appearance', name: 'Appearance', icon: '🎨' },
    { id: 'system', name: 'System', icon: '⚙️' },
    { id: 'about', name: 'About', icon: 'ℹ️' },
  ];

  return (
    <div className="w-full h-full max-h-[calc(100vh-110px)] flex theme-transition" style={{ backgroundColor: theme.background + '99' }}>
      {/* Sidebar */}
      <div className="w-1/4 app-content theme-transition" style={{ 
        backgroundColor: theme.primary + 'cc'
      }}>
        <h2 className="app-heading" style={{ color: theme.text }}>Settings</h2>
        <ul className="space-y-2">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`app-list-item flex items-center gap-2 ${
                activeTab === tab.id
                  ? "shadow-md"
                  : "hover:bg-opacity-50"
              }`}
              style={{ 
                backgroundColor: activeTab === tab.id ? theme.accent + '99' : theme.primary + '99',
                color: theme.text
              }}
            >
              <span>{tab.icon}</span>
              <span>{tab.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {activeTab === 'appearance' && (
          <div className="app-content">
            {/* Current Theme Preview */}
            <section>
              <h3 className="app-subheading" style={{ color: theme.text }}>Current Theme</h3>
              <div 
                className="app-section border-2"
                style={{ 
                  background: theme.primary + 'cc',
                  borderColor: theme.secondary + '40'
                }}
              >
                <div className="flex items-center justify-between">
                  <span style={{ color: theme.text }}>{theme.name}</span>
                </div>
                <div className="mt-2 flex space-x-2">
                  {[theme.primary, theme.secondary, theme.accent].map(
                    (color, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 rounded-full border border-white/80"
                        style={{ 
                          background: color,
                        }}
                      />
                    )
                  )}
                </div>
                <p className="mt-4 text-sm opacity-80" style={{ color: theme.text }}>
                  Theme colors are automatically generated from the selected wallpaper.
                </p>
              </div>
            </section>

            {/* Wallpaper Section */}
            <section>
              <h3 className="app-subheading" style={{ color: theme.text }}>Wallpaper</h3>
              <div className="grid grid-cols-3 gap-4">
                {wallpapers.map((w) => (
                  <button
                    key={w.id}
                    onClick={() => setWallpaper(w.id)}
                    className="app-button relative aspect-video overflow-hidden border-2"
                    style={{ 
                      borderColor: wallpaper === w.url ? theme.accent : theme.secondary + '40'
                    }}
                  >
                    <img
                      src={w.url}
                      alt={w.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 text-sm" style={{ color: theme.text }}>
                      {w.name}
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Font Size Section */}
            <section>
              <h3 className="app-subheading" style={{ color: theme.text }}>Font Size</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setFontSize(fontSize - 1)}
                  className="app-button p-2 border disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ 
                    borderColor: theme.secondary + '40',
                    color: theme.text,
                    backgroundColor: theme.primary + '40'
                  }}
                  disabled={fontSize <= 12}
                >
                  -
                </button>
                <span style={{ color: theme.text }} className="min-w-[3rem] text-center">
                  {fontSize}px
                </span>
                <button
                  onClick={() => setFontSize(fontSize + 1)}
                  className="app-button p-2 border disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ 
                    borderColor: theme.secondary + '40',
                    color: theme.text,
                    backgroundColor: theme.primary + '40'
                  }}
                  disabled={fontSize >= 24}
                >
                  +
                </button>
                <button
                  onClick={() => setFontSize(16)}
                  className="ml-4 px-3 py-1 text-sm opacity-80 hover:opacity-100"
                  style={{ color: theme.text }}
                >
                  Reset
                </button>
              </div>
              <div 
                className="app-section border mt-4"
                style={{ 
                  borderColor: theme.secondary + '40',
                  backgroundColor: theme.primary + '40'
                }}
              >
                <p style={{ 
                  fontSize: `${fontSize}px`,
                  color: theme.text 
                }}>
                  Preview text at {fontSize}px
                </p>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'system' && (
          <div className="app-content">
            <h3 className="app-subheading" style={{ color: theme.text }}>System Settings</h3>
            <p style={{ color: theme.text + 'cc' }}>System settings coming soon...</p>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="app-content">
            <h3 className="app-subheading" style={{ color: theme.text }}>About</h3>
            <div className="space-y-4" style={{ color: theme.text + 'cc' }}>
              <p>Portfolio OS Version 1.0.0</p>
              <p>A modern, customizable portfolio interface</p>
              <p>Built with React, TypeScript, and Tailwind CSS</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;