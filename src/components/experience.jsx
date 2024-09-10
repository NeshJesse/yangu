import React from 'react';

const ExperienceSection = () => {
  const techStacks = [
    {
      category: 'Frontend',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Express', 'MongoDB','Sqlite3', 'MySQL', 'GraphQL', 'REST APIs'],
    },
    {
      category: 'DevOps',
      technologies: ['Docker', 'Kubernetes', 'CI/CD',],
    },
    {
      category: 'App Development',
      technologies: ['Flutter (android,ios,windows Linux,web)', 'React Native(Android,IOS)'],
    },
    {
      category: 'Others',
      technologies: ['Git', 'Agile Methodologies', 'JIRA'],
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl text-black font-bold text-center mb-12">Experience</h2>
        <p1 className="text-2xl text-black font-bold text-center mb-6">Technology Stacks</p1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStacks.map((stack, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl text-black font-semibold mb-4">{stack.category}</h3>
              <ul className="space-y-2">
                {stack.technologies.map((tech, i) => (
                  <li key={i} className="text-gray-700">{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
