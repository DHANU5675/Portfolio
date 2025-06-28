import React from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects: React.FC = () => {
  type Project = {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    category: string;
    githubUrl: string;
    liveUrl?: string;
    featured?: boolean;
  };

  const projects: Project[] = [
    {
      title: 'Spotify Clone',
      description: 'A front-end clone of the Spotify web app built using React, Vite, TypeScript, and TailwindCSS. Created as a learning project to replicate Spotify’s modern UI and user experience.',
      image: '/spotify_clone.png',
      technologies: ['TypeScript', 'TailwindCSS', 'Html', 'React', 'Vite'],
      category: 'Web Development',
      githubUrl: 'https://github.com/DHANU5675/Spotify',
      featured: false,
      //liveUrl: '', // Add your live URL if available
    },
    {
      title: 'Health Connect',
      description: 'A front-end web application built with React.js that allows users to browse medical departments and book doctor appointments. Designed with a focus on clean UI and intuitive navigation, this project showcases appointment booking flows and departmental categorization.',
      image: '/health_connect..webp',
      technologies: ['React', 'Html', 'CSS', 'JavaScript','TypeScript'],
      category: 'Web Devleopment',
      githubUrl: 'https://github.com/DHANU5675/Health_Connect',
      featured: false,
      //liveUrl: '', // Add your live URL if available
    },
    {
      title: 'JobPortal Application',
      description: 'A front-end web interface built with React.js for a comprehensive job portal platform. It enables seamless interaction between job seekers and recruiters through intuitive navigation and dynamic content rendering',
      image: '/job_portal.jpg',
      technologies: ['React', 'Html', 'CSS', 'JavaScript','TypeScript'],
      category: 'Web Devleopment',
      githubUrl: 'https://github.com/DHANU5675/Jobportal_Application',
      featured: false,
      //liveUrl: '', // Add your live URL if available
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, rgba(147, 51, 234, 0.1) 25%, transparent 25%),
                           linear-gradient(-45deg, rgba(236, 72, 153, 0.1) 25%, transparent 25%),
                           linear-gradient(45deg, transparent 75%, rgba(147, 51, 234, 0.1) 75%),
                           linear-gradient(-45deg, transparent 75%, rgba(236, 72, 153, 0.1) 75%)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Work</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Showcasing innovative projects that push the boundaries of web development
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200">
                      <Play className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-lg border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">Source</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-800/30 border border-gray-700 rounded-lg overflow-hidden hover:border-purple-500/50 hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <span className="px-2 py-1 bg-purple-500/80 text-white text-xs rounded">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors duration-200">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
                      >
                        <ExternalLink size={14} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
                      >
                        <Github size={14} />
                      </a>
                    </div>
                    <span className="text-xs text-gray-500">
                      {project.technologies.length} techs
                    </span>
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

export default Projects;