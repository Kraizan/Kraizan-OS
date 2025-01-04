import { skillCategories } from '@/data/skills';
import { CategoryListProps } from '@/types/skills';
import SkillIcon from './SkillIcon';

const CategoryList = ({ selectedCategory, onCategorySelect, theme }: CategoryListProps) => {
  return (
    <div className="w-1/3 border-r overflow-y-auto" style={{ 
      borderColor: theme.secondary + '40'
    }}>
      {skillCategories.map((category) => (
        <button
          key={category.name}
          className={`w-full flex items-center gap-3 p-4 cursor-pointer transition-all ${
            selectedCategory === category.name
              ? "border-r-4 font-semibold"
              : "hover:bg-opacity-10 border-r-4 border-transparent"
          }`}
          onClick={() => onCategorySelect(category.name)}
          style={{ 
            backgroundColor: selectedCategory === category.name ? theme.accent + '20' : 'transparent',
            borderRightColor: selectedCategory === category.name ? theme.accent : 'transparent',
            color: theme.text
          }}
        >
          <SkillIcon icon={category.icon} size="sm" />
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
}; 

export default CategoryList;