import React, { useState, useEffect, useRef } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="bg-[#361919] flex items-center justify-center px-8 py-30 overflow-hidden"
    >
      <div className="max-w-6xl w-full relative">
       
        {/* Left Triangle */}
        <div 
          className={`absolute left-48 top-8 transform -translate-y-1/2 w-44 h-44 transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100 rotate-0' : '-translate-x-32 opacity-0 -rotate-45'
          } hover:scale-110 hover:rotate-12 hover:opacity-80 transition-transform duration-500`}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="10,30 60,70,80,10"
              fill="none"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="1"
              className="animate-pulse"
            />
          </svg>
        </div>

        {/* Right Triangle */}
        <div 
          className={`absolute right-48 top-8 transform -translate-y-1/2 w-44 h-44 transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'translate-x-0 opacity-100 rotate-0' : 'translate-x-32 opacity-0 rotate-45'
          } hover:scale-110 hover:-rotate-12 hover:opacity-80 transition-transform duration-500`}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="40,70 40,20 90,50"
              fill="none"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="1"
              className="animate-pulse"
            />
          </svg>
        </div>

        {/* Main Content */}
        <div className="text-center space-y-8">
          {/* Header */}
          <div 
            className={`transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h2 className="text-3xl font-bold text-white mb-8 hover:text-gray-200 hover:scale-105 transition-all duration-300 cursor-default">
              Iniya B.C
            </h2>
            
            {/* Animated underline */}
            <div className="flex justify-center">
              <div 
                className={`h-0.5 bg-gray-400 transition-all duration-1000 ease-out delay-500 ${
                  isVisible ? 'w-62' : 'w-0'
                } hover:bg-white transition-colors duration-300`}
              ></div>
            </div>
          </div>

          {/* About Text */}
          <div 
            className={`max-w-7xl mx-auto transition-all duration-1200 ease-out delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <p className="text-white text-2xl leading-loose italic hover:text-gray-100 transition-colors duration-500 cursor-default">
              I am a dedicated psychology student with a strong passion for criminal psychology. My academic
              journey has given me a deep understanding of human behavior, motivations, and the legal system.
              Through my internship at <span className="hover:text-yellow-300 transition-colors duration-300">SAARAL Psychiatric and De-addiction Centre</span>, I have gained practical
              experience in clinical settings, where I observed various therapeutic interventions and assisted in
              patient care. This experience strengthened my commitment to contributing positively to the field
              by applying psychological principles to aid in legal proceedings. I believe that the understanding of the
              human mind is the first step toward creating meaningful solutions and a more just society.
            </p>
          </div>
        </div>

        {/* Floating background elements for extra visual interest */}
        {/* <div 
          className={`absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full transition-all duration-2000 ease-out delay-1000 ${
            isVisible ? 'opacity-100 animate-bounce' : 'opacity-0'
          }`}
        ></div> */}
        
        <div 
          className={`absolute bottom-1/4 right-1/4 w-3 h-3 bg-white/10 rounded-full transition-all duration-2000 ease-out delay-1200 ${
            isVisible ? 'opacity-100 animate-pulse' : 'opacity-0'
          }`}
        ></div>
      </div>
    </section>
  );
};

export default AboutSection;