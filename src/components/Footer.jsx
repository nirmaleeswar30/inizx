// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white text-center py-6 px-4">
      <p className="text-sm">
        Copyright © {new Date().getFullYear()} Inizx.me
      </p>
    </footer>
  );
};

export default Footer;