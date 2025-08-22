// src/pages/Experience.jsx
import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen px-4 py-10">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-10">
        Experience
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Xoka IT Solution */}
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h3 className="text-2xl font-bold">Full-Stack Developer</h3>
          <p className="text-gray-600">
            Xoka IT Solution | Aug 2024 – July 2025
          </p>
          <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700">
            <li>
              Participate in petroleumand energy authority website , Lucy ERP, land management, and government web applications
              using <strong>Angular, React, .NET Core, and SQL Server</strong>.
            </li>
            <li>
              Designed and integrated third party backend APIs like telebirr and tin verification, authentication, and
              optimized database queries.
            </li>
            <li>
              Delivered end-to-end full-stack solutions from UI to database.
            </li>
            <li>
              collaborated with cross-functional teams to ensure high-quality software delivery.
            </li>
          </ul>
        </div>

        {/* Personal Project: Michot */}
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h3 className="text-2xl font-bold">Personal Project</h3>
          <p className="text-gray-600">Michot IT Solution Website | 2025</p>
          <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700">
            <li>
              Independently built the <strong>Michot IT Solution Website</strong> using{" "}
              <strong>React + Tailwind CSS</strong>.
            </li>
            <li>
              Focused on responsive design, animations, smooth scrolling, and modern UI/UX.
            </li>
            <li>
              Implemented interactive features and optimized performance for web.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
