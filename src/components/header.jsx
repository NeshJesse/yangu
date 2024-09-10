import React from 'react';
import SocialMediaLinks from '@/components/socials';

const Header = () => {
  return (
    <header className="relative bg-white w-full h-300 flex flex-col justify-center items-center py-8 px-4">
      {/* Profile Picture */}
      <div className='mb-4 py-7'>
      <img
        src="/mime.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full mb-8 border-4 border-gray-300 shadow-lg"
      />
      </div>
      {/* Name and Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Hello! I'm Jesse Nehemiah Onyango
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          A Software Engineer/Full stack developer  based in Kiambu Kenya
        </p>
      </div>
      <SocialMediaLinks/>
     
      <div className="flex space-x-4 py-12 mb-12">
        <button className="px-8 py-3 text-black border border-black rounded-full text-lg shadow-md hover:bg-gray-100 transition-colors">
         
          <a href='https://drive.google.com/file/d/1n-SfQfHSGV33flepfzvyNSPSUnUefZ62/view?usp=sharing'>
          See my CV
          </a>
        </button>
      </div>
      
    </header>
  );
};

export default Header;
