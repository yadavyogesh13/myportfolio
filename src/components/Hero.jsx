import React from 'react';
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';

const socialLinks = {
  linkedin: {
    url: "https://www.linkedin.com/in/yogesh-yadav-8485691bb",
    icon: <FaLinkedin size={28} color="#0A66C2" />,
  },
  github: {
    url: "https://github.com/yadavyogesh13",
    icon: <FaGithub size={28} color="#FFFFFF" />,
  },
  // twitter: {
  //   url: "https://twitter.com/YOUR_TWITTER",
  //   icon: <FaTwitter size={28} color="#1DA1F2" />,
  // },
  // facebook: {
  //   url: "https://facebook.com/YOUR_FACEBOOK",
  //   icon: <FaFacebook size={28} color="#1877F2" />,
  // },
};

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-900 text-white">

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold mb-4"
      >
        Hi, I’m <span className="text-blue-400">Yogesh R Yadav</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl md:text-2xl mb-6 text-gray-300"
      >
        Full Stack Developer | Freelancer
      </motion.p>

      <div className="flex items-center space-x-4 mb-6">
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 px-6 py-3 rounded-full shadow-lg font-semibold text-white"
        >
          View My Work
        </motion.a>

        <motion.a
          href="/Yogesh_webdev_Resume.pdf"
          download
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 px-6 py-3 rounded-full shadow-lg font-semibold text-white"
        >
          Resume
        </motion.a>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-6 text-2xl">
        {Object.keys(socialLinks).map((key, idx) => (
          <motion.a
            key={idx}
            href={socialLinks[key].url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="transition"
          >
            {socialLinks[key].icon}
          </motion.a>
        ))}
      </div>

    </div>
  );
};

export default Hero;
