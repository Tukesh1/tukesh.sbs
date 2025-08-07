import { FaGitAlt, FaJs, FaLinux, FaReact } from "react-icons/fa";
import { SiCplusplus, SiC, SiSqlite } from "react-icons/si";
import React from "react";

export default function Resume() {
  return (
    <React.Fragment>
      <section className="max-w-4xl mx-auto px-6 py-12 bg-white dark:bg-dark-bg rounded-lg shadow-lg">
        {/* Profile Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mt-4 text-zinc-800 dark:text-zinc-100">Tukesh Kumar</h1>
          <p className="text-md text-zinc-500 dark:text-zinc-400">Full Stack Developer | AI & Data Enthusiast</p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-primary text-black px-6 py-2 rounded-lg text-sm font-medium shadow hover:bg-opacity-80 transition duration-200 dark:text-white"
          >
            📄 View Resume
          </a>

        </div>

        {/* Education */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-4">Education</h2>
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold text-zinc-700 dark:text-zinc-300">
              GL Bajaj Institute of Technology & Management
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">B.Tech in Computer Science (AI) | CGPA: 7.02 | 2021 - 2025</p>
          </div>
          <div className="border-l-4 border-primary pl-4 mt-4">
            <h3 className="font-semibold text-zinc-700 dark:text-zinc-300">Central Board of Secondary Education</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Higher Secondary | Percentage: 68% | Bihar | 2020</p>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-4">Experience</h2>
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold text-zinc-700 dark:text-zinc-300">Web Developer Intern</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">April 2023 - Sept 2023</p>
            <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 text-sm mt-2">
              <li>Implemented clean and scalable code using JavaScript, HTML, and CSS.</li>
              <li>Explored and applied key architectural patterns like API integration.</li>
              <li>Gained a solid understanding of JavaScript frameworks and development principles.</li>
            </ul>
          </div>
        </div>

        {/* Technical Skills with Icons */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-4">Technical Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "C++", icon: <SiCplusplus /> },
              { name: "C", icon: <SiC /> },
              { name: "JavaScript", icon: <FaJs /> },
              { name: "SQL", icon: <SiSqlite /> },
              { name: "React", icon: <FaReact /> },
              { name: "Git", icon: <FaGitAlt /> },
              { name: "Linux", icon: <FaLinux /> },
            ].map((skill) => (
              <div key={skill.name} className="flex items-center gap-2 px-3 py-1 text-sm font-medium bg-zinc-100 dark:bg-dark-bg text-zinc-600 dark:text-zinc-200 rounded-full">
                {skill.icon} {skill.name}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-4">Certifications</h2>
          <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300">
            <li>Mastering Data Structures & Algorithms - Coding Ninjas</li>
            <li>JavaScript & Web Development Certification</li>
            <li>Linux System Administration Certification</li>
          </ul>
        </div>

        {/* Coding Profiles */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-4">Coding Platforms</h2>
          <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300">
            <li>LeetCode: Solved 800+ Problems</li>
            <li>CodeChef: 4-Star</li>
            <li>Codeforces: Max Rank 2243</li>
          </ul>
        </div>

        {/* Projects Redirect */}
        <div className="text-center mt-6">
          <a
            href="/projects"
            className="mt-4 inline-block bg-primary text-black px-6 py-2 rounded-lg text-sm font-medium shadow hover:bg-opacity-80 transition duration-200 dark:text-white"
          >
            🚀 <span>View My Projects</span>
          </a>

        </div>
      </section>
    </React.Fragment>
  );
}
