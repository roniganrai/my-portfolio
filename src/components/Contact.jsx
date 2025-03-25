"use client"; // Required for Next.js App Router

import { motion } from "framer-motion";
import { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="w-full flex flex-col items-center text-center py-16 px-6 bg-gray-800"
    >
      {/* Animated Heading */}
      <motion.h2
        className="text-4xl font-bold text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Contact Me
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="mt-8 w-full max-w-md bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-700 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-700 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          required
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-700 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          required
        />
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-300"
        >
          Send Message
        </button>
      </motion.form>

      {/* Contact Info */}
      <motion.div
        className="mt-8 text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="flex flex-row justify-center items-center">
          <div className="text-[24px] mr-4 mt-1">
            <IoMdMail className="text-blue-400" />
          </div>
          <div>
            <a
              href="mailto:roniganrai2029@gmail.com"
              className="text-blue-400 hover:underline pb-2"
            >
              roniganrai2029@gmail.com
            </a>
          </div>
        </div>
        <div className="flex flex-row mt-4 items-center">
          <div className="text-[20px] mr-4">
            <FaPhoneVolume className="text-blue-400" />
          </div>
          <div>
            <a
              href="tel:+917001736980"
              className="text-blue-400 hover:underline"
            >
              +91 7001736980
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
