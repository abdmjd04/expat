import React from 'react';
import Button from '../ui/Button';
const AboutPreview = () => {
  return <section className="py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1507209281643-9cddb381dcea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Founder" className="rounded-lg shadow-lg w-full h-auto object-cover" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded by an expat who experienced firsthand the challenges of
              relocating to a new country, ExpatWell was born from a passion to
              help others navigate their international journeys with ease.
            </p>
            <p className="text-gray-700 mb-6">
              With professional qualifications in physiotherapy and extensive
              travel experience across multiple continents, our founder created
              a unique service that addresses both the practical and health
              aspects of expat life.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full p-1">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="ml-2 text-gray-700">
                  Certified Physiotherapist
                </span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full p-1">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="ml-2 text-gray-700">
                  Multilingual (English, Spanish, French)
                </span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full p-1">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="ml-2 text-gray-700">
                  10+ Years of Expat Experience
                </span>
              </div>
            </div>
            <Button href="/about">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutPreview;