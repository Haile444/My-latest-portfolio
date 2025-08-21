import React from "react";

export default function ProjectCard({ title, description, tech, link, image }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition-transform">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-gray-500 text-sm">{tech}</p>
        <a
          href={link}
          className="inline-block mt-3 text-indigo-600 hover:text-indigo-800"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
