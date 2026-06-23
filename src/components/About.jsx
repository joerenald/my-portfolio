import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
     className="relative py-16 md:py-24 px-5 md:px-6 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
        </motion.div>

        {/* Content Card */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="
bg-white/[0.04]
border border-white/10
rounded-3xl
p-6 md:p-12
shadow-xl
"
        >
          <p className="text-[15px] md:text-xl text-gray-300 leading-8 md:leading-9 text-justify mb-6">
            Hi, I'm <span className="font-semibold text-cyan-400">Joe Renald A</span>,
            an MCA student and passionate software developer with a strong
            interest in Full-Stack Development, Artificial Intelligence, and
            Machine Learning. I enjoy transforming ideas into practical,
            user-friendly applications that solve real-world problems. From
            developing AI-powered solutions such as Age and Gender Detection
            Systems to building intelligent Study Planners and modern web
            applications, I continuously explore emerging technologies and
            enhance my technical expertise through hands-on development.
          </p>

          <p className="text-[15px] md:text-xl text-gray-300 leading-8 md:leading-9 text-justify mb-6">
            My journey in software development is driven by curiosity,
            creativity, and a desire to build meaningful digital experiences.
            I am passionate about designing scalable applications, writing
            clean and efficient code, and learning new technologies that help
            create innovative solutions. Every project I work on is an
            opportunity to improve my skills and contribute to solving
            practical challenges through technology.
          </p>

         <p className="text-[15px] md:text-xl text-gray-300 leading-8 md:leading-9 text-justify mb-6">
            My goal is to become a highly skilled Full-Stack Developer and AI
            enthusiast, contributing to impactful software products while
            continuously growing as a professional in the ever-evolving world
            of technology.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
            <a
              href="/my-portfolio/joe_resume.pdf"
              download
              className="
inline-flex items-center justify-center
px-5 py-2.5
text-sm font-semibold
rounded-xl
bg-gradient-to-r from-blue-600 to-cyan-500
text-white
shadow-lg
hover:scale-105
transition
"
            >
              Download Resume
            </a>

            <a
              href="#projects"
           className="
inline-flex items-center justify-center
px-5 py-2.5
text-sm font-semibold
rounded-xl
border border-white/20
text-white
hover:bg-white/10
transition
"
            >
              View Projects
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}