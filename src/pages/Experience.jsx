import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Xoka IT Solution",
      period: "Aug 2024 – July 2025",
      description: [
        "Participated in Petroleum and Energy Authority website, Lucy ERP, land management, and government web applications using Angular, React, .NET Core, and SQL Server.",
        "Designed and integrated third-party backend APIs like telebirr and TIN verification, authentication, and optimized database queries.",
        "Delivered end-to-end full-stack solutions from UI to database.",
        "Collaborated with cross-functional teams to ensure high-quality software delivery.",
      ],
    },
    {
      title: "Personal Project",
      company: "Michot IT Solution Website",
      period: "2025",
      description: [
        "Independently built the Michot IT Solution Website using React + Tailwind CSS.",
        "Focused on responsive design, animations, smooth scrolling, and modern UI/UX.",
        "Implemented interactive features and optimized performance for web.",
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen px-6 py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, idx) => (
          <Card key={idx} className="p-6 shadow-lg rounded-xl">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-2xl font-bold">{exp.title}</h3>
              <Badge variant="secondary">{exp.period}</Badge>
            </div>
            <p className="text-gray-600 mb-4">{exp.company}</p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              {exp.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
