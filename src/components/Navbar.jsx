import React, { useState, useEffect } from 'react';
import profileAvatar from '../assets/profile-avatar.png';
import resumeFile from '../assets/resume.pdf'; // Import the resume PDF

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About me', href: '#about' },
    { name: 'Resume', href: resumeFile, download: true }, // Updated for download
    { name: 'Contact', href: '#contact' },
  ];

  // Function to scroll to home section
  const scrollToHome = () => {
    const homeSection = document.getElementById('hero');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);
    
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [lastScrollY]);

  return (
    <div 
      className={`
        fixed top-4 left-0 right-0 z-50
        w-full flex justify-center py-4 backdrop-blur-sm
        transition-transform duration-300 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <nav
        className={`
          bg-[#D9D9D9]
          border border-[#361919]
          rounded-full
          px-16 py-4
          shadow-md
          hover:shadow-lg
          flex items-center justify-between
          max-w-screen-lg
          w-full
          mx-auto
          space-x-4
          transition-shadow duration-300 ease-in-out
        `}
      >
        {/* Logo/Name - Left Side */}
        <div className="flex items-center space-x-4 group">
          <img
            src={profileAvatar}
            alt="Iniya B.C Avatar"
            className="w-10 h-10 rounded-full border border-gray-400 
                     transition-transform duration-300 ease-in-out
                     hover:scale-110 hover:shadow-md
                     cursor-pointer"
            onClick={scrollToHome} // Added click handler
          />
          <span 
            className={`
              font-['Island_Moments'] text-[#361921] text-3xl md:text-4xl
              transition-all duration-300 ease-in-out
              hover:text-[#2d1419] hover:scale-105
              cursor-pointer
            `}
            onClick={scrollToHome} // Added click handler
          >
            Inizx
          </span>
        </div>

        {/* Navigation Links - Right Side */}
        <ul className="flex space-x-6 sm:space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                download={link.download ? true : undefined} // Enable download for Resume
                className={`
                  text-[#361921]
                  hover:text-[#361919]
                  transition-all duration-300 ease-in-out
                  text-base
                  font-bold
                  relative
                  hover:scale-105
                  hover:-translate-y-0.5
                  after:content-['']
                  after:absolute
                  after:w-0
                  after:h-0.5
                  after:bg-[#361919]
                  after:left-1/2
                  after:bottom-[-4px]
                  after:-translate-x-1/2
                  after:transition-all
                  after:duration-300
                  after:ease-in-out
                  hover:after:w-full
                `}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;