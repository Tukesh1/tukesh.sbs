
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
      <div className="flex items-center gap-2 mb-8 hover:text-teal-600 hover:dark:text-teal-400 transition-colors">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"></path></svg>
        <span className="font-bold uppercase text-xs relative -bottom-px">Tools</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {tools.map((tool) => (
          <div
            key={tool.name}
            className="px-3 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-3 transition-colors duration-700 hover:duration-100 bg-white dark:bg-neutral-900 min-h-0"
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
