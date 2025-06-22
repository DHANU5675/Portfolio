import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-purple-500/30 rotate-45 animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full animate-float-delayed" />
        <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-pink-500/30 animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-purple-500/20 rounded-full animate-float" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="mb-8 animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
              👋 Hello, I'm
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up animation-delay-300">
            <span className="text-white">Sarah</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600">
              Chen
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-6 animate-fade-in-up animation-delay-600">
            <span className="text-purple-400">Creative Developer</span> & <span className="text-pink-400">Digital Artist</span>
          </div>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-900">
            I craft immersive digital experiences through code and design. 
            Specializing in modern web technologies with a passion for creative problem-solving.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-1200">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
            <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in-up animation-delay-1500">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 border border-gray-700 rounded-lg hover:border-purple-500 hover:bg-gray-700 transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 border border-gray-700 rounded-lg hover:border-purple-500 hover:bg-gray-700 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
            </a>
            <a
              href="mailto:sarah@example.com"
              className="p-3 bg-gray-800 border border-gray-700 rounded-lg hover:border-purple-500 hover:bg-gray-700 transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;