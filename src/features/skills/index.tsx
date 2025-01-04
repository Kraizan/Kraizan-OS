import {  useState } from 'react';
import { skillCategories } from '@/data/skills';
import { useSettings } from '@/context/SettingsContext';
import { SkillsMenuProps } from '@/types/skills';
import CategoryList from './components/CategoryList';
import SkillList from './components/SkillList';

const SkillsMenu = ({ isOpen, onClose }: SkillsMenuProps) => {
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0].name);
  const { theme } = useSettings();
  const selectedCategoryData = skillCategories.find(
    (category) => category.name === selectedCategory
  );

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-opacity duration-200 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ backgroundColor: theme.background + '99' }}
    >
      <div className="w-[800px] bg-white rounded-lg shadow-xl overflow-hidden theme-transition" style={{ 
        backgroundColor: theme.primary + 'cc'
      }}>
        <div className="flex items-center justify-between p-4 border-b" style={{ 
          borderColor: theme.secondary + '40'
        }}>
          <h2 className="text-2xl font-bold" style={{ color: theme.text }}>Skills</h2>
          <button
            onClick={onClose}
            className="rounded-full p-2 transition-colors hover:bg-opacity-10"
            style={{ backgroundColor: 'transparent' }}
          >
            <img src="/assets/close.png" alt="close" className="w-6 h-6" />
          </button>
        </div>

        <div className="flex h-[500px]">
          <CategoryList 
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
            theme={theme}
          />
          {selectedCategoryData && (
            <SkillList skills={selectedCategoryData.skills} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsMenu; 