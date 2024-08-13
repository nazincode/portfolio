import React, { useState } from 'react';
import Cursor from '../Cursor';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {

  // store result message after form submission 
  const [result, setResult] = useState("");

  // store form data 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // handle input changes and update formData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle form submission
  const onSubmit = async (event) => {
    // prevent default form submission
    event.preventDefault(); 
    // display sending message
    setResult("sending....");

    // formData object to send form data with web3forms
    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "c8fbd445-5462-4aef-8d26-1d5f5648f739");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    // send form data to web3forms server
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend,
    });

    const data = await response.json();

    if (data.success) {
      setResult("contact initiated successfully :D");
      event.target.reset();
      setFormData({ name: '', email: '', message: '' }); // Clear the form after successful submission
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="section-container section-padding">
  <div className="socials flex flex-row items-center justify-center mb-14 space-x-10 md:hidden lg:hidden">
    <a href="https://github.com/nazincode" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
      <FaGithub size={40} />
    </a>
    <a href="https://www.linkedin.com/in/naz-z/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
      <FaLinkedin size={40} />
    </a>
  </div>
  
  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-20 max-w-6xl mx-auto">
    {/* Contact Heading */}
    <div className="lg:text-left mb-8 lg:mb-0 flex-shrink-0">
      <h2 className="section-heading">
        start contact.exe<Cursor />
      </h2>
    </div>

    {/* Contact Form */}
    <div className="flex-1">
      <form onSubmit={onSubmit} className="flex flex-col space-y-6">
        <div className="flex space-x-6">
          <div className="flex flex-col flex-1">
            <label htmlFor="name" className="text-gray-300">
              <span className="text-green-300">~$ </span>
              <span className="terminal-text">name:</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bordered-container p-2 text-gray-300"
              required
            />
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="email" className="text-gray-300">
              <span className="text-green-300">~$ </span>
              <span className="terminal-text">email:</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bordered-container p-2 text-gray-300"
              required
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-gray-300">
            <span className="text-green-300">~$ </span>
            <span className="terminal-text">message:</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bordered-container p-2 text-gray-300 h-32 resize-none"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 w-1/4 text-gray-900 rounded-lg p-2 mt-4 hover:bg-green-400"
        >
          <span className="text-green-300">~$ </span>send
        </button>
        <p className="text-green-300 mt-4">{result}</p>
      </form>
    </div>
  </div>
</section>

  );
};

export default Contact;
