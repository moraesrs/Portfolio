"use client";
import { useEffect, useState } from "react";

export default function Projects() {
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

      <div className="max-w-4xl mx-auto p-6 mt-12">
        <h1 className="text-3xl font-bold">Things I’ve made trying to put my dent in the universe.</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          I am Robson Moraes, a Software Engineering student at Ensign College, originally from a small city in Brazil.
          I have experience as a Civil Engineering Assistant and a company owner. I love programming, cars, and personal development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="border p-4 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 shadow">
            <div className="flex items-center space-x-3">
              <img src="/fortius.png" alt="Project 1 Logo" className="w-10 h-10" />
              <h3 className="text-lg font-semibold">Building houses</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
            As a business owner, I led projects focused on designing and constructing residential houses, ensuring quality and efficiency.
            </p>
            <a href="https://fortiusengenharia.com.br" className="text-blue-500 hover:underline mt-2 block">🔗 Visit Fortius Engenharia</a>
          </div>
          <div className="border p-4 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 shadow">
            <div className="flex items-center space-x-3">
              <img src="/milano.jpeg" alt="Project 2 Logo" className="w-10 h-10" />
              <h3 className="text-lg font-semibold">Participating in the Construction of a 25 Stories Building</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
            As a Civil Engineering Assistant, I contributed to the structural planning and execution of a high-rise 25-story building project.
            </p>
            <a href="https://www.milanoincorporadora.com/" className="text-blue-500 hover:underline mt-2 block">🔗 Visit Milano Incorporadora</a>
          </div>
          {/* <div className="border p-4 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 shadow">
            <div className="flex items-center space-x-3">
              <img src="/project3-logo.png" alt="Project 3 Logo" className="w-10 h-10" />
              <h3 className="text-lg font-semibold">AI Chatbot</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Created an AI-powered chatbot using natural language processing to improve customer service interactions.
            </p>
            <a href="https://aichatbot.com" className="text-blue-500 hover:underline mt-2 block">🔗 Visit AI Chatbot</a>
          </div>
          <div className="border p-4 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 shadow">
            <div className="flex items-center space-x-3">
              <img src="/project4-logo.png" alt="Project 4 Logo" className="w-10 h-10" />
              <h3 className="text-lg font-semibold">Fitness Tracker</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Developed a fitness tracking app that helps users monitor workouts, nutrition, and progress over time.
            </p>
            <a href="https://fitnesstracker.com" className="text-blue-500 hover:underline mt-2 block">🔗 Visit Fitness Tracker</a>
          </div> */}
        </div>
        <footer className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          © 2025 Robson Moraes. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
