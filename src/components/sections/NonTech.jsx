import React from 'react'; 
import Cursor from '../Cursor';

// Import screenshots
import privilege1 from '../../assets/projects/privilege1.png';
import privilege2 from '../../assets/projects/privilege2.png';
import pkpr from '../../assets/projects/pkpr.png';

// Project info
const projects = [
  {
    id: "privilege",
    images: [privilege1, privilege2], // Add more images as needed
    // liveLink:
    etherscan: "https://etherscan.io/nft/0x41ea8e729a304691798dcbb18d989f5a6e16762d/1",
    name: "Privilege",
    description: "Ideated and implemented the first of its kind donation-based minting system to purchase an open edition NFT in order to address double standards in media and Web3 while providing equitable monetary support for crises in the Ukraine and the Global South. Accessibility and engagement was increased leading to increased funding, breaking personal records for solo humanitarian aid initiatives.",
  },
  {
    id: "pkpr",
    images: [pkpr], // Add more images if available
    liveLink: "https://www.pkprcollective.xyz/",
    etherscan: "https://etherscan.io/token/0xD0fD4E578bB61c9dcbbc567D046DD0AAc4867557",
    name: "Pakistan & Puerto Rico Charity Collective",
    description: "Spearheaded a collective of nine artists to raise awareness and funds for relief efforts addressing the devastating flooding in Pakistan and ongoing hurricane recovery in Puerto Rico. As project manager for this initiative, I led the ideation and implementation phases, facilitating collaboration among artists to produce impactful digital artworks. I also contributed my own digital art, creating pieces that highlight the urgency of the humanitarian crisis.",
  },
  // {
  //   id: "newproject",
  //   images: ["https://geekflare.com/wp-content/uploads/2021/12/ai-project-ideas-geekflare.jpg"],
  //   liveLink: "https://example.com/live",
  //   githubLink: "https://github.com/example",
  //   name: "3rd Project",
  //   description: "Description.",
  // },
];

// Project display containers
const NonTech = ({ project }) => {
  return (
    <section id="nontech" className="section-container section-padding">
      <h2 className="section-heading">
        dir /humanitarian-projects<Cursor/>
      </h2>
      
      {/* Set up responsive project cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Loop through each project to display relevant info */}
        {projects.map(project => (
          <div key={project.id} className="bordered-container overflow-hidden transition-transform transform hover:scale-105 flex flex-col">
            
            {/* Display project images if available */}
            <div className="flex overflow-x-auto space-x-4 pb-2">
              {project.images && project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.name} screenshot ${index + 1}`}
                  className="w-full h-49 object-cover rounded-t-lg opacity-90"
                />
              ))}
            </div>
           
            {/* Project info containers set up to dynamically pull info */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl text-gray-300 font-bold">{project.name}</h3>
              <p className="terminal-text mt-2 flex-grow">{project.description}</p>
              
              <div className="mt-4 flex space-x-4">
                {/* Live demo link */}
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="link-style">
                    Live
                  </a>
                )}
                
                {/* Etherscan link */}
                {project.etherscan && (
                  <a href={project.etherscan} target="_blank" rel="noopener noreferrer" className="link-style">
                    Etherscan
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

export default NonTech;
