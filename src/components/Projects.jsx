import React from 'react';

const Projects = () => {
  const techStacks = [
    {
      category: 'React | Flask | Python | APIs',
      technologies: [
        {
          name: 'React JS Project Boilerplate',
          description: 'A boilerplate for building Kenyan SaaS apps using React applications with reusable components and hooks.',
          link: 'https://github.com/NeshJesse/reactjs-suv',
        },
        {
          name: 'Flask Projects Boilerplate',
          description: 'A template for building Kenyan SaaS apps using Flask and Python.',
          link: 'https://github.com/NeshJesse/flask-suv',
        },
      ],
    },
    {
      category: 'React | Next.js | Supabase | MongoDB | Vercel',
      technologies: [
        {
          name: 'Movers',
          description: 'A platform for booking moving services with real-time tracking and management.',
          link: 'https://github.com/yourusername/movers',
        },
        {
          name: 'Shoppy',
          description: 'An e-commerce platform with real-time product updates and seamless checkout.',
          link: 'https://github.com/yourusername/shoppy',
        },
        {
          name: 'Voice QR',
          description: 'A QR code generator that converts information into an audio file for accessibility.',
          link: 'https://github.com/yourusername/voice-qr',
        },
        {
          name: 'QuickCart',
          description: 'A shopping cart system with integration to Supabase for user management.',
          link: 'https://github.com/yourusername/quickcart',
        },
      ],
    },
    {
      category: 'React Native with Expo',
      technologies: [
        {
          name: 'Face ID Application',
          description: 'A mobile app that integrates Face ID authentication using React Native and Expo.',
          link: 'https://github.com/yourusername/face-id-app',
        },
      ],
    },
    {
      category: 'Flutter with MongoDB | SQLite',
      technologies: [
        {
          name: 'News App',
          description: 'A news aggregator app built using Flutter with offline support via SQLite.',
          link: 'https://github.com/yourusername/news-app',
        },
        {
          name: 'Price Comparison',
          description: 'An app that compares prices from multiple online stores using MongoDB and Flutter.',
          link: 'https://github.com/yourusername/price-comparison',
        },
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl text-black font-bold text-center mb-12">Development Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStacks.map((stack, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl text-black font-semibold mb-4">{stack.category}</h3>
              <ul className="space-y-4">
                {stack.technologies.map((tech, i) => (
                  <li key={i} className="text-gray-700">
                    <div className="mb-2">
                      <h4 className="font-semibold text-lg">{tech.name}</h4>
                      <p className="text-gray-600 mb-4">{tech.description}</p>
                      <a
                        href={tech.link}
                        className="inline-block px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn More
                      </a>
                    </div>
                  </li>
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
