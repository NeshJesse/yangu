import Navbar from '@/components/navbar';
import React from 'react';

const ExperiencePage = () => {
  const techStacks = [
    {
      category: 'Frontend',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      category: 'Backend',
      technologies: ['Node.js','SupaBase', 'Express', 'MongoDB', 'MySQL', 'SQLite', 'REST APIs'],
    },
    {
      category: 'App Development',
      technologies: ['Flutter (android,ios,windows Linux,web)', 'React Native(Android,IOS)'],
    },
    {
      category: 'DevOps',
      technologies: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Jenkins'],
    },
    {
      category: 'Others',
      technologies: ['Git', 'Agile Methodologies', 'JIRA', 'Webpack', 'Babel'],
    },
  ];

  return (
    <main className="bg-gray-100 min-h-screen py-16">
      <Navbar/>
      <div className="container mx-auto px-8">
        <h1 className="text-4xl text-black font-bold text-center py-7 mb-12">My Experience</h1>
        <p1 className="text-2xl text-black font-bold text-center mb-6">Technology Stacks</p1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStacks.map((stack, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl text-black font-semibold mb-4">{stack.category}</h2>
              <ul className="space-y-2">
                {stack.technologies.map((tech, i) => (
                  <li key={i} className="text-gray-700">{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default ExperiencePage;
