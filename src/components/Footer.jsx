"use client"; // Required for Next.js App Router

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 text-center py-6 border-t border-gray-700">
      <motion.div
        className="flex justify-center space-x-6 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Social Media Icons */}
        <a href="https://github.com/RoniGanrai" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-white transition" />
        </a>
        <a href="https://www.linkedin.com/in/roniganrai" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-blue-400 transition" />
        </a>
        <a href="https://twitter.com/RoniGanrai" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl hover:text-blue-300 transition" />
        </a>
      </motion.div>

      {/* Copyright */}
      <motion.p
        className="text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        © {new Date().getFullYear()} Roni Ganrai. All Rights Reserved.
      </motion.p>
    </footer>
  );
}
