"use client"
import React, { useState } from "react";
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    company: "WebSoft solution",
    role: "Web Developer Internship",
    duration: "2023 - 2024",
    location: "Remote",
    details: [
      "Developed and maintained web applications using React and Node.js",
      "Collaborated with cross-functional teams to deliver high-quality products",
      "Implemented responsive UI with Tailwind CSS",
      "Worked in an agile environment and participated in code reviews",
    ],
  },
  {
    company: "Alignerr",
    role: "AI Coding Trainer (Freelance) ",
    duration: "2024 - 2025",
    location: "Freelance, Remote",
    details: [
      "Trained AI to code in Python, JavaScript, and C++",
      "Debugged and optimized code for better performance",
      "Documented code and provided feedback to the team",
    ],
  },
 
];

const educations = [
  {
    school: "GL Bajaj Institute of Technology & Management",
    degree: "B.Tech, Computer Science and Engineering",
    result: "8.2 CGPA",
    duration: "2021 - 2025",
    details: [
      "Graduated with 8.2 CGPA in Computer Science and Engineering",
      "Completed projects in web development and machine learning",
      "Active member of the coding club and hackathons",
    ],
  },
  {
    school: "Subhash Chandra Bose Universal School",
    degree: "Secondary, PCM",
    result: "69%",
    duration: "2018 - 2020",
    details: [
      "Completed secondary education with 69% in Physics, Chemistry, Mathematics",
      "Participated in science exhibitions and olympiads",
    ],
  },
];

export function WorkExperience() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <FaBriefcase className="text-lg" />
        <span className="font-bold uppercase text-sm">Work Experience</span>
      </div>
      <div className="relative pl-6">
        <div className="absolute left-0 top-0 h-full w-0.5 bg-neutral-700" style={{ minHeight: 80 }} />
        {experiences.map((exp, idx) => (
          <div
            key={exp.company}
            className="mb-8 flex items-start gap-4 transition-all duration-300 "
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="absolute -left-1.5 mt-1 w-3 h-3 rounded-full bg-neutral-900 border-2 border-white dark:border-zinc-200" />
            <div>
              <div className="font-semibold text-base text-gray-900 dark:text-white">{exp.company}</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-300 mb-1">{exp.role} <br />
                 <span className="text-xs text-neutral-400 dark:text-neutral-400">({exp.duration})</span></div>
              <div className="flex items-center gap-1 text-xs text-neutral-400 dark:text-neutral-400 mb-1">
                <FaMapMarkerAlt /> {exp.location}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${hovered === idx ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
                style={{ minHeight: 0 }}
              >
                <div className="bg-white dark:bg-dark-bg border border-neutral-200 dark:border-neutral-700 rounded p-3 mt-1">
                  <ul className="list-disc pl-5 space-y-1 text-xs text-neutral-700 dark:text-neutral-200">
                    {exp.details.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Educations() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <FaGraduationCap className="text-lg" />
        <span className="font-bold uppercase text-sm">Education</span>
      </div>
      <div className="relative pl-6">
        <div className="absolute left-0 top-0 h-full w-0.5 bg-neutral-700" style={{ minHeight: 80 }} />
        {educations.map((edu, idx) => (
          <div
            key={edu.school}
            className="mb-8 flex items-start gap-4 transition-all duration-300"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="absolute -left-1.5 mt-1 w-3 h-3 rounded-full bg-neutral-900 border-2 border-white dark:border-zinc-200" />
            <div>
              <div className="font-semibold text-base text-gray-900 dark:text-white">{edu.school}</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-300 mb-1">{edu.degree}</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-300 mb-1">{edu.duration} </div>
              <div className="text-xs text-neutral-400 dark:text-neutral-400 mb-1">{edu.result}</div>
              <div
                className={`overflow-hidden transition-all duration-300 ${hovered === idx ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
                style={{ minHeight: 0 }}
              >
                <div className="bg-white dark:bg-dark-bg border border-neutral-200 dark:border-neutral-700 rounded p-3 mt-1">
                  <ul className="list-disc pl-5 space-y-1 text-xs text-neutral-700 dark:text-neutral-200">
                    {edu.details.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
