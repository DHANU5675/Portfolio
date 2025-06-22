import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Message sent! I\'ll get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: '22B91A04D0@SRKREC.AC.IN',
      link: 'mailto:22B91A04D0@SRKREC.AC.IN',
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7989453846',
      link: 'tel:+917989453846',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Narayanapuram, Ap',
      link: 'https://www.google.com/maps/place/Narayanapuram,+Andhra+Pradesh/@16.5062,80.6483,12z',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+91 7989453846',
      link: 'https://wa.me/917989453846',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const socialLinks = [
    { icon: Github, url: 'https://github.com/DHANU5675', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/dhanu09', label: 'LinkedIn', color: 'hover:text-blue-400' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 border-2 border-purple-500 rounded-full animate-spin-slow" />
        <div className="absolute bottom-10 left-10 w-32 h-32 border-2 border-pink-500 rotate-45 animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="group">
                      <div className="bg-gray-900/50 border border-gray-700 p-6 rounded-xl hover:border-purple-500/50 hover:bg-gray-900 transition-all duration-300">
                        <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <method.icon className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-gray-400 text-sm mb-1">{method.title}</p>
                        {method.link ? (
                          <a
                            href={method.link}
                            className="text-white font-medium hover:text-purple-400 transition-colors duration-200"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{method.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-6">Follow My Journey</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center hover:border-purple-500 hover:scale-110 transition-all duration-300 group ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-200" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">Available for new projects</span>
                </div>
                <p className="text-gray-300 text-sm mt-2">
                  Currently accepting new freelance and full-time opportunities
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900/50 border border-gray-700 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 text-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="project">New Project</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 resize-none text-white placeholder-gray-400"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;