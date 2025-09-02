// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import QuoteSection from './components/QuoteSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    // Apply Inter font globally and the custom cursor class here
    <div className="font-['Inter'] antialiased text-gray-800 custom-cursor">
      <Navbar />
      <main>
        <Hero />
        <About />
        <QuoteSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;