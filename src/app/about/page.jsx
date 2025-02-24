"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "enabled";
    setDarkMode(savedMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode ? "enabled" : "disabled");
      return newMode;
    });
  };

  return (
    <div className={`${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"} min-h-screen`}>
      {/* Floating Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md py-3 px-6 flex justify-between items-center">
        <div className="flex space-x-6">
          <a href="../" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Home</a>
          <a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">About</a>
          <a href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Projects</a>
          <a href="uses" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Uses</a>
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-600 dark:text-gray-300">Dark Mode</span>
          <label className="relative inline-block w-10 h-5">
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} className="hidden" />
            <span className="absolute inset-0 bg-gray-300 dark:bg-gray-600 rounded-full transition duration-300"></span>
            <span
              className={`absolute left-1 top-1 w-3 h-3 bg-white dark:bg-gray-300 rounded-full transition-transform duration-300 transform ${darkMode ? "translate-x-5" : ""}`}
            ></span>
          </label>
        </div>
      </nav>


      <div className="grid md:grid-cols-2 gap-10 items-center leading-relaxed mt-20 text-justify mb-2 ml-6 mr-6 p-4">
        <div>
          <h1 className="text-4xl font-bold leading-tight">
            I am Robson Moraes. I live in <br /> the US, where I develop the future.
          </h1>
          <p className="mt-5 text-gray-600 dark:text-gray-400">
            I am a Computer Science - Software Engineering student at Ensign College. I have a passion for technology and leadership.
            With experience in civil engineering, company ownership, and software development, I strive to build innovative solutions that impact the world.
          </p>
        </div>
        <div className="flex flex-col items-left">
          <img src="profile.png" alt="Robson Moraes" className="rounded-2xl w-80" />
          <div className="mt-4 space-y-2">

            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com/ className="flex items-center><img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" /></a>
              <a href="https://www.facebook.com/"><img src="/x.png" alt="X" className="w-5 h-5" /></a>
              <a href="https://github.com/"><img src="/github.png" alt="GitHub" className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-10 text-center text-gray-500 text-sm">
        <nav className="flex justify-center space-x-6 mb-2">
          <a href="../">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/uses">Uses</a>
        </nav>
        <p>&copy; 2025 Robson Moraes. All rights reserved.</p>
      </footer>
    </div>
  );
}
