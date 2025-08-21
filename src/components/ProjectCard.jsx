import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ title, description, tech, link, image }) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {image && <img src={image} alt={title} className="rounded-lg mb-4 w-full h-40 object-cover" />}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-sm text-gray-500 mb-4">{tech}</p>
      {link && (
        <a href={link} target="_blank" className="text-red-600 hover:text-indigo-600">
          View Project
        </a>
      )}
    </motion.div>
  );
}
