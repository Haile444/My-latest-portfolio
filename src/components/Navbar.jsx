import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleToggle = () => setIsOpen(!isOpen);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    section.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close menu on click
  };

  return (
    <nav className="bg-gradient-to-r from-red-600 to-indigo-600 text-white fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Hailemeskel Girum</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-gray-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={handleToggle} className="focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gradient-to-r from-red-600 to-indigo-600 text-white flex flex-col items-center space-y-4 py-4">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-lg hover:text-gray-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
