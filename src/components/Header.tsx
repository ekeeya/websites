import logoMoPR from "../assets/ministy_of_panchayati.png";
import logoPanchayati from "../assets/panchayati-raj.png";
import logoUnicef from "../assets/unicef-every-child.png";
import logoPAI from "../assets/image.png";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        !(event.target as Element).closest("[data-mobile-menu]")
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-3 left-1/2 -translate-x-1/2 w-[98%] md:w-[95%] lg:top-0 lg:left-0 lg:translate-x-0 lg:w-full bg-white/90 lg:bg-white backdrop-blur-sm lg:backdrop-blur-0 shadow-lg lg:shadow-md z-50 rounded-xl lg:rounded-none flex items-center px-4 lg:px-10 py-2 sm:py-3 lg:py-4">
        {/* Logos */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-nowrap lg:ml-0 ml-auto mr-auto">
          <a
            href="https://panchayat.gov.in/"
            target="_blank"
            className="flex-shrink-0"
          >
            <img
              src={logoMoPR}
              alt="Ministry of Panchayati Raj"
              className="h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 w-auto object-contain"
            />
          </a>

          <div className="border-l border-gray-300 h-4 sm:h-6 md:h-8 lg:h-10"></div>

          <img
            src={logoPanchayati}
            alt="Panchayati Raj"
            className="h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 w-auto object-contain flex-shrink-0"
          />

          <div className="border-l border-gray-300 h-4 sm:h-6 md:h-8 lg:h-10"></div>

          <a
            href="https://panchayat.gov.in/"
            target="_blank"
            className="flex-shrink-0"
          >
            <img
              src={logoPAI}
              alt="Panchayati Advancement Index Portal"
              className="h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 w-auto object-contain"
            />
          </a>

          <div className="border-l border-gray-300 h-4 sm:h-6 md:h-8 lg:h-10"></div>

          <a
            href="https://www.unicef.org/india/"
            target="_blank"
            className="flex-shrink-0"
          >
            <img
              src={logoUnicef}
              alt="UNICEF"
              className="h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 w-auto object-contain"
            />
          </a>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex space-x-6 ml-auto">
          <a
            href="#home"
            className="text-base xl:text-lg text-green-600 hover:text-green-800"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-base xl:text-lg text-gray-800 hover:text-gray-600"
          >
            About
          </a>
          <a
            href="#dashboard"
            className="text-base xl:text-lg text-gray-800 hover:text-gray-600"
          >
            Dashboard
          </a>
          <a
            href="/login"
            target="_blank"
            className="text-base xl:text-lg text-gray-800 hover:text-gray-600"
          >
            Login
          </a>
        </nav>
      </header>

      {/* Floating Mobile Menu Button - Outside Header */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-[70] lg:hidden">
        <div
          data-mobile-menu
          onClick={toggleMenu}
          className="bg-black rounded-l-lg shadow-lg transition-colors duration-200 cursor-pointer"
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
        >
          {isMenuOpen ? (
            // Close icon (X)
            <div>
              <nav className="flex flex-col">
                <a
                  href="#home"
                  onClick={(e) => e.stopPropagation()}
                  className="px-6 py-4 text-green-400 hover:bg-gray-800 font-medium flex items-center space-x-3"
                >
                  <div className="w-3 h-3 border-2 border-green-400 rounded-full"></div>
                  <span>Home</span>
                </a>
                <a
                  href="#how-it-works"
                  onClick={(e) => e.stopPropagation()}
                  className="px-6 py-4 text-gray-300 hover:bg-gray-800 font-medium flex items-center space-x-3"
                >
                  <div className="w-3 h-3 bg-gray-600 border border-gray-500 rounded-full"></div>
                  <span>How it works</span>
                </a>
                <a
                  href="#about"
                  onClick={(e) => e.stopPropagation()}
                  className="px-6 py-4 text-gray-300 hover:bg-gray-800 font-medium flex items-center space-x-3"
                >
                  <div className="w-3 h-3 bg-gray-600 border border-gray-500 rounded-full"></div>
                  <span>About</span>
                </a>
                <a
                  href="#dashboard"
                  onClick={(e) => e.stopPropagation()}
                  className="px-6 py-4 text-gray-300 hover:bg-gray-800 font-medium flex items-center space-x-3"
                >
                  <div className="w-3 h-3 bg-gray-600 border border-gray-500 rounded-full"></div>
                  <span>Dashboard</span>
                </a>
                <a
                  href="/login"
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  className="px-6 py-4 text-gray-300 hover:bg-gray-800 font-medium flex items-center space-x-3"
                >
                  <div className="w-3 h-3 bg-gray-600 border border-gray-500 rounded-full"></div>
                  <span>Login</span>
                </a>
              </nav>
              <div className="flex items-center space-x-3 px-6 py-4 text-gray-300 hover:text-white">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span>Hide Menu</span>
              </div>
            </div>
          ) : (
            // Menu icon (hamburger)
            <div className="flex items-center flex-col">
              <nav className="flex flex-col">
                <a
                  href="#"
                  className="px-2 py-4 text-green-400 hover:bg-gray-800 font-medium flex items-center space-x-3"
                >
                  <div className="w-3 h-3 border-2 border-green-400 rounded-full"></div>
                </a>
                <a
                  href="#"
                  className="px-2 py-4 text-gray-300 hover:bg-gray-800 font-medium flex items-center space-x-3"
                >
                  <div className="w-3 h-3 bg-gray-600 border border-gray-500 rounded-full"></div>
                </a>
                <a
                  href="#"
                  className="px-2 py-4 text-gray-300 hover:bg-gray-800 font-medium flex items-center space-x-3"
                >
                  <div className="w-3 h-3 bg-gray-600 border border-gray-500 rounded-full"></div>
                </a>
                <a
                  href="#"
                  className="px-2 py-4 text-gray-300 hover:bg-gray-800 font-medium flex items-center space-x-3"
                >
                  <div className="w-3 h-3 bg-gray-600 border border-gray-500 rounded-full"></div>
                </a>
                <a
                  href="#"
                  className="px-2 py-4 text-gray-300 hover:bg-gray-800 font-medium flex items-center space-x-3"
                >
                  <div className="w-3 h-3 bg-gray-600 border border-gray-500 rounded-full"></div>
                </a>
              </nav>
              <div className="px-2 py-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
