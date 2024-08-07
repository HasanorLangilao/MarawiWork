import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/Logo.png';
import { FaSignInAlt, FaSuitcase, FaBars, FaTimes, FaUser, FaBell, FaClipboardList, FaSignOutAlt } from 'react-icons/fa'; // Import additional icons

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
    <nav className="navbar">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <ul className={`nav-links ${isOpen ? 'nav-links-mobile open' : ''}`}>
        {isOpen && (
          <li className="mobile-logo">
            <img src={Logo} alt="Logo" className="logo" />
          </li>
        )}
        {!userType ? (
          <>
            <li><Link to="/signin" className="btn-link" onClick={closeMenu}>
              <FaSignInAlt className="icon" /> Sign In
            </Link></li>
            <li><Link to="/Employeesignup" className="btn-link" onClick={closeMenu}>
              <FaSuitcase className="icon" /> Register
            </Link></li>
          </>
        ) : userType === 'jobseeker' ? (
          <>
            <li><Link to="/seekhome" className='link' onClick={closeMenu}>Home</Link></li>
            <li><Link to="/seekjobs" className='link' onClick={closeMenu}>Jobs</Link></li>
            <li><Link to="/Jobmap" className='link' onClick={closeMenu}>Job Map</Link></li>
            <li><Link to="/about" className='link' onClick={closeMenu}>About</Link></li>
            <li className="dropdown">
              <button className="dropdown-toggle link" onClick={toggleDropdown}>
                <FaUser className="icon" />
              </button>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/seekerprofile" className='dropdown-link' onClick={closeMenu}><FaUser className="icon" /> Profile</Link></li>
                  <li><Link to="/seeknotifications" className='dropdown-link' onClick={closeMenu}><FaBell className="icon" /> Notifications</Link></li>
                  <li><Link to="/applications" className='dropdown-link' onClick={closeMenu}><FaClipboardList className="icon" /> My Applications</Link></li>
                  <li><button className='dropdown-link' onClick={() => { onLogout(); closeMenu(); }}><FaSignOutAlt className="icon"/>Log out</button></li>
                </ul>
              )}
            </li>
          </>
        ) : userType === 'employer' ? (
          <>
            <li><Link to="/emphome" className='link' onClick={closeMenu}>Home</Link></li>
            <li><Link to="/postajob" className='link' onClick={closeMenu}>Post a Job</Link></li>
            <li><Link to="/applicants" className='link' onClick={closeMenu}>Applicants</Link></li>
            <li><Link to="/about" className='link' onClick={closeMenu}>About</Link></li>
            <li className="dropdown">
              <button className="dropdown-toggle link" onClick={toggleDropdown}>
                <FaUser className="icon" />
              </button>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/empprofile" className='dropdown-link' onClick={closeMenu}><FaUser className="icon" /> Profile</Link></li>
                  <li><Link to="/empnotifications" className='dropdown-link' onClick={closeMenu}><FaBell className="icon" /> Notifications</Link></li>
                  <li><button className='dropdown-link' onClick={() => { onLogout(); closeMenu(); }}><FaSignOutAlt className="icon"/>Log out</button></li>
                </ul>
              )}
            </li>
          </>
        ) : userType === 'admin' ? (
          <>
            <li><Link to="/dashboard" className='link' onClick={closeMenu}>Dashboard</Link></li>
            <li><Link to="/users" className='link' onClick={closeMenu}>Manage Users</Link></li>
            <li><Link to="/jobs" className='link' onClick={closeMenu}>Manage Jobs</Link></li>
            <li className="dropdown">
              <button className="dropdown-toggle link" onClick={toggleDropdown}>
                <FaUser className="icon" />
              </button>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><button className='dropdown-link' onClick={() => { onLogout(); closeMenu(); }}>Log out</button></li>
                </ul>
              )}
            </li>
          </>
        ) : null}
        {isOpen && (
          <li className="close-menu" onClick={toggleMenu}>
            <FaTimes className="close-icon" />
          </li>
        )}
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      {isOpen && <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={toggleMenu}></div>}
    </nav>
  );
};

export default Navbar;
