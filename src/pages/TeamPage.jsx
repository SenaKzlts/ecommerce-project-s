import React from 'react';
import { Link } from 'react-router-dom';

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Gökhan Özdemir',
      role: 'Project Manager',
      image: 'https://via.placeholder.com/400x400?text=Gökhan+Özdemir',
      linkedin: 'https://linkedin.com/in/gokhanozdemir',
      email: 'gokhan@myecommerce.com',
      description: 'Experienced project manager with expertise in e-commerce and agile methodologies.'
    },
    {
      id: 2,
      name: 'Cascade AI',
      role: 'Full Stack Developer',
      image: 'https://via.placeholder.com/400x400?text=Cascade+AI',
      email: 'cascade@myecommerce.com',
      description: 'AI-powered full stack developer specializing in React, Redux, and modern web technologies.'
    },
    {
      id: 3,
      name: 'Ahmet Yılmaz',
      role: 'Frontend Developer',
      image: 'https://via.placeholder.com/400x400?text=Ahmet+Yılmaz',
      email: 'ahmet@myecommerce.com',
      description: 'Frontend specialist with focus on UI/UX and responsive design.'
    },
    {
      id: 4,
      name: 'Ayşe Demir',
      role: 'Backend Developer',
      image: 'https://via.placeholder.com/400x400?text=Ayşe+Demir',
      email: 'ayse@myecommerce.com',
      description: 'Backend expert with experience in Node.js, databases, and API development.'
    },
    {
      id: 5,
      name: 'Mehmet Kaya',
      role: 'UI/UX Designer',
      image: 'https://via.placeholder.com/400x400?text=Mehmet+Kaya',
      email: 'mehmet@myecommerce.com',
      description: 'Creative designer focused on user-centered design and brand identity.'
    },
    {
      id: 6,
      name: 'Zeynep Çelik',
      role: 'QA Engineer',
      image: 'https://via.placeholder.com/400x400?text=Zeynep+Çelik',
      email: 'zeynep@myecommerce.com',
      description: 'Quality assurance specialist ensuring high-quality software delivery.'
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Meet Our Team</h1>
      <p className="mb-6">The talented people behind our success</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white p-4 rounded-lg shadow-md">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-blue-600 font-semibold">{member.role}</p>
            <p className="text-gray-600 text-sm mt-2">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
