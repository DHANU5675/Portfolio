import React from 'react';
import { Heart, Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Front-End Developer</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                A Frontend Developer transforms ideas into interactive, user-friendly web experiences using modern technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-300">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-300">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>IOT</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
                <span>Done by L.D.V.Prasad </span>
              </p>
              <div className="flex items-center space-x-4 text-gray-400 text-sm">
                <span>© {new Date().getFullYear()} L.D.V.Prasad. All rights reserved.</span>
                <span>•</span>
                <button className="hover:text-purple-400 transition-colors duration-200">
                  Privacy Policy
                </button>
                <span>•</span>
                <button className="hover:text-purple-400 transition-colors duration-200">
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;