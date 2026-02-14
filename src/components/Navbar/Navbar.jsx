import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    // { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled
          ? "bg-white/70 dark:bg-[#050414]/50 backdrop-blur-md shadow-md"
          : "bg-transparent"
        }`}
    >
      <div className="text-gray-800 dark:text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-gray-800 dark:text-white transition-colors duration-300">Yash</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-gray-800 dark:text-white transition-colors duration-300">Jhanwar</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-800 dark:text-gray-300 font-medium transition-colors duration-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] transition-colors duration-300 ${activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons & Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="text-gray-800 dark:text-gray-300 hover:text-[#8245ec] transition-colors duration-300 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800/50"
          >
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2"></div>

          <a
            href="https://github.com/Yash-Jhanwar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-300 hover:text-[#8245ec] transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/yash-jhanwar11?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-300 hover:text-[#8245ec] transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon & Theme Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="text-gray-800 dark:text-gray-300 hover:text-[#8245ec] transition-colors duration-300"
          >
            {theme === "dark" ? <FiSun size={24} /> : <FiMoon size={24} />}
          </button>

          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-white dark:bg-[#050414] bg-opacity-90 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-800 dark:text-gray-300 font-medium">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#8245ec] transition-colors duration-300 ${activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4 border-t border-gray-200 dark:border-gray-700 w-full justify-center pt-4 mt-2">
              <a
                href="https://github.com/Yash-Jhanwar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-300 hover:text-[#8245ec] transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/yash-jhanwar11?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-300 hover:text-[#8245ec] transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
