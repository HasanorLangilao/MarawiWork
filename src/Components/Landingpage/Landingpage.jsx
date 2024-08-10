import React from 'react';
import Searchbar from './searchbar';
import './../../index.css';

const Landing = () => {
  return (
    <section className='mt-[20px] text-center py-40 sm:py-16 sm:text-base'>
      <h1 className="font-bold text-[30px]">WELCOME TO MARAWI-WORK</h1>
      <p className='text-[25px] mt-4'>Job Search Made Easy: We connect you with Job Opportunities</p>
      <Searchbar />
    </section>
  );
};

export default Landing;
