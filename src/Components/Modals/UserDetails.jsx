import React from 'react';

const UserDetailsModal = ({ user, onClose }) => {
  if (!user) return null; // Don't render anything if no user is selected

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">User Details</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Registration Date:</strong> {user.registrationDate}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UserDetailsModal;
