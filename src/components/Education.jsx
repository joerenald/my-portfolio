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
    icon: <FaUniversity size={26} className="text-purple-400" />,
    location: "Tiruchirappalli, Tamil Nadu",
    achievements: [
      "Enhancing expertise in advanced computer concepts",
      "Working on professional-level software projects",
      "AI/ML in focus",
    ],
  },
  {
    degree: "BSc Computer Science",
    institution: "Sacred Heart College, Tirupattur",
    year: "2022 - 2025",
    cgpa: "8.7 CGPA",
    icon: <FaGraduationCap size={26} className="text-blue-400" />,
    location: "Tirupattur, Tamil Nadu",
    achievements: [
      "Developed Question Bank Management System",
      "Continuous Rank Holder",
      "Active participant in technical events",
    ],
  },
];

export default function Education() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <section
      id="education"
      ref={ref}
     className="relative py-20 md:py-28 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute inset-0 grid-overlay opacity-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="
  text-4xl
  sm:text-5xl
  md:text-6xl
  font-extrabold
  text-center
 mb-10 md:mb-24
 px -2
"
        >
          Education Journey
        </motion.h3>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div
  className="
    absolute
    left-5
    md:left-1/2
    top-0
    h-full
    w-[3px]
    md:-translate-x-1/2
    bg-gradient-to-b
    from-blue-500
    via-purple-500
    to-cyan-500
    rounded-full
  "
></div>

          <div className="space-y-24">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
               initial={{
  opacity: 0,
  x: window.innerWidth < 768
    ? 50
    : index % 2 === 0
    ? -100
    : 100,
}}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        x: 0,
                      }
                    : {}
                }
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                className={`
                  relative
                  flex
                  ${
                    index % 2 === 0
                      ? "md:justify-start"
                      : "md:justify-end"
                  }
                  justify-center px-1
                `}
              >
                {/* Timeline Dot */}
               <div
  className="
    absolute
    left-5
    md:left-1/2
    top-16
    md:-translate-x-1/2
    -translate-x-1/2
    w-5 h-5
    md:w-7 md:h-7
    rounded-full
    bg-gradient-to-r
    from-blue-500
    via-purple-500
    to-cyan-500
    shadow-[0_0_25px_rgba(59,130,246,0.8)]
    z-20
  "
></div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -10,
                    rotateX: 4,
                    rotateY: 4,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                  }}
                 className="
  relative
  w-full
  md:w-[44%]
  ml-10
  md:ml-0
  overflow-hidden
  rounded-3xl
  border
  border-white/10
  bg-white/[0.04]
  backdrop-blur-2xl
  p-6
  md:p-8
  shadow-2xl
  group
"
                >
                  {/* Hover Glow */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-700
                      bg-gradient-to-br
                      from-blue-500/10
                      via-purple-500/10
                      to-cyan-500/10
                    "
                  ></div>

                 <div className="relative z-10 flex flex-col">
                    {/* Floating Icon */}
                  <div className="flex items-center gap-3 mb-5 md:justify-center">
  <motion.div
    animate={{ y: [0, -6, 0] }}
    transition={{
      duration: 3,
      repeat: Infinity,
    }}
    className="
      p-3
      rounded-xl
      bg-white/5
      border
      border-white/10
      flex-shrink-0
    "
  >
    {edu.icon}
  </motion.div>

  <div>
    <h4 className="font-bold text-white text-lg">
      {edu.degree.includes("MCA") ? "MCA" : "B.Sc CS"}
    </h4>

    <p className="text-xs text-gray-400">
      Academic Qualification
    </p>
  </div>
</div>

                    {/* Degree */}
                 <h3 className="text-lg md:text-2xl font-bold text-white mb-2 leading-tight text-left md:text-center">
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                  <p className="text-gray-300 mb-5 text-sm md:text-base text-left md:text-center">
                    </p>

                    {/* Badges */}
                   <div className="flex flex-wrap justify-start md:justify-center gap-2 md:gap-3 mb-6">
                      <span
  className="
    px-3 md:px-4
    py-1.5
    rounded-full
    bg-gradient-to-r
    from-blue-500
    to-purple-600
    text-white
    text-xs
    font-semibold
    shadow-lg
  "
>
                        {edu.year}
                      </span>

                      <span
  className="
    px-3 md:px-4
    py-1.5
                          rounded-full
                          bg-green-500/20
                          border
                          border-green-500/30
                          text-green-300
                          text-xs
                        "
                      >
                        {edu.cgpa}
                      </span>

                      <span
  className="
    flex
    items-center
    gap-1
    px-3 md:px-4
    py-1.5
                          rounded-full
                          bg-purple-500/20
                          border
                          border-purple-500/30
                          text-purple-300
                          text-xs
                        "
                      >
                        <HiLocationMarker size={14} />
                        {edu.location}
                      </span>
                    </div>

                    {/* Achievements */}
                   <ul className="space-y-3 text-sm md:text-base">
                      {edu.achievements.map((item, i) => (
                       <li
  key={i}
  className="
    flex
    items-start
    gap-3
    text-gray-300
    leading-relaxed
  "
>
                          <span className="text-cyan-400 mt-1">
                            ✦
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}