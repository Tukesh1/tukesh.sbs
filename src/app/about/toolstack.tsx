// components/tool-stack.tsx
import { DiVisualstudio, DiCode } from "react-icons/di";
import { SiReplit } from "react-icons/si";

const tools = [
  { icon: <DiVisualstudio />, name: "VS Code" },
  { icon: <SiReplit />, name: "Replit" },
  { icon: <DiCode />, name: "Cursor" },
];

export function ToolStack() {
  return (
    <div className="flex justify-center flex-wrap gap-6 max-w-4xl mx-auto">
      {tools.map((tool) => (
        <div
          key={tool.name}
          className="flex flex-col items-center p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-md dark:shadow-none border border-gray-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-colors duration-300 w-full max-w-[180px]"
        >
          <div className="text-4xl text-indigo-600 dark:text-indigo-400">{tool.icon}</div>
          <span className="mt-2 text-gray-700 dark:text-gray-300 text-center">{tool.name}</span>
        </div>
      ))}
    </div>
  );
}
