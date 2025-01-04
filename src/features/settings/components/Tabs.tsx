import { FC } from 'react';
import { TabProps } from '@/types/settings';
import { TABS } from '@/constants/settings';

const Tabs = ({ theme, activeTab, onTabChange }: TabsProps) => {
  return (
    <div className="w-1/4 app-content theme-transition" style={{ 
      backgroundColor: theme.primary + 'cc'
    }}>
      <h2 className="app-heading" style={{ color: theme.text }}>Settings</h2>
      <ul className="space-y-2">
        {TABS.map((tab) => (
          <li
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
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
  );
}; 

export default Tabs;