import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_zvi34qj",
        "template_qisfk8p",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "iYyrzRmXvPTOgaWmS"
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });

        setTimeout(() => setSuccess(false), 3000);
      })
      .catch((err) => {
        setLoading(false);
        alert("Something went wrong!");
        console.log(err);
      });
  };

  return (
    <section id="contact" className="py-20 max-w-5xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10"
      >
        Contact Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-semibold">Let’s Connect 🤝</h3>
          <p className="text-gray-300">
            Feel free to reach out for collaborations, project discussions, or opportunities.
          </p>

          <div className="flex gap-4 text-xl mt-4">
            <a href="mailto:jorenald27@gmail.com" className="hover:text-blue-400">
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/joe-renald-a-a53b08275/"
              target="_blank"
              className="hover:text-blue-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              className="hover:text-blue-400"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 bg-black/50 p-6 rounded-xl backdrop-blur-md border border-white/10"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 bg-transparent border border-gray-600 rounded-lg"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 bg-transparent border border-gray-600 rounded-lg"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 bg-transparent border border-gray-600 rounded-lg"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-500"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-400 text-center mt-2">
              Message sent successfully!
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
