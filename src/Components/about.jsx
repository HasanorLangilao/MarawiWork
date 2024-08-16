import React, { useState } from 'react';
import './../index.css';

const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="py-12 px-5 max-w-4xl mx-auto my-16 bg-white rounded-lg shadow-md flex flex-col items-center animate-fadeIn">
      <div className="flex flex-col gap-5 w-full">
        <h1 className="text-4xl text-gray-800 text-center mb-5">About Us</h1>
        <p className="text-base leading-7 text-gray-600 text-justify">
          Welcome to <strong>MaraWork</strong>, a revolutionary platform designed to enhance the job search
          experience for individuals in Marawi City. While we primarily focus on local job opportunities, our
          platform extends its services beyond Marawi to offer a broader range of employment options.
        </p>
        {isExpanded && (
          <div className="mt-4">
            <p className="text-base leading-7 text-gray-600 text-justify">
              MaraWork provides a streamlined job search experience by aggregating listings from various sources,
              enabling users to find employment opportunities both within and outside of Marawi City. To access job
              listings, users need to log in to the platform. While we strive to provide comprehensive job listings,
              availability may vary based on local employer participation. Note that the platform does not feature
              messaging or chat functionalities; instead, users will need to contact employers directly through
              provided contact details.
            </p>
          </div>
        )}
        <button
          className="self-center py-2 px-4 text-base bg-customGray text-white rounded-md transition-transform duration-300 ease-in-out hover:bg-customOverlay hover:scale-105 focus:outline-none focus:ring-2 focus:ring-customGray"
          onClick={handleToggle}
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
