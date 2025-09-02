import React from 'react';

const Footer = () => {
//   const scrollToHome = () => {
//     const homeSection = document.getElementById('home');
//     if (homeSection) {
//       homeSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

  return (
    <footer className="bg-[#361921] text-white text-center py-8 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 space-y-4">
        {/* Logo/Brand section */}
        {/* <div className="mb-6">
          <button
            onClick={scrollToHome}
            className="group inline-flex items-center space-x-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 hover:from-pink-300 hover:via-purple-300 hover:to-cyan-300 transition-all duration-300 transform hover:scale-105  rounded-lg px-3 py-2"
            aria-label="Navigate to home section"
          >
            <span className="relative">
              inizx.me
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
            <svg 
              className="w-5 h-5 transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M7 11l5-5m0 0l5 5m-5-5v12" 
              />
            </svg>
          </button>
        </div> */}

        {/* Divider line with animation */}
        <div className="relative">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-pink-500 to-cyan-500 transform scale-x-0 animate-pulse"></div>
        </div>

        {/* Social links section (optional - you can add your social media) */}
        <div className="flex justify-center space-x-6 mb-4">
          {/* <a 
            href="#" 
            className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300 hover:rotate-12"
            aria-label="Social media link"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 8.5h-2v7h-3v-7h-1.5v-2.5h1.5v-1.5c0-2 1-3 3-3h2v2.5h-1.25c-.414 0-.75.336-.75.75v1.25h2l-.5 2.5z"/>
            </svg>
          </a> */}
          <a 
            href="https://www.instagram.com/inizx.z/" 
            className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300 hover:-rotate-12"
            aria-label="Social media link"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          {/* <a 
            href="#" 
            className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300 hover:rotate-12"
            aria-label="Social media link"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a> */}
          <a
            href="https://linkedin.com/in/iniya-chandra-krishnan-125329309" // Replace with your actual LinkedIn URL
            className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300 hover:rotate-12"
            aria-label="LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
            >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.5c.59-.87 1.57-1.5 2.5-1.5 1.93 0 3.5 1.57 3.5 3.5v6.5z"/>
            </svg>
            </a>
        </div>

        {/* Copyright text */}
        <p className="text-sm text-gray-300 transform hover:text-white transition-colors duration-300 animate-fade-in">
          Copyright © {new Date().getFullYear()} 
          <span className="ml-1 font-semibold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
            inizx.me
          </span>
          <span className="ml-2 inline-block animate-bounce">✨</span>
        </p>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;