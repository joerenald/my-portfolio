import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCertificate } from "react-icons/fa";

// Images
import nptelDB from "../npteldb.jpeg";

const certificatesData = [
  {
    title: "Database Management System",
    organization: "NPTEL",
    date: "July 2024",
    category: "Tech",
    image: nptelDB,
    icon: <FaCertificate size={24} className="text-yellow-400" />,
  },
  {
    title: "React - The Complete Guide",
    organization: "Udemy",
    date: "June 2024",
    category: "Tech",
    image: "/certificates/react-guide.jpg",
    icon: <FaCertificate size={24} className="text-yellow-400" />,
  },
  {
    title: "Power BI Essentials",
    organization: "Microsoft Learn",
    date: "August 2024",
    category: "Data",
    image: "/certificates/powerbi.jpg",
    icon: <FaCertificate size={24} className="text-green-400" />,
  },
  {
    title: "Data Structures & Algorithms",
    organization: "Coursera",
    date: "Coming Soon",
    category: "Tech",
    image: "/certificates/comingsoon.jpg",
    icon: <FaCertificate size={24} className="text-gray-400" />,
  },
  {
    title: "AWS Cloud Practitioner",
    organization: "Amazon AWS",
    date: "Coming Soon",
    category: "Cloud",
    image: "/certificates/comingsoon.jpg",
    icon: <FaCertificate size={24} className="text-gray-400" />,
  },
  {
    title: "Python for Everybody",
    organization: "Coursera",
    date: "Coming Soon",
    category: "Tech",
    image: "/certificates/comingsoon.jpg",
    icon: <FaCertificate size={24} className="text-gray-400" />,
  },
  {
    title: "Full Stack Development",
    organization: "GUVI",
    date: "Coming Soon",
    category: "Tech",
    image: "/certificates/comingsoon.jpg",
    icon: <FaCertificate size={24} className="text-gray-400" />,
  },
];

export default function Certificates() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isPaused, setIsPaused] = useState(false);

  const filteredCertificates =
    activeFilter === "All"
      ? certificatesData
      : certificatesData.filter((c) => c.category === activeFilter);

  const cardWidth = 330;

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % filteredCertificates.length);

  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + filteredCertificates.length) % filteredCertificates.length
    );

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) nextSlide();
    else if (info.offset.x > 50) prevSlide();
  };

  // ⭐ Auto Play Slider
  useEffect(() => {
    if (isPaused || modalOpen) return;
    const interval = setInterval(() => nextSlide(), 3000);
    return () => clearInterval(interval);
  }, [isPaused, modalOpen, filteredCertificates.length]);

  // ⭐ Restart slider when section enters view
  useEffect(() => {
    if (inView) setCurrentIndex(0);
  }, [inView]);

  return (
    <section id="certificates" ref={ref} className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-400 tracking-wide drop-shadow-md">
          Certificates
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Tech", "Data", "Cloud"].map((filter) => (
            <button
              key={filter}
              className={`px-6 py-2 rounded-full transition-all shadow-md hover:shadow-blue-500/30 ${
                activeFilter === filter
                  ? "bg-blue-600 text-white scale-105"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() => {
                setActiveFilter(filter);
                setCurrentIndex(0);
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div
          className="relative max-w-6xl mx-auto overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-700/70 hover:bg-blue-600 px-4 py-1 rounded-full text-xl z-10"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-700/70 hover:bg-blue-600 px-4 py-1 rounded-full text-xl z-10"
          >
            ❯
          </button>

          <motion.div
            className="flex gap-6 py-6"
            style={{
              transform: `translateX(-${currentIndex * cardWidth}px)`,
              transition: "transform 0.45s ease-in-out",
            }}
          >
            {filteredCertificates.map((cert, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] p-4 bg-gray-800 rounded-2xl shadow-xl ring-1 ring-gray-600 
                hover:ring-blue-400 hover:shadow-blue-700/30 cursor-pointer group"
                onClick={() => openModal(index)}
              >
                <div className="flex justify-center mb-3">{cert.icon}</div>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="rounded-lg h-36 w-full object-cover group-hover:scale-105 transition-transform"
                />
                <h3 className="text-lg font-semibold mt-2">{cert.title}</h3>
                <p className="text-sm text-gray-300">{cert.organization}</p>
                <p className="text-xs text-gray-400 mt-1">{cert.date}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-4 gap-2">
          {filteredCertificates.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                i === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-600"
              }`}
              onClick={() => setCurrentIndex(i)}
            ></div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              className="relative max-w-3xl w-full p-4"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
            >
              <img
                src={filteredCertificates[currentIndex].image}
                alt={filteredCertificates[currentIndex].title}
                className="w-full rounded-lg shadow-xl"
              />

              <p className="text-center mt-3 text-md font-medium">
                {filteredCertificates[currentIndex].title} —{" "}
                {filteredCertificates[currentIndex].organization}
              </p>

              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-4xl font-bold"
              >
                ❮
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-4xl font-bold"
              >
                ❯
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-2 right-3 text-3xl font-bold"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
