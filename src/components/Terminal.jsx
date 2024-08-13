import React, { useState } from 'react';

// import images
import capture from '../assets/terminal/capture.png';
import cat from '../assets/terminal/cat.png';
import fetch from '../assets/terminal/fetch.png';
import load from '../assets/terminal/load.png';
import search from '../assets/terminal/search.png';
import view from '../assets/terminal/view.png';

// set terminal commands and respective output images
const commands = {
  'help': {
    output: 'help\nAvailable commands:\ncat +cat\ncapture -skyfall\nfetch -first-light\nload -polaroids\nsearch -freedom\nview artist-art\n-c',
    image: null,
  },
  'capture -skyfall': {
    output: 'Displaying:',
    image: capture,
  },
  'cat +cat': {
    output: 'Displaying:',
    image: cat,
  },
  'fetch -first-light': {
    output: 'Displaying:',
    image: fetch,
  },
  'load -polaroids': {
    output: 'Displaying:',
    image: load,
  },
  'search -freedom': {
    output: 'Displaying:',
    image: search,
  },
  'view artist-art': {
    output: 'Displaying:',
    image: view,
  },
};

const Terminal = () => {

  // keep track of what is typed
  const [input, setInput] = useState('');

  // keep track of what is shown in terminal
  const [output, setOutput] = useState('type "help" to see a list of commands, press "enter" to execute the command and "-c" to clear the terminal');

  // keep track of which image will be shown
  const [image, setImage] = useState(null);

  // update input state when user types
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // handle actions when user presses enter
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      
      // clear terminal
      if (input.trim() === '-c') {
        setOutput('type "help" to see a list of commands, press "enter" to execute the command and "-c" to clear the terminal');
        setImage(null);
      } 
      
      // else if input matches a command
      else {
        const command = commands[input.trim()];
        // display output corresponding output image 
        if (command) {
          setOutput(command.output);
          setImage(command.image);
        } 
        // else display error message
        else {
          setOutput('Command not found.\nAvailable commands:\ncat +cat\ncapture -skyfall\nfetch -first-light\nload -polaroids\nsearch -freedom\nview artist-art\n-c');
          setImage(null);
        }
      }
      // clear input field
      setInput('');
    }
  };

  return (
    <div className="bg-gray-900 rounded-xl border-gray-600 text-gray-400 h-full w-full p-4">

      {/* output display */}
      <div className="mb-2">
        <span className="text-green-400">naziscoding@portfolio</span>:~$ <span>{output}</span>
      </div>
      
      {/* image display, if it exists */}
      {image && <img src={image} alt="Command result" className="mt-4 border border-gray-600" />}
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter a command"
        className="bg-gray-950 opacity-80 text-gray-400 border border-gray-600 p-2 rounded-md w-full"
      />
    </div>
  );
};

export default Terminal;
