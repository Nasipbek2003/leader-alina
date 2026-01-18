import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with advanced features including inventory management, payment processing, and analytics dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'Full-Stack Development'
    },
    {
      title: 'Healthcare Dashboard',
      description: 'A comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine capabilities.',
      image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'TypeScript', 'MongoDB', 'WebRTC'],
      category: 'UI/UX Design'
    },
    {
      title: 'FinTech Mobile App',
      description: 'A secure mobile banking application with real-time transactions, budgeting tools, and investment tracking.',
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'Redux', 'Biometric Auth'],
      category: 'Mobile Development'
    },
    {
      title: 'SaaS Analytics Platform',
      description: 'A powerful analytics platform for SaaS companies with real-time data visualization and custom reporting.',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'D3.js', 'AWS', 'GraphQL'],
      category: 'Data Visualization'
    },
    {
      title: 'Real Estate Platform',
      description: 'A comprehensive real estate platform with property listings, virtual tours, and mortgage calculators.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'Python', 'PostgreSQL', 'Mapbox'],
      category: 'Full-Stack Development'
    },
    {
      title: 'Learning Management System',
      description: 'An interactive e-learning platform with course creation, progress tracking, and collaborative features.',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Express.js', 'MongoDB', 'Socket.io'],
      category: 'Educational Platform'
    }
  ];

  const categories = ['All', 'Full-Stack Development', 'UI/UX Design', 'Mobile Development', 'Data Visualization', 'Educational Platform'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="text-blue-600">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my recent work and the impact I've created for businesses across various industries.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                      <ExternalLink className="w-4 h-4 text-gray-700" />
                    </button>
                    <button className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                      <Github className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}