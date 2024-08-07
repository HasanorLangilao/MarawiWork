import React from 'react';
import './Employeesignup.css'; // Ensure you have appropriate styles for the popup
import Img from '../../../assets/marawiwork.jpg';
import { FaTimes, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Employeesignup = ({ onToggleSignIn }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    console.log('Closing popup');
    onToggleSignIn(); // Close the form
    navigate(-1); // Navigate back to the previous page (e.g., Home or Job Opportunities)
  };

  return (
    <div className="employee-popup">
      <div className="employee-content">
        <div className="exit-icon" onClick={handleClose}>
          <FaTimes />
        </div>
        <div className="img-container">
          <img src={Img} alt="Company Image" className="Image" />
        </div>
        <h2>Create account as a Job Seeker</h2>
        <div className="account-links">
          <a href="/Employeesignup">Employee</a> | <a href="/Employersignup">Employer</a>
        </div>

        <div className="label-row">
          <label htmlFor="firstName">First Name</label>
          <input type="text" placeholder="First name" id="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" placeholder="Last name" id="lastName" />

          <label htmlFor="middleName">Middle Name</label>
          <input type="text" placeholder="Middle name" id="middleName" />

          <label htmlFor="gender">Gender</label>
          <select id="gender">
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label htmlFor="birthdate">Birthdate</label>
          <div className="birthdate-container">
            <input type="date" placeholder="Birthdate" id="birthdate" />
          </div>

          <label htmlFor="contactNumber">Contact Number</label>
          <input type="text" placeholder="Contact number" id="contactNumber" />

          <label htmlFor="emailAddress">Email Address</label>
          <input type="email" placeholder="Email address" id="emailAddress" />

          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Username" id="username" />

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" placeholder="Confirm Password" id="confirmPassword" />
        </div>

        <button type="submit" className="employer-button">CREATE ACCOUNT</button>
        <p className="sign-up-text">
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default Employeesignup;
