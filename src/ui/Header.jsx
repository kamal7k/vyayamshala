import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='px-5 relative'>
      <nav className="flex justify-between items-center py-2">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img src="./image/logo.ico" alt="logo" className="h-12 md:h-20" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6 lg:space-x-12">
          <Link to="/" className="text-yellow-400 hover:opacity-80 transition-opacity">Home</Link>
          <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
          <a href="#reviews" className="hover:text-yellow-400 transition-colors">Reviews</a>
          <a href="#services" className="hover:text-yellow-400 transition-colors">Services</a>
          <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black md:hidden p-4 z-50">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-yellow-400">Home</Link>
              <a href="#about" className="hover:text-yellow-400">About</a>
              <a href="#reviews" className="hover:text-yellow-400">Reviews</a>
              <a href="#services" className="hover:text-yellow-400">Services</a>
              <a href="#contact" className="hover:text-yellow-400">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header