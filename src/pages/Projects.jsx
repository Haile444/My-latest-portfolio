import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Carefiapic from "../assets/Capture.PNG";
const projects = [
  {
    title: "Lucy ERP",
    description:
      "Comprehensive enterprise resource planning system with full-stack contribution",
    tech: ["Angular", "ASP.NET Core", "SQL Server"],
    link: "#",
    image: "/assets/lucy-erp.jpg",
    status: "Completed",
  },
  {
    title: "Petroleum & Energy Authority Website",
    description: "Official government licensing and information portal",
    tech: ["Angular", "ASP.NET Core", "SQL Server"],
    link: "https://ews.pea.gov.et/",
    image: "/assets/petroleum.png",
    status: "Live",
  },
  {
    title: "Addis Land Management System",
    description:
      "Digital land administration and management platform for Addis Ababa",
    tech: ["Angular", ".NET Core", "SQL Server"],
    link: "https://www.addisland.gov.et/en-us/",
    image: "/assets/land.PNG",
    status: "Live",
  },
  {
    title: "Michot IT Solution Corporate Website",
    description: "Modern corporate website showcasing services and portfolio",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://michotitsolution.com/",
    image: "/assets/michot.PNG",
    status: "Live",
  },
  {
    title: "Michot Marefia Booking Platform",
    description: "Full-featured hotel and property booking system",
    tech: ["React", "Node.js", "Mobile Integration"],
    link: "https://michotmarefia.com/",
    image: Carefiapic,
    status: "Live",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of professional projects I've contributed to as a
            full-stack developer
          </p>
        </motion.div>

        <TooltipProvider>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-500 bg-background">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Badge
                      className="absolute top-4 right-4"
                      variant={
                        project.status === "Live" ? "default" : "secondary"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      className="w-full"
                      variant={project.link === "#" ? "secondary" : "default"}
                      disabled={project.link === "#"}
                      onClick={() =>
                        project.link !== "#" &&
                        window.open(project.link, "_blank")
                      }
                    >
                      {project.link === "#" ? (
                        "Details Coming Soon"
                      ) : (
                        <>
                          Visit Project
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TooltipProvider>
      </div>
    </section>
  );
}
