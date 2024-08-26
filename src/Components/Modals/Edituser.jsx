import React, { useState } from 'react';

const EditUserModal = ({ user, onClose, onSave }) => {
  if (!user) return null; // Don't render anything if no user is selected

  const [userData, setUserData] = useState(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSaveChanges = () => {
    // Call the onSave function passed from the parent component with updated user data
    onSave(userData);
    onClose(); // Close the modal after saving
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Edit User</h2>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
          className="p-2 border rounded w-full mb-4"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          className="p-2 border rounded w-full mb-4"
          placeholder="Email"
        />
        <input
          type="text"
          name="role"
          value={userData.role}
          onChange={handleInputChange}
          className="p-2 border rounded w-full mb-4"
          placeholder="Role"
        />
        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
