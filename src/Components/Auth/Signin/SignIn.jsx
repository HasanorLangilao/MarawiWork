import React, { useState } from 'react';
import './SignInForm.css';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ handleClose, setUserType }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCloseClick = () => {
    handleClose();
    navigate('/');
  };

  const handleLogin = (e) => {
    e.preventDefault();

    let userType = null;

    // Simulate login based on email
    if (email === 'admin@example.com' && password === 'admin123') {
      userType = 'admin';
    } else if (email === 'jobseeker@example.com' && password === 'jobseeker123') {
      userType = 'jobseeker';
    } else if (email === 'employer@example.com' && password === 'employer123') {
      userType = 'employer';
    } else {
      alert('Invalid credentials');
      return;
    }

    setUserType(userType);

    // Navigate to the specific home based on user type
    if (userType === 'admin') {
      navigate('/dashboard');
    } else if (userType === 'jobseeker') {
      navigate('/seekhome');
    } else if (userType === 'employer') {
      navigate('/emphome');
    }
  };

  return (
    <div className="form-overlay">
      <div className="sign-in-form">
        <div className="exit-icon" onClick={handleCloseClick}>
          <FaTimes />
        </div>
        <h5>Welcome back, user!</h5>
        <h3>Sign in to your account</h3>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="sign-up-text">
          Don't have an account? <a href="/Employeesignup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
