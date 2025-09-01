// src/components/QuoteSection.jsx
import React from 'react';
import quoteBg from '../assets/quote-bg.jpg'; // Create this file

const QuoteSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-96 flex items-center justify-center p-4"
      style={{ backgroundImage: `url(${quoteBg})` }}
    >
      {/* Overlay to make text more readable */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 text-white text-center max-w-3xl mx-auto">
        <p className="text-6xl font-bold mb-4 opacity-75">“</p>
        <p className="text-3xl sm:text-4xl font-semibold leading-relaxed px-4">
          Understanding the shadow <br /> is the first step toward finding the light.
        </p>
        <p className="text-6xl font-bold mt-4 opacity-75">”</p>
      </div>
    </section>
  );
};

export default QuoteSection;