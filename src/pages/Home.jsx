import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gray-50 text-center px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
        Hi, I'm <span className="text-red-600">Hailemeskel Girum</span> 👋
      </h1>

      <p className="mt-4 text-lg md:text-2xl text-gray-700 font-medium">
        Fullstack Developer | Application Developer
      </p>

      <p className="mt-6 max-w-2xl text-gray-600 text-md md:text-lg leading-relaxed">
        I create scalable web applications and enterprise-level web-based solutions.
        Experienced in <span className="text-blue-600 font-semibold">Angular</span>,{" "}
        <span className="text-indigo-600 font-semibold">React</span>,{" "}
        <span className="text-gray-800 font-semibold">.NET Core</span>, and{" "}
        <span className="text-yellow-600 font-semibold">SQL Server</span>.
      </p>

      <a
        href="#contact"
        className="mt-8 inline-block bg-gradient-to-r from-red-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition"
      >
        Contact Me
      </a>
    </motion.section>
  );
}
