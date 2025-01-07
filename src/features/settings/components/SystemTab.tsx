import { FC } from 'react';
import { SystemTabProps } from '@/types/settings';

const SystemTab = ({ theme }: SystemTabProps) => {
  return (
    <div className="p-6 space-y-8">
      <h3 className="text-lg font-semibold mb-4" style={{ color: theme.text }}>System Settings</h3>
      <p style={{ color: theme.text + 'cc' }}>System settings coming soon...</p>
    </div>
  );
}; 

export default SystemTab