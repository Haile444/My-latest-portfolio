import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Lucy ERP",
      description: "Enterprise ERP system (Participate as Fullstack role)",
      tech: "Angular, ASP.NET Core, SQL Server",
      link: "#", // no live link available
      image: "/assets/lucy-erp.jpg",
    },
    {
      title: "Petroleum & Energy Authority Website",
      description: "License-based website project(Participate as Fullstack role)",
      tech: "Angular, ASP.NET Core, SQL Server",
      link: "https://ews.pea.gov.et/", // ✅ real link
      image: "/assets/petroleum.png",
    },
    {
      title: "Addis Land",
      description: "Land management system (Participate as Fullstack role)",
      tech: "Angular, .NET Core, SQL Server",
      link: "https://www.addisland.gov.et/en-us/", // ✅ real link
      image: "/assets/land.PNG", // make sure filename matches exactly (png vs PNG)
    },
    {
      title: "Michot IT Solution Website",
      description: "Company website built solo",
      tech: "React, Tailwind CSS, Framer Motion",
      link: "https://michotitsolution.com/", // ✅ real link
      image: "/assets/michot.PNG", 
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Projects
      </h2>
      <div className="container mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
