import React from 'react'
import { IoSearchCircle } from "react-icons/io5";
import './../../index.css'

const Searchbar = () => {
  return (
    <div className='mt-5 flex justify-center items-center relative w-full max-w-[500px] mx-auto'>
      <input
        type='text'
        placeholder='Search for jobs...'
        className='py-2 px-4 text-sm border border-gray-300 rounded-full w-full pr-10 box-border'
      />
      <button
        type='button'
        className='absolute right-2 text-black text-2xl cursor-pointer mt-2 hover:text-teal-900'
      >
        <IoSearchCircle />
      </button>
    </div>
  )
}

export default Searchbar;
