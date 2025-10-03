import React from 'react';
import { education, certifications } from '../../data/profileData';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Formação & Certificações</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Formação Acadêmica</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-900 leading-tight">{edu.degree}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      edu.status === 'Concluído' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-primary-600 font-medium mb-2">{edu.institution}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Certificações</h3>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">HackerRank</h4>
                  <p className="text-gray-600">Plataforma de Desenvolvimento</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-800 font-medium text-sm">{cert.name}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <a
                  href="https://www.hackerrank.com/eduardocvalente1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Ver Perfil HackerRank
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Objetivo Profissional</h4>
              <p className="text-gray-700 leading-relaxed">
                Busco uma oportunidade como desenvolvedor ou engenheiro de software, onde 
                possa aplicar meus conhecimentos em programação e minha formação em 
                Engenharia de Software, contribuindo para projetos desafiadores e inovadores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;