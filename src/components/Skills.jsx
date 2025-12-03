import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Reveal from "./Reveal";
import SkillCard from "./SkillCard";

const allSkills = [
  { name: "React", category: "Frontend", level: 90, exp: "2 years" },
  { name: "Tailwind CSS", category: "Frontend", level: 85, exp: "2 years" },
  { name: "JavaScript", category: "Frontend", level: 95, exp: "3 years" },
  { name: "HTML & CSS", category: "Frontend", level: 95, exp: "3 years" },
  { name: "PHP", category: "Backend", level: 75, exp: "2 years" },
  { name: "MySQL", category: "Database", level: 80, exp: "2 years" },
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
    threshold: 0.3,
  });

  return (
    <section id="skills" ref={ref} className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">Skills</h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                filter === cat
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

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
    </section>
  );
}
