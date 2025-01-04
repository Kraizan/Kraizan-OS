import { SkillListProps } from '@/types/skills';
import SkillCard from './SkillCard';

const SkillList = ({ skills }: SkillListProps) => {
  return (
    <div className="flex-1 p-4 overflow-y-auto">
      <div className="space-y-2">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}; 

export default SkillList;