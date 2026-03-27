import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaDocker, FaLinux, FaWindows, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiGithub, SiVercel, SiNpm, SiLaravel, SiCodeigniter, SiMysql, SiJquery, SiBitbucket, SiSourcetree, SiPostgresql } from 'react-icons/si';

// Define categories
const skillCategories = [
  {
    title: "Frontend",
    key: "frontend",
    tools: [
      { name: "HTML", icon: <FaHtml5 size={24} color="#E34F26" /> },
      { name: "CSS", icon: <FaCss3Alt size={24} color="#1572B6" /> },
      { name: "JavaScript", icon: <FaJs size={24} color="#F7DF1E" /> },
      { name: "jQuery", icon: <SiJquery size={24} color="#0769AD" /> },
      { name: "AJAX", icon: <FaJs size={24} color="#F7DF1E" /> }, // Reusing JS icon for AJAX
      { name: "Tailwind CSS", icon: <SiTailwindcss size={24} color="#38B2AC" /> },
      { name: "ReactJS", icon: <FaReact size={24} color="#61DAFB" /> },
    ],
  },
  {
    title: "Backend",
    key: "backend",
    tools: [
      { name: "NodeJS", icon: <FaNodeJs size={24} color="#339933" /> },
      { name: "ExpressJS", icon: <SiExpress size={24} color="#ffffff" /> },
      { name: "PHP", icon: <FaPhp size={24} color="#777BB4" /> },
      { name: "Laravel", icon: <SiLaravel size={24} color="#FF2D20" /> },
      { name: "CodeIgniter", icon: <SiCodeigniter size={24} color="#EF4223" /> },
      { name: "EJS", icon: <FaNodeJs size={24} color="#339933" /> }, // Reusing Node icon for EJS
      { name: "MySQL", icon: <SiMysql size={24} color="#4479A1" /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={24} color="#336791" /> },
      { name: "PLSQL", icon: <SiMysql size={24} color="#4479A1" /> }, // Reusing MySQL icon for PLSQL
    ],
  },
  {
    title: "Tools",
    key: "tools",
    tools: [
      { name: "Git", icon: <FaGit size={24} color="#F05032" /> },
      { name: "Bitbucket", icon: <SiBitbucket size={24} color="#205081" /> },
      { name: "SourceTree", icon: <SiSourcetree size={24} color="#0052CC" /> },
      { name: "Postman", icon: <SiPostman size={24} color="#FF6C37" /> },
      { name: "GitHub", icon: <SiGithub size={24} color="#181717" /> },
      { name: "npm", icon: <SiNpm size={24} color="#CB3837" /> },
    ],
  },
];

const SkillsTools = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...skillCategories.map(cat => cat.key)];

  const filteredTools =
    selectedCategory === "all"
      ? skillCategories.flatMap(cat => cat.tools)
      : skillCategories.find(cat => cat.key === selectedCategory)?.tools || [];

  return (
    <div className="container mx-auto py-20 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-8 text-blue-400"
      >
        Skills & Tools
      </motion.h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 rounded-full font-medium transition ${
              selectedCategory === cat
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-white hover:bg-blue-400"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat === "all" ? "All" : skillCategories.find(c => c.key === cat)?.title}
          </button>
        ))}
      </div>

      {/* Display Filtered Tools */}
      <div className="flex flex-wrap justify-center gap-4">
        {filteredTools.map((tool, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full shadow hover:bg-blue-500 transition transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
          >
            {tool.icon}
            <span className="font-medium text-sm">{tool.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsTools;
