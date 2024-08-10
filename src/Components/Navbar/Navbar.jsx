import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import { FaSignInAlt, FaSuitcase, FaBars, FaTimes, FaUser, FaBell, FaClipboardList, FaSignOutAlt } from 'react-icons/fa';

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
      <ul className={`flex list-none items-center ${isOpen ? 'fixed top-0 left-0 w-full h-full flex-col bg-[#272525] justify-center items-center z-50' : 'hidden'} md:flex md:static md:flex-row md:h-auto md:bg-transparent md:translate-y-0`}>
        {isOpen && (
          <li className="mb-6 md:hidden">
            <img src={Logo} alt="Logo" className="w-[250px]" />
          </li>
        )}
        {!userType ? (
          <>
            <li className="mb-5 md:mb-0 md:ml-8">
              <Link to="/signin" className="flex items-center text-white no-underline font-medium text-lg border border-white bg-white text-[#131212] py-2 px-4 rounded-full hover:text-[#365c36]" onClick={closeMenu}>
                <FaSignInAlt className="mr-2" /> Sign In
              </Link>
            </li>
            <li className="md:ml-8">
              <Link to="/Employeesignup" className="flex items-center text-white no-underline font-medium text-lg border border-white bg-white text-[#131212] py-2 px-4 rounded-full hover:text-[#365c36]" onClick={closeMenu}>
                <FaSuitcase className="mr-2" /> Register
              </Link>
            </li>
          </>
        ) : userType === 'jobseeker' ? (
          <>
            <li className="mb-5 md:mb-0 md:ml-8">
              <Link to="/seekhome" className="flex justify-center items-center text-white no-underline mr-2 hover:text-[#365c36]" onClick={closeMenu}>Home</Link>
            </li>
            <li className="mb-5 md:mb-0 md:ml-8">
              <Link to="/seekjobs" className="flex justify-center items-center text-white no-underline mr-2 hover:text-[#365c36]" onClick={closeMenu}>Jobs</Link>
            </li>
            <li className="mb-5 md:mb-0 md:ml-8">
              <Link to="/Jobmap" className="flex justify-center items-center text-white no-underline mr-2 hover:text-[#365c36]" onClick={closeMenu}>Job Map</Link>
            </li>
            <li className="mb-5 md:mb-0 md:ml-8">
              <Link to="/about" className="flex justify-center items-center text-white no-underline mr-2 hover:text-[#365c36]" onClick={closeMenu}>About</Link>
            </li>
            <li className="relative inline-block">
              <button className="flex justify-center items-center text-white no-underline mr-2 hover:text-[#365c36]" onClick={toggleDropdown}>
                <FaUser className="mr-2" />
              </button>
              {isDropdownOpen && (
                <ul className="absolute right-0 mt-2 bg-white shadow-lg z-50 w-40 text-black list-none p-0 rounded-md">
                  <li>
                    <Link to="/seekerprofile" className="flex items-center px-4 py-2 hover:bg-gray-200" onClick={closeMenu}>
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
                      <FaClipboardList className="mr-2" /> My Applications
                    </Link>
                  </li>
                  <li>
                    <button className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-200" onClick={() => { onLogout(); closeMenu(); }}>
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
              <Link to="/emphome" className="flex justify-center items-center text-white no-underline mr-2 hover:text-[#365c36]" onClick={closeMenu}>Home</Link>
            </li>
            <li className="mb-5 md:mb-0 md:ml-8">
              <Link to="/postajob" className="flex justify-center items-center text-white no-underline mr-2 hover:text-[#365c36]" onClick={closeMenu}>Post a Job</Link>
            </li>
            <li className="mb-5 md:mb-0 md:ml-8">
              <Link to="/applicants" className="flex justify-center items-center text-white no-underline mr-2 hover:text-[#365c36]" onClick={closeMenu}>Applicants</Link>
            </li>
            <li className="mb-5 md:mb-0 md:ml-8">
              <Link to="/about" className="flex justify-center items-center text-white no-underline mr-2 hover:text-[#365c36]" onClick={closeMenu}>About</Link>
            </li>
            <li className="relative inline-block">
              <button className="flex justify-center items-center text-white no-underline mr-2 hover:text-[#365c36]" onClick={toggleDropdown}>
                <FaUser className="mr-2" />
              </button>
              {isDropdownOpen && (
                <ul className="absolute right-0 mt-2 bg-white shadow-lg z-50 w-40 text-black list-none p-0 rounded-md">
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
                    <button className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-200" onClick={() => { onLogout(); closeMenu(); }}>
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
              <Link to="/dashboard" className="flex justify-center items-center text-white no-underline mr-2 hover:text-[#365c36]" onClick={closeMenu}>Dashboard</Link>
            </li>
            <li className="mb-5 md:mb-0 md:ml-8">
              <Link to="/users" className="flex justify-center items-center text-white no-underline mr-2 hover:text-[#365c36]" onClick={closeMenu}>Manage Users</Link>
            </li>
            <li className="mb-5 md:mb-0 md:ml-8">
              <Link to="/jobs" className="flex justify-center items-center text-white no-underline mr-2 hover:text-[#365c36]" onClick={closeMenu}>Manage Jobs</Link>
            </li>
            <li className="relative inline-block">
              <button className="flex justify-center items-center text-white no-underline mr-2 hover:text-[#365c36]" onClick={toggleDropdown}>
                <FaUser className="mr-2" />
              </button>
              {isDropdownOpen && (
                <ul className="absolute right-0 mt-2 bg-white shadow-lg z-50 w-40 text-black list-none p-0 rounded-md">
                  <li>
                    <Link to="/adminprofile" className="flex items-center px-4 py-2 hover:bg-gray-200" onClick={closeMenu}>
                      <FaUser className="mr-2" /> Profile
                    </Link>
                  </li>
                  <li>
                    <button className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-200" onClick={() => { onLogout(); closeMenu(); }}>
                      <FaSignOutAlt className="mr-2" /> Log out
                    </button>
                  </li>
                </ul>
              )}
            </li>
          </>
        ) : null}
      </ul>
      <button className="md:hidden text-white" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>
    </nav>
  );
};

export default Navbar;
