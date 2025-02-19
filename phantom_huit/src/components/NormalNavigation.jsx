import React, { useState, useEffect } from 'react';
import logoimageOne from "../../public/pictures/logoimageOne.png";
import logoImageTwo from "../../public/pictures/logoImageTwo.png";

// SVG icons as components
const MenuIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

function NormalNavigation() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = ['Home', 'About Us', 'Services', 'Contact Us'];

  return (
    <div>
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white text-gray-900 transition-all duration-300 ${
        isSticky ? 'shadow-md' : ''
      }`}>
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img 
              src={isSticky ? logoImageTwo : logoimageOne}
              alt="Company Logo"
              className="w-8 h-8  "
            />
        
          </a>
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 text-sm">
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="hover:text-gray-600 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          {/* Hamburger Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        {/* Mobile Navigation */}
        <div className={`
          md:hidden 
          absolute 
          top-full 
          left-0 
          right-0 
          bg-white 
          text-gray-900
          transition-all 
          duration-300 
          ${isOpen ? 'max-h-screen' : 'max-h-0'} 
          overflow-hidden
          shadow-md
        `}>
          <ul className="px-4 py-2">
            {navLinks.map((item) => (
              <li key={item} className="py-2">
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block hover:text-gray-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NormalNavigation;