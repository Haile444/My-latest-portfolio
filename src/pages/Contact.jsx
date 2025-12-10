import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-indigo-50 to-red-50 px-6"
    >
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Contact
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Let’s build something amazing together 🚀
        </p>

        {/* Contact Card */}
        <Card className="p-6 shadow-lg bg-white/80 backdrop-blur-md">
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
            <div className="flex items-center space-x-3 text-gray-700">
              <FaEnvelope className="text-2xl text-indigo-600" />
              <span>hailemeskel444@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <FaMapMarkerAlt className="text-2xl text-indigo-600" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 text-gray-700 text-2xl mb-6">
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

          {/* Contact Form */}
          <form
            action="mailto:hailemeskel444@gmail.com"
            method="POST"
            className="flex flex-col gap-4"
          >
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Textarea placeholder="Your Message" required />
            <Button type="submit" className="mt-2">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
