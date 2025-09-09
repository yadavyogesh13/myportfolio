import React from 'react'
import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "URL Shortner", tech: "Laravel, MySQL" },
  { id: 2, title: "File Converter Tool", tech: "Express, Node.js, React.js" },
  { id: 3, title: "Portfolio Website", tech: "React, Tailwind, Framer Motion" },
];


const Projects = () => {
  return (
    <div className="container mx-auto py-20 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-12 text-blue-400"
      >
        My Projects
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-300">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects