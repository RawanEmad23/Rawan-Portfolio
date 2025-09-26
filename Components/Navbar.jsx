"use client";

import { FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState(null);
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

  useEffect(() => {
    if (
      !localStorage.getItem("theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      setTheme("light");
    }

    if ("theme" in localStorage) {
      if (localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark");
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  function toggleMode() {
    document.documentElement.classList.toggle("dark");
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  }

  return (
    <nav
      className="bg-gradient-to-r from-pink-100 via-purple-100 to-pink-200 
                 dark:bg-gradient-to-r dark:from-gray-900 dark:via-purple-950 dark:to-gray-900
                 fixed w-full top-0 z-50 transition-colors duration-500"
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide cursor-pointer 
                       text-black dark:text-white">
          Rawan<span className="text-pink-500 dark:text-pink-400">.</span>
        </h1>

      
      

        <ul className="hidden md:flex space-x-8 font-medium">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleScroll(link.toLowerCase())}
                className={`transition duration-300 ${
                  activeSection === link.toLowerCase()
                    ? "text-pink-500 dark:text-pink-400 font-bold"
                    : "text-black dark:text-gray-200 hover:text-pink-500"
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
            className="text-black dark:text-gray-200 hover:text-pink-500 transition duration-300"
          >
            <FaLinkedin />
          </a>
  <button
          onClick={toggleMode}
          className="cursor-pointer text-2xl text-black dark:text-gray-100 hover:text-pink-500 transition"
        >
          {theme === "dark" ? <IoSunnyOutline /> : <IoMoonOutline />}
        </button>
          <button
            className="md:hidden text-black dark:text-gray-200 text-3xl focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? "✖️" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed top-16 left-0 w-full h-[calc(100vh-4rem)] 
                       bg-white/90 dark:bg-gray-900/95 backdrop-blur-md 
                       flex flex-col items-center justify-center gap-6 
                       text-lg font-medium z-40 transition-colors duration-500"
          >
            {links.map((link) => (
              <button
                key={link}
                onClick={() => handleScroll(link.toLowerCase())}
                className={`py-2 w-full text-center transition duration-300 ${
                  activeSection === link.toLowerCase()
                    ? "text-pink-500 dark:text-pink-400 font-bold"
                    : "text-black dark:text-gray-200 hover:text-pink-500"
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
