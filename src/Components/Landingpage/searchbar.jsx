import React from 'react'
import './landingpage.css';
import { IoSearchCircle } from "react-icons/io5";

const searchbar = () => {
  return (
    <div className='search-bar'>
    <input type='text' placeholder='Search for jobs...' className='search-input' />
    <button type='button' className='search-icon'>
    <IoSearchCircle />
    </button>
  </div>
  )
}

export default searchbar