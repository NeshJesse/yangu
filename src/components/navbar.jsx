// src/components/Navbar.jsx
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Ensure @heroicons/react is installed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white py-4 px-8 rounded-b-lg shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <div className="text-lg font-bold text-gray-700">
          <Link href="/">My Site</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden text-gray-700 hover:text-black focus:outline-none"
        >
          {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:justify-center lg:space-x-8">
          <Link href="/" className="text-lg text-gray-700 hover:text-black">
            Home
          </Link>
          <Link href="/projects" className="text-lg text-gray-700 hover:text-black">
            Projects
          </Link>
          <Link href="/experience" className="text-lg text-gray-700 hover:text-black">
            Experience
          </Link>
          <Link href="/contact" className="text-lg text-gray-700 hover:text-black">
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 bg-white shadow-md transition-transform ${isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link href="/" className="text-lg text-gray-700 hover:text-black" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/projects" className="text-lg text-gray-700 hover:text-black" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="/experience" className="text-lg text-gray-700 hover:text-black" onClick={toggleMenu}>
              Experience
            </Link>
            <Link href="/contact" className="text-lg text-gray-700 hover:text-black" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

