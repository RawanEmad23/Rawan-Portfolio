"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiRedux, SiFramer, SiTypescript, SiVite, SiStorybook } from "react-icons/si";

const skills = [
  { name: "React", level: 90, icon: <FaReact className="text-blue-500 w-12 h-12" /> },
  { name: "Next.js", level: 85, icon: <SiNextdotjs className="text-black w-12 h-12" /> },
  { name: "JavaScript", level: 95, icon: <FaJsSquare className="text-yellow-400 w-12 h-12" /> },
  { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss className="text-teal-400 w-12 h-12" /> },
  { name: "HTML5", level: 95, icon: <FaHtml5 className="text-orange-500 w-12 h-12" /> },
  { name: "CSS3", level: 90, icon: <FaCss3Alt className="text-blue-600 w-12 h-12" /> },
  { name: "Git & GitHub", level: 85, icon: <FaGitAlt className="text-gray-800 w-12 h-12" /> },
  { name: "Redux", level: 80, icon: <SiRedux className="text-purple-600 w-12 h-12" /> },
  { name: "Framer Motion", level: 85, icon: <SiFramer className="text-pink-500 w-12 h-12" /> },
  { name: "Figma", level: 80, icon: <FaFigma className="text-pink-400 w-12 h-12" /> },
  { name: "Vite", level: 75, icon: <SiVite className="text-purple-700 w-12 h-12" /> },
];

export default function SkillsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-pink-200 py-16"
      id="skills">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-black mb-12">
          My Front-End Skills
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{skill.icon}</div>
              <h2 className="text-xl font-semibold mb-2 text-center">{skill.name}</h2>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <motion.div
                  className="bg-purple-500 h-4 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
              <span className="mt-2 text-gray-600 font-medium">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
