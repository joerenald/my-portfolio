import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 bg-gray-900 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-4xl mx-auto text-center md:text-left">
        {/* Section Title */}
       <center> <h2 className="text-4xl font-bold text-blue-400 mb-6">
          About Me
        </h2></center>

        {/* Description */}
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          I'm Joe Renald, a passionate Computer Science student and aspiring software developer. 
          I enjoy building modern and responsive applications using React, Tailwind CSS, PHP, and MySQL.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Currently, I'm working on a Question Bank Management System as my final year project, focusing 
          on creating a smooth and user-friendly experience for both students and faculty.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          My goal is to become a skilled full-stack developer and contribute to real-world software solutions.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center md:justify-start gap-4">
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-white/10 rounded-lg text-white/90 hover:bg-gray-800 transition"
          >
            See Projects
          </a>
        </div>
      </div>
    </motion.section>
  );
}
