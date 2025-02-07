import React from "react";
import { Github, Instagram, Linkedin } from 'lucide-react';

const FirstPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white animate-fade-in-up">
          Shubham Aryal
        </h1>
        <h2 className="text-2xl md:text-4xl text-gray-300 animate-fade-in-up-delayed">
          Full-Stack Developer
        </h2>
        <div className="h-1 w-24 bg-white mx-auto mt-6 animate-width" />
        
        <div className="flex justify-center gap-6 mt-8 animate-fade-in-up-delayed">
          <a href="https://github.com/shubhamaryal" 
             className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
             target="_blank"
             rel="noopener noreferrer">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/shubhamaryal_/"
             className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
             target="_blank"
             rel="noopener noreferrer">
            <Instagram className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/shubhamaryal/"
             className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
             target="_blank"
             rel="noopener noreferrer">
            <Linkedin className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;