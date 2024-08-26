import React, { useState } from 'react';
import './../../index.css';

const JobList = () => {
  const [jobs] = useState([
    { id: 1, title: 'Frontend Developer', company: 'Tech Solutions', location: 'New York', salary: '$80,000 - $100,000', postedDate: '2024-08-01', employmentType: 'Full-time' },
    { id: 2, title: 'Backend Developer', company: 'Innovate Inc.', location: 'San Francisco', salary: '$90,000 - $110,000', postedDate: '2024-07-15', employmentType: 'Part-time' },
    { id: 3, title: 'UI/UX Designer', company: 'Design Co.', location: 'Los Angeles', salary: '$70,000 - $85,000', postedDate: '2024-08-10', employmentType: 'Full-time' },
    { id: 4, title: 'Project Manager', company: 'ManageIt', location: 'Chicago', salary: '$95,000 - $120,000', postedDate: '2024-08-05', employmentType: 'Part-time' },
  ]);

  const [selectedJob, setSelectedJob] = useState(null);

  const handleViewJob = (job) => {
    setSelectedJob(job);
  };

  const handleApplyNow = () => {
    alert('Applied successfully!');
    setSelectedJob(null); // Close the job details after applying
  };

  return (
<div className="flex gap-2 p-5 flex-col md:flex-row ml-[295px]">
{/* Jobs Available Container */}
      <div className="w-full md:w-2/3 lg:w-1/2 mr-5"> {/* Adjusted margin-right */}
        <div className="border border-gray-300 p-4 bg-gray-50 rounded-md shadow-md">
          <h2 className="text-2xl mb-4">Jobs Available</h2>
          <div className="flex flex-col gap-4 max-h-[30em] overflow-y-auto">
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <div className="border border-gray-300 p-4 bg-gray-50 rounded-md shadow-md" key={job.id}>
                  <div className="flex justify-between items-start">
                    <div className="flex-1 text-left">
                      <h3
                        className="text-xl font-semibold cursor-pointer hover:text-blue-500"
                        onClick={() => handleViewJob(job)}
                      >
                        {job.title}
                      </h3>
                      <p className="text-sm mt-1">{job.company}</p>
                      <p className="text-sm">{job.location}</p>
                      <p className="text-sm">{job.salary}</p>
                      <p className="text-sm">Posted Date: {job.postedDate}</p>
                    </div>
                    <span className={`text-sm ${job.employmentType === 'Full-time' ? 'text-green-500' : 'text-yellow-500'} ml-4`}>
                      {job.employmentType}
                    </span>
                  </div>
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
      <div className="w-full md:w-1/3 lg:w-1/4 ml-5 flex flex-col gap-6"> {/* Adjusted margin-left */}
        {/* Categories Filter */}
        <div className="border border-gray-300 p-4 bg-gray-50 rounded-md shadow-md">
          <p className="text-lg font-bold mb-2 text-center">Job Categories</p>
          <ul className="list-none p-0 flex flex-col gap-2">
            <li className="text-sm cursor-pointer hover:text-yellow-400">Software Development</li>
            <li className="text-sm cursor-pointer hover:text-yellow-400">Design</li>
            <li className="text-sm cursor-pointer hover:text-yellow-400">Marketing</li>
            <li className="text-sm cursor-pointer hover:text-yellow-400">Project Management</li>
          </ul>
        </div>

        {/* Job Locations Filter */}
        <div className="border border-gray-300 p-4 bg-gray-50 rounded-md shadow-md">
          <p className="text-lg font-bold mb-2 text-center">Job Locations</p>
          <ul className="list-none p-0 flex flex-col gap-2">
            <li className="text-sm cursor-pointer hover:text-yellow-400">New York</li>
            <li className="text-sm cursor-pointer hover:text-yellow-400">San Francisco</li>
            <li className="text-sm cursor-pointer hover:text-yellow-400">Los Angeles</li>
            <li className="text-sm cursor-pointer hover:text-yellow-400">Chicago</li>
          </ul>
        </div>
      </div>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3"> {/* Adjusted width */}
            <h2 className="text-xl font-bold mb-4">{selectedJob.title}</h2>
            <p><strong>Company:</strong> {selectedJob.company}</p>
            <p><strong>Location:</strong> {selectedJob.location}</p>
            <p><strong>Salary:</strong> {selectedJob.salary}</p>
            <p><strong>Posted Date:</strong> {selectedJob.postedDate}</p>
            <p><strong>Employment Type:</strong> {selectedJob.employmentType}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              onClick={handleApplyNow}
            >
              Apply Now
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded mt-2"
              onClick={() => setSelectedJob(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobList;
