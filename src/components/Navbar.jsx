// src/components/Navbar.jsx
import React from 'react';
import profileAvatar from '../assets/profile-avatar.png'; // Ensure this path is correct

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About me', href: '#about' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="w-full flex justify-center py-8 bg-white">
      <nav
        className={`
          bg-[#D9D9D9]
          border border-[#361919]
          rounded-full
          px-16 py-4
          shadow-md
          flex items-center justify-between
          max-w-screen-lg
          w-full
          mx-auto
          space-x-4
        `}
      >
        {/* Logo/Name - Left Side */}
        <div className="flex items-center space-x-4">
          <img
            src={profileAvatar}
            alt="Iniya B.C Avatar"
            className="w-10 h-10 rounded-full border border-gray-400"
          />
          {/* Apply Island Moments font using arbitrary value */}
          <span className={`font-['Island_Moments'] text-[#361921] text-3xl md:text-4xl`}>
            Inizx
          </span>
        </div>

        {/* Navigation Links - Right Side */}
        <ul className="flex space-x-6 sm:space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`
                  text-[#361921]
                  hover:text-[#361919]
                  transition-colors duration-200
                  text-base
                  font-bold
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