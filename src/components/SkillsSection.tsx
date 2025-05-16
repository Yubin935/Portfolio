import React, { useState, useEffect, useRef } from 'react';
import { skills as allSkills } from '../data';

const SkillsSection: React.FC = () => {
  const [category, setCategory] = useState<string>('all');
  const [visibleSkills, setVisibleSkills] = useState(allSkills);
  const sectionRef = useRef<HTMLElement>(null);

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
  ];

  useEffect(() => {
    if (category === 'all') {
      setVisibleSkills(allSkills);
    } else {
      const filtered = allSkills.filter(
        (skill) => skill.category.toLowerCase() === category.toLowerCase()
      );
      setVisibleSkills(filtered);
    }
  }, [category]);

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
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white animate-on-scroll opacity-0">
            My Skills
          </h2>
          <div className="mt-2 h-1 w-24 bg-blue-500 rounded mx-auto animate-on-scroll opacity-0"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-on-scroll opacity-0">
            Technical skills and expertise developed over years of experience
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3 animate-on-scroll opacity-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                category === cat.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"  // Removed opacity-0 here!
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  {skill.level}%
                </span>
              </div>

              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
