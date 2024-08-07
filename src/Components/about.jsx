// src/Components/AboutUs.jsx
import React, { useState } from 'react';
import '../../src/index.css';

const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="about-us">
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>MaraWork</strong>, a revolutionary platform designed to enhance the job search
          experience for individuals in Marawi City. While we primarily focus on local job opportunities, our
          platform extends its services beyond Marawi to offer a broader range of employment options.
        </p>
        {isExpanded && (
          <div className="expanded-content">
            <p>
              MaraWork provides a streamlined job search experience by aggregating listings from various sources,
              enabling users to find employment opportunities both within and outside of Marawi City. To access job
              listings, users need to log in to the platform. While we strive to provide comprehensive job listings,
              availability may vary based on local employer participation. Note that the platform does not feature
              messaging or chat functionalities; instead, users will need to contact employers directly through
              provided contact details.
            </p>
          </div>
        )}
        <button className="toggle-button" onClick={handleToggle}>
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
