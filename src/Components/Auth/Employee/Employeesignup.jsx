import React from 'react';
import Img from '../../../assets/marawiwork.jpg';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Employeesignup = ({ handleClose }) => {
  const navigate = useNavigate();

  const handleCloseClick = () => {
    if (handleClose) {
      handleClose(); // Call the function to hide or close the form
    }
    navigate('/'); // Navigate to the Home page
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
      <div className="bg-white p-8 rounded-lg w-[90%] max-w-[520px] max-h-[800px] relative text-center text-sm overflow-auto mt-16 md:mt-20 lg:mt-24">
        <button
          onClick={handleCloseClick}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 z-60"
        >
          <FaTimes size={16} />
        </button>
        <div className="flex justify-center mb-4">
          <img src={Img} alt="Company Logo" className="h-20 w-20 rounded-full object-cover" />
        </div>
        <h2 className="text-lg font-bold mb-4">Create account as an Employer</h2>
        <div className="mb-6 text-md flex justify-center space-x-4">
          <a href="/Employeesignup" className="text-green-600 hover:underline">Employee</a>
          <span>|</span>
          <a href="/Employersignup" className="text-green-600 hover:underline">Employer</a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <label htmlFor="firstName" className="block text-left">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="First name"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="lastName" className="block text-left">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last name"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="middleName" className="block text-left">Middle Name</label>
            <input
              type="text"
              id="middleName"
              placeholder="Middle name"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="gender" className="block text-left">Gender</label>
            <select
              id="gender"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="col-span-1">
            <label htmlFor="birthdate" className="block text-left">Birthdate</label>
            <input
              type="date"
              id="birthdate"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="contactNumber" className="block text-left">Contact Number</label>
            <input
              type="text"
              id="contactNumber"
              placeholder="Contact number"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="emailAddress" className="block text-left">Email Address</label>
            <input
              type="email"
              id="emailAddress"
              placeholder="Email address"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="username" className="block text-left">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="password" className="block text-left">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="confirmPassword" className="block text-left">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 py-2.5 w-full bg-gray-800 text-white rounded-md hover:bg-gray-900"
        >
          CREATE ACCOUNT
        </button>
        <p className="mt-4">
          Already have an account?{' '}
          <a href="/signin" className="text-green-600 hover:underline">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default Employeesignup;
