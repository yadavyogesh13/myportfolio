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
        I’m a passionate Full Stack Developer with a love for creating beautiful, functional, and responsive websites. I enjoy learning new technologies and bringing ideas to life through code.
        <br /><br />
        My journey in tech began with a curiosity for solving real-world problems through innovative solutions, which evolved into a love for crafting user-centric digital experiences.With a strong foundation in JavaScript & PHP frameworks, I focus on creating scalable, efficient, and visually appealing applications.
      </motion.p>

      <div className="max-w-3xl mx-auto">
        <CodeBlock />
      </div>

    </div>
  );
};

export default About;
