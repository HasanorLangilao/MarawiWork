import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaUser } from 'react-icons/fa'; // Import user icon from react-icons

const Applicants = () => {
  // Sample data for applicants
  const sampleApplicants = [
    {
      id: 1,
      name: 'Jane Doe',
      appliedOn: '08/14/2024',
      location: 'Cagayan de Oro',
      skills: ['JavaScript', 'React', 'Node.js']
    },
    {
      id: 2,
      name: 'John Smith',
      appliedOn: '08/13/2024',
      location: 'Makati',
      skills: ['Python', 'Django', 'SQL']
    },
    {
      id: 3,
      name: 'Emily Johnson',
      appliedOn: '08/12/2024',
      location: 'Cebu City',
      skills: ['Java', 'Spring Boot', 'MySQL']
    },
    {
      id: 4,
      name: 'Michael Brown',
      appliedOn: '08/11/2024',
      location: 'Davao City',
      skills: ['PHP', 'Laravel', 'PostgreSQL']
    },
    {
      id: 5,
      name: 'Sarah Wilson',
      appliedOn: '08/10/2024',
      location: 'Quezon City',
      skills: ['Ruby', 'Rails', 'MongoDB']
    }
  ];

  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchApplicants = async () => {
      try {
        // Simulate an API call with sample data
        const data = sampleApplicants;
        setApplicants(data);
      } catch (error) {
        console.error('Error fetching applicants:', error);
      }
    };

    fetchApplicants();
  }, []);

  return (
    <div className="flex flex-col min-h-screen p-5 md:p-12 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          <FaUser className="inline mr-2" />
          Applicants
        </h1>
      </div>

      {/* Applicants List */}
      <div className="flex flex-col gap-4">
        {applicants.length > 0 ? (
          applicants.map((applicant) => (
            <div
              key={applicant.id}
              className="bg-white p-4 border border-gray-300 rounded-lg shadow-sm flex items-center gap-4"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                {/* Placeholder for applicant profile picture */}
                <FaUser className="text-2xl" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">
                  <Link
                    to={`/seekerprofile/${applicant.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {applicant.name}
                  </Link>
                </h2>
                <p className="text-gray-600">Applied on: {applicant.appliedOn}</p>
                <p className="text-gray-600">Location: {applicant.location}</p>
                <p className="text-gray-600">Skills: {applicant.skills.join(', ')}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No applicants yet.</p>
        )}
      </div>
    </div>
  );
};

export default Applicants;
