import React from 'react';
import Cursor from '../Cursor';

// import screenshots
import travel from '../../assets/projects/itravel.png';
import flsmartsite from '../../assets/projects/flsmartsite.png';


// project info
const projects = [
  {
    id: "iTravel",
    image: travel,
    liveLink: "https://example.com/live",
    githubLink: "https://github.com/nazincode/itravelgpt",
    name: "iTravel",
    description: "Travel task manager webapp featuring an AI travel assistant",
  },
  {
    id: "faloodalab",
    image: flsmartsite,
    liveLink: "http://localhost:3000/",
    githubLink: "https://github.com/example",
    name: "Falooda Lab",
    description: "Dessert catering website with custom AI RAG chatbot made with Langchain",
  },
  // {
  //   id: "newproject",
  //   image: "https://geekflare.com/wp-content/uploads/2021/12/ai-project-ideas-geekflare.jpg",
  //   liveLink: "https://example.com/live",
  //   githubLink: "https://github.com/example",
  //   name: "3rd Project",
  //   description: "Description.",
  // },
];

// project display containers
const ProjectList = ({ project }) => {
  return (
    <section id="projects" className="section-container section-padding">

      <h2 className="section-heading">
        find ./projects<Cursor/>
      </h2>
      
      {/* set up responsive project cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* loop through each project to display relevant info */}
        {projects.map(project => (
          
          <div key={project.id} className="bordered-container overflow-hidden transition-transform transform hover:scale-105 flex flex-col">
            
            {/* display project image if available */}
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 pb-2 object-cover rounded-t-lg opacity-90"
              />
            )}
           
            {/* project info containers set up to dynamically pull info */}
            <div className="p-6 flex flex-col flex-grow">
              
              <h3 className="text-xl text-gray-300 font-bold">{project.name}</h3>
              <p className="terminal-text mt-2 flex-grow">{project.description}</p>
              
              <div className="mt-4 flex space-x-4">
                
                {/* live demo link */}
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="link-style">
                    Live
                  </a>
                )}
                
                {/* github repo link */}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="link-style">
                    GitHub
                  </a>
                )}
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
