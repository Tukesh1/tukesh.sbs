import React from "react";
import { DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiCss3, DiHtml5 } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

const skills = [
  {
    title: "Web Design & Development",
    icon: <DiHtml5 className="text-3xl text-orange-500" />,
    subskills: "HTML, CSS, JavaScript, TypeScript",
  },
  {
    title: "Frontend Javascript Frameworks",
    icon: <DiReact className="text-3xl text-cyan-400" />,
    subskills: "Angular, React, Vue.js",
  },
  {
    title: "Backend Javascript Frameworks",
    icon: <DiNodejs className="text-3xl text-green-600" />,
    subskills: "Node.js, Express.js, NestJS",
  },
  {
    title: "Scripting Frameworks",
    icon: <DiPython className="text-3xl text-yellow-400" />,
    subskills: "Python, Rust",
  },
  {
    title: "Database Management System",
    icon: <DiMongodb className="text-3xl text-green-700" />,
    subskills: "Postgres, TypeORM, MongoDB, Mongoose",
  },
  {
    title: "UI/UX Design",
    icon: <DiCss3 className="text-3xl text-blue-400" />,
    subskills: "Adobe XD, Figma, Sketch",
  },
  {
    title: "Data Processing & Machine Learning",
    icon: <SiNextdotjs className="text-3xl text-black dark:text-white" />,
    subskills: "LangChain, scikit-learn, TensorFlow, Keras",
  },
  {
    title: "Version Control",
    icon: <DiGit className="text-3xl text-orange-600" />,
    subskills: "Git, GitHub",
  },
];

export function Skills() {
  return (
    <div id="skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="px-3 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-3 transition-colors duration-700 hover:duration-100 bg-white dark:bg-dark-bg min-h-0"
          >
            <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center">
              {React.cloneElement(skill.icon, { className: (skill.icon.props.className || "") + " text-2xl" })}
            </div>
            <div className="min-w-0 flex-1 flex flex-col">
              <strong className="truncate text-sm font-semibold text-gray-900 dark:text-white mb-0.5">{skill.title}</strong>
              <small className="truncate text-xs text-gray-600 dark:text-gray-300">({skill.subskills})</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 