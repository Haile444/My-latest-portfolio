import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";

const links = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Experience", to: "/experience" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        {/* Logo / Brand */}
        <NavLink
          to="/"
          className="relative text-2xl font-bold tracking-tight text-foreground hover:text-primary transition-colors duration-300"
        >
          Hailemeskel{" "}
          <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Girum
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-10">
          {links.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative text-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "text-primary"
                      : "text-foreground/70 hover:text-primary"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-80 bg-background/95 backdrop-blur-xl border-l border-border/50"
          >
            <SheetHeader className="text-left mb-8">
              <SheetTitle className="text-2xl font-bold text-foreground">
                Navigation
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col space-y-1">
              {links.map((link) => (
                <SheetClose asChild key={link.name}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block py-4 px-2 text-xl font-medium rounded-lg transition-all duration-300 ${
                        isActive
                          ? "text-primary bg-primary/5"
                          : "text-foreground/70 hover:text-primary hover:bg-accent/50"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
