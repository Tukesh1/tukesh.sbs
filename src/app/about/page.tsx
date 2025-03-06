import React from "react";
import { TechStack } from "./teckstacks";
import { ToolStack } from "./toolstack";
import { Github } from "./github";
import { FaGamepad, FaPen, FaPlane } from "react-icons/fa";

export default function About() {
  return (
    <React.Fragment>
      <section className="py-12 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          {/* Header */}
          <header className="mb-12 text-center">
            <p className="mt-3 text-xl text-gray-600 dark:text-gray-400">
              A glimpse into who I am and what drives me
            </p>
          </header>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Intro */}
            <div className="bg-gray-50 dark:bg-zinc-800 p-6 rounded-lg border-t-4 border-indigo-600 dark:border-indigo-400">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Hey, I’m Tukesh! 👋
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                I’m <span className="font-medium text-indigo-600 dark:text-indigo-400">Tukesh Kumar</span>, a final-year CSE’25 student at GL Bajaj Institute of Technology and Management, Greater Noida, India.
              </p>
              <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
                Coding is my craft—I’m hooked on building web apps that push boundaries and make a difference.
              </p>
            </div>

            {/* Interests */}
            <div className="bg-gray-50 dark:bg-zinc-800 p-6 rounded-lg border-t-4 border-indigo-600 dark:border-indigo-400">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Beyond Code
              </h3>
              <ul className="space-y-3">
                {[
                  { icon: <FaGamepad />, text: "Gaming" },
                  { icon: <FaPen />, text: "Tech Blogs" },
                  { icon: <FaPlane />, text: "Traveling" },
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 group"
                  >
                    <span className="text-indigo-600 dark:text-indigo-400 text-lg group-hover:scale-110 transition-transform duration-200">
                      {item.icon}
                    </span>
                    <span className="text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quote */}
          {/* Quote */}
          <div className="max-w-4xl mx-auto mt-8 bg-gray-100 dark:bg-zinc-700 text-gray-900 dark:text-gray-200 p-4 rounded-lg text-center">
            <blockquote className="text-sm italic">
              “Code isn’t just logic—it’s a way to shape the future.”
              <footer className="text-xs mt-1">— Tukesh</footer>
            </blockquote>
          </div>

          {/* Skills Section */}
          <section className="mt-12 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
              Professional Skillset
            </h1>
            <div className="bg-gray-50 dark:bg-zinc-800 p-6 rounded-lg border-l-4 border-indigo-600 dark:border-indigo-400">
              <TechStack />
            </div>
          </section>

          {/* Tools Section */}
          <section className="mt-12 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
              Tools I Use
            </h1>
            <div className="bg-gray-50 dark:bg-zinc-800 p-6 rounded-lg border-l-4 border-indigo-600 dark:border-indigo-400">
              <ToolStack />
            </div>
          </section>

          {/* GitHub Section */}
          <section className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gray-50 dark:bg-zinc-800 p-6 rounded-lg">
              <Github />
            </div>
          </section>
        </div>
      </section>
    </React.Fragment>
  );
}