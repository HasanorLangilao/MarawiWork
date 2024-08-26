import React from 'react';

const ResumeModal = ({ isOpen, onClose, applicant }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-2xl font-semibold mb-4">Resume and Cover Letter</h2>
        <p><strong>Applicant:</strong> {applicant.name}</p>
        <p><strong>Resume:</strong></p>
        <div className="bg-gray-100 p-4 rounded mb-4">
          {/* Replace with actual resume content */}
          <p>Resume content for {applicant.name}</p>
        </div>
        <p><strong>Cover Letter:</strong></p>
        <div className="bg-gray-100 p-4 rounded">
          {/* Replace with actual cover letter content */}
          <p>Cover letter content for {applicant.name}</p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ResumeModal;
