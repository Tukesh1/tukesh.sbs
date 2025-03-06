import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
const techs = [
  { icon: <CgCPlusPlus />, name: "C++" },
  { icon: <DiPython />, name: "Python" },
  { icon: <TbBrandTypescript />, name: "typescript" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <TbBrandGolang />, name: "Golang" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <DiReact />, name: "React" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <DiGit />, name: "Git" },
 
  
];

export function TechStack() {
  return (
    <div
      role="list"
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-xl mx-auto justify-items-center"
    >
      {techs.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col items-center p-4  bg-white dark:bg-zinc-900 rounded-lg shadow-md dark:shadow-none border border-gray-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-colors duration-300 w-full max-w-[180px]"
        >
          <div className="text-2xl text-indigo-600 dark:text-indigo-400">{tech.icon}</div>
          <span className="mt-2 text-gray-700 dark:text-gray-300 text-center">{tech.name}</span>
        </div>
      ))}
    </div>
  );
}