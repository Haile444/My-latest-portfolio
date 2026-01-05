import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Haile444" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hailemeskel-girum-09099a301/",
  },
  // { icon: Twitter, label: "Twitter", href: "https://twitter.com/yourusername" },
  // { icon: Mail, label: "Email", href: "https://www.hailemeskel444.@gmail.com" },
];

const contactInfo = [
  { icon: Mail, text: "hailemeskel444@gmail.com" },
  // { icon: Phone, text: "+251 9XX XXX XXX" },
  { icon: MapPin, text: "Addis Ababa, Ethiopia" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20 bg-background border-t">
      <Card className="border-0 shadow-none rounded-none bg-muted/30">
        <CardContent className="py-16 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
              {/* About / Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-3xl font-bold text-foreground">
                  Hailemeskel <span className="text-primary">Girum</span>
                </h3>
                <p className="text-muted-foreground max-w-sm">
                  Full-Stack Developer passionate about building scalable,
                  modern web applications that make a difference.
                </p>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-4"
              >
                <h4 className="text-xl font-semibold text-foreground">
                  Get in Touch
                </h4>
                <div className="space-y-3">
                  {contactInfo.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <h4 className="text-xl font-semibold text-foreground">
                  Connect
                </h4>
                <div className="flex gap-4 justify-center md:justify-start">
                  {socialLinks.map((link, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary hover:text-primary-foreground transition-all"
                      asChild
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                      >
                        <link.icon className="w-5 h-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Divider & Copyright */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                <p>
                  © {new Date().getFullYear()} Hailemeskel Girum. All rights
                  reserved.
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={scrollToTop}
                  className="hover:text-primary"
                >
                  Back to Top ↑
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </footer>
  );
}
