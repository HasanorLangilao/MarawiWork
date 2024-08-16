import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Import useParams for URL parameters and useNavigate for navigation
import { FaArrowLeft } from 'react-icons/fa'; // Import the arrow icon

const ViewApplications = () => {
  const { jobId } = useParams(); // Get jobId from URL parameters
  const navigate = useNavigate(); // Initialize useNavigate

  // Sample data for applicants (this would normally come from an API)
  const [applicants, setApplicants] = useState([
    {
      id: 1,
      name: 'John Doe',
      appliedOn: 'Frontend Developer',
      location: 'Cagayan de Oro',
      skills: 'React, JavaScript',
      status: 'Shortlisted',
    },
    {
      id: 2,
      name: 'Jane Smith',
      appliedOn: 'Backend Developer',
      location: 'Cagayan de Oro',
      skills: 'Node.js, Express',
      status: 'Accepted',
    },
    {
      id: 3,
      name: 'Alex Johnson',
      appliedOn: 'UI/UX Designer',
      location: 'Cagayan de Oro',
      skills: 'Figma, Sketch',
      status: 'Rejected',
    },
    // Add more applicants as needed
  ]);

  useEffect(() => {
    // Fetch applicants data based on jobId if needed
    // Example:
    // fetch(`/api/jobs/${jobId}/applicants`)
    //   .then(response => response.json())
    //   .then(data => setApplicants(data));
  }, [jobId]);

  const handleStatusChange = (applicantId, newStatus) => {
    setApplicants(applicants.map(applicant =>
      applicant.id === applicantId ? { ...applicant, status: newStatus } : applicant
    ));
  };

  return (
    <section className="text-gray-800 p-4">
      <div className="relative mb-4">
        <button
          onClick={() => navigate(-1)} // Navigate back
          className="absolute top-4 left-4 text-gray-700 hover:text-gray-900"
        >
          <FaArrowLeft size={20} />
        </button>
        <h1 className="text-center mt-[45px] font-bold text-[30px]">Applications</h1>
      </div>

      {/* Status Filter Buttons */}
      <div className="flex justify-center mb-4 space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Accepted
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Rejected
        </button>
      </div>

      <div className="mt-8 space-y-6 max-w-[1200px] mx-auto">
        {applicants.map(applicant => (
          <div
            key={applicant.id}
            className="border p-7 rounded-lg shadow-lg flex justify-between items-center transition-opacity duration-500 ease-in-out opacity-0"
            style={{ opacity: 1 }}
          >
            {/* Left side */}
            <div className="text-left">
              <h2 className="text-xl font-semibold">{applicant.name}</h2>
              <p><strong>Applied on:</strong> {applicant.appliedOn}</p>
              <p><strong>Location:</strong> {applicant.location}</p>
              <p><strong>Skills:</strong> {applicant.skills}</p>
            </div>

            {/* Right side */}
            <div className="flex flex-col items-end space-y-2">
              <button className="hover:bg-gray-600 text-white text-base py-2 px-4 rounded bg-gray-700 w-full">
                View Resume
              </button>
              <div className="flex space-x-2 w-full">
                <button
                  onClick={() => handleStatusChange(applicant.id, 'Shortlisted')}
                  className="bg-green-500 text-white text-base py-2 px-2 rounded hover:bg-green-600 w-1/2"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleStatusChange(applicant.id, 'Rejected')}
                  className="bg-red-500 text-white text-base py-2 px-2 rounded hover:bg-red-600 w-1/2"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ViewApplications;
