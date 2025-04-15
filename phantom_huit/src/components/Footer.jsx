import React from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold uppercase mb-4">About Us</h3>
            <img 
              src="/api/placeholder/120/40" 
              alt="Company Logo" 
              className="mb-4"
            />
            <p className="text-sm">
              We are a leading company providing innovative solutions to our clients worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about-us" className="text-sm hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold uppercase mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 mt-0.5 text-gray-400" />
                <span className="text-sm">Nakuru, Kenya</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="w-5 h-5 text-gray-400" />
                <span className="text-sm">+254 726 313 144</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="w-5 h-5 text-gray-400" />
                <span className="text-sm">+254 719 519 396</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="w-5 h-5 text-gray-400" />
                <span className="text-sm">phantomhuit@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="w-5 h-5 text-gray-400" />
                <span className="text-sm">kalyetltd@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold uppercase mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="#facebook" 
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a 
                href="#twitter" 
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a 
                href="#instagram" 
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a 
                href="#linkedin" 
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-gray-900 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-center md:text-left">
              © {new Date().getFullYear()} Kalyetbai Company. All rights reserved.
            </p>
       
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;