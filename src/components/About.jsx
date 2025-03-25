"use client"; // Required for Next.js App Router (Next.js 13+)

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full flex flex-col items-center text-center py-16 px-6 bg-gray-800">
      {/* Profile Image */}
      <motion.img
        src="/profile.jpg" // Replace with your actual profile image
        alt="Roni Ganrai"
        className="w-40 h-40 rounded-full shadow-lg border-4 border-blue-500 mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About Me
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-lg text-gray-300 mt-4 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I'm <span className="text-blue-400 font-semibold">Roni Ganrai</span>, a passionate **Frontend Developer** and **Electronics Enthusiast**.  
        I specialize in **building interactive web applications** and **developing electronic circuits**.  
        With expertise in **React, JavaScript, and Embedded Systems**, I love turning ideas into reality.
      </motion.p>

      {/* Skills List */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {["React.js", "JavaScript", "C++", "ESP32", "TailwindCSS", "LTSpice"].map((skill, index) => (
          <span key={index} className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow-md text-sm font-medium">
            {skill}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
