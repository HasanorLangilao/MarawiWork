// src/App.jsx
import React from 'react';
import JobMap from './Jobs/searchLocation'; // Update this path if necessary
import { FaSearch } from 'react-icons/fa'; // Import search icon from react-icons
import './Jobmap.css'; // Ensure this is the correct path for your CSS file

const App = () => {
  return (
    <div className="app-container">
      <div className="search-location">
        <div className="search-bar-container">
          <input type="text" placeholder="Search for jobs..." className="search-input" />
          <FaSearch className="search-icon" />
        </div>
        <div className="location-list">
          <h3>Job Locations</h3>
          <ul>
            <li>Cagayan de Oro</li>
            <li>Makati</li>
            <li>Cebu City</li>
            {/* Add more locations as needed */}
          </ul>
        </div>
      </div>
      <div className="map-wrapper">
        <JobMap />
      </div>
    </div>
  );
};

export default App;
