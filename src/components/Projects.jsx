import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import { Github, X, ExternalLink } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    id: 1,
    title: "AI Study Planner",
    category: "AI • Python",
    image: "/asp.png",
    description:
      "AI-powered system that generates smart, personalized study schedules.",
    technologies: ["React", "Python", "Flask"],
    demo: "https://ai-study-planner-ilwe.vercel.app/",
    github: "https://github.com/joerenald",
  },
  {
    id: 2,
    title: "Gender Age Prediction",
    category: "AI • Deep Learning",
    image: "/gd.png",
    description:
      "Predicts age and gender from facial images using deep learning.",
    technologies: ["React", "TensorFlow", "CNN"],
    demo: "https://gender-detection-frontend-e3oc.vercel.app/",
    github: "https://github.com/joerenald",
  },
  {
    id: 3,
    title: "Disease Prediction System",
    category: "ML • Healthcare",
    image: "/dp1.png",
    description:
      "ML system that predicts diseases from symptoms input.",
    technologies: ["React", "Flask", "Machine Learning"],
    demo: "https://ai-disease-predictor-ashen.vercel.app/",
    github: "https://github.com/joerenald",
  },
];

function Arrow({ onClick, direction }) {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-20
      w-11 h-11 rounded-full
      flex items-center justify-center
      backdrop-blur-xl
      border border-white/10
      bg-white/5 hover:bg-white/10
      text-white/70 hover:text-white
      shadow-[0_8px_30px_rgba(0,0,0,0.4)]
      transition-all duration-300
      hover:scale-110 hover:border-white/20
      opacity-0 group-hover:opacity-100
      ${direction === "left" ? "-left-5" : "-right-5"}`}
    >
      <span className="text-lg leading-none">
        {direction === "left" ? "‹" : "›"}
      </span>
    </button>
  );
}
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="projects"
      className="relative py-28 px-4 overflow-hidden bg-gradient-to-b from-black via-[#0b0b10] to-black"
    >
      {/* Glow background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/2 w-[500px] h-[500px] bg-blue-600 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-3">
            AI • ML • Full Stack creations
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative group">
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="px-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-3xl overflow-hidden
                border border-white/10 bg-white/5 backdrop-blur-2xl
                shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-56 w-full object-cover
                    transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs text-blue-400 tracking-widest">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-bold text-white mt-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full
                        bg-white/5 border border-white/10 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-6">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center gap-2
                      py-2 rounded-xl bg-white text-black font-medium
                      hover:scale-[1.02] transition"
                    >
                      <ExternalLink size={16} /> Live
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-4 flex items-center justify-center
                      rounded-xl border border-white/15 text-white
                      hover:bg-white/10 transition"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-3xl
              bg-[#0f0f14] border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-white"
              >
                <X />
              </button>

              <img
                src={selectedProject.image}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-3xl font-bold text-white">
                  {selectedProject.title}
                </h3>

                <p className="text-blue-400 mt-2">
                  {selectedProject.category}
                </p>

                <p className="text-gray-300 mt-4 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}