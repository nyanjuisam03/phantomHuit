import React, { useState, useEffect } from 'react';


// SVG icons
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

function ServiceNavigation() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { label: 'Home', path: '/#home' },
    { label: 'About Us', path: '/aboutpage#about-us' },
    { label: 'Services', path: '/service#services' },
    { label: 'Contact Us', path: '/#contact-us' },
  ];

  return (
    <div>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? 'bg-white text-gray-900 shadow-md' : 'bg-transparent text-white'
      }`}>
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img src="../../public/pictures/final2.png" alt="Company Logo" className="w-24 h-full" />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 pb-7 text-sm">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.path}
                  className="hover:text-gray-600 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu Button */}
          <button onClick={toggleMenu} className="pb-6 pr-5 md:hidden" aria-label="Toggle menu">
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white text-gray-900 transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden shadow-md`}>
          <ul className="px-4 py-2">
            {navLinks.map((item) => (
              <li key={item.label} className="py-2">
                <a
                  href={item.path}
                  className="block hover:text-gray-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default ServiceNavigation;
