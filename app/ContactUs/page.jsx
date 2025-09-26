"use client";

import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function ContactPage() {
  const CONTACTS = [
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/rawan-emad-987a72292",
      href: "https://www.linkedin.com/in/rawan-emad-987a72292/",
      icon: <FaLinkedin className="w-6 h-6" />,
    },
    {
      id: "github",
      label: "GitHub",
      value: "github.com/RawanEmad23",
      href: "https://github.com/RawanEmad23",
      icon: <FaGithub className="w-6 h-6" />,
    },
    {
      id: "phone",
      label: "Phone",
      value: "+20 1127596223",
    href: null, 
      icon: <FaPhoneAlt className="w-6 h-6" />,
    },
    {
      id: "email",
      label: "Email",
      value: "rawanemmad34@gmail.com",
      href: null, 
      icon: <FaEnvelope className="w-6 h-6" />,
    },
  ];

  return (
    <main
      className="min-h-screen flex items-center justify-center 
                 bg-gradient-to-r from-pink-50 via-purple-50 to-pink-100 
                 dark:bg-gradient-to-r dark:from-gray-900 dark:via-purple-950 dark:to-gray-900 
                 transition-colors duration-500 px-6 py-16"
                 id="contactus"  
    >
      <div className="max-w-2xl w-full text-center">
       
        <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Feel free to reach out via any of the platforms below 🌸
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CONTACTS.map((c) =>
            c.href ? (
              <a
                key={c.id}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl 
                           bg-white dark:bg-slate-800 
                           text-black dark:text-gray-100 
                           shadow-sm hover:shadow-md hover:scale-[1.01] 
                           transition-all duration-300"
              >
                <div className="p-3 rounded-full bg-pink-100 dark:bg-pink-600/20 text-pink-600 dark:text-pink-300">
                  {c.icon}
                </div>
                <div className="text-left">
                  <p className="font-semibold">{c.label}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {c.value}
                  </p>
                </div>
              </a>
            ) : (
              <div
                key={c.id}
                className="flex items-center gap-4 p-5 rounded-xl 
                           bg-white dark:bg-slate-800 
                           text-black dark:text-gray-100 
                           shadow-sm transition-all duration-300"
              >
                <div className="p-3 rounded-full bg-pink-100 dark:bg-pink-600/20 text-pink-600 dark:text-pink-300">
                  {c.icon}
                </div>
                <div className="text-left">
                  <p className="font-semibold">{c.label}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {c.value}
                  </p>
                </div>
              </div>
            )
          )}
        </div>

        <p className="mt-10 text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Rawan — Built with ❤️ using Next.js & Tailwind
        </p>
      </div>
    </main>
  );
}
