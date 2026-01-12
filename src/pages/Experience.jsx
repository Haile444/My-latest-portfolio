import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "Xoka IT Solution",
    period: "Aug 2024 – July 2025",
    description: [
      "Contributed to major government and enterprise projects including the Petroleum & Energy Authority website, Lucy ERP system, Addis Land management platform, and other public-sector web applications.",
      "Developed full-stack features using Angular, React, ASP.NET Core, .NET Core, and SQL Server.",
      "Integrated third-party services and APIs (Telebirr payments, TIN verification, authentication systems) and optimized complex database queries for performance.",
      "Delivered scalable, secure, and user-friendly solutions in collaborative team environments.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Michot IT Solution",
    period: "July 2025 – Present",
    highlight: true,
    description: [
      "Independently designed, developed, and deployed the official Michot IT Solution corporate website (michotitsolution.com) using React, Tailwind CSS, and Framer Motion.",
      "Led frontend development for Michot Marefia (michotmarefia.com), a comprehensive hotel and property booking platform.",
      "Built responsive, modern user interfaces with interactive features including property search, booking flows, image galleries, and real-time availability.",
      "Handled full project lifecycle for the corporate site: from design and development to deployment and ongoing maintenance.",
      "Collaborated with backend developers for seamless API integration on the booking platform.",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Professional Experience
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My journey building impactful web applications
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-10"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -6 }}
              className="group"
            >
              <Card
                className={`overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-500 ${
                  exp.highlight ? "ring-2 ring-primary/20" : ""
                } bg-background`}
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {exp.description.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-foreground/80"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
