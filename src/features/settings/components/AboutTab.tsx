import { FC } from 'react';
import { AboutTabProps } from '@/types/settings';
import { APP_VERSION } from '@/constants/settings';

const AboutTab = ({ theme }: AboutTabProps) => {
  return (
    <div className="p-6 space-y-8">
      <h3 className="text-lg font-semibold mb-4" style={{ color: theme.text }}>About</h3>
      <div className="space-y-4" style={{ color: theme.text + 'cc' }}>
        <p>Portfolio OS Version {APP_VERSION}</p>
        <p>A modern, customizable portfolio interface</p>
        <p>Built with React, TypeScript, and Tailwind CSS</p>
      </div>
    </div>
  );
}; 

export default AboutTab