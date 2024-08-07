import React from 'react';
import Searchbar from '../Landingpage/searchbar';
import './jobseeker.css';
import Jobs from '../Jobs/Jobs'

const SeekJobs = () => {
  return (
    <section className='Jobhero'>
      <h1>WELCOME TO MARAWI-WORK</h1>
      <p>Job Search Made Easy: We connect you with Job Opportunities</p>
      <Searchbar />
      <Jobs />
    </section>
  );
};

export default SeekJobs;
