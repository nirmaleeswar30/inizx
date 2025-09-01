import React, { useState, useEffect, useRef } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Create mailto link with form data
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:iniyachandrakrishnan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
   
    // Open email client
    window.location.href = mailtoLink;
   
    // Show success state
    setShowSuccess(true);
    setIsSubmitting(false);
    
    // Reset form after delay
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setShowSuccess(false);
    }, 2000);
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="bg-white flex items-center justify-center px-8 py-20 overflow-hidden"
    >
      <div className="max-w-2xl w-full">
       
        {/* Header with entrance animation */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-5xl font-bold text-[#361921] mb-4 hover:text-[#2d1419] transition-colors duration-300">
            Get in Touch
          </h2>
          {/* Animated underline */}
          <div 
            className={`h-1 bg-gradient-to-r from-[#361921] to-[#2d1419] mx-auto rounded transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'w-78' : 'w-0'
            }`}
          ></div>
        </div>

        {/* Contact Form */}
        <div className="space-y-12">
         
          {/* Name Field */}
          <div 
            className={`relative transition-all duration-800 ease-out delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}
          >
            <div 
              className={`block text-lg mb-2 transition-colors duration-300 ${
                focusedField === 'name' ? 'text-[#361921]' : 'text-gray-700'
              }`}
            >
              Your Name
            </div>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
                className="w-full bg-transparent border-0 border-b-2 border-gray-400 py-3 text-lg text-gray-900 placeholder-transparent focus:outline-none focus:border-[#361921] transition-all duration-300 hover:border-gray-600"
              />
              {/* Animated focus line */}
              <div 
                className={`absolute bottom-0 left-0 h-0.5 bg-[#361921] transition-all duration-300 ${
                  focusedField === 'name' ? 'w-full' : 'w-0'
                }`}
              ></div>
            </div>
          </div>

          {/* Email Field */}
          <div 
            className={`relative transition-all duration-800 ease-out delay-400 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}
          >
            <div 
              className={`block text-lg mb-2 transition-colors duration-300 ${
                focusedField === 'email' ? 'text-[#361921]' : 'text-gray-700'
              }`}
            >
              Email
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                className="w-full bg-transparent border-0 border-b-2 border-gray-400 py-3 text-lg text-gray-900 placeholder-transparent focus:outline-none focus:border-[#361921] transition-all duration-300 hover:border-gray-600"
              />
              {/* Animated focus line */}
              <div 
                className={`absolute bottom-0 left-0 h-0.5 bg-[#361921] transition-all duration-300 ${
                  focusedField === 'email' ? 'w-full' : 'w-0'
                }`}
              ></div>
            </div>
          </div>

          {/* Message Field */}
          <div 
            className={`relative transition-all duration-800 ease-out delay-600 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}
          >
            <div 
              className={`block text-lg mb-2 transition-colors duration-300 ${
                focusedField === 'message' ? 'text-[#361921]' : 'text-gray-700'
              }`}
            >
              Message
            </div>
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
                rows="4"
                className="w-full bg-transparent border-0 border-b-2 border-gray-400 py-3 text-lg text-gray-900 placeholder-transparent focus:outline-none focus:border-[#361921] transition-all duration-300 resize-none hover:border-gray-600"
              />
              {/* Animated focus line */}
              <div 
                className={`absolute bottom-0 left-0 h-0.5 bg-[#361921] transition-all duration-300 ${
                  focusedField === 'message' ? 'w-full' : 'w-0'
                }`}
              ></div>
            </div>
          </div>

          {/* Submit Button with enhanced animations */}
          <div 
            className={`flex justify-end mt-16 transition-all duration-800 ease-out delay-800 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <button
              onClick={handleSubmit}
              disabled={!isFormValid || isSubmitting}
              className={`relative overflow-hidden px-12 py-4 text-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#361921] focus:ring-offset-2 transform ${
                isFormValid && !isSubmitting 
                  ? 'bg-[#361921] text-white hover:bg-[#2d1419] hover:scale-105 cursor-pointer' 
                  : 'bg-gray-400 text-gray-200 cursor-not-allowed'
              } ${showSuccess ? 'bg-green-600 hover:bg-green-600' : ''}`}
            >
              {/* Button content with transitions */}
              <span 
                className={`transition-all duration-300 ${
                  isSubmitting ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                }`}
              >
                {showSuccess ? 'Message Sent!' : 'Send'}
              </span>
              
              {/* Loading spinner */}
              {isSubmitting && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              
              {/* Success checkmark */}
              {showSuccess && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Progress indicator */}
        <div 
          className={`mt-8 transition-all duration-800 ease-out delay-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex space-x-2 justify-center">
            {['name', 'email', 'message'].map((field, index) => (
              <div
                key={field}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  formData[field] 
                    ? 'bg-[#361921] scale-125' 
                    : focusedField === field 
                      ? 'bg-[#361921]/50 scale-110' 
                      : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;