"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Farm Management System",
    description: "A modern agency website built with React ",
    image: "/farm.jpeg",
    demo: "https://online-farm.vercel.app/",
  },
  {
    id: 2,
    title: "E-commerce Store",
    description: "Fully responsive online store with cart functionality.",
    image: "/ecommerce.jpeg",
    demo: "https://e-commerce-rho-cyan.vercel.app/",
  },
  {
    id: 3,
    title: "Dashboard",
    description: "Showcase of my web development projects and skills.",
    image: "/dashboard.jpeg",
    demo: "https://adil-baba.vercel.app/dashboard",
  },
  {
    id: 4,
    title: "JavaScript Project",
    description: "Showcase of my web development projects and skills.",
    image: "/food.png",
    demo: "https://rawanemad23.github.io/FoodApp/",
  },
];

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-pink-200 py-16"
      id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-black mb-12">
          My Projects
        </h1>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-purple-700 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-pink-400 text-white font-semibold rounded-full shadow-md hover:bg-pink-500 hover:scale-105 transition duration-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
