"use client";  // Required for Next.js App Router

import { motion } from "framer-motion";

const projects = [
  {
    title: "Number Guessing Game",
    description: "A simple Java game where users guess a randomly generated number.",
    tech: ["Java"],
    link: "#",
  },
  {
    title: "ATM Interface",
    description: "A Java and MySQL-based ATM system for secure transactions.",
    tech: ["Java", "MySQL"],
    link: "#",
  },
  {
    title: "Water Level Controller",
    description: "ESP32-based system to monitor and control water levels in a tank.",
    tech: ["ESP32", "Embedded Systems"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full flex flex-col items-center text-center py-16 px-6 bg-gray-900">
      {/* Animated Heading */}
      <motion.h2
        className="text-4xl font-bold text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-blue-400">{project.title}</h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <div className="flex gap-2 mt-3">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-blue-500 text-white text-sm rounded-xl">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} className="text-blue-400 mt-4 inline-block hover:underline">
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
