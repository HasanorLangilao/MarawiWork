import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './jobseeker.css';

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
    <section className='home-hero'>
      <h1>WELCOME TO MARAWI-WORK</h1>
      <p>Job Search Made Easy: We connect you with Job Opportunities</p>
      
      <div className='featured-jobs-container'>
        <div className='title-container'>
          <p className='title'>Featured Jobs</p>
        </div>
        <div className='jobs-list'>
          {jobs && jobs.length >= 3 ? (
            jobs.slice(0, 3).map((job, index) => (
              <Link
                key={index}
                to={`/details/${job._id}`}
                className='job-item'
              >
                <div className='job-content'>
                  <div className='job-logo'>
                    <img src={job.companyLogo.url} alt={job.title} className='logo-img' />
                  </div>
                  <div className='job-details'>
                    <p className='job-title'>{job.title}</p>
                    <p className='company-name'>{job.companyName}</p>
                    <p className='job-description'>{job.description.slice(0, 30) + "..."}</p>
                  </div>
                </div>
                <div className='job-info'>
                  <span className='job-date'>{convertDateFormat(job.createdAt.slice(0, 10))}</span>
                  <span className='job-type'>{job.employmentType}</span>
                  <span className='job-location'>{job.location}</span>
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
}

export default Seekhome;
