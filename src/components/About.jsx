import React from 'react';
import { motion } from "framer-motion";
import CodeBlock from './CodeBlock';

const About = () => {
  return (
    <div className="container mx-auto py-20 px-6 text-center">
      
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-10 text-blue-400"
      >
        About Yogesh
      </motion.h2>
    
      <motion.p
        className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto text-left"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I’m an enthusiastic and detail-oriented junior tech professional with a passion for problem-solving and continuous learning. I thrive in collaborative environments and am always looking for opportunities to contribute to innovative projects and grow as a developer.
        <br /><br />
        With a strong foundation in JavaScript and PHP frameworks like Laravel and React, I focus on building secure, high-performance, and visually metabolic applications. My journey is driven by a curiosity for solving real-world problems through clean code and efficient backend logic.
        <br /><br />
        <div className="mt-8 p-6 bg-gray-800 rounded-2xl border border-gray-700">
          <h4 className="text-xl font-semibold mb-4 text-blue-400">Education</h4>
          <p className="text-white font-medium text-lg">Master of Science in Computer Science</p>
          <p className="text-gray-400">University Of Mumbai, Maharashtra | 2023 - 2025</p>
          <p className="text-gray-300 mt-2 italic">CGPI: 8.92</p>
        </div>
      </motion.p>

      <div className="max-w-3xl mx-auto">
        <CodeBlock />
      </div>

    </div>
  );
};

export default About;
