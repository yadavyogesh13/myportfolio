import React from 'react'
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // icons

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("home");

    // Highlight active link on scroll
    useEffect(() => {
        const handleScroll = () => {
        navLinks.forEach(({ id }) => {
            const section = document.getElementById(id);
            if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                setActive(id);
            }
            }
        });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Smooth scroll function
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false); // close mobile menu
        }
    };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer" onClick={() => scrollToSection("home")}>
          Yogesh Yadav
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`transition ${
                  active === link.id ? "text-blue-400 font-semibold" : "hover:text-blue-400"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 pb-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left ${
                    active === link.id ? "text-blue-400 font-semibold" : "hover:text-blue-400"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar