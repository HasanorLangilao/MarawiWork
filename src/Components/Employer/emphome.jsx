import React from 'react';
import { IoSearchCircle } from "react-icons/io5";

const Home = () => {
  return (
    <section className='Jobhero'>
      <h1>WELCOME TO MARAWI-WORK</h1>
      <p>Job Search Made Easy: We connect you with Job Opportunities</p>
      <div className='search-bar'>
        <input type='text' placeholder='Search for jobs...' className='search-input' />
        <button type='button' className='search-icon'>
          <IoSearchCircle />
        </button>
      </div>
    </section>
  );
}

export default Home;
