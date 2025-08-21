import React from "react";
import ProjectCard from "../components/ProjectCard";
// Placeholder images
 import lucyERP from "../assets/lucy-erp.jpg";
import petroleum from "../assets/petroleum.png";
import land from "../assets/Land.png";
import michot from "../assets/michot.png";
// const placeholder = "https://via.placeholder.com/400x250";

export default function Projects() {
 

const projects = [
  {
    title: "Lucy ERP",
    description: "Enterprise ERP system (Fullstack role)",
    tech: "Angular, .ASP.NET Core, SQL Server",
    link: "#",
    image: lucyERP,
  },
  {
    title: "Petroleum & Energy Website(Fullstack role)",
    description: "Licenese based website project",
    tech: "Angular, ASP.NET Core, SQL Server",
    link: "#",
    image: petroleum,
  },
  {
    title: "Addis Land",
    description: "Land management system (Fullstack role)",
    tech: "Angular, .NET Core, SQL Server",
    link: "#",
    image: land,
  },
  {
    title: "Michot IT Solution Website",
    description: "Company website built solo",
    tech: "React, Tailwind CSS, Framer Motion",
    link: "#",
    image: michot,
  },
];


  return (
    <section id="projects" className="py-20 bg-gray-100 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
