import { SkillIconProps } from '@/types/skills';

const SkillIcon = ({ icon, size = 'md' }: SkillIconProps) => {
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

export default SkillIcon;