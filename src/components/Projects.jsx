import React from 'react';

const Projects = () => {
  const techStacks = [
    {
      category: 'React | Next Js| Supabase| MOngo DB | Vercel',
      technologies: ['Movers', 'Shoppy', 'Voice QR', 'QuickCart'],
      link: 'learn More',
    },
    {
     category: 'React Native with Expo',
      technologies: ['Face ID Application'],
      link: 'learn More',
    },
    {
        category: 'Flutter with MongoDB | SQLITE',
         technologies: ['News app','Price Comparison'],
         link: 'learn More',
    }

  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl text-black font-bold text-center mb-12">Development Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStacks.map((stack, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl text-black font-semibold mb-4">{stack.category}</h3>
              <ul className="space-y-2 ">
                {stack.technologies.map((tech,link, i) => (
                    <>
                  <div className='flex gap-8 px-4 py-4'>
                    
                  
                  <li key={i} className="text-gray-700">{tech}
                  </li>
                  
                  <button className="w-25 h-10 px-3 py-3 text-white bg-black rounded-sm text-lg shadow-md hover:bg-gray-800 transition-colors">
                   {stack.link}
                   </button>
                  </div>
                  </>
                  
                ))}
              </ul>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;