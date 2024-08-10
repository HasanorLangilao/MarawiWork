import React, { useState } from 'react';
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
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-10">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto text-center z-20">
        <div className="absolute top-3 right-3 cursor-pointer text-2xl" onClick={handleCloseClick}>
          <FaTimes />
        </div>
        <h5 className="mt-2 text-gray-500 font-light">Welcome back, user!</h5>
        <h3 className="mt-4 text-xl font-semibold">Sign in to your account</h3>
        <form onSubmit={handleLogin} className="flex flex-col items-start mt-4">
          <label htmlFor="email" className="mb-2 text-left">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <label htmlFor="password" className="mb-2 text-left">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-6 border border-gray-300 rounded-md"
          />
          <button type="submit" className="w-full py-2 bg-[#272525] text-white rounded-md shadow-md hover:bg-[#404545] transition-colors duration-300">
            Login
          </button>
        </form>
        <p className="mt-3 text-gray-700">
          Don't have an account? <a href="/Employeesignup" className="text-[#272525] hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
