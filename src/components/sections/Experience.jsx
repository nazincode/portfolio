import React, { useState } from 'react';
import './Experience.css';
import Cursor from '../Cursor';

// experience info
const experiences = [
  {
    id: 'developer',
    role: 'Fullstack Developer',
    description: 'building innovative solutions from front to back with a passion for harnessing the power of AI',
  },
  {
    id: 'trainee',
    role: 'Trainee @NPower\'s Path2Tech Program (current)',
    description: 'dove into the tech world with hands-on training and a drive to master industry tools',
  },
  {
    id: 'photographer',
    role: 'Photographer',
    description: 'captured moments and stories through the lens with creativity and precision',
  },
  {
    id: 'instructionalDesign',
    role: 'Instructional Design Specialist',
    description: 'transformed complex concepts into engaging and effective learning experiences',
  },
  {
    id: 'mathTeacher',
    role: 'High School Math Teacher',
    description: 'guided students through the world of numbers and equations with clarity and enthusiasm',
  },
  {
    id: 'student',
    role: 'Student @ Rutgers University',
    description: 'obtained a B.A. in Economics with high honors ',
  },
];

const Experience = () => {

  // manage if experience section is toggled
  const [isExpanded, setIsExpanded] = useState(true);

  // toggle experience section
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="experience" className="section-container section-padding">
      
      <div className="lg:text-left mb-8">
        
        {/* toggle arrow */}
        <h2 
          className="section-heading cursor-pointer"
          onClick={toggleExpanded}
          >
          <span className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>&#9660; </span>
          
          git log --edu --exp<Cursor />
        
        </h2>
      
      </div>

       {/* conditionally displays experiences if toggled */}
      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* loop through experiences */}
          {experiences.map((exp) => (
            <div key={exp.id} className="bordered-container p-6">
              
              {/* display role */}
              <p className="text-gray-300 mb-1">
                <span className="text-green-300">~$ </span>
                <strong>{exp.role}</strong>
              </p>

              {/* display description */}
              <p className="terminal-text">{exp.description}</p>
            
            </div>
          ))}
        </div>
      )}
</section>

  );
};

export default Experience;
