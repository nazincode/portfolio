// src/App.js
import React, { useState } from 'react';
import Navbar from './components/NavBar';
import Sidebar from './components/SideBar';
import About from './components/sections/About';
import ProjectList from './components/sections/Project';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App bg-customGray">
      <Navbar toggleSidebar={toggleSidebar} />
      
      <div className="flex ">
        <Sidebar />
        
        <div className="flex flex-col ml-0 md:ml-16 mt-10">
          <About />
          <Skills/>
          <ProjectList/>
          <Experience/>
          <Contact/>
          
          <p className='text-gray-400 text-sm text-right bg-gray-800 '>
            © copyright 2024 -mincode
          </p>
        
        </div>
        
      </div>
    </div>
  );
}

export default App;
