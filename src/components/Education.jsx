import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { useInView } from "react-intersection-observer";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "St. Joseph's College (Autonomous), Trichy",
    year: "2025 - Present",
    cgpa: "Currently Pursuing",
    icon: <FaUniversity size={24} className="text-purple-400" />,
    location: "Tiruchirappalli, Tamil Nadu",
    achievements: [
      "Enhancing expertise in advanced computer concepts",
      "Working on professional-level software projects",
      "Data Analytics & Cloud Computing in focus",
    ],
  },
  {
    degree: "BSc Computer Science",
    institution: "Sacred Heart College, Tirupattur",
    year: "2022 - 2025",
    cgpa: "8.7 CGPA",
    icon: <FaGraduationCap size={24} className="text-blue-400" />,
    location: "Tirupattur, Tamil Nadu",
    achievements: [
      "Developed Question Bank Management System",
      "Power BI projects & Data Visualization expertise",
      "Active participant in tech events",
    ],
  },
];

export default function Education() {
  const { ref, inView } = useInView({
    triggerOnce: false, // animate every time section comes into view
    threshold: 0.3,
  });

  return (
    <section id="education" ref={ref} className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-400">
          Education
        </h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 h-full rounded-full"></div>

          <div className="flex flex-col space-y-14">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                className="relative w-full md:w-1/2 mx-auto backdrop-blur-xl bg-gray-800/60 border border-gray-700 p-6 rounded-2xl shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                transition={{ duration: 0.7 }}
                style={{ marginLeft: index % 2 === 0 ? "0" : "50%" }}
              >
                {/* Timeline node */}
                <div className="absolute -left-6 md:-right-6 top-6 w-5 h-5 bg-blue-500 rounded-full shadow-lg border-4 border-gray-900"></div>

                {/* Degree and Icon */}
                <div className="flex items-center justify-center gap-3 mb-2">
                  {edu.icon}
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                </div>

                {/* Institution */}
                <p className="text-gray-300 font-medium text-center">{edu.institution}</p>

                {/* Year, CGPA, Location */}
                <div className="flex flex-wrap justify-center gap-3 mt-2 mb-3">
                  <span className="text-xs bg-blue-600/30 px-3 py-1 rounded-full border border-blue-500">
                    {edu.year}
                  </span>
                  <span className="text-xs bg-green-600/30 px-3 py-1 rounded-full border border-green-500">
                    {edu.cgpa}
                  </span>
                  <span className="flex items-center text-xs bg-purple-600/30 px-3 py-1 rounded-full gap-1 border border-purple-500">
                    <HiLocationMarker size={13} />
                    {edu.location}
                  </span>
                </div>

                {/* Achievements */}
                <ul className="text-sm text-gray-300 space-y-1 mt-2 text-left">
                  {edu.achievements.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-blue-400">•</span>{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
