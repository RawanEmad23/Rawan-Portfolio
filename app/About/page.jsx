"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3, 
    };

    const textObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setTextVisible(entry.isIntersecting);
      });
    }, observerOptions);

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setImageVisible(entry.isIntersecting);
      });
    }, observerOptions);

    if (textRef.current) textObserver.observe(textRef.current);
    if (imageRef.current) imageObserver.observe(imageRef.current);

    return () => {
      if (textRef.current) textObserver.unobserve(textRef.current);
      if (imageRef.current) imageObserver.unobserve(imageRef.current);
    };
  }, []);

  return (
<section
  id="about"
  className="scroll-mt-20 min-h-screen flex items-center 
             bg-gradient-to-r from-pink-50 via-purple-50 to-pink-100 
             dark:bg-gradient-to-r dark:from-gray-900 dark:via-purple-950 dark:to-gray-900 
             py-16 transition-colors duration-500"
>
  <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* النصوص */}
    <div
      ref={textRef}
      className={`space-y-6 text-gray-700 dark:text-gray-200 transition-all duration-1000 ease-out ${
        textVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
      }`}
    >
      <h2 className="text-3xl md:text-5xl font-extrabold text-black dark:text-white">
        About Me 🌸
      </h2>

      <p className="text-lg md:text-xl leading-relaxed">
        Hi! I'm <span className="text-pink-500 font-semibold">Rawan</span> ✨,
        a <span className="font-medium">Computer Science graduate, class of 2024</span> 
        with 1 year of experience in Frontend Development.
      </p>

      <p className="text-lg md:text-xl leading-relaxed">
        I've worked in two companies on various projects, including 
        <span className="font-medium text-pink-600 dark:text-pink-400"> Dashboards</span>, 
        <span className="font-medium text-pink-600 dark:text-pink-400"> ERP systems</span>, 
        and full websites. I love building 
        <span className="font-medium text-pink-600 dark:text-pink-400"> smooth and elegant user experiences</span> 
        and turning ideas into real designs.
      </p>

      <p className="text-lg md:text-xl leading-relaxed">
        My main tools: 
        <span className="font-medium text-pink-600 dark:text-pink-400"> React, Next.js, TailwindCSS</span> ✨  
        I focus on UI/UX, tiny details, and calm colors that give users a special feel.
      </p>

      <div className="flex gap-4 mt-6">
        <button
          onClick={() => {
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-pink-400 text-white rounded-full font-medium shadow 
                       hover:bg-pink-500 dark:hover:bg-pink-600 
                       transition transform hover:scale-105"
          >
            🌷 See My Work
          </a>
        </button>

        {/* زر تحميل CV (ممكن تفعليه بعدين) */}
        {/* <a
          href="/cv.pdf"
          target="_blank"
          className="px-6 py-3 border-2 border-pink-300 text-pink-600 
                     dark:border-pink-500 dark:text-pink-400 
                     rounded-full font-medium hover:bg-pink-50 
                     dark:hover:bg-gray-800 
                     transition transform hover:scale-105"
        >
          📄 Download CV
        </a> */}
      </div>
    </div>

    {/* الصورة */}
    <div
      ref={imageRef}
      className={`flex justify-center lg:justify-end transition-all duration-1000 ease-out ${
        imageVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
      }`}
    >
      <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-3xl overflow-hidden shadow-xl 
                      ring-2 ring-pink-200 dark:ring-pink-400">
        <Image
          src="/6b5ac98b41f16076692b2e51129ed1ce.jpg"
          alt="Rawan"
          fill
          sizes="(max-width: 768px) 256px, 320px"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  </div>
</section>

  );
}
