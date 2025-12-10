// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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

      {/* Buttons */}
      <motion.div
        className="mt-8 flex flex-wrap justify-center gap-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <Button onClick={() => (window.location.href = "/projects")}>
          View Projects
        </Button>
        <Button
          variant="outline"
          onClick={() => (window.location.href = "/contact")}
        >
          Contact Me
        </Button>
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <Card className="p-6 bg-white/20 backdrop-blur-md">
          <h3 className="text-xl font-semibold mb-2">Modern UI</h3>
          <p>Clean, responsive, and Shadcn-powered components for your apps.</p>
        </Card>

        <Card className="p-6 bg-white/20 backdrop-blur-md">
          <h3 className="text-xl font-semibold mb-2">Fast Development</h3>
          <p>
            Build your portfolio or projects rapidly with ready-made components.
          </p>
        </Card>

        <Card className="p-6 bg-white/20 backdrop-blur-md">
          <h3 className="text-xl font-semibold mb-2">Fully Responsive</h3>
          <p>Looks great on desktop, tablet, and mobile screens.</p>
        </Card>
      </motion.div>
    </motion.section>
  );
}
