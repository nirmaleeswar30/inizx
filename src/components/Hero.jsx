import React, { useState, useEffect } from 'react';
import mainProfilePic from '../assets/main-profile-pic.jpg';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progressBar1, setProgressBar1] = useState(0);
  const [progressBar2, setProgressBar2] = useState(0);

  useEffect(() => {
    // Trigger entrance animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Animate progress bars after text animations
    const progressTimer1 = setTimeout(() => {
      const interval1 = setInterval(() => {
        setProgressBar1(prev => {
          if (prev >= 100) {
            clearInterval(interval1);
            return 100;
          }
          return prev + 2;
        });
      }, 20);
    }, 1500);

    const progressTimer2 = setTimeout(() => {
      const interval2 = setInterval(() => {
        setProgressBar2(prev => {
          if (prev >= 100) {
            clearInterval(interval2);
            return 100;
          }
          return prev + 1.5;
        });
      }, 25);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(progressTimer1);
      clearTimeout(progressTimer2);
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen bg-white flex items-center justify-center px-4 py-20 mt-12 overflow-hidden">
      <div className="max-w-5xl w-full flex items-center justify-between gap-4">
       
        {/* Left Side - Image */}
        <div className="flex-1 flex justify-center">
          <div 
            className={`relative group transition-all duration-1000 ease-out transform ${
              isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
          >
            {/* Shadow layers - creating the thick shadow frame effect */}
            <div 
              className={`absolute top-4 left-4 w-11/12 h-full bg-[#361921] transition-all duration-500 ease-in-out group-hover:top-6 group-hover:left-6 group-hover:bg-[#2d1419]`}
            ></div>
           
            {/* Main image container */}
            <div className="relative overflow-hidden transform transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-2xl">
              <img
                src={mainProfilePic}
                alt="Iniya B.C"
                className="w-11/12 h-full object-cover transition-all duration-500 ease-in-out group-hover:brightness-110 group-hover:contrast-105"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#361921]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 space-y-1">
          {/* Main heading with staggered animation */}
          <div 
            className={`transition-all duration-1000 ease-out transform delay-300 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h1 className="text-4xl font-bold text-[#361921] mb-2 hover:text-[#2d1419] transition-colors duration-300">
              Iniya B.C
            </h1>
            <h2 
              className={`text-2xl text-black font-light transition-all duration-1000 ease-out transform delay-500 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              } hover:text-[#361921] transition-colors duration-300`}
            >
              Aspiring Criminal Psychologist
            </h2>
          </div>

          {/* Expertise and Hobby section */}
          <div 
            className={`space-y-2 mt-10 transition-all duration-1000 ease-out transform delay-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="hover:transform hover:translate-x-2 transition-transform duration-300">
              <span className="text-lg font-semibold text-gray-800">Expertise: </span>
              <span className="text-lg text-gray-700">Teamwork, Problem-Solving, Research Skills</span>
            </div>
           
            <div className="hover:transform hover:translate-x-2 transition-transform duration-300">
              <span className="text-lg font-semibold text-gray-800">Hobby: </span>
              <span className="text-lg text-gray-700">Dancing, Drawing, Traveling, Reading</span>
            </div>
          </div>

          {/* Animated progress bars */}
          <div 
            className={`space-y-3 mt-20 transition-all duration-1000 ease-out transform delay-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {/* Progress Bar 1 */}
            <div className="w-32 h-4 bg-gray-200  overflow-hidden relative">
              <div 
                className="h-full bg-gradient-to-r from-[#361921] to-[#2d1419]  transition-all duration-1000 ease-out relative"
                style={{ width: `${progressBar1}%` }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              </div>
            </div>

            {/* Progress Bar 2 */}
            <div className="w-40 h-4 bg-gray-200  overflow-hidden relative">
              <div 
                className="h-full bg-gradient-to-r from-[#D9D9D9] to-[#b5b5b5]  transition-all duration-1200 ease-out relative"
                style={{ width: `${progressBar2}%` }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;