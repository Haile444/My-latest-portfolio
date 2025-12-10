import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const links = [
    { name: "Home", to: "/" },
    { name: "Projects", to: "/projects" },
    { name: "About", to: "/about" },
    { name: "Experience", to: "/experience" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-tight text-gray-800 hover:text-primary transition"
        >
          Hailemeskel Girum
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors hover:text-primary ${
                    isActive ? "text-primary font-semibold" : "text-gray-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="bg-white/95 backdrop-blur-md">
              <SheetHeader>
                <SheetTitle className="text-left text-lg font-bold">
                  Menu
                </SheetTitle>
              </SheetHeader>

              <ul className="flex flex-col gap-6 mt-6">
                {links.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `block text-lg font-medium transition-colors hover:text-primary ${
                          isActive ? "text-primary" : "text-gray-700"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
