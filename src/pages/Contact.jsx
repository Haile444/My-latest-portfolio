import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-indigo-50 to-red-50 px-6">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact</h2>
        <p className="text-gray-600 mb-8">Let’s build something amazing together 🚀</p>

        {/* Contact Info */}
        <div className="space-y-6 text-gray-700 text-lg md:text-xl">
          <div className="flex items-center justify-center space-x-4">
            <FaEnvelope className="text-2xl text-indigo-600" />
            <span>hailemeskel444@gmail.com</span>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <FaPhone className="text-2xl text-red-600" />
            <span>+251 962 91 03 58</span>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <FaMapMarkerAlt className="text-2xl text-indigo-600" />
            <span>Addis Ababa, Ethiopia</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-10 flex justify-center space-x-6 text-gray-700 text-2xl">
          <a
            href="https://www.linkedin.com/in/hailemeskel-girum-09099a301"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Haile444"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
