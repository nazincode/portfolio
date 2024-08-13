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
          Hi, I'm Naz! I'm a former high school math teacher turned fullstack developer interested in working wth AI-driven applications. 
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
