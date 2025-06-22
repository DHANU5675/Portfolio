import React from 'react';
import { Code, Palette, Database, Zap, Globe, Smartphone } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      color: 'from-purple-500 to-blue-500',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 92 },
        { name: 'Vue.js', level: 85 },
        { name: 'Tailwind CSS', level: 98 }
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python/Django', level: 85 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'GraphQL', level: 82 }
      ]
    },
    {
      icon: Palette,
      title: 'Design & UX',
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Adobe Creative Suite', level: 85 },
        { name: 'UI/UX Design', level: 88 },
        { name: 'Prototyping', level: 85 }
      ]
    },
    {
      icon: Zap,
      title: 'DevOps & Tools',
      color: 'from-orange-500 to-yellow-500',
      skills: [
        { name: 'AWS/Vercel', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'Git/GitHub', level: 95 },
        { name: 'CI/CD', level: 78 }
      ]
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'WebGL/Three.js', level: 75 },
        { name: 'PWA Development', level: 85 },
        { name: 'Web Performance', level: 90 },
        { name: 'SEO Optimization', level: 82 }
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Flutter', level: 70 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Mobile UX', level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-purple-500 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-pink-500 rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="group bg-gray-900/50 border border-gray-700 p-8 rounded-xl hover:border-purple-500/50 hover:bg-gray-900 transition-all duration-500"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                        <span className="text-gray-400 text-xs">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out group-hover/skill:shadow-lg`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;