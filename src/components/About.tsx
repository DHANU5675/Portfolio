import React from 'react';
import { Sparkles, Zap, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Always exploring cutting-edge technologies and creative solutions'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Building lightning-fast applications with optimal user experience'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Every pixel with purpose. Every line of code with care.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Genuine love for creating meaningful digital experiences'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                <div className="pl-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Crafting Digital Dreams
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    I'm a passionate front-end developer taking my first steps into the world of web development. With a strong foundation in HTML, CSS, and React, I enjoy building clean, responsive, and user-friendly interfaces that bring ideas to life in the browser.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                   My journey into front-end development started with curiosity and a love for visual creativity. Since then, I've been learning by doing—creating small projects, experimenting with layouts, and building interactive components to sharpen my skills.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {['HTML', 'CSS', 'React', 'Python', 'C','TyepeScript'].map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gray-800 border border-gray-700 text-purple-300 rounded-lg text-sm font-medium hover:border-purple-500 hover:bg-gray-700 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {values.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-purple-500/50 hover:bg-gray-800 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/*[
              { number: '50+', label: 'Projects Completed' },
              { number: '6+', label: 'Years Experience' },
              { number: '25+', label: 'Happy Clients' },
              { number: '100%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            ))*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;