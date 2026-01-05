import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  tech = [],
  link,
  image,
  status = "Live",
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group h-full"
    >
      <Card className="h-full overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-500 bg-background">
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <Badge
            className="absolute top-4 right-4"
            variant={status === "Live" ? "default" : "secondary"}
          >
            {status}
          </Badge>
        </div>

        {/* Content Section */}
        <CardHeader className="pb-3">
          <CardTitle className="text-2xl group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-base mt-2">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-0 flex flex-col flex-grow">
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((item) => (
              <Badge key={item} variant="outline" className="text-xs">
                {item}
              </Badge>
            ))}
          </div>

          {/* Action Button */}
          <Button
            className="mt-auto w-full"
            variant={link === "#" ? "secondary" : "default"}
            disabled={link === "#"}
            onClick={() => link !== "#" && window.open(link, "_blank")}
          >
            {link === "#" ? (
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
  );
}
