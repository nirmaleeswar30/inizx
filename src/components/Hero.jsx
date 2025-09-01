import React from 'react';
import mainProfilePic from '../assets/main-profile-pic.jpg';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen bg-white flex items-center justify-center px-4 py-20 mt-12">
      <div className="max-w-5xl w-full flex items-center justify-between gap-4">
        
        {/* Left Side - Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            {/* Shadow layers - creating the thick shadow frame effect */}
            <div className="absolute top-4 left-4 w-11/12 h-full bg-[#361921] "></div>
            {/* <div className="absolute top-2 left-2 w-80 h-96 bg-gray-700 rounded-lg"></div> */}
            {/* <div className="absolute top-1 left-1 w-80 h-96 bg-gray-600 rounded-lg"></div> */}
            
            {/* Main image container */}
            <div className="relative  overflow-hidden">
              <img 
                src={mainProfilePic} 
                alt="Iniya B.C" 
                className="w-11/12 h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 space-y-1">
          <div>
            <h1 className="text-4xl font-bold text-[#361921] mb-2">
              Iniya B.C
            </h1>
            <h2 className="text-2xl text-black font-light">
              Aspiring Criminal Psychologist
            </h2>
          </div>

          <div className="space-y-2 mt-10">
            <div>
              <span className="text-lg font-semibold text-gray-800">Expertise: </span>
              <span className="text-lg text-gray-700">Teamwork, Problem-Solving, Research Skills</span>
            </div>
            
            <div>
              <span className="text-lg font-semibold text-gray-800">Hobby: </span>
              <span className="text-lg text-gray-700">Dancing, Drawing, Traveling, Reading</span>
            </div>
          </div>

          {/* Placeholder buttons/elements as shown in the image */}
          <div className="space-y-3 mt-20">
            <div className="w-32 h-4 bg-[#D9D9D9]"></div>
            <div className="w-40 h-4 bg-[#D9D9D9]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;