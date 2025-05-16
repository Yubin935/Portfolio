import React, { useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';
import { aboutMe } from '../data';

const HeroSection: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(textElement);

    return () => {
      if (textElement) observer.unobserve(textElement);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500/30 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-500/30 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-yellow-500/20 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center space-y-8">
          <p className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide text-lg opacity-0 animate-fade-in">
            Hello, I'm
          </p>
          <h1 
            ref={textRef}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white opacity-0"
          >
            <span className="inline-block">{aboutMe.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mt-4 opacity-0 animate-fade-in animation-delay-300">
            {aboutMe.title}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 opacity-0 animate-fade-in animation-delay-500">
            {aboutMe.description}
          </p>
          
          <div className="flex justify-center space-x-4 pt-4 opacity-0 animate-fade-in animation-delay-700">
            <a 
              href={aboutMe.social.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href={aboutMe.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={aboutMe.social.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
          
          <div className="pt-8 opacity-0 animate-fade-in animation-delay-1000">
            <a 
              href="#about" 
              className="inline-flex items-center justify-center p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors animate-bounce animation-duration-2000 animation-delay-2000"
            >
              <ChevronDown size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;