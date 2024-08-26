import React, { useState, useEffect } from 'react';
import './../../index.css'

function Applications() {
  // Updated applications state including "Accepted"
  const [applications, setApplications] = useState([
    {
      id: 1,
      jobTitle: 'Software Engineer',
      companyName: 'ABC Corporation',
      applicationDate: '2023-03-01T10:00:00.000Z',
      status: 'Pending',
    },
    {
      id: 2,
      jobTitle: 'Data Scientist',
      companyName: 'DEF Startups',
      applicationDate: '2023-03-02T11:00:00.000Z',
      status: 'Accepted',
    },
    {
      id: 3,
      jobTitle: 'Product Manager',
      companyName: 'GHI Inc.',
      applicationDate: '2023-03-03T12:00:00.000Z',
      status: 'Rejected',
    },
  ]);

  const [filteredApplications, setFilteredApplications] = useState(applications);
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    const filtered = applications.filter((application) => {
      const statusFilterMatch = statusFilter === 'all' || application.status === statusFilter;
      return statusFilterMatch;
    });
    setFilteredApplications(filtered);
  }, [statusFilter, applications]);

  const handleStatusFilter = (event) => {
    setStatusFilter(event.target.value);
  };

  return (
    <div className="max-w-[1200px] mx-auto my-10 p-5 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-5">My Applications</h1>
      <div className="flex justify-between items-center mb-5">
        <select
          value={statusFilter}
          onChange={handleStatusFilter}
          className="w-1/5 p-2 text-lg border border-gray-300 rounded"
        >
          <option value="all">All</option>
          <option value="Pending">Pending</option>
          <option value="Accepted">Accepted</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
      <ul className="list-none p-0 m-0">
        {filteredApplications.map((application) => (
          <li key={application.id} className="p-5 border-b border-gray-300 last:border-b-0">
            <div className="mb-3">
              <h2 className="text-xl font-bold mb-1">{application.jobTitle}</h2>
              <p className="text-sm text-gray-600">Company: {application.companyName}</p>
              <p className="text-sm text-gray-600">Application Date: {new Date(application.applicationDate).toLocaleDateString()}</p>
              <p className={`text-sm font-semibold ${application.status === 'Rejected' ? 'text-red-600' : application.status === 'Accepted' ? 'text-green-600' : 'text-yellow-600'}`}>
                Status: {application.status}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Applications;
