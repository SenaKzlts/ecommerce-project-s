import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Twitter, Mail } from 'lucide-react';

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Gökhan Özdemir',
      role: 'Project Manager',
      image: 'https://via.placeholder.com/400x400?text=Gökhan+Özdemir',
      linkedin: 'https://linkedin.com/in/gokhanozdemir',
      github: '#',
      twitter: '#',
      email: 'gokhan@myecommerce.com',
      description: 'Experienced project manager with expertise in e-commerce and agile methodologies.'
    },
    {
      id: 2,
      name: 'Cascade AI',
      role: 'Full Stack Developer',
      image: 'https://via.placeholder.com/400x400?text=Cascade+AI',
      linkedin: '#',
      github: '#',
      twitter: '#',
      email: 'cascade@myecommerce.com',
      description: 'AI-powered full stack developer specializing in React, Redux, and modern web technologies.'
    },
    {
      id: 3,
      name: 'Ahmet Yılmaz',
      role: 'Frontend Developer',
      image: 'https://via.placeholder.com/400x400?text=Ahmet+Yılmaz',
      linkedin: '#',
      github: '#',
      twitter: '#',
      email: 'ahmet@myecommerce.com',
      description: 'Frontend specialist with focus on UI/UX and responsive design.'
    },
    {
      id: 4,
      name: 'Ayşe Demir',
      role: 'Backend Developer',
      image: 'https://via.placeholder.com/400x400?text=Ayşe+Demir',
      linkedin: '#',
      github: '#',
      twitter: '#',
      email: 'ayse@myecommerce.com',
      description: 'Backend expert with experience in Node.js, databases, and API development.'
    },
    {
      id: 5,
      name: 'Mehmet Kaya',
      role: 'UI/UX Designer',
      image: 'https://via.placeholder.com/400x400?text=Mehmet+Kaya',
      linkedin: '#',
      github: '#',
      twitter: '#',
      email: 'mehmet@myecommerce.com',
      description: 'Creative designer focused on user-centered design and brand identity.'
    },
    {
      id: 6,
      name: 'Zeynep Çelik',
      role: 'QA Engineer',
      image: 'https://via.placeholder.com/400x400?text=Zeynep+Çelik',
      linkedin: '#',
      github: '#',
      twitter: '#',
      email: 'zeynep@myecommerce.com',
      description: 'Quality assurance specialist ensuring high-quality software delivery.'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Breadcrumb - Mobile First */}
      <nav className="bg-gray-50 p-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-800">Team</span>
          </div>
        </div>
      </nav>

      {/* Team Header - Mobile First */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 md:p-12 lg:p-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Meet Our Team
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            The talented people behind our success
          </p>
        </div>
      </section>

      {/* Team Grid - Mobile First */}
      <section className="p-6 md:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                {/* Member Image */}
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center gap-3">
                    {member.linkedin && (
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
                      >
                        <Linkedin className="w-5 h-5 text-blue-600" />
                      </a>
                    )}
                    {member.github && (
                      <a 
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <Github className="w-5 h-5 text-gray-700" />
                      </a>
                    )}
                    {member.twitter && (
                      <a 
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
                      >
                        <Twitter className="w-5 h-5 text-blue-400" />
                      </a>
                    )}
                    {member.email && (
                      <a 
                        href={`mailto:${member.email}`}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <Mail className="w-5 h-5 text-gray-700" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section - Mobile First */}
      <section className="bg-gray-50 p-6 md:p-8 lg:p-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-gray-600 mb-6">
            We're always looking for talented individuals to join our growing team.
          </p>
          <Link 
            to="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
