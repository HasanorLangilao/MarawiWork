import React, { useState } from 'react';
import UserDetailsModal from './../Modals/UserDetails'; // Import the view modal component
import EditUserModal from './../Modals/Edituser'; // Import the edit modal component

const usersData = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', registrationDate: '2023-01-15', role: 'Job Seeker' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', registrationDate: '2023-02-10', role: 'Employer' },
  // Add more dummy users as needed
];

const ManageUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('All');
  const [users, setUsers] = useState(usersData);
  const [deletingUser, setDeletingUser] = useState(null); // State for the user being deleted
  const [viewUser, setViewUser] = useState(null); // State for the user being viewed
  const [editUser, setEditUser] = useState(null); // State for the user being edited
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State for delete confirmation modal
  const [showViewModal, setShowViewModal] = useState(false); // State for view modal
  const [showEditModal, setShowEditModal] = useState(false); // State for edit modal

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'All' || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const handleDeleteClick = (user) => {
    setDeletingUser(user); // Set the user being deleted when "Delete" is clicked
    setShowDeleteModal(true); // Show the delete confirmation modal
  };

  const handleDeleteConfirm = () => {
    // Handle the deletion of the user
    setUsers(users.filter(user => user.id !== deletingUser.id));
    setDeletingUser(null); // Close the delete modal after deletion
    setShowDeleteModal(false);
  };

  const handleDeleteCancel = () => {
    setDeletingUser(null); // Close the delete modal without deleting
    setShowDeleteModal(false);
  };

  const handleViewClick = (user) => {
    setViewUser(user); // Set the user to be viewed
    setShowViewModal(true); // Show the view modal
  };

  const handleEditClick = (user) => {
    setEditUser(user); // Set the user to be edited
    setShowEditModal(true); // Show the edit modal
  };

  return (
    <div className="container mx-auto p-4 w-full max-w-[100rem]">
      <h1 className="text-3xl font-bold mb-6 text-center">Manage Users</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search users..."
          className="p-2 border rounded w-full mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 border rounded w-full"
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
        >
          <option value="All">All Roles</option>
          <option value="Job Seeker">Job Seeker</option>
          <option value="Employer">Employer</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="py-2 px-4 text-left text-sm md:text-base">Name</th>
                <th className="py-2 px-4 text-left text-sm md:text-base">Email</th>
                <th className="py-2 px-4 text-left text-sm md:text-base">Registration Date</th>
                <th className="py-2 px-4 text-left text-sm md:text-base">Role</th>
                <th className="py-2 px-4 text-center text-sm md:text-base">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4 text-sm md:text-base">{user.name}</td>
                  <td className="py-2 px-4 text-sm md:text-base">{user.email}</td>
                  <td className="py-2 px-4 text-sm md:text-base">{user.registrationDate}</td>
                  <td className="py-2 px-4 text-sm md:text-base">{user.role}</td>
                  <td className="py-2 px-4 text-center flex justify-center space-x-2 text-sm md:text-base">
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded text-xs sm:text-sm"
                      onClick={() => handleViewClick(user)}
                    >
                      View
                    </button>
                    <button
                      className="bg-yellow-500 text-white px-2 py-1 rounded text-xs sm:text-sm"
                      onClick={() => handleEditClick(user)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Delete confirmation modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-[32rem] sm:max-w-[24rem]">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete {deletingUser.name}?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
                onClick={handleDeleteCancel}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleDeleteConfirm}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* User details modal */}
      {showViewModal && viewUser && (
        <UserDetailsModal user={viewUser} onClose={() => setShowViewModal(false)} />
      )}

      {/* Edit user modal */}
      {showEditModal && editUser && (
        <EditUserModal user={editUser} onClose={() => setShowEditModal(false)} />
      )}
    </div>
  );
};

export default ManageUsers;
