import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
      <Link to="/" className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </Link>

      <div className="flex items-center space-x-8">
        <div className="hidden md:flex space-x-8 text-gray-300">
          <Link 
            to="/about" 
            className={`hover:text-white transition ${isActive('/about') ? 'text-white font-semibold' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/features" 
            className={`hover:text-white transition ${isActive('/features') ? 'text-white font-semibold' : ''}`}
          >
            Features
          </Link>
          <Link 
            to="/pricing" 
            className={`hover:text-white transition ${isActive('/pricing') ? 'text-white font-semibold' : ''}`}
          >
            Pricing
          </Link>
          <Link 
            to="/contact" 
            className={`hover:text-white transition ${isActive('/contact') ? 'text-white font-semibold' : ''}`}
          >
            Contact
          </Link>
        </div>

        <button className="bg-white text-black px-6 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
