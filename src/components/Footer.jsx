import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-2">
            Joe Renald A
          </h3>

          <p className="text-gray-400 mb-6">
            MCA Student • Full Stack Developer • AI Enthusiast
          </p>

          <div className="flex justify-center gap-5 mb-6">
            <a
              href="https://github.com/joerenald"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 transition"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/joereno754"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 transition"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://www.instagram.com/joe_reno754"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400 transition"
            >
              <Instagram size={20} />
            </a>
          </div>

          <div className="h-px bg-white/10 mb-6"></div>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Joe Renald A. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}