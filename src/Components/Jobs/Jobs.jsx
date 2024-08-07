import React from 'react';
import './JobList.css';

const JobList = () => {
  const jobs = []; // Replace with actual job data

  return (
    <div className="job-list-layout">
      <div className="jobs-available">
        <div className="jobs-available-box">
          <h2>Jobs Available</h2>
          <div className="job-cards">
            {jobs.length > 0 ? (
              jobs.map((job, i) => (
                <div className="job-card" key={i}>
                  {/* Job content here */}
                </div>
              ))
            ) : (
              <div className="no-jobs">
                No Jobs available according to your preferences
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="filters-right">
        <div className="filter categories">
          <p className="filter-title">Categories</p>
          <ul className="filter-list">
            <li className="filter-item">Category 1</li>
            <li className="filter-item">Category 2</li>
          </ul>
        </div>
        
        <div className="filter locations">
          <p className="filter-title">Job Locations</p>
          <ul className="filter-list">
            <li className="filter-item">Location 1</li>
            <li className="filter-item">Location 2</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobList;
