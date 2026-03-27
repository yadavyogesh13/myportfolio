import React from 'react'
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Real Estate Website with Admin Panel",
    tech: "React, Laravel, MySQL",
    desc: "A comprehensive property listing platform featuring a full admin panel for managing listings, users, and inquiries.",
    liveUrl: "",
    githubUrl: "https://github.com/yadavyogesh13/real-estate-agent"
  },
  {
    id: 2,
    title: "CPS Checker",
    tech: "JavaScript, HTML, CSS",
    desc: "A high-performance tool to check clicks per second with a clean, responsive UI. Visit at cpschecker.site.",
    liveUrl: "https://cpschecker.site/",
    githubUrl: "https://github.com/yadavyogesh13/cpstester"
  },
  {
    id: 3,
    title: "URL Shortener",
    tech: "Node.js, Express, MongoDB",
    desc: "A secure URL shortening service with features like custom short links and click-through analytics.",
    liveUrl: "",
    githubUrl: "https://github.com/yadavyogesh13"
  },
  {
    id: 4,
    title: "Landing Page For CA",
    tech: "HTML, CSS, JavaScript",
    desc: "A professional, responsive landing page designed for Chartered Accountants to showcase their services.",
    liveUrl: "https://ca-static-site.vercel.app/",
    githubUrl: "https://github.com/yadavyogesh13/ca-website"
  },
  {
    id: 5,
    title: "Healthcare Platform (PMS)",
    tech: "PHP, Laravel, MySQL",
    desc: "Contributed to building secure RESTful APIs and an AI-powered CMS for healthcare management systems.",
    liveUrl: "",
    githubUrl: "https://github.com/yadavyogesh13"
  }
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
        🚀 Featured Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/50 flex flex-col h-full border border-gray-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {project.tech.split(', ').map((tech, i) => (
                <span key={i} className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded-full border border-blue-800">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-300 mb-6 flex-grow">{project.desc}</p>

            <div className="flex justify-center gap-4 mt-auto">
              {/* Only show Live Demo button if liveUrl exists and is not empty */}
              {project.liveUrl && project.liveUrl.trim() !== '' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300 text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition duration-300 text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects