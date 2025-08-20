
import { DiVisualstudio, DiCode } from "react-icons/di";
import { SiReplit } from "react-icons/si";

const tools = [
  { icon: <DiVisualstudio className="text-2xl text-indigo-600 dark:text-indigo-400" />, name: "VS Code" },
  { icon: <SiReplit className="text-2xl text-indigo-600 dark:text-indigo-400" />, name: "Replit" },
  { icon: <DiCode className="text-2xl text-indigo-600 dark:text-indigo-400" />, name: "Cursor" },
];

export function ToolStack() {
  return (
    <div id="tools">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="px-3 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-3 transition-colors duration-700 hover:duration-100 bg-white dark:bg-dark-bg min-h-0"
          >
            <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center">
              {tool.icon}
            </div>
            <div className="min-w-0 flex-1 flex flex-col">
              <strong className="truncate text-sm font-semibold text-gray-900 dark:text-white mb-0.5">{tool.name}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
