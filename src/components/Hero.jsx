// src/components/Hero.jsx
import React from 'react';
import mainProfilePic from '../assets/main-profile-pic.jpg'; // Create this file

const Hero = () => {
  return (
    <section id="hero" className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-12 px-4 sm:px-6 lg:px-8">
        {/* Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={mainProfilePic}
            alt="Iniya B.C"
            className="w-full max-w-sm rounded-lg shadow-xl"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-dark mb-4">
            Iniya B.C
          </h1>
          <p className="text-2xl text-gray-700 mb-8">
            Aspiring Criminal Psychologist
          </p>

          <div className="space-y-4 text-lg text-gray-800">
            <p>
              <span className="font-semibold text-primary-dark">Expertise:</span>{' '}
              Teamwork, Problem-Solving, Research
            </p>
            <p>
              <span className="font-semibold text-primary-dark">Hobby:</span>{' '}
              Dancing, Drawing, Traveling, Reading
            </p>
          </div>

          {/* Placeholder for CTA buttons - feel free to add them */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-primary-dark text-white px-8 py-3 rounded-md hover:bg-accent-brown transition-colors duration-200 text-lg">
              Download Resume
            </button>
            <button className="border border-primary-dark text-primary-dark px-8 py-3 rounded-md hover:bg-primary-dark hover:text-white transition-colors duration-200 text-lg">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;