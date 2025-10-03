import React, { useState } from 'react';
import { projects, projectCategories } from '../../data/projectsData';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : activeFilter === 'Profissional'
    ? projects.filter(project => !project.isPersonal)
    : activeFilter === 'Pessoal'
    ? projects.filter(project => project.isPersonal)
    : projects.filter(project => 
        project.category === activeFilter || 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(activeFilter.toLowerCase())
        )
      );

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      'Java': 'bg-red-100 text-red-800',
      'Spring Boot': 'bg-green-100 text-green-800',
      '.NET Core': 'bg-purple-100 text-purple-800',
      'Node.js': 'bg-green-100 text-green-800',
      'React': 'bg-blue-100 text-blue-800',
      'TypeScript': 'bg-blue-100 text-blue-800',
      'PostgreSQL': 'bg-indigo-100 text-indigo-800',
      'MongoDB': 'bg-green-100 text-green-800',
      'Docker': 'bg-cyan-100 text-cyan-800',
      'C#': 'bg-purple-100 text-purple-800',
      'Express': 'bg-gray-100 text-gray-800',
      'Tailwind CSS': 'bg-teal-100 text-teal-800',
      'Python': 'bg-yellow-100 text-yellow-800',
      'Spring Security': 'bg-green-100 text-green-800',
      'Spring Cloud': 'bg-green-100 text-green-800'
    };
    return colors[tech] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma coleção dos meus projetos profissionais e pessoais, 
            demonstrando experiência em diferentes tecnologias e domínios
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-primary text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary to-secondary overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.featured && (
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      ⭐ Destaque
                    </span>
                  )}
                  {project.company && !project.isPersonal && (
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      💼 Profissional
                    </span>
                  )}
                  {project.isPersonal && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      🚀 Pessoal
                    </span>
                  )}
                </div>
                {/* Placeholder for project image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-white/30">
                    {project.category === 'Backend' && '⚙️'}
                    {project.category === 'Frontend' && '🎨'}
                    {project.category === 'Full-stack' && '🌐'}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.company && (
                    <p className="text-sm text-gray-500 mb-1">
                      {project.company} • {project.period}
                    </p>
                  )}
                  <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-700 mb-2">Principais conquistas:</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {project.highlights.slice(0, 2).map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                      <span className="mr-1">📂</span>
                      Código
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      <span className="mr-1">🚀</span>
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Nenhum projeto encontrado
            </h3>
            <p className="text-gray-600">
              Tente selecionar um filtro diferente para ver mais projetos.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interessado em colaborar?
            </h3>
            <p className="text-gray-600 mb-6">
              Estou sempre aberto a novos desafios e oportunidades de crescimento. 
              Vamos conversar sobre como posso contribuir com seus projetos!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-primary text-white py-3 px-8 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Entre em Contato
              </a>
              <a
                href="https://github.com/eduardocvalente"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white py-3 px-8 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Ver GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;