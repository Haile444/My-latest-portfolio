import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Projects() {
  const projects = [
    {
      title: "Lucy ERP",
      description: "Enterprise ERP system (Participated as Fullstack)",
      tech: "Angular, ASP.NET Core, SQL Server",
      link: "#", // no live link available
      image: "/assets/lucy-erp.jpg",
    },
    {
      title: "Petroleum & Energy Authority Website",
      description: "License-based website project (Fullstack role)",
      tech: "Angular, ASP.NET Core, SQL Server",
      link: "https://ews.pea.gov.et/",
      image: "/assets/petroleum.png",
    },
    {
      title: "Addis Land",
      description: "Land management system (Fullstack role)",
      tech: "Angular, .NET Core, SQL Server",
      link: "https://www.addisland.gov.et/en-us/",
      image: "/assets/land.PNG",
    },
    {
      title: "Michot IT Solution Website",
      description: "Company website built solo",
      tech: "React, Tailwind CSS, Framer Motion",
      link: "https://michotitsolution.com/",
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
          <Card
            key={i}
            className="overflow-hidden shadow-lg bg-white hover:shadow-2xl transition"
          >
            {/* Project Image */}
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-cover"
            />

            {/* Card Content */}
            <div className="p-6 flex flex-col justify-between h-full">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-600 mb-2">{p.description}</p>

              <Tooltip>
                <TooltipTrigger>
                  <p className="text-gray-500 italic text-sm cursor-help">
                    {p.tech}
                  </p>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs">
                  Technologies used in this project
                </TooltipContent>
              </Tooltip>

              <Button
                variant={p.link === "#" ? "ghost" : "default"}
                className="mt-4"
                onClick={() => {
                  if (p.link !== "#") window.open(p.link, "_blank");
                }}
                disabled={p.link === "#"}
              >
                {p.link === "#" ? "Coming Soon" : "Visit Project"}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
