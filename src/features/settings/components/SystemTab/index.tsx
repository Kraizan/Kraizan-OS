import { FC } from 'react';
import { SystemTabProps } from '@/types/settings';

export const SystemTab: FC<SystemTabProps> = ({ theme }) => {
  return (
    <div className="app-content">
      <h3 className="app-subheading" style={{ color: theme.text }}>System Settings</h3>
      <p style={{ color: theme.text + 'cc' }}>System settings coming soon...</p>
    </div>
  );
}; 