import { Skill, SkillIcon } from '@/data/skills';
import { Theme } from '@/context/SettingsContext';

export interface SkillsMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface SkillIconProps {
  icon: SkillIcon;
  size?: 'sm' | 'md';
}

export interface SkillCardProps {
  skill: Skill;
}

export interface CategoryListProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  theme: Theme;
}

export interface SkillListProps {
  skills: Skill[];
} 