import React, { useEffect, useRef } from 'react';
import { aboutMe } from '../data';
import { Mail, MapPin, Phone } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
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

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white animate-on-scroll opacity-0">
            About Me
          </h2>
          <div className="mt-2 h-1 w-24 bg-blue-500 rounded mx-auto animate-on-scroll opacity-0"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN */}
          <div className="space-y-6 animate-on-scroll opacity-0">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Get to know me</h3>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              {aboutMe.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pt-4 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                  <MapPin size={18} />
                </div>
                <span className="text-gray-700 dark:text-gray-300">{aboutMe.location}</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                  <Mail size={18} />
                </div>
                <a
                  href={`mailto:${aboutMe.email}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {aboutMe.email}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                  <Phone size={18} />
                </div>
                <a
                  href={`tel:${aboutMe.phone}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {aboutMe.phone}
                </a>
              </div>
            </div>

            {/* BUTTONS ROW */}
            <div className="pt-6 flex justify-between flex-wrap gap-4">
              

              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/1YKRTXzgAQlCt4PV7flOUuWPBluCdeBRW/view?usp=sharing"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          {/* RIGHT COLUMN */}
<div className="relative h-80 w-80 mx-auto animate-on-scroll opacity-0">
  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full transform rotate-3 opacity-20 dark:opacity-10"></div>
  <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-full shadow-xl overflow-hidden">
    <img
      src="https://i.ibb.co/F4z7Zc1t/Whats-App-Image-2025-05-16-at-12-39-15-5b079d3f.png"
      alt="Yubin"
      className="w-full h-full object-cover object-top rounded-full"
    />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
