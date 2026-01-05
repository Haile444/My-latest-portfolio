import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg";

const skills = [
  "Angular",
  "React",
  "Next.js",
  "ASP.NET Core",
  ".NET Core",
  "Django",
  "SQL Server",
  "PostgreSQL",
  "Server configration",
  "Third-party integration",
  "IIS AND docker",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About Me
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-stack developer passionate about building scalable,
            enterprise-grade applications
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Image */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center md:items-start"
          >
            <Avatar className="w-64 h-64 md:w-80 md:h-80 ring-8 ring-background shadow-2xl">
              <AvatarImage src={profilePic} alt="Hailemeskel Girum" />
              <AvatarFallback>HG</AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Content */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <Card className="bg-background/80 backdrop-blur border shadow-lg">
              <CardContent className="pt-8">
                <p className="text-lg leading-relaxed text-foreground/90">
                  I'm a passionate <strong>Full-Stack Developer</strong> with
                  hands-on experience delivering high-impact web applications
                  for enterprise and government clients.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-foreground/90">
                  I've contributed to license-based systems like the Petroleum &
                  Energy Authority platform, comprehensive ERP solutions such as
                  Lucy ERP (covering payroll, finance, and business processes),
                  and land management systems including appointment and property
                  modules.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-foreground/90">
                  My core expertise lies in modern technologies that enable
                  scalable, user-centric, and robust solutions.
                </p>
              </CardContent>
            </Card>

            {/* Skills Badges */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Core Technologies & Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
