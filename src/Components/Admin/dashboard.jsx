// Dashboard.jsx
import React from 'react';

const Dashboard = () => {
  // Dummy data for demonstration purposes
  const stats = {
    totalJobPostings: 123,
    totalUsers: 456,
    recentApplications: 789,
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        {/* Overview Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Total Job Postings</h2>
            <p className="text-3xl font-bold">{stats.totalJobPostings}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Total Users</h2>
            <p className="text-3xl font-bold">{stats.totalUsers}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Recent Applications</h2>
            <p className="text-3xl font-bold">{stats.recentApplications}</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          {/* Recent activity list could be populated here */}
          <p>No recent activity available.</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
