import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowDown, Code2, Database, Globe } from "lucide-react";
import profilePic from "../assets/profile.jpg";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Home() {
  const navigate = useNavigate();

  const goToProjects = () => {
    navigate("/projects");
  };

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background px-6 py-20"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        {/* Hero Avatar */}
        <motion.div variants={item} className="mb-10">
          <Avatar className="w-40 h-40 md:w-52 md:h-52 mx-auto ring-8 ring-primary/10 shadow-2xl">
            <AvatarImage src={profilePic} alt="Hailemeskel Girum" />
            <AvatarFallback className="text-4xl font-bold bg-primary/10">
              HG
            </AvatarFallback>
          </Avatar>
        </motion.div>

        {/* Greeting & Name */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold tracking-tight text-foreground"
        >
          Hi, I'm{" "}
          <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Hailemeskel Girum
          </span>{" "}
          <span className="inline-block animate-wave origin-bottom-right">
            👋
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="mt-6 text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto"
        >
          Full-Stack Developer crafting modern, scalable, and user-focused web
          applications
        </motion.p>

        {/* CTA Buttons - Now Properly Navigate to Pages */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="px-8 py-6 text-lg font-medium"
            onClick={goToProjects}
          >
            View My Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg font-medium"
            onClick={goToContact}
          >
            Get In Touch
          </Button>
        </motion.div>

        {/* Skill Highlights */}
        <motion.div
          variants={item}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {/* Frontend */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-transparent bg-background/70 backdrop-blur">
            <CardContent className="p-8 text-center">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Frontend</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Angular</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Tailwind</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Backend */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-transparent bg-background/70 backdrop-blur">
            <CardContent className="p-8 text-center">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                <Code2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Backend</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary">ASP.NET Core</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Django</Badge>
                <Badge variant="secondary">REST APIs</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Database & DevOps */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-transparent bg-background/70 backdrop-blur">
            <CardContent className="p-8 text-center">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                <Database className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Database & DevOps</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary">SQL Server</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">Git</Badge>
                <Badge variant="secondary">IIS</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Optional: Remove scroll indicator since we're using routing */}
        {/* If you still want it (for single-page feel), keep it and use smooth scroll to a section */}
      </motion.div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes wave {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(15deg);
          }
          50% {
            transform: rotate(-10deg);
          }
          75% {
            transform: rotate(10deg);
          }
        }
        .animate-wave {
          animation: wave 2.5s ease-in-out infinite;
        }
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </section>
  );
}
