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
      <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md py-3 px-6 flex justify-between items-center">
        <div className="flex space-x-6" >
          <a href="./" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Home</a>
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
              className={`absolute left-1 top-1 w-3 h-3 bg-white dark:bg-gray-300 rounded-full transition-transform duration-300 transform ${
                darkMode ? "translate-x-5" : ""
              }`}
            ></span>
          </label>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto p-6 mt-12">
        {/* Header Section */}
        <header className="flex items-center space-x-4">
          <img src="profile.png" alt="Profile Picture" className="w-20 h-20 rounded-full"/>
          <div>
            <h1 className="text-3xl font-bold">Software Engineer | Husband & Father | Believer | Lifelong Learner</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              I am Robson Moraes, a Software Engineering student at Ensign College, originally from a small city in Brazil.
              I have experience as a Civil Engineering Assistant and a company owner. I love programming, cars, and personal development.
            </p>
          </div>
        </header>

        {/* Social Links */}
        <div className="flex space-x-4 mt-4">
          <a href="https://www.linkedin.com/"><img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" /></a>
          <a href="https://www.facebook.com/"><img src="/x.png" alt="X" className="w-5 h-5" /></a>
          <a href="https://github.com/"><img src="/github.png" alt="GitHub" className="w-6 h-6" /></a>
        </div>

        {/* Articles Section */}
        <section className="mt-8">
          {[1].map((item) => (
            <div key={item} className="border-b pb-4 mb-4 border-gray-300 dark:border-gray-700">
              <p className="text-gray-500 dark:text-gray-400">February 23, 2025</p>
              <h2 className="text-xl font-semibold">My Passion</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
              I am passionate about technology, leadership, and health. My goal is to become a skilled Software Engineer,
              improve my health and fitness, and lead by example in my community.
              </p>
              <a href="#" className="text-blue-500 hover:underline">Read article →</a>
            </div>
          ))}
        </section>

        {/* Sidebar Section */}
        <aside className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Newsletter */}
          <div className="border p-4 rounded-lg shadow bg-white dark:bg-gray-800 dark:border-gray-700">
            <h3 className="text-white font-semibold">Stay up to date</h3>
            <p className="text-gray-400 dark:text-gray-400 text-sm">Get notified when I publish something new.</p>
            <input type="email" placeholder="Email address" className="mt-2 w-full border p-2 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"/>
            <button className="mt-2 w-full bg-black text-white py-2 rounded dark:bg-gray-700">Join</button>
          </div>

          {/* Work Experience */}
          <div className="border p-4 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700">
            <h3 className="text-white font-semibold">Work</h3>
            <ul className="text-gray-600 dark:text-gray-400 text-sm">
              <li>Ensign College - Software Engineering Student (2024 - Present)</li>
              <li>Company Owner - Civil Engineering & Software Development (2019 - 2024)</li>
              <li>Civil Engineering Assistant (2014 - 2019)</li>
            </ul>
          </div>

          {/* Skills */}
          <div className="border p-4 rounded-lg shadow col-span-2 bg-gray-200 dark:bg-gray-800 border-white dark:border-gray-700">
            <h3 className="text-white font-semibold">Skills</h3>
            {["HTML", "CSS", "JavaScript"].map((skill, index) => (
              <div className="mt-2" key={index}>
                <p className="text-white text-sm">{skill}</p>
                <div className="w-full bg-gray-200 dark:bg-gray-600 h-2 rounded-full overflow-hidden">
                  <div className={`bg-blue-500 h-2 ${index === 0 ? "w-3/4" : index === 1 ? "w-2/4" : "w-1/3"}`}></div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Footer */}
        <footer className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          © 2025 Robson Moraes. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
