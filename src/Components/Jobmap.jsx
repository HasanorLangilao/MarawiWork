import React from 'react';
import JobMap from './Jobs/searchLocation'; // Update this path if necessary
import { FaSearch } from 'react-icons/fa'; // Import search icon from react-icons

const App = () => {
  return (
    <div className="flex flex-col md:flex-row p-5 md:p-12 gap-5 md:gap-8 relative">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/4 flex flex-col relative z-20">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search for jobs..."
            className="p-2 text-base border border-gray-300 rounded w-full pr-12 md:text-sm md:pr-10"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg md:text-base md:right-2" />
        </div>
        <div className="bg-gray-100 border border-gray-300 p-4 rounded">
          <h3 className="text-lg md:text-base">Job Locations</h3>
          <ul className="list-none p-0 relative z-30">
            <li className="py-1 text-sm md:text-base">Cagayan de Oro</li>
            <li className="py-1 text-sm md:text-base">Makati</li>
            <li className="py-1 text-sm md:text-base">Cebu City</li>
            {/* Add more locations as needed */}
          </ul>
        </div>
      </div>

      {/* Right Map Area */}
      <div className="w-full md:w-3/4 relative z-10">
        <div className="w-full h-[300px] md:h-[400px] border border-gray-300 rounded overflow-hidden">
          <JobMap />
        </div>
      </div>
    </div>
  );
};

export default App;
