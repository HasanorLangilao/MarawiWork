import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './../../index.css';

// Example function to format the date
const convertDateFormat = (date) => {
  // Implement your date conversion logic here
  return new Date(date).toLocaleDateString();
};

const Seekhome = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch jobs from an API or other source
    const fetchJobs = async () => {
      try {
        const response = await fetch('your-api-endpoint-here');
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className='text-center text-gray-800 mt-[45px] text-[25px]'>
      <h1 className='font-bold text-[30px]'>WELCOME TO MARAWI-WORK</h1>
      <p className='text-[23px]'>Job Search Made Easy: We connect you with Job Opportunities</p>
      
      <div className='p-4'>
        <div className='pb-4 text-2xl'>
          <p className='font-bold'>Featured Jobs</p>
        </div>
        <div className='flex gap-4 flex-wrap'>
          {jobs && jobs.length >= 3 ? (
            jobs.slice(0, 3).map((job, index) => (
              <Link
                key={index}
                to={`/details/${job._id}`}
                className='border border-gray-300 p-4 w-[250px] shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg'
              >
                <div className='flex gap-4'>
                  <div className='w-[60px]'>
                    <img src={job.companyLogo.url} alt={job.title} className='w-full' />
                  </div>
                  <div className='flex-1'>
                    <p className='text-xl font-semibold'>{job.title}</p>
                    <p className='text-lg font-medium'>{job.companyName}</p>
                    <p className='text-sm text-gray-600'>{job.description.slice(0, 30) + "..."}</p>
                  </div>
                </div>
                <div className='text-xs text-gray-500 mt-2'>
                  <span className='block'>{convertDateFormat(job.createdAt.slice(0, 10))}</span>
                  <span className='block'>{job.employmentType}</span>
                  <span className='block'>{job.location}</span>
                </div>
              </Link>
            ))
          ) : (
            <p>No featured jobs available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Seekhome;
