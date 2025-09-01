// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold text-primary-dark mb-12">Get in Touch</h2>

        <form className="space-y-8">
          <div>
            <label htmlFor="name" className="sr-only">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full border-b-2 border-gray-300 py-3 px-2 focus:outline-none focus:border-primary-dark transition-colors duration-200 text-lg"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full border-b-2 border-gray-300 py-3 px-2 focus:outline-none focus:border-primary-dark transition-colors duration-200 text-lg"
            />
          </div>
          {/* You can add a message textarea here if needed */}
          {/*
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="5"
              className="w-full border-b-2 border-gray-300 py-3 px-2 focus:outline-none focus:border-primary-dark transition-colors duration-200 text-lg"
            ></textarea>
          </div>
          */}
          <div className="pt-4">
            <button
              type="submit"
              className="bg-primary-dark text-white px-10 py-3 rounded-md hover:bg-accent-brown transition-colors duration-200 text-lg font-medium"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;