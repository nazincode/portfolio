import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  // track if menu is open / close
  const [isOpen, setIsOpen] = useState(false);

  // function to toggle mobile menu open / close state
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // function to handle click events on nav links
  const handleLinkClick = (e, targetId) => {
    e.preventDefault(); // prevent default link behavior
    // find target element by ID 
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // scroll smoothly 
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    // close mobile menu after clicking link
    setIsOpen(false);
  };

  return (
    <div className="bg-gray-900 text-gray-200 p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">

      <div className="text-lg">
        <a href="/" className="hover:text-gray-400">
          naziscoding@portfolio
        </a>
      </div>
      
      {/* nav links for desktop view */}
      <div className="hidden md:flex md:items-center space-x-4">
        <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-gray-400">About</a>
        <a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')} className="hover:text-gray-400">Skills</a>
        <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')} className="hover:text-gray-400">Projects</a>
        <a href="#experience" onClick={(e) => handleLinkClick(e, 'experience')} className="hover:text-gray-400">Experience</a>
        <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-gray-400">Contact</a>
      </div>
      
      {/* hamburger menu icon for mobile view */}
      <div className="block md:hidden">
        <button onClick={handleToggle} className="text-gray-400 hover:text-white">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      {/* nav links for mobile view */}
      {isOpen && (
        <div className="absolute top-14 left-0 right-0 bg-gray-900 text-center z-50">
          <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="block py-2 hover:text-gray-400">About</a>
          <a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')} className="block py-2 hover:text-gray-400">Skills</a>
          <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')} className="block py-2 hover:text-gray-400">Projects</a>
          <a href="#experience" onClick={(e) => handleLinkClick(e, 'experience')} className="block py-2 hover:text-gray-400">Experience</a>
          <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="block py-2 hover:text-gray-400">Contact</a>
        </div>

      )}
      
    </div>
  );
};

export default Navbar;
