import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import ResumeModal from './../Modals/ResumeModal'; // Make sure to adjust the import path

const ViewApplications = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const [applicants, setApplicants] = useState([
    { id: 1, name: 'John Doe', appliedOn: 'Frontend Developer', location: 'Cagayan de Oro', skills: 'React, JavaScript', status: 'Shortlisted' },
    { id: 2, name: 'Jane Smith', appliedOn: 'Backend Developer', location: 'Cagayan de Oro', skills: 'Node.js, Express', status: 'Accepted' },
    { id: 3, name: 'Alex Johnson', appliedOn: 'UI/UX Designer', location: 'Cagayan de Oro', skills: 'Figma, Sketch', status: 'Rejected' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  const handleViewResume = (applicant) => {
    setSelectedApplicant(applicant);
    setIsModalOpen(true);
  };

  return (
    <section className="text-gray-800 p-4">
      <div className="relative mb-4">
        <button onClick={() => navigate(-1)} className="absolute top-4 left-4 text-gray-700 hover:text-gray-900">
          <FaArrowLeft size={20} />
        </button>
        <h1 className="text-center mt-[45px] font-bold text-[30px]">Applications</h1>
      </div>

      <div className="flex justify-center mb-4 space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Accepted</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Rejected</button>
      </div>

      <div className="mt-8 space-y-6 max-w-[1200px] mx-auto">
        {applicants.map(applicant => (
          <div key={applicant.id} className="border p-7 rounded-lg shadow-lg flex justify-between items-center">
            <div className="text-left">
              <h2 className="text-xl font-semibold">{applicant.name}</h2>
              <p><strong>Applied on:</strong> {applicant.appliedOn}</p>
              <p><strong>Location:</strong> {applicant.location}</p>
              <p><strong>Skills:</strong> {applicant.skills}</p>
            </div>

            <div className="flex flex-col items-end space-y-2">
              <button
                onClick={() => handleViewResume(applicant)}
                className="hover:bg-gray-600 text-white text-base py-2 px-4 rounded bg-gray-700 w-full"
              >
                View Resume
              </button>
              <div className="flex space-x-2 w-full">
                <button className="bg-green-500 text-white text-base py-2 px-2 rounded hover:bg-green-600 w-1/2">Accept</button>
                <button className="bg-red-500 text-white text-base py-2 px-2 rounded hover:bg-red-600 w-1/2">Reject</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ResumeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        applicant={selectedApplicant}
      />
    </section>
  );
};

export default ViewApplications;
