import React from 'react';
import './landingpage.css';
import Searchbar from './searchbar';

const Landing = () => {
  return (
    <section className='hero'>
      <h1>WELCOME TO MARAWI-WORK</h1>
      <p>Job Search Made Easy: We connect you with Job Opportunities</p>
      <Searchbar />
    </section>
  );
};

export default Landing;
