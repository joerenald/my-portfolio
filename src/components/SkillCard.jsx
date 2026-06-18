import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  FaReact,
  FaPython,
  FaDatabase,
  FaJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

const skillIcons = {
  React: <FaReact size={28} className="text-blue-400" />,

  "Tailwind CSS": (
    <SiTailwindcss size={28} className="text-teal-400" />
  ),

  JavaScript: <FaJs size={28} className="text-yellow-400" />,

  "HTML & CSS": (
    <div className="flex gap-1">
      <FaHtml5 size={28} className="text-orange-500" />
      <FaCss3Alt size={28} className="text-blue-600" />
    </div>
  ),

  Python: <FaPython size={28} className="text-yellow-400" />,

  MySQL: <FaDatabase size={28} className="text-cyan-400" />,

  "Git & GitHub": (
    <FaGitAlt size={28} className="text-orange-600" />
  ),

  Vite: <SiVite size={28} className="text-purple-400" />,
};

export default function SkillCard({ skill, index, inView }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = skill.level;
      const duration = 1500;
      const step = end / (duration / 20);

      const timer = setInterval(() => {
        start += step;

        if (start >= end) {
          start = end;
          clearInterval(timer);
        }

        setDisplayValue(Math.round(start));
      }, 20);

      return () => clearInterval(timer);
    } else {
      setDisplayValue(0);
    }
  }, [inView, skill.level]);

  const circleRadius = 28;
  const circumference = 2 * Math.PI * circleRadius;

  return (
    <motion.div
      className="
        relative
        p-6
        rounded-2xl
        overflow-hidden
        cursor-pointer
        border
        border-white/10
        bg-white/5
        backdrop-blur-lg
        shadow-xl
        hover:shadow-cyan-500/20
        hover:border-cyan-400/40
        transition-all
        duration-500
        group
      "
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
      }}
      whileHover={{
        scale: 1.05,
        y: -10,
      }}
    >
      {/* Glow Effect */}
      <div className="
        absolute
        inset-0
        bg-gradient-to-r
        from-blue-500/10
        to-cyan-400/10
        opacity-0
        group-hover:opacity-100
        blur-2xl
        transition-all
        duration-700
      "></div>

      {/* Shine Effect */}
      <div className="
        absolute
        top-0
        left-[-120%]
        w-full
        h-full
        bg-white/10
        skew-x-12
        group-hover:left-[200%]
        transition-all
        duration-1000
      "></div>

      {/* Progress Circle */}
      <div className="relative flex justify-center items-center mb-5">
        <svg className="w-24 h-24 rotate-[-90deg]">
          {/* Background Circle */}
          <circle
            className="text-gray-700"
            strokeWidth="6"
            stroke="currentColor"
            fill="transparent"
            r={circleRadius}
            cx="48"
            cy="48"
          />

          {/* Animated Circle */}
          <motion.circle
            className="text-cyan-400"
            strokeWidth="6"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={circleRadius}
            cx="48"
            cy="48"
            strokeDasharray={circumference}
            strokeDashoffset={
              circumference * (1 - displayValue / 100)
            }
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </svg>

        {/* Percentage */}
        <div className="absolute text-center">
         <h3 className="text-lg font-bold text-white w-12 text-center">
  {displayValue}%
</h3>
        </div>

        {/* Icon */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#0f172a] p-2 rounded-full border border-white/10 shadow-lg">
  {skillIcons[skill.name]}
</div>
      </div>

      {/* Skill Name */}
     <h3 className="text-xl font-semibold text-center mb-2 mt-4 truncate">
  {skill.displayName || skill.name}
</h3>

      {/* Category */}
      <div className="flex justify-center">
        <span className="
          text-xs
          px-3
          py-1
          rounded-full
          bg-cyan-500/10
          text-cyan-300
          border
          border-cyan-400/20
        ">
          {skill.category}
        </span>
      </div>
    </motion.div>
  );
}
