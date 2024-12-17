import { FC } from 'react';
import { SkillListProps } from '@/types/skills';
import { SkillCard } from '../SkillCard';

export const SkillList: FC<SkillListProps> = ({ skills }) => {
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