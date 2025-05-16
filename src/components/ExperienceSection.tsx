import React, { useEffect, useRef } from 'react';
import { experiences } from '../data';
import { Briefcase } from 'lucide-react';

const ExperienceSection: React.FC = () => {
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
    elements?.forEach(el => observer.observe(el));
    
    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white animate-on-scroll opacity-0">
            Work Experience
          </h2>
          <div className="mt-2 h-1 w-24 bg-blue-500 rounded mx-auto animate-on-scroll opacity-0"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-on-scroll opacity-0">
            My professional journey and career milestones
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gray-200 dark:bg-gray-700"></div>
          
          {experiences.map((experience, index) => (
            <div 
              key={experience.id}
              className={`relative flex flex-col md:flex-row items-center md:items-start mb-12 md:mb-16 animate-on-scroll opacity-0`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline dot */}
              <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white z-10 shadow-md`}>
                <Briefcase size={18} />
              </div>
              
              {/* Content */}
              <div 
                className={`
                  pl-16 md:pl-0 w-full md:w-1/2 
                  ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`
                }
              >
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {experience.position}
                  </h3>
                  <div className="flex items-center justify-start md:justify-end mt-2 space-x-2">
                    <h4 className={`text-lg font-medium text-blue-600 dark:text-blue-400`}>
                      {experience.company}
                    </h4>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    {experience.duration}
                  </p>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    {experience.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;