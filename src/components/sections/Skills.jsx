import React from 'react';
import './Skills.css';
import Cursor from '../Cursor';

// import icon package
import StackIcon from 'tech-stack-icons';

// import misc icons
import langchainicon from '../../assets/logos/langchainicon.png';
import datastax from '../../assets/logos/datastax.webp';
import vercel from '../../assets/logos/vercel.svg';


// logos & image sources
const allLogos = [
  
  // languages
  { src: <StackIcon name="js" />, alt: 'JavaScript'},
  { src: <StackIcon name="python" />, alt: 'Python' },
  { src: <StackIcon name="html5" />, alt: 'HTML5'},
  { src: <StackIcon name="typescript" />, alt: 'TypeScript' },
  
  // frontend
  { src: <StackIcon name="vitejs" />, alt: 'Vite' },
  { src: <StackIcon name="reactjs" />, alt: 'React'},
  { src: <StackIcon name="nextjs2" />, alt: 'Next.js'},
  { src: <StackIcon name="tailwindcss" />, alt: 'Tailwind CSS'},
  { src: <StackIcon name="figma" />, alt: 'Figma'},
  { src: <StackIcon name="reactrouter" />, alt: 'React Router'},
  
  // backend 
  { src: <StackIcon name="nodejs" />, alt: 'Node.js'},

  // database management
  { src: <StackIcon name="mongodb" />, alt: 'MongoDB'},
  { src: datastax, alt: 'DataStax'},
  
  // ai
  { src: <StackIcon name="openai" />, alt: 'OpenAI'},
  { src: langchainicon, alt: 'Langchain'},
  
  // tools + deployment
  { src: <StackIcon name="github" />, alt: 'GitHub'},
  { src: <StackIcon name="insomnia" />, alt: 'Insomnia'},
  { src: vercel, alt: 'Vercel'},
  { src: <StackIcon name="netlify" />, alt: 'Netlify'},
  
  // misc photo editing
  { src: <StackIcon name="ae" />, alt: 'After Effects'},
  { src: <StackIcon name="canva" />, alt: 'Canva'},
  { src: <StackIcon name="adobe" />, alt: 'Adobe Suite'},
  { src: <StackIcon name="lightroom" />, alt: 'Lightroom'},
  { src: <StackIcon name="ps" />, alt: 'Photoshop'},
];

function Skills() {
  return (
    <section id="skills" className="section-container section-padding tech-stack-section">
      
      <h2 className="section-heading">
        <span className="text-customGreen">~$ </span> npm install skills<Cursor />
      </h2>

      {/* skills list */}
      <div className="mt-2 mb-6">
        <ul className="mt-2 space-y-2 pl-4 list-disc">
          <li><span className="text-customPurple">Languages:</span> JavaScript, TypeScript, Python, HTML</li>
          <li><span className="text-customPurple">Frontend:</span> Vite, React, Next.js, Tailwind CSS, Figma, React Router</li>
          <li><span className="text-customPurple">Backend:</span> Node.js, Express</li>
          <li><span className="text-customPurple">Database Management:</span> MongoDB, DataStax Astra</li>
          <li><span className="text-customPurple">ML/AI:</span> OpenAI API, Langchain, MidJourney, DALL-E, RunwayML</li>
          <li><span className="text-customPurple">Tools & Deployment:</span> GitHub, Insomnia, Vercel, Netlify</li>
          <li><span className="text-customPurple">Image Editing & Design:</span> After Effects, Canva, Adobe Suite, Lightroom, Photoshop</li>
        </ul>
      </div>

      {/* skills logos */}
      <div className="logo-container">
        {allLogos.map((logo, index) => (
          <div key={index} className={`logo-boxes ${logo.height}`}>
            {typeof logo.src === 'string' ? (
              <img src={logo.src} alt={logo.alt} />
            ) : (
              <div className="icons">{logo.src}</div>
            )}
          </div>
        ))}
      </div>
    </section>

  );
};

export default Skills;
