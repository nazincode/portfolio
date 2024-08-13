// src/components/Sidebar.js
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Sidebar = () => {
  return (

    <div className="fixed top-14 left-0 h-full w-16 bg-gray-900 text-white hidden md:block transition duration-300 ease-in-out">
      
      <div className="flex flex-col items-center py-8 space-y-8">
        
        <a href="https://github.com/nazincode" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaGithub size={28} />
        </a>
        
        <a href="https://www.linkedin.com/in/naz-z/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaLinkedin size={28} />
        </a>
      
      </div>
    </div>
  );
};

export default Sidebar;
