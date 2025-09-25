"use client";

import { FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = ["Home", "About", "Projects", "Skills"];

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPos = window.scrollY + 200; 
      let current = "home";

      links.forEach((link) => {
        const section = document.getElementById(link.toLowerCase());
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            current = link.toLowerCase();
          }
        }
      });

      setActiveSection(current);
    };

    updateActiveSection(); 
    window.addEventListener("scroll", updateActiveSection);
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); 
  };

  return (
    <nav className="bg-gradient-to-r from-pink-100 via-purple-100 to-pink-200 fixed w-full top-0 z-50 ">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-black tracking-wide cursor-pointer">
          Rawan<span className="text-pink-500">.</span>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleScroll(link.toLowerCase())}
                className={`transition duration-300 ${
                  activeSection === link.toLowerCase()
                    ? "text-pink-500 font-bold"
                    : "text-black hover:text-pink-500"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        
        <div className="flex items-center space-x-5 text-2xl">
          <a
            href="https://www.linkedin.com/in/rawan-emad-987a72292/"
            target="_blank"
            className="text-black hover:text-pink-500 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <button
            className="md:hidden text-black text-3xl focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? "✖️" : "☰"}
          </button>
        </div>
      </div>

<AnimatePresence>
  {open && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="md:hidden fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-white/90 backdrop-blur-md flex flex-col items-center justify-center gap-6 text-lg font-medium z-40"
    >
      {links.map((link) => (
        <button
          key={link}
          onClick={() => handleScroll(link.toLowerCase())}
          className={`py-2 w-full text-center transition duration-300 ${
            activeSection === link.toLowerCase()
              ? "text-pink-500 font-bold"
              : "text-black hover:text-pink-500"
          }`}
        >
          {link}
        </button>
      ))}
    </motion.div>
  )}
</AnimatePresence>

    </nav>
  );
}
