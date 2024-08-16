import React, { useState, useEffect } from 'react';
import { IoSearchCircle } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const empmyjobs = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Frontend Developer',
      location: 'Cagayan de Oro',
      salary: '$2000/month',
      type: 'Full-time'
    },
    {
      id: 2,
      title: 'Backend Developer',
      location: 'Cagayan de Oro',
      salary: '$2500/month',
      type: 'Part-time'
    },
    // Add more job objects as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilteredJobs(jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    }, 300); // Debounce delay

    return () => clearTimeout(timer);
  }, [searchTerm, jobs]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleViewApplications = (jobId) => {
    navigate(`/viewapplications/${jobId}`); // Navigate to empapplications with jobId
  };

  return (
    <section className='text-center text-gray-800 mt-[45px] font-bold text-[30px]'>
      <div>My Jobs</div>

      <div className='mt-5 flex justify-center items-center relative w-full max-w-[500px] mx-auto'>
        <input
          type='text'
          placeholder='Search for jobs...'
          className='py-2 px-4 text-sm border border-gray-300 rounded-full w-full pr-10 box-border'
          value={searchTerm}
          onChange={handleSearch}
        />
        <button
          type='button'
          className='absolute right-2 top-1/2 transform -translate-y-1/2 text-black cursor-pointer hover:text-teal-900'
        >
          <IoSearchCircle size={24} />
        </button>
      </div>

      <div className="mt-8 space-y-6 max-w-[1200px] mx-auto">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="border p-7 rounded-lg shadow-lg flex justify-between items-center transition-opacity duration-500 ease-in-out opacity-0"
            style={{ opacity: 1 }}
          >
            <div className="text-left">
              <div className="text-xl font-semibold">{job.title}</div>
              <div className="text-sm text-gray-600 mt-1">
                <p>{job.location}</p>
                <p>{job.salary}</p>
                <p>{job.type}</p>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-2">
              <button
                className="hover:bg-gray-600 text-white text-base py-2 px-4 rounded bg-gray-700 w-full"
                onClick={() => handleViewApplications(job.id)} // Call handleViewApplications with jobId
              >
                View Applications
              </button>
              <div className="flex space-x-2 w-full">
                <button className="bg-green-500 text-white text-base py-2 px-2 rounded hover:bg-green-600 w-1/2">
                  Update
                </button>
                <button className="bg-red-500 text-white text-base py-2 px-2 rounded hover:bg-red-600 w-1/2">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default empmyjobs;
