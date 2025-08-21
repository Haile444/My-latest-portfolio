// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg";

export default function Home() {
  return (
    <motion.section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gray-50 text-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Profile Picture */}
      <motion.img
        src={profilePic}
        alt="Hailemeskel Girum"
        className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full shadow-lg mb-6 object-cover object-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {/* Intro Text */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-gray-800"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Hi, I'm <span className="text-red-600">Hailemeskel Girum</span> 👋
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-2xl text-gray-700 font-medium max-w-xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        Fullstack Developer | Application Developer
      </motion.p>

      {/* Contact Button */}
      <motion.a
        href="#contact"
        className="mt-8 inline-block bg-gradient-to-r from-red-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        Contact Me
      </motion.a>
    </motion.section>
  );
}
