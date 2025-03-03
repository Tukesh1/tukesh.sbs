import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const TracodeProject = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
          Featured Project: Tracode
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-lg">
          Tracode is a developer-friendly platform to track coding progress, ratings, upcoming
          contests, and problem-solving streaks across multiple platforms.
        </p>
        
        {/* Project Display */}
        <div className="mt-10 flex flex-col md:flex-row items-center gap-10">
          {/* Image Preview */}
          <div className="w-full md:w-1/2">
            <img
              src="/assets/project/tracode.png"
              alt="Tracode Preview"
              className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
          
          {/* Project Details */}
          <div className="w-full md:w-1/2 text-left">
            <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
              Key Features
            </h3>
            <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
              <li>📊 Track coding ratings from LeetCode, CodeChef, and Codeforces.</li>
              <li>📅 Get notified about daily POTD and upcoming contests.</li>
              <li>📈 View progress analytics with interactive charts.</li>
              <li>📌 Maintain streaks and improve problem-solving consistency.</li>
            </ul>
            
            {/* Links */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://github.com/Tukesh1/Tracode"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-white bg-gray-800 dark:bg-indigo-600 rounded-lg shadow hover:bg-gray-700 dark:hover:bg-indigo-500 transition-all"
              >
                <FaGithub /> GitHub Repo
              </a>
              <a
                href="https://tracode.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-white bg-indigo-600 dark:bg-indigo-500 rounded-lg shadow hover:bg-indigo-500 dark:hover:bg-indigo-400 transition-all"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TracodeProject;
