import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
} from "framer-motion";

import Slider from "react-slick";

import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
} from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const dashboards = [
  {
    title: "Gender Age Prediction WebApp",
    category: "AI | ML",
    description:
      "An AI-powered web application that predicts gender, age from facial images using ML.",
    status: "Live",
    images:["/gd.png"],
    demo: "https://gender-detection-frontend-e3oc.vercel.app/",
    github: "https://github.com/joerenald",
  },
  {
    title: "AI Study Planner",
    category: "AI | Python",
    description:
      "An AI-powered study planning app that helps students organize schedules and manage tasks intelligently.",
    status: "Live",
    images:["/asp.png"],
    demo: "https://ai-study-planner-ilwe.vercel.app/",
    github: "https://github.com/joerenald",
  },
  {
    title: "Disease Prediction System",
    category: "AI | ML",
    description:
      "A healthcare application that predicts diseases using machine learning algorithms and symptom analysis.",
    status: "Live",
    images: ["/dp1.png"],
    demo: "https://ai-disease-predictor-ashen.vercel.app/",
    github: "https://github.com/joerenald",
  },

];

/* CUSTOM ARROWS */

function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute -right-5 top-1/2 -translate-y-1/2 z-20
      bg-white/10 backdrop-blur-md border border-white/20
      p-3 rounded-full shadow-xl hover:scale-110
      hover:bg-blue-500/20 transition duration-300"
    >
      <ChevronRight className="text-white" size={24} />
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute -left-5 top-1/2 -translate-y-1/2 z-20
      bg-white/10 backdrop-blur-md border border-white/20
      p-3 rounded-full shadow-xl hover:scale-110
      hover:bg-blue-500/20 transition duration-300"
    >
      <ChevronLeft className="text-white" size={24} />
    </button>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: false,
    margin: "-100px",
  });

  /* MAIN PROJECT SLIDER */

  const projectSliderSettings = {
  dots: true,
  infinite: false,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  pauseOnHover: true,
  centerMode: false,

  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

  /* IMAGE SLIDER INSIDE MODAL */

  const imageSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 px-6 bg-gray-900 overflow-hidden relative"
    >
      {/* BACKGROUND GLOW */}

      <div
        className="absolute top-20 left-10 w-72 h-72
        bg-blue-500/20 blur-3xl rounded-full"
      ></div>

      <div
        className="absolute bottom-10 right-10 w-80 h-80
        bg-purple-500/20 blur-3xl rounded-full"
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* TITLE */}

        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16
          bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500
          bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Featured Projects
        </motion.h2>

        {/* SLIDER */}

        <Slider {...projectSliderSettings}>
          {dashboards.map((project, index) => (
            <div key={index} className="px-4 py-6">
              <motion.div
  whileHover={{
    y: -12,
    rotateX: 6,
    rotateY: -6,
  }}
  transition={{
    type: "spring",
    stiffness: 200,
    damping: 15,
  }}
className="
relative group rounded-3xl overflow-hidden
bg-white/5 backdrop-blur-xl border border-white/10
shadow-2xl cursor-pointer
h-[420px] md:h-[500px]
flex flex-col
"
  onClick={() => setSelectedProject(project)}
>
  {/* GLOW HOVER */}
  <div
    className="absolute inset-0 opacity-0 group-hover:opacity-100
    transition duration-700
    bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"
  ></div>

  {/* STATUS */}
  <span
    className="absolute top-4 right-4 z-20
    bg-gradient-to-r from-blue-500 to-purple-600
    text-white text-[10px] font-bold
    px-3 py-1 rounded-full shadow-lg"
  >
    {project.status}
  </span>

  {/* IMAGE */}
  <div className="relative h-60 overflow-hidden flex-shrink-0">
    <img
      src={project.images[0]}
      alt={project.title}
      className="w-full h-full object-cover
      group-hover:scale-110 group-hover:rotate-1
      transition duration-[1200ms]"
    />

    <div
      className="absolute inset-0 bg-gradient-to-t
      from-black/70 via-black/20 to-transparent"
    ></div>
  </div>

  {/* CONTENT */}
  <div className="relative z-10 p-6 flex flex-col flex-grow">
    <h3
  className="
  text-xl md:text-2xl
  font-bold text-white mb-3
  min-h-[56px]
  line-clamp-2
  "
>
  {project.title}
</h3>

    <p className="text-blue-400 text-sm mb-4">
      {project.category}
    </p>

    <p
      className="text-gray-300 text-sm leading-relaxed
      line-clamp-4 flex-grow"
    >
      {project.description}
    </p>

    {/* BUTTON */}
    <div
      className="mt-6 opacity-0 translate-y-5
      group-hover:opacity-100 group-hover:translate-y-0
      transition duration-500"
    >
      <button
        className="px-5 py-2 rounded-xl
        bg-gradient-to-r from-blue-500 to-purple-600
        text-white font-medium shadow-lg"
      >
        View Details
      </button>
    </div>
  </div>

  {/* BORDER GLOW */}
  <div
    className="absolute inset-0 rounded-3xl border
    border-transparent group-hover:border-blue-400/30
    transition duration-500"
  ></div>
</motion.div></div>
          ))}
        </Slider>
      </div>

      {/* MODAL */}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md
            flex items-center justify-center px-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gray-900 border border-white/10
              rounded-3xl p-6 max-w-4xl w-full relative shadow-2xl"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE */}

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/10
                hover:bg-white/20 text-white px-3 py-1 rounded-lg transition"
              >
                ✕
              </button>

              {/* TITLE */}

              <h3 className="text-3xl font-bold text-white mb-3">
                {selectedProject.title}
              </h3>

              <p className="text-blue-400 mb-5">
                {selectedProject.category}
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* IMAGE SLIDER */}

              <Slider {...imageSliderSettings}>
                {selectedProject.images.map((img, i) => (
                  <div key={i}>
                    <img
                      src={img}
                      alt=""
                      className="rounded-2xl w-full h-[420px] object-cover"
                    />
                  </div>
                ))}
              </Slider>

              {/* ACTION BUTTONS */}

              <div className="flex justify-center gap-4 mt-8">
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl
                  bg-gradient-to-r from-blue-500 to-purple-600
                  text-white font-semibold hover:scale-105 transition"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl
                  bg-white/10 border border-white/10 text-white
                  font-semibold hover:bg-white/20 transition"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}