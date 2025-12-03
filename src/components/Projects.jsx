import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Slider from "react-slick";
import Reveal from "./Reveal";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const dashboards = [
  {
    title: "Sales Performance Dashboard",
    category: "Power BI | Data Analytics",
    description: "Interactive dashboard for tracking revenue trends, sales KPIs and forecasting performance.",
    status: "Coming Soon",
    images: ["/images/dashboard1.png", "/images/dashboard1b.png", "/images/dashboard1c.png"],
    demo: "#",
    github: "#",
  },
  {
    title: "Student Analysis Dashboard",
    category: "Power BI | Education Insights",
    description: "Analyzes student results, performance comparison, and department insights.",
    status: "Coming Soon",
    images: ["/images/dashboard2.png", "/images/dashboard2b.png"],
    demo: "#",
    github: "#",
  },
  {
    title: "Financial Report Dashboard",
    category: "Power BI | Business Intelligence",
    description: "Financial overview covering expenses, profits, YoY comparison and projections.",
    status: "Coming Soon",
    images: ["/images/dashboard3.png"],
    demo: "#",
    github: "#",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" }); // triggers every time

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <section id="projects" ref={ref} className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-10 text-blue-400"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dashboards.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-700
              backdrop-blur-md hover:scale-[1.03] hover:rotate-1 hover:shadow-xl transition-all group cursor-pointer"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              onClick={() => setSelectedProject(project)}
            >
              <span className="absolute top-3 right-3 bg-blue-600
              text-[10px] font-bold px-2 py-1 rounded-full z-10">
                {project.status}
              </span>

              <div className="w-full h-40 bg-gray-700 rounded-lg mb-5 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-blue-400 text-sm">{project.category}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center px-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gray-800 p-6 rounded-xl shadow-xl max-w-3xl w-full relative border border-gray-700"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                {selectedProject.title}
              </h3>

              <p className="text-blue-400 text-sm mb-4">{selectedProject.category}</p>
              <p className="text-gray-300 mb-6">{selectedProject.description}</p>

              {selectedProject.images.length > 0 && (
                <Slider {...sliderSettings}>
                  {selectedProject.images.map((img, i) => (
                    <div key={i}>
                      <img
                        src={img}
                        alt={`${selectedProject.title}-${i}`}
                        className="rounded-lg w-full h-64 object-cover"
                      />
                    </div>
                  ))}
                </Slider>
              )}

              <div className="flex justify-center gap-4 mt-6">
                <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
                  Live Demo
                </a>
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition">
                  GitHub
                </a>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white bg-gray-700 px-3 py-1 rounded-lg hover:bg-gray-600 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
