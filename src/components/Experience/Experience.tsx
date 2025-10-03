import React from 'react';
import { experiences } from '../../data/profileData';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experiência Profissional</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-md hidden md:block"></div>
                
                <div className="md:ml-16 bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                    <p className="text-lg text-primary-600 font-medium">{exp.company}</p>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2">
                      <p className="text-gray-600">{exp.location}</p>
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mt-2 sm:mt-0">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Principais Realizações:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Architecture */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Arquitetura & Tecnologias:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.architecture.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;