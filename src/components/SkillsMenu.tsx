import { skillCategories } from "@/data/skills";
import type { Skill, SkillIcon } from "@/data/skills";
import { useEffect, useRef, useState } from "react";

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

const SkillCard = ({ skill }: { skill: Skill }) => (
  <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer group">
    <SkillIcon icon={skill.icon} />
    <div>
      <div className="text-sm font-medium">{skill.name}</div>
      <div className="text-xs text-gray-500">{skill.description}</div>
    </div>
    <div className="ml-auto flex gap-1">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`w-1 h-4 rounded-full transition-all ${
            i < skill.proficiency ? "bg-blue-500" : "bg-gray-200"
          } ${i < skill.proficiency ? "group-hover:h-5" : "group-hover:h-2"}`}
        />
      ))}
    </div>
  </div>
);

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
  const menuRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0].name);

  useEffect(() => {
    if (!isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300); // Match animation duration
  };

  if (!isOpen && !isClosing) return null;

  const selectedCategoryData = skillCategories.find(
    (category) => category.name === selectedCategory
  );

  return (
    <div
      className={`fixed bottom-16 left-0 w-[600px] bg-white/95 backdrop-blur-sm rounded-tr-2xl shadow-2xl border border-gray-200 z-50 ${
        isClosing ? "animate-slideDown" : "animate-slideUp"
      }`}
      ref={menuRef}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
        <button
          onClick={handleClose}
          className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full p-2 transition-colors"
        >
          <img src="/assets/close.png" alt="close" className="w-6 h-6" />
        </button>
      </div>

      <div className="flex h-[500px]">
        {/* Left Pane - Categories */}
        <div className="w-1/3 border-r overflow-y-auto">
          {skillCategories.map((category) => (
            <button
              key={category.name}
              className={`w-full flex items-center gap-3 p-4 cursor-pointer transition-all ${
                selectedCategory === category.name
                  ? "bg-blue-50 border-r-4 border-blue-500 font-semibold"
                  : "hover:bg-gray-50 border-r-4 border-transparent"
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <CategoryIcon icon={category.icon} />
              <span className="text-gray-700">{category.name}</span>
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
  );
};

export default SkillsMenu;
