import React from 'react';
import './../../index.css'

const JobList = () => {
  const jobs = []; // Replace with actual job data

  return (
    <div className="flex gap-5 p-5 flex-col md:flex-row">
      {/* Jobs Available Container */}
      <div className="flex-1">
        <div className="border border-gray-300 p-4 bg-gray-50 rounded-md">
          <h2 className="text-2xl mb-4">Jobs Available</h2>
          <div className="flex flex-col gap-4 max-h-[30em] overflow-y-auto">
            {jobs.length > 0 ? (
              jobs.map((job, i) => (
                <div className="border border-gray-300 p-4 bg-gray-50 rounded-md" key={i}>
                  {/* Job content here */}
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center text-center pt-4 pb-3 text-lg">
                No Jobs available according to your preferences
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Filters Container */}
      <div className="w-1/3 flex flex-col gap-6">
        {/* Categories Filter */}
        <div className="border border-gray-300 p-4 bg-gray-50 rounded-md">
          <p className="text-lg font-bold mb-2">Categories</p>
          <ul className="list-none p-0 flex flex-col gap-2">
            <li className="text-sm cursor-pointer hover:text-yellow-400">Category 1</li>
            <li className="text-sm cursor-pointer hover:text-yellow-400">Category 2</li>
          </ul>
        </div>

        {/* Job Locations Filter */}
        <div className="border border-gray-300 p-4 bg-gray-50 rounded-md">
          <p className="text-lg font-bold mb-2">Job Locations</p>
          <ul className="list-none p-0 flex flex-col gap-2">
            <li className="text-sm cursor-pointer hover:text-yellow-400">Location 1</li>
            <li className="text-sm cursor-pointer hover:text-yellow-400">Location 2</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobList;
