import { FC } from 'react';
import { SkillIconProps } from '@/types/skills';

export const SkillIcon: FC<SkillIconProps> = ({ icon, size = 'md' }) => {
  const sizeClass = size === 'sm' ? 'w-6 h-6' : 'w-8 h-8';

  if (icon.type === "svg") {
    return (
      <svg viewBox={icon.viewBox} className={sizeClass}>
        {icon.paths?.map((path, index) => (
          <path key={index} d={path.d} fill={path.fill} />
        ))}
      </svg>
    );
  }
  return <img src={icon.src} alt="skill icon" className={sizeClass} />;
}; 