import React from "react";
import { motion } from "framer-motion";
import profile from '../profile.jpeg';
import { Github, Linkedin, Instagram } from "lucide-react";


const TypeWriter = ({ text }) => {
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => setIdx(i => Math.min(i + 1, text.length)), 70);
    return () => clearInterval(timer);
  }, [text]);
  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      {text.slice(0, idx)}
    </span>
  );
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden">
      
      {/* Floating shapes */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 opacity-40 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
      ></motion.div>

      <motion.div
        className="absolute -bottom-28 -right-24 w-72 h-72 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 opacity-30 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 7 }}
      ></motion.div>

      <div className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
              Joe Renald A
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            <TypeWriter text="BSc Computer Science | Software Developer" />
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-xl">
            I craft modern web applications with React, Tailwind CSS, and full-stack solutions. I focus on responsive design and seamless user experiences.
          </p>

          <div className="flex gap-4">
            <a href="#about" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
              Explore More
            </a>
            <a href="/resume.pdf" download className="px-6 py-3 border border-white/20 rounded-xl text-white/90 hover:bg-gray-800 transition">
              Resume
            </a>
          </div>
        </motion.div>
{/* Avatar Card With Elegant Background */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  whileHover={{ scale: 1.05 }}
  className="flex justify-center"
>
  <div className="relative w-80 h-80 p-2 rounded-3xl shadow-2xl flex items-center justify-center">
    {/* Elegant Gradient & Glow Background */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-700 via-blue-600/60 to-indigo-800/50 shadow-xl blur-3xl opacity-60 animate-blob-slow"></div>
    <div className="absolute inset-0 rounded-3xl bg-black/30 backdrop-blur-md border border-white/10"></div>

    {/* Content Layer */}
    <div className="relative w-full h-full rounded-2xl flex flex-col items-center justify-center">
      {/* Profile Image with Gradient Border */}
      <div className="relative w-36 h-36 rounded-full p-[3px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 shadow-lg">
        <img
          src={profile}
          alt="Joe Renald"
          className="w-full h-full rounded-full object-cover border-2 border-black/30 shadow-inner"
        />
      </div>

      {/* ROLE TEXT */}
      <div className="text-gray-300 font-medium text-sm mt-4">
        Student Developer
      </div>

      {/* SOCIAL ICONS */}
      <div className="flex gap-4 mt-5">
        <motion.a
          href="https://github.com/"
          target="_blank"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-blue-500/40 transition"
        >
          <Github size={22} className="text-white" />
        </motion.a>

        <motion.a
          href="https://linkedin.com/"
          target="_blank"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-blue-500/40 transition"
        >
          <Linkedin size={22} className="text-white" />
        </motion.a>

        <motion.a
          href="https://instagram.com/"
          target="_blank"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-pink-500/40 transition"
        >
          <Instagram size={22} className="text-white" />
        </motion.a>
      </div>
    </div>
  </div>
</motion.div>



      </div>
    </section>
  );
}
