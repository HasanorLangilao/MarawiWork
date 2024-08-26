import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import { FaSignInAlt, FaSuitcase, FaBars, FaTimes, FaUser, FaBell, FaClipboardList, FaSignOutAlt } from 'react-icons/fa';
import Sidebar from './../Admin/Sidebar'

const Navbar = ({ userType, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex justify-between items-center h-[10vh] bg-[#272525] text-white px-5 relative z-40">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-[250px] h-auto" />
      </div>

      <button className="text-white md:hidden" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <ul className={`fixed top-0 left-0 w-full h-full bg-[#272525] flex flex-col items-center justify-center ${isOpen ? 'block' : 'hidden'} md:flex md:static md:flex-row md:items-center md:bg-transparent md:w-auto md:h-auto`}>
        {isOpen && (
          <li className="mb-6 md:hidden">
            <img src={Logo} alt="Logo" className="w-[250px]" />
          </li>
        )}
        
        {!userType ? (
          <>
            <li className="mb-5 md:mb-0 md:ml-8">
              <Link to="/signin" className="flex items-center text-black no-underline font-medium text-lg border border-white bg-white py-2 px-4 rounded-full hover:text-[#365c36]" onClick={closeMenu}>
                <FaSignInAlt className="mr-2" /> Sign In
              </Link>
            </li>
            <li className="md:ml-8">
              <Link to="/Employeesignup" className="flex items-center text-black no-underline font-medium text-lg border border-white bg-white text-[#131212] py-2 px-4 rounded-full hover:text-[#365c36]" onClick={closeMenu}>
                <FaSuitcase className="mr-2" /> Register
              </Link>
            </li>
          </>
        ) : userType === 'jobseeker' ? (
          <>
            <li className="mb-5 md:mb-0 md:ml-8">
              <Link to="/seekhome" className="flex items-center text-white no-underline hover:text-[#365c36]" onClick={closeMenu}>Home</Link>
            </li>
            <li className="mb-5 md:mb-0 md:ml-8">
              <Link to="/seekjobs" className="flex items-center text-white no-underline hover:text-[#365c36]" onClick={closeMenu}>Jobs</Link>
            </li>
            <li className="mb-5 md:mb-0 md:ml-8">
              <Link to="/Jobmap" className="flex items-center text-white no-underline hover:text-[#365c36]" onClick={closeMenu}>Job Map</Link>
            </li>
            <li className="mb-5 md:mb-0 md:ml-8">
              <Link to="/about" className="flex items-center text-white no-underline hover:text-[#365c36]" onClick={closeMenu}>About</Link>
            </li>
            <li className="relative">
              <button className="flex items-center text-white no-underline hover:text-[#365c36]" onClick={toggleDropdown}>
                <FaUser className="mr-2" />
              </button>
              {isDropdownOpen && (
                <ul className="absolute right-0 mt-2 bg-white text-black list-none p-0 rounded-md shadow-lg">
                  <li>
                    <Link to="/seekerprofile" className="flex items-center px-4 py-2 hover:bg-gray" onClick={closeMenu}>
                      <FaUser className="mr-2" /> Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/seeknotifications" className="flex items-center px-4 py-2 hover:bg-gray-200" onClick={closeMenu}>
                      <FaBell className="mr-2" /> Notifications
                    </Link>
                  </li>
                  <li>
                    <Link to="/applications" className="flex items-center px-4 py-2 hover:bg-gray-200" onClick={closeMenu}>
                      <FaClipboardList className="mr-2" />Applications
                    </Link>
                  </li>
                  <li>
                    <button className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-200" onClick={() => { onLogout(); closeMenu(); }}>
                      <FaSignOutAlt className="mr-2" /> Log out
                    </button>
                  </li>
                </ul>
              )}
            </li>
          </>
        ) : userType === 'employer' ? (
          <>
            <li className="mb-5 md:mb-0 md:ml-8">
              <Link to="/emphome" className="flex items-center text-white no-underline hover:text-[#365c36]" onClick={closeMenu}>Home</Link>
            </li>
            <li className="mb-5 md:mb-0 md:ml-8">
              <Link to="/postajob" className="flex items-center text-white no-underline hover:text-[#365c36]" onClick={closeMenu}>Post a Job</Link>
            </li>
            <li className="mb-5 md:mb-0 md:ml-8">
              <Link to="/empmyjobs" className="flex items-center text-white no-underline hover:text-[#365c36]" onClick={closeMenu}>MyJobs</Link>
            </li>
            <li className="mb-5 md:mb-0 md:ml-8">
              <Link to="/applicants" className="flex items-center text-white no-underline hover:text-[#365c36]" onClick={closeMenu}>Applicants</Link>
            </li>
            <li className="mb-5 md:mb-0 md:ml-8">
              <Link to="/about" className="flex items-center text-white no-underline hover:text-[#365c36]" onClick={closeMenu}>About</Link>
            </li>
            <li className="relative">
              <button className="flex items-center text-white no-underline hover:text-[#365c36]" onClick={toggleDropdown}>
                <FaUser className="mr-2" />
              </button>
              {isDropdownOpen && (
                <ul className="absolute right-0 mt-2 bg-white text-black list-none p-0 rounded-md shadow-lg">
                  <li>
                    <Link to="/empprofile" className="flex items-center px-4 py-2 hover:bg-gray-200" onClick={closeMenu}>
                      <FaUser className="mr-2" /> Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/empnotifications" className="flex items-center px-4 py-2 hover:bg-gray-200" onClick={closeMenu}>
                      <FaBell className="mr-2" /> Notifications
                    </Link>
                  </li>
                  <li>
                    <button className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-200" onClick={() => { onLogout(); closeMenu(); }}>
                      <FaSignOutAlt className="mr-2" /> Log out
                    </button>
                  </li>
                </ul>
              )}
            </li>
          </>
        ) : userType === 'admin' ? (
          <>
            <li className="mb-5 md:mb-0 md:ml-8">
              <Link to="/dashboard" className="flex items-center text-white no-underline hover:text-[#365c36]" onClick={closeMenu}>Dashboard</Link>
            </li>
            <li className="mb-5 md:mb-0 md:ml-8">
              <Link to="/users" className="flex items-center text-white no-underline hover:text-[#365c36]" onClick={closeMenu}>Manage Users</Link>
            </li>
            <li className="mb-5 md:mb-0 md:ml-8">
              <Link to="/jobs" className="flex items-center text-white no-underline hover:text-[#365c36]" onClick={closeMenu}>Manage Jobs</Link>
            </li>
            <li className="mb-5 md:mb-0 md:ml-8">
              <span className="text-white text-lg">Hello Admin!</span>
            </li>
            <li className="mb-5 md:mb-0 md:ml-8">
              <button className="flex items-center text-white no-underline hover:text-[#365c36]" onClick={() => { onLogout(); closeMenu(); }}>
                <FaSignOutAlt className="mr-2" />
              </button>
            </li>
          </>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navbar;
