"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll to add shadow/background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 flex justify-between items-center transition-shadow duration-300 rounded-2xl
    bg-emerald-100
    ${scrolled ? "shadow-lg" : ""}
    w-full max-w-3xl
  `}
    >
      {/* Logo */}
      <h1 className="font-bold text-xl cursor-pointer select-none">
        Portfolio
      </h1>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 font-medium">
        {["home", "about", "education", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="relative text-gray-700 hover:text-emerald-200 hover:text-shadow-2xs transition-colors duration-300"
          >
            {/* Underline animation */}
            <span className="absolute left-0 bottom-0 w-0 h-0.5  transition-all duration-300 group-hover:w-full"></span>
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden text-2xl text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-emerald-100 shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          {["home", "about", "education", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-emerald-200 hover:text-shadow-2xs text-lg font-medium transition-colors duration-300"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
