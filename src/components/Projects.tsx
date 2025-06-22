import React from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'NeuroFlow AI Platform',
      description: 'An AI-powered analytics dashboard with real-time data visualization, machine learning insights, and predictive modeling capabilities.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Python', 'TensorFlow', 'D3.js', 'WebGL'],
      category: 'AI/ML',
      featured: true,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      title: 'CryptoVault DeFi',
      description: 'Decentralized finance platform with yield farming, staking rewards, and advanced portfolio management tools.',
      image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Next.js', 'Solidity', 'Web3.js', 'Ethereum'],
      category: 'Blockchain',
      featured: true,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Immersive AR Gallery',
      description: 'Virtual art gallery with augmented reality features, 3D model viewing, and interactive exhibitions.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Three.js', 'WebXR', 'React', 'Blender'],
      category: 'AR/VR',
      featured: false,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      title: 'CloudSync Collaboration',
      description: 'Real-time collaboration platform with video conferencing, shared workspaces, and project management tools.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Vue.js', 'Socket.io', 'WebRTC', 'MongoDB'],
      category: 'SaaS',
      featured: false,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      title: 'EcoTrack Sustainability',
      description: 'Environmental impact tracking app with carbon footprint analysis, sustainability goals, and community challenges.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Chart.js'],
      category: 'Mobile',
      featured: false,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Quantum Computing Simulator',
      description: 'Interactive quantum computing simulator with visual circuit builder and educational resources.',
      image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['TypeScript', 'WebAssembly', 'Canvas API', 'Rust'],
      category: 'Education',
      featured: false,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    }
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