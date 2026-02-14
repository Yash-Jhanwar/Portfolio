import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-gray-900 dark:text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] transition-colors duration-300">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-500 transition-colors duration-300">Yash Jhanwar</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            // { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-600 dark:hover:text-purple-500 text-sm sm:text-base my-1 transition-colors duration-300"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaGithub />, link: "https://github.com/Yash-Jhanwar" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/yash-jhanwar11?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
            { icon: <FaTwitter />, link: "https://x.com/Yashjhanwar11" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/yashjhanwar11/" },

          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-600 dark:hover:text-purple-500 transition-transform transform hover:scale-110 duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 transition-colors duration-300">
          © 2026 Yash Jhanwar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
