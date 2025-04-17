import React, { useState, useEffect } from 'react';
import logoimageOne from "../../public/pictures/logoimageOne.png";
import logoImageTwo from "../../public/pictures/logoImageTwo.png";

// SVG icons as components (unchanged)
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

function Navigation() {
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? 'bg-white text-gray-900 shadow-md' : 'bg-transparent text-white'
      }`}>
        <div className="container mx-auto flex justify-between items-center p-1 h-28 ">
          {/* Logo - Increased size options */}
          <a href="/" className="pt-8 -pl-1 sm:pt-6 sm:flex items-center space-x-1">
            <img 
              src="../../public/pictures/final2.png"
              alt="Company Logo"
              className="w-56 h-32 object-contain transition-opacity duration-300"
            />
          </a>
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-5 text-sm">
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="hover:text-gray-300 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          {/* Hamburger Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden px-12"
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
          transition-all 
          duration-300 
          ${isOpen ? 'max-h-screen' : 'max-h-0'} 
          overflow-hidden
          ${isSticky ? 'bg-white text-gray-900' : 'bg-black bg-opacity-90 text-white'}
        `}>
          <ul className="px-4 py-2">
            {navLinks.map((item) => (
              <li key={item} className="py-2">
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block hover:text-gray-300 transition-colors"
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

export default Navigation;