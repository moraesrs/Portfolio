"use client";
import { useEffect, useState } from "react";

export default function Uses() {
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
      <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md py-3 px-6 flex justify-between items-center">
        <div className="flex space-x-6">
          <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Home</a>
          <a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">About</a>
          <a href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Projects</a>
          <a href="/uses" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Uses</a>
        </div>
        {/* Dark Mode Toggle */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-600 dark:text-gray-300">Dark Mode</span>
          <label className="relative inline-block w-10 h-5">
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} className="hidden" />
            <span className="absolute inset-0 bg-gray-300 dark:bg-gray-600 rounded-full transition duration-300"></span>
            <span
              className={`absolute left-1 top-1 w-3 h-3 bg-white dark:bg-gray-300 rounded-full transition-transform duration-300 transform ${
                darkMode ? "translate-x-5" : ""
              }`}
            ></span>
          </label>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto p-6 mt-12">
        <h1 className="text-3xl font-bold">Software I use, gadgets I love, and other things I recommend.</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          A list of tools, software, and hardware that I use regularly for work and personal projects.
        </p>

        <div className="mt-6">
          {/* Workstation Section */}
          <h2 className="text-xl font-semibold mt-4">Workstation</h2>
          <div className="border-t mt-2 pt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold">Asus Rog Zephyrus g14</h3>
                <p className="text-gray-600 dark:text-gray-400">My main development machine, powerful and efficient.</p>
              </div>
              <div>
                <h3 className="font-semibold">ViewSonic 4K Monitor</h3>
                <p className="text-gray-600 dark:text-gray-400">Great screen real estate for multitasking.</p>
              </div>
              {/* <div>
                <h3 className="font-semibold">Keychron K6 Keyboard</h3>
                <p className="text-gray-600 dark:text-gray-400">A compact mechanical keyboard with great feel.</p>
              </div> */}
            </div>
          </div>

          {/* Development Tools Section */}
          <h2 className="text-xl font-semibold mt-6">Development Tools</h2>
          <div className="border-t mt-2 pt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold">Visual Studio Code</h3>
                <p className="text-gray-600 dark:text-gray-400">My primary code editor, lightweight and powerful.</p>
              </div>
              <div>
                <h3 className="font-semibold">Git & GitHub</h3>
                <p className="text-gray-600 dark:text-gray-400">For version control and collaboration.</p>
              </div>
              <div>
                <h3 className="font-semibold">Postman</h3>
                <p className="text-gray-600 dark:text-gray-400">For API testing and development.</p>
              </div>
            </div>
          </div>

          {/* Design Tools Section */}
          <h2 className="text-xl font-semibold mt-6">Design</h2>
          <div className="border-t mt-2 pt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold">Figma</h3>
                <p className="text-gray-600 dark:text-gray-400">For UI/UX design and prototyping.</p>
              </div>
              <div>
                <h3 className="font-semibold">Adobe Photoshop</h3>
                <p className="text-gray-600 dark:text-gray-400">For image editing and graphic design.</p>
              </div>
              <div>
                <h3 className="font-semibold">Canva</h3>
                <p className="text-gray-600 dark:text-gray-400">Quick and easy designs for social media and presentations.</p>
              </div>
            </div>
          </div>

          {/* Productivity Tools Section */}
          <h2 className="text-xl font-semibold mt-6">Productivity</h2>
          <div className="border-t mt-2 pt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold">Notion</h3>
                <p className="text-gray-600 dark:text-gray-400">For note-taking, task management, and documentation.</p>
              </div>
              <div>
                <h3 className="font-semibold">Google Calendar</h3>
                <p className="text-gray-600 dark:text-gray-400">For managing my schedule and meetings.</p>
              </div>
              <div>
                <h3 className="font-semibold">Todoist</h3>
                <p className="text-gray-600 dark:text-gray-400">For tracking tasks and projects efficiently.</p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          © 2025 Robson Moraes. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
