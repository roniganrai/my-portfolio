import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="w-full flex flex-col items-center justify-center text-center py-10">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Hi, I'm <span className="text-blue-400">Roni Ganrai</span>
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl text-gray-300 mt-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Crafting Scalable Solutions with <span className="text-blue-400">Code</span> &{" "}
        <span className="text-blue-400">Creativity</span>
      </motion.p>
    </header>
  );
}
