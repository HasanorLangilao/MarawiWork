import React from 'react';
import Searchbar from '../Landingpage/searchbar';
import Jobs from '../Jobs/Jobs'
import './../../index.css'

const SeekJobs = () => {
  return (
    <section className='text-center text-gray-800 mt-[45px] text-[25px]'>
      <h1 className ='font-bold text-[30px]'>WELCOME TO MARAWI-WORK</h1>
      <p className = 'text-[23px]'>Job Search Made Easy: We connect you with Job Opportunities</p>
      <Searchbar />
      <Jobs />
    </section>
  );
};

export default SeekJobs;
