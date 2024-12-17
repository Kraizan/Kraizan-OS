import { skillCategories } from "@/data/skills";
import type { Skill, SkillIcon } from "@/data/skills";
import { useState } from "react";
import { useSettings } from "@/context/SettingsContext";

interface SkillsMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SkillIcon = ({ icon }: { icon: SkillIcon }) => {
  if (icon.type === "svg") {
    return (
      <svg viewBox={icon.viewBox} className="w-8 h-8">
        {icon.paths?.map((path, index) => (
          <path key={index} d={path.d} fill={path.fill} />
        ))}
      </svg>
    );
  }
  return <img src={icon.src} alt="skill icon" className="w-8 h-8" />;
};

const SkillCard = ({ skill }: { skill: Skill }) => {
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

const CategoryIcon = ({ icon }: { icon: SkillIcon }) => {
  if (icon.type === "svg") {
    return (
      <svg viewBox={icon.viewBox} className="w-6 h-6">
        {icon.paths?.map((path, index) => (
          <path key={index} d={path.d} fill={path.fill} />
        ))}
      </svg>
    );
  }
  return <img src={icon.src} alt="category icon" className="w-6 h-6" />;
};

const SkillsMenu = ({ isOpen, onClose }: SkillsMenuProps) => {
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0].name);
  const { theme } = useSettings();
  const selectedCategoryData = skillCategories.find(
    (category) => category.name === selectedCategory
  );

  const handleClose = () => {
    onClose();
  };

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
            onClick={handleClose}
            className="rounded-full p-2 transition-colors hover:bg-opacity-10"
            style={{ backgroundColor: 'transparent' }}
          >
            <img src="/assets/close.png" alt="close" className="w-6 h-6" />
          </button>
        </div>

        <div className="flex h-[500px]">
          {/* Left Pane - Categories */}
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
                onClick={() => setSelectedCategory(category.name)}
                style={{ 
                  backgroundColor: selectedCategory === category.name ? theme.accent + '20' : 'transparent',
                  borderRightColor: selectedCategory === category.name ? theme.accent : 'transparent',
                  color: theme.text
                }}
              >
                <CategoryIcon icon={category.icon} />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Right Pane - Skills */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-2">
              {selectedCategoryData?.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsMenu;
