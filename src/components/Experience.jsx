import React from 'react';
import { motion } from "framer-motion";
import { CalendarIcon } from '@heroicons/react/24/outline';

const experiences = [
  {
    role: "Full Stack Web Developer",
    company: "A One Salasar",
    period: "Feb. 2023 - Present",
    description:
      "Currently building responsive web applications, including an online auction platform, Billing Portal, Wallet For Bidders and CRM, using Laravel & CodeIgniter, MySQL, and Blade Template Engine at A One Salasar.",
    isLatest: true,
  },
  {
    role: "Junior Web Developer Intern",
    company: "A One Salasar",
    period: "Nov. 2022 - Feb. 2023",
    description:
      "Interned as a Junior Web Developer at A One Salasar, developing and maintaining front-end components for web applications using Html, CSS and JS while mastering modern web development practices.",
    isLatest: false,
  },
];

const Experience = () => {
  return (
    <div id='experience' className="max-w-4xl mx-auto px-6 py-20 text-blue-400">
      
      <motion.h2
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-4 text-center"
      >
        Experience
      </motion.h2>

      <motion.p
        className="text-gray-300 mb-10 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        From building dynamic web applications to deciphering cryptic error messages, my experience has been a mix of structured learning and spontaneous problem-solving.
        Each project and internship has sharpened my ability to write clean code, collaborate effectively, and most importantly—fix bugs before they fix me.
      </motion.p>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 mb-2">
              <CalendarIcon className="h-6 w-6 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">
                {exp.role} · {exp.company}
              </h3>
              {exp.isLatest && (
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                  Latest
                </span>
              )}
            </div>

            <p className="text-sm text-gray-400 mb-4">{exp.period}</p>

            <p className="text-gray-300 leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Experience;
