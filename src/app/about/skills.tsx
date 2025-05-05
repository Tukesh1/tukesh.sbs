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
      <div className="flex items-center gap-2 mb-8 hover:text-teal-600 hover:dark:text-teal-400 transition-colors">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"></path></svg>
        <span className="font-bold uppercase text-xs relative -bottom-px">Skills</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="px-3 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-3 transition-colors duration-700 hover:duration-100 bg-white dark:bg-neutral-900 min-h-0"
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