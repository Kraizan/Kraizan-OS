export interface SkillIcon {
  type: "svg" | "img";
  paths?: {
    d: string;
    fill: string;
  }[];
  viewBox?: string;
  src?: string;
}

export interface Skill {
  name: string;
  icon: SkillIcon;
  proficiency: number; // 1-5
  description?: string;
}

export interface SkillCategory {
  name: string;
  icon: SkillIcon;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: {
      type: "img",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    skills: [
      {
        name: "React",
        icon: {
          type: "img",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        },
        proficiency: 5,
        description: "UI library for web apps",
      },
      {
        name: "Next.js",
        icon: {
          type: "img",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        },
        proficiency: 4,
        description: "React framework",
      },
      {
        name: "HTML5",
        icon: {
          type: "img",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        },
        proficiency: 5,
        description: "Web markup language",
      },
      {
        name: "CSS3",
        icon: {
          type: "img",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        },
        proficiency: 5,
        description: "Web styling language",
      },
      {
        name: "Vite",
        icon: {
          type: "img",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
        },
        proficiency: 4,
        description: "Next-gen frontend tooling",
      },
    ],
  },
  {
    name: "Backend",
    icon: {
      type: "img",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    },
    skills: [
      {
        name: "Spring",
        icon: {
          type: "img",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
        },
        proficiency: 4,
        description: "Java framework",
      },
      {
        name: "Maven",
        icon: {
          type: "img",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg",
        },
        proficiency: 4,
        description: "Java build tool",
      },
      {
        name: "Node.js",
        icon: {
          type: "img",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        },
        proficiency: 4,
        description: "JavaScript runtime",
      },
      {
        name: "Express",
        icon: {
          type: "img",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        },
        proficiency: 4,
        description: "Web framework for Node.js",
      },
    ],
  },
  {
    name: "Databases",
    icon: {
      type: "img",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    skills: [
      {
        name: "PostgreSQL",
        icon: {
          type: "img",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        },
        proficiency: 4,
        description: "SQL database",
      },
      {
        name: "MySQL",
        icon: {
          type: "img",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        },
        proficiency: 4,
        description: "SQL database",
      },
      {
        name: "MongoDB",
        icon: {
          type: "img",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        },
        proficiency: 4,
        description: "NoSQL database",
      },
      {
        name: "Prisma",
        icon: {
          type: "img",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
        },
        proficiency: 4,
        description: "Next-gen ORM",
      },
    ],
  },
  {
    name: "Languages",
    icon: {
      type: "img",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    },
    skills: [
      {
        name: "C++",
        icon: {
          type: "img",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        },
        proficiency: 4,
        description: "Systems programming",
      },
      {
        name: "Java",
        icon: {
          type: "img",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        },
        proficiency: 4,
        description: "Enterprise development",
      },
      {
        name: "JavaScript",
        icon: {
          type: "img",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        },
        proficiency: 3,
        description: "Web development",
      },
      {
        name: "TypeScript",
        icon: {
          type: "img",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        },
        proficiency: 3,
        description: "Type-safe JavaScript",
      },
      {
        name: "Python",
        icon: {
          type: "img",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        },
        proficiency: 3,
        description: "Scripting language",
      },
    ],
  },
  {
    name: "DevOps",
    icon: {
      type: "img",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    },
    skills: [
      {
        name: "Docker",
        icon: {
          type: "img",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        },
        proficiency: 4,
        description: "Container platform",
      },
      {
        name: "AWS",
        icon: {
          type: "img",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
        proficiency: 4,
        description: "Cloud platform",
      },
      {
        name: "Git",
        icon: {
          type: "img",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        },
        proficiency: 5,
        description: "Version control",
      },
      {
        name: "Firebase",
        icon: {
          type: "img",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
        },
        proficiency: 4,
        description: "Backend as a Service",
      },
    ],
  },
  {
    name: "System & Tools",
    icon: {
      type: "img",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/archlinux/archlinux-original.svg",
    },
    skills: [
      {
        name: "Arch Linux",
        icon: {
          type: "img",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/archlinux/archlinux-original.svg",
        },
        proficiency: 4,
        description: "Linux distribution",
      },
      {
        name: "Bash",
        icon: {
          type: "img",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
        },
        proficiency: 4,
        description: "Shell scripting",
      },
      {
        name: "Postman",
        icon: {
          type: "img",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
        },
        proficiency: 5,
        description: "API testing tool",
      },
      {
        name: "Grafana",
        icon: {
          type: "img",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg",
        },
        proficiency: 3,
        description: "Monitoring & analytics",
      },
    ],
  },
];
