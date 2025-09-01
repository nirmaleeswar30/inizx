// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-primary-dark text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="flex justify-center items-center mb-8">
          {/* Left Arrow/Triangle - Simplified for Tailwind */}
          <div className="w-16 h-16 border-t-2 border-l-2 border-white transform rotate-45 -mr-8"></div>
          <h2 className="text-4xl font-bold text-white px-10 border-b-2 border-white pb-2">
            Iniya B.C
          </h2>
          {/* Right Arrow/Triangle - Simplified for Tailwind */}
          <div className="w-16 h-16 border-b-2 border-r-2 border-white transform rotate-45 -ml-8"></div>
        </div>

        <p className="text-lg leading-relaxed italic mt-10">
          I am a dedicated psychology student with a strong passion for criminal psychology. My academic
          journey has given me a deep understanding of human behavior, motivations, and the legal system.
          Through my internship at SAARAL Psychiatric and De-addiction Centre, I gained practical
          experience in clinical settings, where I observed various therapeutic interventions and assisted in
          patient care. This experience strengthened my commitment to contributing positively to the field
          by applying psychological principles to aid in legal proceedings. I believe that understanding the
          human mind is the first step toward creating meaningful solutions and a more just society.
        </p>
      </div>
    </section>
  );
};

export default About;