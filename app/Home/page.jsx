"use client";

import About from "../About/page";
import ContactPage from "../ContactUs/page";
import ProjectsPage from "../Projects/page";
import SkillsPage from "../Skills/Page";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      id="home">
 <div
  className="min-h-screen flex flex-col items-center justify-center text-center px-4
  bg-gradient-to-r from-pink-100 via-purple-100 to-pink-200 text-gray-800
  dark:bg-gradient-to-r dark:from-gray-900 dark:via-purple-950 dark:to-gray-900 dark:text-gray-100"
>
  <motion.h1
    className="text-4xl md:text-6xl font-extrabold mb-4 text-black dark:text-white"
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    Hello, I'm <span className="text-pink-500 dark:text-pink-400">Rawan</span> 🌸
  </motion.h1>

  <motion.p
    className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl dark:text-gray-300"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    Frontend Developer | React & Next.js Enthusiast  
    <br />
    ✨ Turning ideas into beautiful & modern websites
  </motion.p>

  <motion.div
    className="flex gap-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <button
      className="px-6 py-3 bg-pink-400 text-white font-semibold rounded-full shadow-md hover:bg-pink-500 hover:scale-105 transition duration-300
      dark:bg-pink-600 dark:hover:bg-pink-500"
      onClick={() => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      🌷 Get Started
    </button>

    <button
      className="px-6 py-3 border border-pink-400 text-pink-500 font-semibold rounded-full hover:bg-pink-100 hover:scale-105 transition duration-300
      dark:border-pink-500 dark:text-pink-400 dark:hover:bg-gray-800"
      onClick={() => {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      💫 Learn More
    </button>
  </motion.div>
</div>


  
      <About />
      <ProjectsPage />
      <SkillsPage />
     <ContactPage/>
    </div>
  );
}
