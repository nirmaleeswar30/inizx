import React, { useState, useEffect, useRef } from 'react';
import profileAvatar from '../assets/profile-avatar.png';
import quoteBg from '../assets/quote-bg.jpg';

const QuoteSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [quoteVisible, setQuoteVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger quote animation after avatar animation
          setTimeout(() => {
            setQuoteVisible(true);
          }, 800);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
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
      className="relative flex items-center justify-center px-8 py-50 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${quoteBg})`,
        }}
      >
        {/* Dark overlay for text readability with animation */}
        <div 
          className={`absolute inset-0 transition-all duration-2000 ease-out ${
            isVisible ? 'bg-black/10' : 'bg-black/40'
          }`}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full text-center">
       
        {/* Avatar Image with entrance animation */}
        <div 
          className={`flex justify-center mb-12 transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-75'
          }`}
        >
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-500 group">
            <img
              src={profileAvatar}
              alt="Iniya B.C Avatar"
              className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
            />
            {/* Subtle hover ring effect */}
            <div className="absolute inset-0 rounded-full ring-4 ring-white/0 group-hover:ring-white/30 transition-all duration-500"></div>
          </div>
        </div>

        {/* Quote with Quotation Marks */}
        <div className="relative">
          {/* Opening Quote Mark with animation */}
          <div 
            className={`absolute -top-20 -left-8 text-[20vw] text-white/80 font-serif leading-none transition-all duration-1200 ease-out delay-300 ${
              quoteVisible ? 'translate-x-0 opacity-80 rotate-0' : '-translate-x-16 opacity-0 -rotate-45'
            } hover:opacity-100 hover:scale-105 transition-all duration-300`}
          >
            “
          </div>

          {/* Quote Text with staggered word animation */}
          <blockquote 
            className={`text-white text-2xl md:text-3xl lg:text-5xl font-light italic leading-relaxed px-16 transition-all duration-1000 ease-out delay-500 ${
              quoteVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            } hover:text-gray-100 hover:scale-[1.02] transition-all duration-500 cursor-default`}
          >
            <span 
              className={`inline-block transition-all duration-800 ease-out delay-700 ${
                quoteVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              Understanding the shadow
            </span>
            <br />
            <span 
              className={`inline-block transition-all duration-800 ease-out delay-900 ${
                quoteVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              is the first step toward finding the light.
            </span>
          </blockquote>

          {/* Closing Quote Mark with animation */}
          <div 
            className={`absolute -bottom-62 -right-18 text-[20vw] text-white/80 font-serif leading-none transition-all duration-1200 ease-out delay-600 ${
              quoteVisible ? 'translate-x-0 opacity-80 rotate-0' : 'translate-x-16 opacity-0 rotate-45'
            } hover:opacity-100 hover:scale-105 transition-all duration-300`}
          >
            ”
          </div>
        </div>

        {/* Subtle floating particles for ambiance */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating particle 1 */}
          <div 
            className={`absolute top-1/4 left-1/4 w-1 h-1 bg-white/40 rounded-full transition-all duration-3000 ease-out delay-1000 ${
              quoteVisible ? 'opacity-100 animate-pulse' : 'opacity-0'
            }`}
          ></div>
          
          {/* Floating particle 2 */}
          <div 
            className={`absolute top-3/4 right-1/3 w-2 h-2 bg-white/20 rounded-full transition-all duration-2500 ease-out delay-1200 ${
              quoteVisible ? 'opacity-100 animate-bounce' : 'opacity-0'
            }`}
            style={{ animationDuration: '4s' }}
          ></div>
          
          {/* Floating particle 3 */}
          <div 
            className={`absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-white/30 rounded-full transition-all duration-2800 ease-out delay-1400 ${
              quoteVisible ? 'opacity-100 animate-pulse' : 'opacity-0'
            }`}
            style={{ animationDuration: '3s' }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;