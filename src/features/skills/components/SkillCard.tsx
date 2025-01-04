import { useSettings } from '@/context/SettingsContext';
import { SkillCardProps } from '@/types/skills';
import SkillIcon  from './SkillIcon';

const SkillCard = ({ skill }: SKillCardProps) => {
  const { theme } = useSettings();
  
  return (
    <div className="flex items-center gap-3 p-2 rounded cursor-pointer group transition-all hover:bg-opacity-10" style={{
      backgroundColor: 'transparent',
      color: theme.text
    }}>
      <SkillIcon icon={skill.icon} />
      <div>
        <div className="text-sm font-medium">{skill.name}</div>
        <div className="text-xs" style={{ color: theme.text + 'cc' }}>{skill.description}</div>
      </div>
      <div className="ml-auto flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-1 h-4 rounded-full transition-all ${
              i < skill.proficiency ? "" : ""
            } ${i < skill.proficiency ? "group-hover:h-5" : "group-hover:h-2"}`}
            style={{
              backgroundColor: i < skill.proficiency ? theme.text : theme.text + '40'
            }}
          />
        ))}
      </div>
    </div>
  );
}; 

export default SkillCard;