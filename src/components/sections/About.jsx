import React from 'react';
import Cursor from '../Cursor';
import Terminal from '../Terminal';


const About = () => {
  return (
    <section id="about" className="section-container section-padding">
      
      <h2 className="section-heading">
        greetings(user)<Cursor/>
      </h2>
      
      <div className="whitespace-pre-wrap font-mono terminal-text">
       
        <p>
          <span className="">~$ </span>
          <span className="text-customGreen">whoami</span>
        </p>
        
        <p className="mt-2">
          Hi, I’m Naz! A former math teacher turned full-stack developer, passionate about building AI-integrated, human centered solutions. With expertise in data driven learning, cutting edge multimedia innovation, and leadership in humanitarian NFT initiatives, I’m excited to bring my problem-solving and project management skills to the tech world.
        </p>
        
        <p className="mt-8">
          enter a command to learn more about me: 
          <br/>
          <Terminal />
        </p>
      
      </div>
    
    </section>
  );
};

export default About;
