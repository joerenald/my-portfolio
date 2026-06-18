import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Reveal from "./Reveal";
import SkillCard from "./SkillCard.jsx";
import { motion } from "framer-motion";

const allSkills = [
  { name: "React", category: "Frontend", level: 90, exp: "2 years" },
  { name: "Tailwind CSS", category: "Frontend", level: 85, exp: "2 years" },
  { name: "JavaScript", category: "Frontend", level: 90, exp: "3 years" },
  { name: "HTML & CSS", category: "Frontend", level: 95, exp: "3 years" },
  { name: "Python", category: "Backend", level: 80, exp: "2 years" },
  { name: "MySQL", category: "Database", level: 85, exp: "2 years" },
  { name: "Git & GitHub", category: "Tools", level: 90, exp: "3 years" },
  { name: "Vite", category: "Tools", level: 70, exp: "1 year" },
];

const categories = ["All", "Frontend", "Backend", "Database", "Tools"];

export default function Skills() {
  const [filter, setFilter] = useState("All");

  const filteredSkills =
    filter === "All"
      ? allSkills
      : allSkills.filter((skill) => skill.category === filter);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      id="skills"
      ref={ref}
     className="relative py-20 md:py-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>

          <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>

         <p className="mt-4 text-gray-400 max-w-3xl mx-auto text-sm sm:text-base md:text-lg px-2">
            A collection of technologies, frameworks, and tools that I use to
            build responsive web applications, AI-powered solutions, and
            scalable software systems.
          </p>
        </motion.div>

        {/* Filter Buttons */}
       <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-10 md:mb-12">
          {categories.map((cat) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={cat}
              onClick={() => setFilter(cat)}
             className={`px-3 md:px-5 py-2 text-sm md:text-base rounded-full font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                  : "bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 hover:bg-white/10"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Skills Container */}
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {filteredSkills.map((skill, index) => (
              <Reveal key={skill.name}>
                <SkillCard
                  skill={skill}
                  index={index}
                  inView={inView}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}