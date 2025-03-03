"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaCalendarCheck,
  FaTrophy,
  FaClock,
  FaBell,
  FaTasks,
} from "react-icons/fa";

// Define Feature Interface
interface Feature {
  title: string;
  description: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  icon: JSX.Element;
}

// Feature Data
const features: Feature[] = [
  {
    title: "Platform Performance",
    description: "Monitor your rankings and performance across LeetCode, CodeChef, and Codeforces.",
    bgColor: "bg-indigo-500",
    borderColor: "border-indigo-500",
    textColor: "text-indigo-500",
    icon: <FaChartLine />,
  },
  {
    title: "Contest Schedule",
    description: "Plan ahead with a detailed calendar of upcoming coding contests and events.",
    bgColor: "bg-purple-500",
    borderColor: "border-purple-500",
    textColor: "text-purple-500",
    icon: <FaCalendarCheck />,
  },
  {
    title: "Consistency Tracker",
    description: "Stay on top of your game by tracking and extending your coding streaks.",
    bgColor: "bg-blue-400",
    borderColor: "border-blue-400",
    textColor: "text-blue-400",
    icon: <FaTrophy />,
  },
  {
    title: "Event Alerts",
    description: "Receive timely reminders for coding contests and hackathons.",
    bgColor: "bg-yellow-400",
    borderColor: "border-yellow-400",
    textColor: "text-yellow-400",
    icon: <FaClock />,
  },
  {
    title: "Practice Prompts",
    description: "Keep coding daily with tailored problem suggestions and notifications.",
    bgColor: "bg-green-500",
    borderColor: "border-green-500",
    textColor: "text-green-500",
    icon: <FaBell />,
  },
  {
    title: "Skill Progress",
    description: "Analyze your growth across problem types and difficulty levels.",
    bgColor: "bg-red-600",
    borderColor: "border-red-600",
    textColor: "text-red-600",
    icon: <FaTasks />,
  },
];

const Tracode: React.FC = () => {
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const featureVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-16 ">
      <div className="container mx-auto px-6">
        {/* Tracode Home Page Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-zinc-900 rounded-xl p-8 max-w-4xl mx-auto border border-gray-200 dark:border-gray-700 shadow-sm"
        >
          {/* Header */}
          <motion.h1
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 font-sans text-center"
          >
            Tracode
          </motion.h1>
          <motion.p
            variants={textVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-6 text-center"
          >
            Track & Improve Your Coding Journey
          </motion.p>
          <motion.p
            variants={textVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3 }}
            className="text-sm text-gray-700 dark:text-gray-300 mb-8 max-w-md mx-auto text-center"
          >
            Elevate your skills with powerful tools designed for coders like you.
          </motion.p>

          {/* Call-to-Action */}
          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
            className="text-center mb-12"
          >
            <motion.a
              href="https://tracode.vercel.app" // Replace with your Tracode URL
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="inline-block px-8 py-2.5 bg-blue-500 text-white rounded-md font-medium shadow-sm hover:bg-blue-600 transition-colors"
            >
              Start Coding Smarter
            </motion.a>
          </motion.div>

          {/* Features Section */}
          <div className="max-w-3xl mx-auto">
            <motion.h2
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.5 }}
              className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center"
            >
              Tools for Your Journey
            </motion.h2>
            <motion.div
              variants={featureVariants}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={featureVariants}
                  className="relative group"
                >
                  <span
                    className={`absolute inset-0 ${feature.bgColor} rounded-lg transform translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-300`}
                  ></span>
                  <div
                    className={`relative p-5 bg-white dark:bg-gray-800 border-2 ${feature.borderColor} rounded-lg transition-transform duration-300 group-hover:shadow-md`}
                  >
                    <div className="flex items-center mb-2">
                      <span className={`${feature.textColor} text-xl mr-3`}>
                        {feature.icon}
                      </span>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Footer Note */}
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-10 text-center">
            Built for coders, by coders.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Tracode;