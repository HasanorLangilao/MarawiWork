import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function ViewJob() {
    const { jobId } = useParams(); // Get jobId from URL parameters
    const navigate = useNavigate(); // Initialize useNavigate

  // Dummy job data; replace with actual data fetching
  const jobDetails = {
    101: {
      title: 'Software Engineer',
      salary: '$120,000',
      salaryType: 'Annual',
      companyName: 'ABC Corporation',
      location: 'San Francisco, CA',
      postingDate: '08/15/2024',
      skills: 'JavaScript, React, Node.js',
      logo: 'path/to/logo.png', // Replace with actual image path or URL
      employmentType: 'Full Time',
      description: 'As a Software Engineer, you will be responsible for developing web applications, collaborating with cross-functional teams, and ensuring code quality. Your responsibilities include writing clean code, participating in code reviews, and contributing to software architecture decisions.',
      postedBy: 'hr@abccorp.com',
    },
    // Add other job details as needed
  };

  const job = jobDetails[jobId] || {
    title: 'Job Not Found',
    salary: '',
    salaryType: '',
    companyName: '',
    location: '',
    postingDate: '',
    skills: '',
    logo: '',
    employmentType: '',
    description: '',
    postedBy: '',
  };

  const handleBack = () => {
    navigate('/notifications'); // Navigate back to notifications page
  };

  return (
    <div className="max-w-[1200px] w-full mx-auto my-10 p-5 bg-gray-100 border border-gray-300 rounded-lg shadow-md relative">
        <button
          onClick={() => navigate(-1)} // Navigate back
          className="absolute top-4 -left-[19rem] text-gray-700 hover:text-gray-900"
        >
          <FaArrowLeft size={20} />
        </button>
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <div className="flex items-center mb-4">
        {job.logo && (
          <img src={job.logo} alt={job.companyName} className="w-16 h-16 mr-4" />
        )}
        <div>
          <h2 className="text-xl font-semibold mb-2">{job.companyName}</h2>
          <p className="text-lg mb-1">Location: {job.location}</p>
          <p className="text-lg mb-1">Salary: {job.salary} ({job.salaryType})</p>
          <p className="text-lg mb-1">Posted on: {job.postingDate}</p>
          <p className="text-lg mb-1">Employment Type: {job.employmentType}</p>
          <p className="text-lg mb-1">Required Skills: {job.skills}</p>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">Job Description</h3>
      <p className="text-md mb-4">{job.description}</p>
      <p className="text-lg font-semibold">Posted by: {job.postedBy}</p>
    </div>
  );
}

export default ViewJob;
