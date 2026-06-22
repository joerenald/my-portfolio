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
      className={`hidden md:flex absolute top-1/2 -translate-y-1/2 z-20
      w-12 h-12 rounded-full
      items-center justify-center
      bg-white/10 backdrop-blur-xl
      border border-white/10
      text-white hover:bg-white/20
      transition-all duration-300
      ${
        direction === "left"
          ? "-left-6"
          : "-right-6"
      }`}
    >
      <span className="text-2xl">
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
    autoplaySpeed: 3500,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
   responsive: [
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
      centerPadding: "40px",
    },
  },
],
  };

  return (
    <section
      id="projects"
      className="
      relative
      py-20 md:py-28
      px-4
      overflow-hidden
      bg-gradient-to-b
      from-black
      via-[#09090f]
      to-black"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[180px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-3 text-sm md:text-base">
            AI • ML • Full Stack creations
          </p>
        </motion.div>

        {/* Slider */}
       {/* MOBILE LAYOUT */}
<div className="block md:hidden space-y-6">
  {projects.map((project) => (
    <motion.div
      key={project.id}
      whileTap={{ scale: 0.98 }}
      onClick={() => setSelectedProject(project)}
      className="
      overflow-hidden
      rounded-[28px]
      border border-white/10
      bg-white/[0.04]
      backdrop-blur-xl
      shadow-[0_10px_40px_rgba(0,0,0,0.35)]
      "
    >
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="
          w-full
          h-[220px]
          object-cover
          "
        />

        <div
          className="
          absolute top-4 right-4
          px-4 py-2
          rounded-full
          bg-gradient-to-r
          from-blue-500
          to-purple-500
          text-white
          text-xs
          font-medium
          shadow-lg
          "
        >
          Live Project
        </div>
      </div>

      <div className="p-5">
        <p className="text-cyan-400 text-xs uppercase tracking-widest">
          {project.category}
        </p>

        <h3 className="text-2xl font-bold text-white mt-2">
          {project.title}
        </h3>

        <p className="text-gray-400 mt-3 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
              px-3 py-1
              rounded-full
              text-xs
              bg-white/5
              border border-white/10
              text-gray-300
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-6">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="
            flex-1
            h-12
            rounded-xl
            bg-gradient-to-r
            from-blue-500
            to-purple-500
            flex
            items-center
            justify-center
            text-white
            font-semibold
            "
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="
            w-12
            h-12
            rounded-xl
            border
            border-white/10
            flex
            items-center
            justify-center
            text-white
            "
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  ))}
</div>

{/* DESKTOP LAYOUT */}
<div className="hidden md:block relative">
  <Slider {...settings}>
    {projects.map((project) => (
      <div key={project.id} className="px-4">
        <motion.div
          whileHover={{ y: -8 }}
          onClick={() => setSelectedProject(project)}
          className="
          cursor-pointer
          rounded-3xl
          overflow-hidden
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-xl
          shadow-[0_8px_25px_rgba(0,0,0,0.25)]
          h-[520px]
          flex flex-col
          "
        >
          <img
            src={project.image}
            alt={project.title}
            className="
            w-full
            h-56
            object-cover
            transition
            duration-700
            hover:scale-105
            "
          />

          <div className="p-6 flex flex-col flex-1">
            <p className="text-cyan-400 uppercase tracking-widest text-xs">
              {project.category}
            </p>

            <h3 className="text-3xl font-bold text-white mt-3">
              {project.title}
            </h3>

            <p className="text-gray-400 mt-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                  px-3 py-1
                  rounded-full
                  text-xs
                  bg-white/5
                  border border-white/10
                  text-gray-300
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-auto pt-5">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="
                flex-1
                h-12
                rounded-xl
                bg-white
                text-black
                font-semibold
                flex items-center justify-center
                gap-2
                "
              >
                <ExternalLink size={18} />
                Live
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="
                w-12 h-12
                rounded-xl
                border border-white/10
                flex items-center justify-center
                text-white
                "
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

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="
            fixed inset-0 z-50
            bg-black/80
            backdrop-blur-md
            flex items-center justify-center
            p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="
              w-full max-w-3xl
              rounded-3xl
              overflow-hidden
              bg-[#0f1117]
              border border-white/10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 text-white"
              >
                <X size={22} />
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
               className="w-full h-36 md:h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-3xl font-bold text-white">
                  {selectedProject.title}
                </h3>

                <p className="text-cyan-400 mt-2">
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