import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaPhp, FaDatabase, FaJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiHtml5, SiCss3 } from "react-icons/si";

const skillIcons = {
  React: <FaReact size={28} className="text-blue-400" />,
  "Tailwind CSS": <SiTailwindcss size={28} className="text-teal-400" />,
  JavaScript: <FaJs size={28} className="text-yellow-400" />,
  "HTML & CSS": (
    <div className="flex gap-1">
      <SiHtml5 size={28} className="text-orange-500" />
      <SiCss3 size={28} className="text-blue-600" />
    </div>
  ),
  PHP: <FaPhp size={28} className="text-indigo-500" />,
  MySQL: <FaDatabase size={28} className="text-cyan-400" />,
  "Git & GitHub": <FaGitAlt size={28} className="text-orange-600" />,
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
    } else {
      setDisplayValue(0);
    }
  }, [inView, skill.level]);

  const circleRadius = 28;
  const circumference = 2 * Math.PI * circleRadius;

  return (
    <motion.div
      className="relative p-5 rounded-xl shadow-md cursor-pointer transition-all hover:shadow-xl hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <svg className="w-16 h-16 mx-auto mb-3 relative z-10">
        <circle
          className="text-gray-700"
          strokeWidth="4"
          stroke="currentColor"
          fill="transparent"
          r={circleRadius}
          cx="32"
          cy="32"
        />

        <motion.circle
          className="text-blue-400"
          strokeWidth="4"
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={circleRadius}
          cx="32"
          cy="32"
          strokeDasharray={circumference}
          strokeDashoffset={
            inView
              ? circumference * (1 - displayValue / 100)
              : circumference
          }
        />

        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-xs font-semibold fill-white"
        >
          {displayValue}%
        </text>
      </svg>

      <div className="absolute inset-0 flex items-center justify-center -mt-1 z-20">
        {skillIcons[skill.name]}
      </div>

      <p className="text-lg font-semibold mt-20">{skill.name}</p>
      <p className="text-xs bg-blue-500/20 text-blue-400 rounded-full px-2 py-1 mt-1 inline-block">
        {skill.category}
      </p>
    </motion.div>
  );
}
