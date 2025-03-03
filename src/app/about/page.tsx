// app/about/page.tsx (partial)
import React from "react";
import { TechStack } from "./teckstacks";
import { ToolStack } from "./toolstack";
import { Github } from "./github";

export default function About() {
  return (
    <React.Fragment>
      {/* Main About Section */}
      <section className="py-10 ">
        <div className="container mx-auto px-4 ">
          {/* Header */}
          <header className="mb-12 text-center">
           
            <p className="mt-2 text-xl text-gray-600 dark:text-gray-400">
              A glimpse into who I am and what drives me
            </p>
          </header>

          {/* About Content */}
          <div className="max-w-2xl mx-auto">
            <div
              role="article"
              className="p-8  bg-white dark:bg-zinc-900 rounded-xl shadow-lg dark:shadow-none border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Hey There! 👋
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I’m <span className="font-bold text-indigo-600 dark:text-indigo-400">Tukesh Kumar</span>, 
                a final-year CSE’25 student from Greater Noida, India, studying at GL Bajaj Institute of Technology and Management.
              </p>
              <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                I’m passionate about sharpening my coding skills and crafting innovative web applications that leave a meaningful impact.
              </p>

              {/* Interests */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Beyond Code
                </h3>
                <ul className="flex flex-wrap gap-6">
                  {["🎮 Playing Games", "✍️ Writing Tech Blogs", "✈️ Travelling"].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-indigo-600 dark:text-indigo-400 text-lg">{item.split(" ")[0]}</span>
                      <span className="text-base">{item.split(" ").slice(1).join(" ")}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote */}
              <blockquote className="mt-6 italic text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900/50 p-4 rounded-lg">
                "Strive to build things that make a difference!"
                <footer className="text-gray-500 dark:text-gray-500 mt-2">— Tukesh</footer>
              </blockquote>
            </div>
          </div>

          <section className="py-10">
            <h1 className="mb-4 text-2xl font-bold tracking-tighter text-center">
              Professional Skillset
            </h1>
            <TechStack />
          </section>

          <section className="py-10">
            <h1 className="mb-4 text-2xl font-bold tracking-tighter text-center">
              Tools I Uses
            </h1>
            <ToolStack />
          </section>

          <section className="py-10">
            <Github />
          </section>
        </div>
      </section>
    </React.Fragment>
  );
}